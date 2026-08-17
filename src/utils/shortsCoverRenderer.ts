import { YouTubeShort, ProjectSettings } from '../types/contentEngine';

export interface ShortsRenderOptions {
  width?: number; // 1080
  height?: number; // 1920
  customBgUrl?: string;
  themeColor?: string;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 4
): { endY: number } {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  let linesDrawn = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      if (linesDrawn + 1 >= maxLines && n < words.length - 1) {
        ctx.fillText(line.trim() + '...', x, currentY);
        return { endY: currentY + lineHeight };
      }
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
      linesDrawn++;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return { endY: currentY + lineHeight };
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * 9:16 Vertical Shorts Title Card & Cover Renderer (1080x1920)
 */
export async function renderShortsCover(
  canvas: HTMLCanvasElement,
  short: YouTubeShort,
  projectSettings: ProjectSettings,
  options: ShortsRenderOptions = {}
): Promise<void> {
  const width = options.width || 1080;
  const height = options.height || 1920;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Cannot get 2d context');

  const bgUrl = options.customBgUrl || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1080&q=80';

  // 1. Draw Background Image
  try {
    const bgImg = await loadImage(bgUrl);
    const hRatio = canvas.width / bgImg.width;
    const vRatio = canvas.height / bgImg.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - bgImg.width * ratio) / 2;
    const centerShiftY = (canvas.height - bgImg.height * ratio) / 2;
    ctx.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height, centerShiftX, centerShiftY, bgImg.width * ratio, bgImg.height * ratio);
  } catch {
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  // 2. High-Contrast Vertical Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
  grad.addColorStop(0.35, 'rgba(15, 23, 42, 0.88)');
  grad.addColorStop(0.7, 'rgba(15, 23, 42, 0.92)');
  grad.addColorStop(1, 'rgba(2, 6, 23, 0.96)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 3. Header Pill
  drawRoundedRect(ctx, 80, 100, width - 160, 90, 45);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  const brandName = projectSettings.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'VITAL50.AT';
  ctx.fillText(`⚡ YOUTUBE SHORT #${short.shortNumber || 1} • ${brandName.toUpperCase()}`, width / 2, 158);

  // 4. Hook Box in Upper Center (Thumb-Stopping Hook)
  const hookY = 320;
  drawRoundedRect(ctx, 80, hookY, width - 160, 260, 32);
  ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  wrapText(ctx, (short.hook || short.title).toUpperCase(), width / 2, hookY + 80, width - 240, 58, 3);

  // 5. Main Title Card
  const titleY = 640;
  drawRoundedRect(ctx, 80, titleY, width - 160, 500, 36);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#facc15';
  ctx.font = '900 60px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  wrapText(ctx, short.title, width / 2, titleY + 120, width - 240, 72, 4);

  // 6. Script Preview Box
  const scriptY = 1200;
  drawRoundedRect(ctx, 80, scriptY, width - 160, 380, 28);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fill();

  ctx.fillStyle = '#93c5fd';
  ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('SPRECHERTEXT VORSCHAU:', 120, scriptY + 55);

  ctx.fillStyle = '#ffffff';
  ctx.font = '600 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  wrapText(ctx, short.scriptText.slice(0, 220) + '...', 120, scriptY + 110, width - 240, 46, 5);

  // 7. Bottom Subscribe Bar
  const bottomY = height - 200;
  drawRoundedRect(ctx, 80, bottomY, width - 160, 110, 55);
  ctx.fillStyle = '#dc2626';
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('▶ KANAL JETZT ABONNIEREN', width / 2, bottomY + 70);
}

/**
 * Downloads Shorts Cover as 1080x1920 PNG
 */
export async function downloadShortsCoverAsImage(
  short: YouTubeShort,
  projectSettings: ProjectSettings,
  options?: ShortsRenderOptions
): Promise<void> {
  const canvas = document.createElement('canvas');
  await renderShortsCover(canvas, short, projectSettings, options);

  const link = document.createElement('a');
  link.download = `youtube-short-${short.shortNumber || 1}-${short.title.slice(0, 25).replace(/[^a-zA-Z0-9]/g, '_')}-1080x1920.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
