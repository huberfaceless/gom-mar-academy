import { YouTubeVideoData, ProjectSettings } from '../types/contentEngine';

export type ThumbnailStyle = 'vital50_high_ctr' | 'split_comparison' | 'curiosity_warning' | 'clean_magazine';
export type ThumbnailColorTheme = 'red_black' | 'emerald_dark' | 'amber_gold' | 'royal_blue';

export interface ThumbnailRenderOptions {
  width?: number; // default 1280
  height?: number; // default 720
  customBgUrl?: string;
  badgeText?: string;
  style?: ThumbnailStyle;
  theme?: ThumbnailColorTheme;
}

const THUMBNAIL_THEMES: Record<ThumbnailColorTheme, {
  accent: string;
  highlightText: string;
  badgeBg: string;
  badgeText: string;
  gradientStart: string;
  gradientEnd: string;
}> = {
  red_black: {
    accent: '#ef4444',
    highlightText: '#facc15',
    badgeBg: '#dc2626',
    badgeText: '#ffffff',
    gradientStart: 'rgba(15, 23, 42, 0.85)',
    gradientEnd: 'rgba(2, 6, 23, 0.96)',
  },
  emerald_dark: {
    accent: '#10b981',
    highlightText: '#34d399',
    badgeBg: '#059669',
    badgeText: '#ffffff',
    gradientStart: 'rgba(6, 78, 59, 0.85)',
    gradientEnd: 'rgba(2, 44, 34, 0.96)',
  },
  amber_gold: {
    accent: '#f59e0b',
    highlightText: '#fbbf24',
    badgeBg: '#d97706',
    badgeText: '#ffffff',
    gradientStart: 'rgba(69, 26, 3, 0.88)',
    gradientEnd: 'rgba(15, 23, 42, 0.96)',
  },
  royal_blue: {
    accent: '#3b82f6',
    highlightText: '#60a5fa',
    badgeBg: '#2563eb',
    badgeText: '#ffffff',
    gradientStart: 'rgba(30, 58, 138, 0.85)',
    gradientEnd: 'rgba(15, 23, 42, 0.96)',
  },
};

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
  maxLines: number = 3
): { endY: number; linesDrawn: number } {
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
        linesDrawn++;
        currentY += lineHeight;
        return { endY: currentY, linesDrawn };
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
  linesDrawn++;
  currentY += lineHeight;

  return { endY: currentY, linesDrawn };
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
 * High-CTR 1280x720 YouTube Thumbnail Renderer
 */
export async function renderYouTubeThumbnail(
  canvas: HTMLCanvasElement,
  video: YouTubeVideoData,
  projectSettings: ProjectSettings,
  options: ThumbnailRenderOptions = {}
): Promise<void> {
  const width = options.width || 1280;
  const height = options.height || 720;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Cannot get 2d context');

  const themeName = options.theme || 'red_black';
  const theme = THUMBNAIL_THEMES[themeName] || THUMBNAIL_THEMES.red_black;
  const headline = video.thumbnailConcept?.headline || '3 FEHLER AB 50';
  const badgeText = options.badgeText || 'ACHTUNG FÜR 50+';
  const bgUrl = options.customBgUrl || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1280&q=80';

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
    // Gradient fallback
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  // 2. High-Contrast Vignette & Left Gradient for Maximum Text Readability
  const overlay = ctx.createLinearGradient(0, 0, width, 0);
  overlay.addColorStop(0, 'rgba(2, 6, 23, 0.96)');
  overlay.addColorStop(0.55, 'rgba(15, 23, 42, 0.85)');
  overlay.addColorStop(0.85, 'rgba(15, 23, 42, 0.35)');
  overlay.addColorStop(1, 'rgba(2, 6, 23, 0.65)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, width, height);

  // Outer Glowing Accent Border
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 14;
  ctx.strokeRect(7, 7, width - 14, height - 14);

  // 3. Top Eyebrow Badge
  ctx.save();
  drawRoundedRect(ctx, 60, 50, 360, 60, 16);
  ctx.fillStyle = theme.badgeBg;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = theme.badgeText;
  ctx.font = '900 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`⚡ ${badgeText}`, 240, 90);
  ctx.restore();

  // 4. Massive High-CTR Text on Left Side (Width 750px)
  ctx.save();
  const textX = 60;
  const textY = 210;
  const maxTextWidth = 720;

  // Solid High-Contrast Background Card behind text for unbeatable CTR
  drawRoundedRect(ctx, textX - 15, textY - 60, maxTextWidth + 30, 340, 24);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.82)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Main Headline Text with drop-shadow effect
  ctx.fillStyle = theme.highlightText;
  ctx.font = '900 76px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'left';
  const { endY } = wrapText(ctx, headline.toUpperCase(), textX + 15, textY + 20, maxTextWidth - 30, 88, 3);

  // Subtitle / Brand Tag
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const brandName = projectSettings.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'VITAL50.AT';
  ctx.fillText(`▶ ECHTE TIPPS AUF ${brandName.toUpperCase()}`, textX + 15, Math.max(endY + 20, 440));
  ctx.restore();

  // 5. Bottom Duration / Quality Badge on Bottom Right
  ctx.save();
  drawRoundedRect(ctx, width - 260, height - 100, 200, 50, 12);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 20px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('4K ULTRA HD', width - 160, height - 68);
  ctx.restore();
}

/**
 * Downloads YouTube Thumbnail as 1280x720 HD PNG
 */
export async function downloadThumbnailAsImage(
  video: YouTubeVideoData,
  projectSettings: ProjectSettings,
  options?: ThumbnailRenderOptions
): Promise<void> {
  const canvas = document.createElement('canvas');
  await renderYouTubeThumbnail(canvas, video, projectSettings, options);

  const link = document.createElement('a');
  link.download = `youtube-thumbnail-${video.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '_')}-1280x720.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
