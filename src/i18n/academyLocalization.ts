import { Lesson, Stage } from '../types';
import { LanguageCode } from './translations';

type LessonPatch = Partial<Pick<Lesson, 'stageTitle' | 'title' | 'description'>> & {
  learnContent?: Partial<Lesson['learnContent']>;
  understandContent?: Partial<Lesson['understandContent']>;
  actionTask?: Partial<Lesson['actionTask']>;
};

type StagePatch = Partial<Pick<Stage, 'title' | 'subtitle' | 'description'>> & {
  lessons?: Record<string, LessonPatch>;
};

const translations: Partial<Record<LanguageCode, Record<number, StagePatch>>> = {
  en: {
    1: {
      title: '1. Your Start',
      subtitle: '🟢 START',
      description: 'How does online income work? What options are available, and what do you really need?',
      lessons: {
        '1.1': {
          stageTitle: 'Your Start',
          title: 'How does online income work?',
          description: 'Understand the basic principles of digital value, automated value creation, and scalability.',
          learnContent: {
            videoTitle: 'Introduction: The foundation of online income',
            summaryText: 'Online income is not created by luck or magic. It comes from solving existing problems. You position yourself between a person with a need and the right solution.',
            bulletPoints: [
              'Supply and demand: someone needs a solution; you recommend the right product.',
              'Automation: your system can work around the clock, even while you sleep.',
              'Location independence: your laptop is your headquarters.',
            ],
            fullArticleGuide: `### The fundamental law of online income

Earning money online is not a mysterious trick and does not require inherited talent. It follows one universal principle: **creating value by solving problems**.

When someone faces an urgent everyday problem—such as wanting additional income, better fitness, improved sleep, or professional success—they actively look for a shortcut. When you provide or recommend that shortcut, you can be paid for the value you create.

#### The three pillars of digital scalability

1. **Low marginal costs**: A digital product or recommendation landing page requires time to create once, but can then serve 10, 100, or 10,000 people at the same time.
2. **Automated processes**: Modern email automation and digital sales systems can communicate and deliver content 24 hours a day, independently of your personal working hours.
3. **Location independence**: Your entire business can operate from a laptop or smartphone. You do not need commercial premises, storage, or employees.

#### Your role as an affiliate

You do not need to reinvent the wheel or create your own product. As an affiliate partner, you connect supply with demand. You recommend proven, high-quality products from established providers and receive a commission for every successful sale—often between 30% and 70%.`,
            practicalExamples: [
              'Additional-income example: An employee wants to earn an extra €500 per month. You recommend a proven step-by-step programme and receive a 50% commission.',
              'Automation example: A prospect enters their email address on your landing page at 11 p.m. The automation immediately sends the guide and recommends the partner offer. The sale can happen while you sleep.',
            ],
            videoChapters: [
              { time: '0:00', title: 'Welcome to the GOM-MAR Academy' },
              { time: '2:15', title: 'The value-creation principle' },
              { time: '4:30', title: 'Why affiliate marketing works for beginners' },
              { time: '6:50', title: 'Summary and first task' },
            ],
          },
          understandContent: {
            coreTakeaway: 'You do not need to invent your own product—you can recommend existing solutions that already work through affiliate marketing.',
            keyPrinciples: ['Focus on solving problems instead of applying sales pressure', 'A simple system beats complicated chaos', 'Consistency during the first 30 days determines your progress'],
          },
          actionTask: {
            instruction: 'Make a commitment: What goal do you want to reach in the next 90 days?',
            placeholder: 'Choose your primary goal…',
          },
        },
        '1.2': {
          stageTitle: 'Your Start',
          title: 'What options are available?',
          description: 'An overview of affiliate marketing, digital information products, and automated recommendation systems.',
          learnContent: {
            videoTitle: 'Business model comparison: Which route suits you?',
            summaryText: 'There are many ways to earn money online. Affiliate marketing is the lowest-risk option for beginners: no customer support, product development, or logistics.',
            bulletPoints: ['Affiliate marketing: 30% to 70% commission per sale.', 'Your own digital products: high margins, but substantial preparation.', 'Services and coaching: faster revenue, but tied to your time.'],
            fullArticleGuide: `### The most common online business models compared

Beginners are often overwhelmed by the number of opportunities online. However, not every model is suitable when you are starting without specialist knowledge or substantial capital.

#### 1. Affiliate marketing—the GOM-MAR recommendation
* **How it works**: You recommend products from other providers through your personal affiliate link.
* **Advantages**: No product creation, customer support, or order processing; you can start immediately and digital products often pay commissions of 30–70%.
* **Disadvantage**: You are not primarily building your own product brand—which is often an advantage at the beginning.

#### 2. Your own digital products—e-books and video courses
* **How it works**: You create and sell your own courses or guides.
* **Advantages**: Full control over prices, offers, and funnels, with very high margins.
* **Disadvantages**: Significant time is needed for creation, updates, and customer support.

#### 3. E-commerce and dropshipping
* **How it works**: You sell physical products through an online shop.
* **Advantage**: Physical products have broad demand.
* **Disadvantages**: Returns, delivery delays, customs, and margins that may be only 10–20% create additional risk.

#### The right starting point

The GOM-MAR Academy focuses on **affiliate marketing supported by automated email follow-up**. It combines low risk with a fast route to your first genuine online revenue.`,
            practicalExamples: ['Affiliate versus online shop: With dropshipping, you must replace defective products and answer complaints. With affiliate marketing, the product provider handles these tasks.'],
            videoChapters: [{ time: '0:00', title: 'Overview of digital business models' }, { time: '3:20', title: 'Affiliate marketing in detail' }, { time: '6:45', title: 'Comparison: time investment and return' }],
          },
          understandContent: { coreTakeaway: 'Affiliate marketing is the fastest and safest route to your first additional online income.', keyPrinciples: ['Lower risk through proven provider sales processes', 'Start immediately without building a complex company infrastructure on day one', 'Scale through automated lead generation'] },
          actionTask: { instruction: 'Choose the model we will focus on in the GOM-MAR Academy.', checklistItems: ['I am starting with affiliate marketing', 'I will use automated email sales', 'I will build a simple step-by-step system'] },
        },
        '1.3': {
          stageTitle: 'Your Start',
          title: 'What do you really need?',
          description: 'The absolute minimum setup for a successful start without unnecessary baggage.',
          learnContent: {
            videoTitle: 'The three-part starter system',
            summaryText: 'Do not let dozens of marketing tools confuse you. You need exactly three things to start: a landing page, an email autoresponder, and a partner offer.',
            bulletPoints: ['1. Domain and landing page—your digital business card', '2. Autoresponder—your automated email sales system', '3. Partner offer—a proven product that pays commission'],
            fullArticleGuide: `### The lean GOM-MAR three-part system

Many beginners get lost in endless software comparisons, graphics programmes, and technical details. They spend weeks adjusting settings without ever contacting a single prospect.

We reduce your system to the **absolute minimum** required to produce measurable results.

#### Part 1: A simple landing page

One page where visitors enter their email address to receive a useful free guide or lead magnet. No unnecessary extras and no ten-page website.

#### Part 2: An automated email autoresponder

As soon as someone subscribes, your email automation takes over. It delivers the guide and sends prepared, trust-building messages with your recommendation links over the following days.

#### Part 3: A proven affiliate offer

A tested product from a marketplace such as Digistore24 or Copecart that solves a real problem for your audience and pays a commission of 30–70% per sale.

Everything beyond these three components—logos, business cards, and complicated funnels—is a distraction at the beginning.`,
            practicalExamples: ['The minimum system in action: A visitor enters an email address on your landing page → the email system automatically sends the welcome email and recommendation link → the prospect buys → you receive a commission notification.'],
          },
          understandContent: { coreTakeaway: 'Less is more. The simpler your first system is, the faster you can earn your first euro.', keyPrinciples: ['Three core components are enough to build meaningful additional income', 'GOM-MAR provides the email automation and tools', 'Perfection is the enemy of progress'] },
          actionTask: { instruction: 'Confirm your minimum checklist for launching the system.', checklistItems: ['Understood: I only need three components', 'Ready to use GOM-MAR email automation', 'I will focus on immediate implementation'] },
        },
        '1.4': {
          stageTitle: 'Your Start',
          title: 'What do you NOT need?',
          description: 'Avoid the five most expensive beginner mistakes and time wasters.',
          learnContent: {
            videoTitle: 'Avoid typical time wasters and beginner traps',
            summaryText: 'Most beginners fail because they spend weeks designing logos, dealing with unnecessary bureaucracy, or searching for the “perfect” software.',
            bulletPoints: ['❌ No expensive business infrastructure is needed on day one', '❌ Do not waste weeks perfecting a logo or colour palette', '❌ Do not produce 100 videos before starting', '❌ Avoid expensive €200-per-month tool subscriptions'],
            fullArticleGuide: `### The five most expensive time wasters for online beginners

Why do some people generate their first revenue within 14 days while others remain stuck after six months? The difference is often determined by what they **deliberately leave out**.

#### 1. Perfectionism with logos and graphics

Nobody buys a product because your logo is green or blue. Clear text and a clean, professional design are enough at the beginning.

#### 2. Complex software subscriptions

Do not purchase expensive all-in-one platforms for hundreds of euros per month. Use the integrated GOM-MAR Academy tools to keep your fixed costs close to zero.

#### 3. Creating 50 social-media accounts

Focus on exactly **one** primary traffic source—such as Facebook groups or Instagram Reels—instead of spreading your attention across ten platforms.

#### 4. Endless research without implementation—the tutorial trap

Knowledge without action produces no revenue. Learn only the next step, implement it immediately, and then continue to the next lesson.`,
            practicalExamples: ['Success example: Markus has no logo or business cards and uses a simple profile image. He generates 15 leads per week and makes his first sales. Another beginner spends three weeks designing a logo and earns nothing.'],
          },
          understandContent: { coreTakeaway: 'Avoid overthinking. Your main task is to bring interested people to your landing page.', keyPrinciples: ['Visibility beats perfectionism', 'Generate leads first and refine later', 'Use proven inspiration instead of reinventing the wheel'] },
          actionTask: {
            instruction: 'Remove distractions: Which trap will you consciously avoid from today?',
            placeholder: 'For example, spending hours experimenting with logos or colours…',
          },
        },
      },
    },
    2: {
      title: '2. Your Direction',
      subtitle: '🔵 FOUNDATION',
      description: 'Find your niche, define your audience, identify its main problem, and choose the right offer.',
      lessons: {
        '2.1': {
          stageTitle: '2. Your Direction', title: 'Find your niche',
          description: 'Find a profitable niche in one of the three strongest markets: health, wealth, or relationships.',
          learnContent: {
            videoTitle: 'The profitability formula for your niche',
            summaryText: 'A product sells when people already search for solutions and are prepared to spend money. The three evergreen markets always contain active buyers.',
            bulletPoints: ['1. Wealth and additional income—earning online, saving, and investing', '2. Health and fitness—weight loss, strength, vitality, and sleep', '3. Relationships and personal growth—dating, partnership, and confidence'],
            fullArticleGuide: `### The three major markets with lasting demand

A niche is a focused section of a larger market. If you choose a topic that nobody searches for, even excellent marketing will struggle. Start where people already spend money.

#### The three evergreen markets

1. **Wealth, career, and additional income**
   * Topics: online business, passive income, saving, investing, and career development.
   * Why it is profitable: People invest when the outcome can give them more money or freedom.

2. **Health, fitness, and wellbeing**
   * Topics: sustainable weight loss, back-pain relief, better sleep, and strength after 40.
   * Why it is profitable: Health has enormous value, and people actively seek relief from discomfort.

3. **Relationships, dating, and personal growth**
   * Topics: improving relationships, finding a partner, dog training, and building confidence.
   * Why it is profitable: Emotional needs create a strong desire to act.

#### How to select a sub-niche

Choose a precise focus inside a major market. Instead of “making money,” choose “building additional online income for busy employees.”`,
            practicalExamples: ['Focused positioning: Market = health → sub-niche = healthy weight loss for working mothers without spending hours cooking.'],
          },
          understandContent: { coreTakeaway: 'Do not invent a market. Go where demand and spending already exist.', keyPrinciples: ['Competition in a large market proves that money is being spent', 'Position yourself in one clear sub-niche', 'Use AI support to develop and validate ideas'] },
          actionTask: { instruction: 'Use the GOM-MAR Niche Finder or enter your selected niche here:', placeholder: 'For example, additional online income for employees' },
        },
        '2.2': {
          stageTitle: '2. Your Direction', title: 'Define your audience',
          description: 'Create your ideal-customer profile: Who are you helping, and what motivates them?',
          learnContent: {
            videoTitle: 'Audience analysis: Who is your ideal customer?',
            summaryText: 'The more clearly you picture one specific person, the more relevant your copy, landing pages, and emails will sound.',
            bulletPoints: ['Demographics: age, occupation, and life situation', 'Goals: more freedom, financial security, and family time', 'Concerns: inflation, retirement, and dependence on one employer'],
            fullArticleGuide: `### Your ideal-customer avatar

When you try to speak to everyone, you connect with nobody. Emails written “to everyone” feel cold and anonymous. Writing as if you were speaking to one real person creates immediate relevance and trust.

#### Four key questions about your avatar

1. **Who is this person?** Age, occupation, and family situation—for example, Thomas, 42, employed in manufacturing, married with two children.
2. **What frustrates them now?** Too little free time, rising living costs, and the feeling of being trapped in a routine.
3. **What do they want most?** An additional €500–€1,000 per month to reduce financial pressure and give the family more opportunities.
4. **What doubts do they have?** “Do I have enough time?”, “Can I do this without experience?”, and “Is this legitimate?”

Your communication should answer these doubts and make the desired result feel achievable.`,
            practicalExamples: ['Weak copy: “Our system provides advanced syndication methods for digital resellers.” It is difficult to understand.', 'Strong copy: “Build an additional income stream without experience in only 30 minutes a day.” It speaks directly to the avatar.'],
          },
          understandContent: { coreTakeaway: 'When you try to speak to everyone, you connect with nobody.', keyPrinciples: ['Write emails as if you were writing to a good friend', 'Use the exact words your audience uses', 'Address the most urgent everyday problem'] },
          actionTask: { instruction: 'Describe your audience in one or two sentences:', placeholder: 'For example, employees aged 30–50 who want to earn an extra €500–€1,000 without prior experience.' },
        },
        '2.3': {
          stageTitle: '2. Your Direction', title: 'Identify the problem',
          description: 'Find the burning problem for which your audience is actively seeking an immediate solution.',
          learnContent: {
            videoTitle: 'Find and clearly describe pain points',
            summaryText: 'People buy emotionally and justify the decision rationally. The strongest motivations are avoiding pain and achieving a deeply desired result.',
            bulletPoints: ['Pain: “There is too little money left at the end of the month despite working full-time.”', 'Goal: “Earn an extra €500 from home.”', 'Obstacle: “I lack technical knowledge and time.”'],
            fullArticleGuide: `### The burning problem as a buying trigger

Sales happen when an offer closes the gap between the **current situation**—pain and frustration—and the **desired situation**—the person’s goal.

#### The before-and-after transformation

* **Before**: Thomas has almost no money left at the end of the month. Inflation worries him, he feels trapped in his job, and he has little time or technical experience.
* **After**: Thomas has built a simple system. It produces an additional €600 per month, giving him more security and relaxed weekends with his family.

Your role as an affiliate is to present a credible bridge from the current situation to the desired outcome.`,
            practicalExamples: ['Offer formula: “Achieve [desired result] without [greatest concern or obstacle].”'],
          },
          understandContent: { coreTakeaway: 'Your system removes the main obstacle and guides the audience from pain to the desired result.', keyPrinciples: ['Make the problem visible and specific', 'Explain why previous attempts failed', 'Present your route as the simplest credible next step'] },
          actionTask: { instruction: 'What main problem does your system solve for your audience?', placeholder: 'For example, insufficient time and technical knowledge to start online' },
        },
        '2.4': {
          stageTitle: '2. Your Direction', title: 'Choose an offer',
          description: 'Select a high-converting affiliate offer from a marketplace such as Digistore24 or Copecart.',
          learnContent: {
            videoTitle: 'Find and evaluate the right affiliate offer',
            summaryText: 'A strong offer combines a good conversion rate, low refund rate, fair commission, and a professional sales page.',
            bulletPoints: ['Search the Digistore24 or Copecart marketplace', 'Review the sales page and its video', 'Check whether email templates, graphics, and banners are provided'],
            fullArticleGuide: `### Five criteria for a strong affiliate product

Not every marketplace product deserves your time. Evaluate these five points before committing to an offer.

1. **A professional sales page with a strong video sales letter**: Review the page as a potential customer. Is the promise clear and credible?
2. **Commission**: Digital courses should generally pay at least **30–50%**, or provide recurring monthly commissions.
3. **Refund rate**: A refund rate below 10% can indicate strong customer satisfaction.
4. **Promotional material**: Good providers supply email templates, graphics, and banners that partners may use.
5. **Your personal promotion link**: The link contains your affiliate ID and uses tracking so eligible sales are assigned to you.

Recommend only offers that genuinely fit the audience and deliver useful value.`,
            practicalExamples: ['Practical step: Create a free Digistore24 account, review bestsellers in the Internet Marketing & Business category, and save the promotion link for your chosen offer.'],
          },
          understandContent: { coreTakeaway: 'Recommend only products whose quality and usefulness you genuinely trust.', keyPrinciples: ['Trust is your most valuable online-business asset', 'Secure and store your affiliate promotion link', 'Test the sales process from the customer’s perspective'] },
          actionTask: { instruction: 'What is the name of your selected affiliate offer or product?', placeholder: 'For example, product name or Digistore product ID' },
        },
      },
    },
    3: {
      title: '3. Your First System',
      subtitle: '🟣 BUILD',
      description: 'Your domain, landing page, affiliate-offer connection, and technical foundation.',
      lessons: {
        '3.1': {
          stageTitle: '3. Your First System', title: 'Domain & Brand Name',
          description: 'Choose a memorable name for your landing page and system.',
          learnContent: {
            videoTitle: 'The Perfect Domain & Brand Name',
            summaryText: 'Your domain should be short, clear, and trustworthy. Avoid complicated spelling and special characters.',
            bulletPoints: ['Examples: your-side-income.com, success-with-a-system.com', 'Use trusted extensions such as .com, .de, or .net', 'Do not infringe other companies’ trademarks'],
            fullArticleGuide: `### How to choose a trustworthy domain

Your domain is the web address of your opt-in page. It should sound professional and be easy to remember.

#### Rules for a strong domain name

1. **Clear and descriptive**: The name should suggest what the site is about—for example freedom-formula.com or smarter-start.com.
2. **Keep it short**: Use no more than two or three words.
3. **Choose the right extension**: .de inspires the most trust in Germany; use .com for an international offer.
4. **Avoid third-party trademarks**: Never use protected terms such as Facebook, Digistore, or another protected brand in your domain.`,
            practicalExamples: ['Good examples: starter-funnel.com, your-online-path.com, success-compass.com.', 'Bad example: make-money-fast-and-get-rich-1234.info.'],
          },
          understandContent: { coreTakeaway: 'A clean domain name creates immediate trust with new visitors.', keyPrinciples: ['Easy to type', 'Easy to understand when spoken', 'Avoid excessive hyphens'] },
          actionTask: { instruction: 'Enter your preferred name or domain:', placeholder: 'For example, my-online-path.com' },
        },
        '3.2': {
          stageTitle: '3. Your First System', title: 'Landing Page Basics',
          description: 'Build a high-converting opt-in page that generates leads.',
          learnContent: {
            videoTitle: 'Anatomy of a 50%+ Opt-In Landing Page',
            summaryText: 'A lead landing page has one goal: exchange a valuable lead magnet for the visitor’s email address. Remove distractions and keep secondary links out of sight.',
            bulletPoints: ['1. A curiosity-driven headline that states what the visitor receives', '2. Three short core benefits', '3. An opt-in form with email field and button'],
            fullArticleGuide: `### The anatomy of a 50%+ conversion landing page

Why do 50 out of 100 visitors subscribe on one page while only two subscribe on another? The difference is simplicity and clear psychological guidance.

#### Four elements of a high-converting opt-in page

1. **Main headline—your curiosity hook**: Within three seconds it must explain the visitor’s benefit. Example: “Free checklist: Build your first online income stream in 30 minutes a day.”
2. **Three concise benefit points**: State exactly what the free guide contains—for example a step-by-step plan, beginner-friendly explanations, and an instant PDF download.
3. **A simple form**: Ask for a name only if useful and always request the email address. Use an active button such as “Download free now ➔”.
4. **Trust elements**: Add a short reassurance such as “100% free, unsubscribe at any time, no spam.”`,
            practicalExamples: ['Use the GOM-MAR Landing Page Assistant in the Toolbox to improve your wording automatically.'],
          },
          understandContent: { coreTakeaway: 'Remove every distraction. One page equals one goal.', keyPrinciples: ['Use strong contrast for the button', 'Use the headline formula “How to [achieve a goal] without [pain]”', 'Use the GOM-MAR Toolbox for concise headlines'] },
          actionTask: { instruction: 'Use the GOM-MAR Landing Page Assistant or draft your headline:', placeholder: 'For example, How to build your first online side income in 30 minutes a day' },
        },
        '3.3': {
          stageTitle: '3. Your First System', title: 'Connect Your Affiliate Offer',
          description: 'Connect your opt-in form to the thank-you page and your affiliate link.',
          learnContent: {
            videoTitle: 'The Bridge-Page Redirect Strategy',
            summaryText: 'After a visitor submits the form, redirect them to a thank-you page with your affiliate offer. Your system can generate revenue while the email sequence runs in the background.',
            bulletPoints: ['Form submission → redirect to the thank-you page', 'The page confirms the lead magnet and presents a relevant partner offer', 'Commissions can be possible from day one'],
            fullArticleGuide: `### The bridge-page strategy for immediate revenue

The moment after registration is the most valuable point in the funnel. The prospect is attentive, using their phone or computer, and has just demonstrated trust.

#### The two-step redirect process

1. **Form submission**: The visitor enters an email address and clicks submit. In the background, the contact is added to your email automation.
2. **An intelligent thank-you page**: Instead of showing only “Thank you,” redirect the visitor to a page that confirms the free guide will arrive within two minutes and invites them to watch a short recommendation video while they wait. Place your affiliate button below it. Some new leads will watch and purchase immediately.`,
            practicalExamples: ['Example: Of 100 new leads, 40 watch the recommendation video and two to four purchase before the first follow-up email is sent.'],
          },
          understandContent: { coreTakeaway: 'Meet prospects at the moment when their attention is highest.', keyPrinciples: ['Never send visitors straight to an affiliate link before the opt-in', 'Secure the lead first, then make the recommendation', 'The lead now belongs to your own audience'] },
          actionTask: { instruction: 'Confirm that you understand the redirect logic.', checklistItems: ['The visitor enters an email address', 'The lead is added to GOM-MAR email automation', 'The visitor is redirected to the affiliate thank-you page'] },
        },
        '3.4': {
          stageTitle: '3. Your First System', title: 'Tracking & Test Run',
          description: 'Test your complete system thoroughly before sending the first visitors.',
          learnContent: {
            videoTitle: 'System Audit: Does Everything Work?',
            summaryText: 'Testing is essential. Submit your own details as a test lead and confirm that the welcome email arrives.',
            bulletPoints: ['Test the form on mobile and desktop', 'Check the inbox and spam folder', 'Verify that the affiliate link tracks correctly'],
            fullArticleGuide: `### The pre-launch test checklist

Before sending visitors to your page, confirm that the complete system works. One broken link or form can cost valuable leads.

#### Test these four steps yourself

1. **Opt-in test**: Open the landing page on a phone and computer and subscribe using a test email address.
2. **Redirect check**: Confirm that the thank-you or affiliate page opens immediately after submission.
3. **Email-delivery check**: The welcome email should arrive within one to three minutes. Test every included link.
4. **Affiliate-tracking check**: Click your partner link and verify that your affiliate ID appears correctly in the destination URL.`,
            practicalExamples: ['A five-minute test prevents frustration and ensures every future visitor is processed correctly.'],
          },
          understandContent: { coreTakeaway: 'A working system gives you confidence for the traffic phase.', keyPrinciples: ['Build it properly once and use it for years', 'Find errors during testing, not through customers'] },
          actionTask: { instruction: 'Complete a full test run of your opt-in process.', checklistItems: ['Test subscription completed successfully', 'Thank-you page opens as planned', 'GOM-MAR email automation captured the lead'] },
        },
      },
    },
    4: {
      title: '4. Reach People',
      subtitle: '🟠 TRAFFIC',
      description: 'Free traffic strategies for Facebook, Instagram, Pinterest, and YouTube—without an advertising budget.',
      lessons: {
        '4.1': {
          stageTitle: '4. Reach People', title: 'Facebook Niche Groups',
          description: 'Generate 5–15 high-quality leads a day from existing Facebook groups.',
          learnContent: {
            videoTitle: 'Organic Value-Driven Traffic from Facebook Groups',
            summaryText: 'Find groups where your audience already discusses its problems. Answer questions with genuine value and point people towards your free lead magnet.',
            bulletPoints: ['Find 5–10 relevant groups in your niche', 'Provide genuine value instead of promotional spam', 'Use storytelling: “How I solved this problem…”'],
            fullArticleGuide: `### Organic lead generation in Facebook niche groups

Millions of people use Facebook groups every day to discuss specific interests and problems. You do not have to find them individually—they are already gathered in relevant communities.

#### The value formula for group posts

1. **Never post blunt advertising spam**: Messages such as “Make money—click here” are deleted quickly and can lead to account restrictions.
2. **Use story plus value**: Share a personal experience or observation, give three useful tips, and finish with a curiosity-driven invitation. For example: “I created a compact PDF summary. Comment INFO if you would like a copy.”
3. **Follow up through comments**: Send each person who comments a friendly direct message containing the link to your landing page.`,
            practicalExamples: ['Example post: “I struggled to find time for a side income while working full-time. These three routines helped me. Let me know if you would like the checklist.” A useful post like this can generate 20–40 comments.'],
          },
          understandContent: { coreTakeaway: 'Helpful posts start conversations and naturally draw interested people to your profile.', keyPrinciples: ['Help first, sell later', 'Optimise your profile like a landing page', 'Use the GOM-MAR Content Generator for post ideas'] },
          actionTask: { instruction: 'Create your first group post with the GOM-MAR Toolbox:', placeholder: 'For example, Facebook value post drafted' },
        },
        '4.2': {
          stageTitle: '4. Reach People', title: 'Instagram Reels & Stories',
          description: 'Build reach with concise Reels and interactive Stories.',
          learnContent: {
            videoTitle: 'The Three-Second Reel Formula for Reach',
            summaryText: 'Reels can provide substantial free reach. Use three parts: a curiosity hook, three useful tips, and a call to action such as “Comment START for the guide.”',
            bulletPoints: ['Use a visual hook in the first three seconds', 'Use suitable trending audio and clear captions', 'Use automated DMs to send links after comments'],
            fullArticleGuide: `### Short-form reach with Instagram Reels

Instagram rewards short videos that hold attention. You do not have to show your face: faceless channels can use screen recordings, nature footage, desk scenes, or aesthetic video clips.

#### Three building blocks of a successful Reel

1. **Hook—seconds 0–3**: Display a strong line such as “Three things nobody tells you about building a side income online.”
2. **Value—seconds 3–12**: Present short, practical points in the video or caption.
3. **Call to action**: Finish with “Comment START and I will send you the free guide by DM.”`,
            practicalExamples: ['Faceless Reel: Film yourself pouring coffee at a desk, place the hook on screen, and add three tips plus the response instruction in the caption.'],
          },
          understandContent: { coreTakeaway: 'Reels attract new viewers; Stories turn followers into grateful leads.', keyPrinciples: ['Shorter is usually better—7 to 15 seconds', 'Use curiosity instead of jargon', 'Consistency beats occasional bursts of motivation'] },
          actionTask: { instruction: 'Draft one Reel idea for your niche:', placeholder: 'For example, Three things you did not know about online income' },
        },
        '4.3': {
          stageTitle: '4. Reach People', title: 'Pinterest & YouTube Evergreen Traffic',
          description: 'Build search traffic that continues to generate clicks months later.',
          learnContent: {
            videoTitle: 'Passive Traffic from Visual Search Engines',
            summaryText: 'Unlike fast-moving social feeds, Pinterest and YouTube behave like visual search engines. A strong Pin can send daily visitors to your landing page for years.',
            bulletPoints: ['Link Pinterest Pins directly to your landing page', 'Use relevant keywords in titles and descriptions', 'Use YouTube Shorts to accelerate reach'],
            fullArticleGuide: `### Sustainable evergreen traffic

Instagram posts quickly disappear down the feed, while Pinterest and YouTube work like search engines. Content published today can still bring new visitors in twelve months.

#### Pinterest marketing in three steps

1. Create vertical graphics in Canva—ideally 1080 × 1920 pixels.
2. Write keyword-rich titles such as “Guide: Build a side income from home.”
3. Link each Pin directly to your opt-in landing page.`,
            practicalExamples: ['One successful Pin can generate 300–500 clicks per month for months without requiring a new daily post.'],
          },
          understandContent: { coreTakeaway: 'Evergreen traffic builds a durable digital foundation for long-term success.', keyPrinciples: ['Create reusable Canva templates for fast Pins', 'Keywords are essential for search rankings'] },
          actionTask: { instruction: 'Plan your first three Pinterest Pins with Toolbox support.', checklistItems: ['Pinterest account created and configured', 'Three keyword phrases identified', 'Pins created and linked to the landing page'] },
        },
        '4.4': {
          stageTitle: '4. Reach People', title: 'Your Seven-Day Traffic Plan',
          description: 'Create structure with only 30 minutes of daily action for consistent leads.',
          learnContent: {
            videoTitle: 'The 30-Minute Daily Workflow',
            summaryText: 'Results come from daily routines, not one-off actions. Thirty focused minutes per day are enough.',
            bulletPoints: ['Days 1–3: Facebook value posts and comments', 'Days 4–5: Instagram Reel and Story interaction', 'Days 6–7: Publish Pinterest Pins and review results'],
            fullArticleGuide: `### A structured 30-minute daily plan

Online-business progress does not require eight hours of work every day. It requires discipline with small, repeatable actions.

#### Your weekly plan

* **Monday to Wednesday—15 minutes**: Share one useful post in two Facebook groups and answer questions.
* **Thursday to Friday—15 minutes**: Publish one Reel or Short and reply to direct messages.
* **Saturday—15 minutes**: Plan three Pinterest Pins.
* **Sunday**: Rest and review the leads generated during the week.`,
            practicalExamples: ['After 30 days, you may have published 20 group posts, 10 Reels, and 15 Pins—enough activity to generate 50–150 leads and your first sales.'],
          },
          understandContent: { coreTakeaway: 'Turn your traffic plan into a daily habit.', keyPrinciples: ['Reserve fixed time slots', 'Focus on lead numbers rather than follower numbers'] },
          actionTask: { instruction: 'Commit to your weekly traffic schedule:', placeholder: 'Reserve 30 minutes every day' },
        },
      },
    },
  },
  pl: {
    1: {
      title: '1. Twój start',
      subtitle: '🟢 START',
      description: 'Jak działa dochód online? Jakie są możliwości i czego naprawdę potrzebujesz?',
      lessons: {
        '1.1': {
          stageTitle: 'Twój start',
          title: 'Jak działa dochód online?',
          description: 'Poznaj podstawy cyfrowej wartości, automatyzacji tworzenia wartości i skalowalności.',
          learnContent: {
            videoTitle: 'Wprowadzenie: fundament dochodu online',
            summaryText: 'Dochód online nie jest kwestią szczęścia ani magii. Powstaje, gdy rozwiązujesz istniejące problemy i łączysz osobę z potrzebą z odpowiednim rozwiązaniem.',
            bulletPoints: [
              'Podaż i popyt: ktoś szuka rozwiązania, a Ty polecasz odpowiedni produkt.',
              'Automatyzacja: Twój system może pracować przez całą dobę, także gdy śpisz.',
              'Niezależność od miejsca: laptop jest Twoim centrum działania.',
            ],
            fullArticleGuide: `### Podstawowe prawo dochodu online

Zarabianie w internecie nie jest tajemniczą sztuczką i nie wymaga wrodzonego talentu. Opiera się na uniwersalnej zasadzie: **tworzeniu wartości poprzez rozwiązywanie problemów**.

Gdy ktoś mierzy się z pilnym problemem—chce dodatkowego dochodu, lepszej kondycji, spokojniejszego snu albo sukcesu zawodowego—aktywnie szuka prostszej drogi. Jeśli dostarczysz lub polecisz odpowiednie rozwiązanie, możesz otrzymać wynagrodzenie za stworzoną wartość.

#### Trzy filary cyfrowej skalowalności

1. **Niskie koszty krańcowe**: Produkt cyfrowy lub strona rekomendacyjna wymaga jednorazowej pracy, a później może obsłużyć 10, 100 albo 10 000 osób jednocześnie.
2. **Zautomatyzowane procesy**: Nowoczesne systemy e-mail i sprzedaży cyfrowej komunikują się i dostarczają treści przez całą dobę, niezależnie od Twojego czasu pracy.
3. **Niezależność od miejsca**: Cała firma może działać z laptopa lub smartfona. Nie potrzebujesz lokalu, magazynu ani pracowników.

#### Twoja rola jako partnera afiliacyjnego

Nie musisz tworzyć własnego produktu. Jako partner afiliacyjny łączysz podaż z popytem. Polecasz sprawdzone produkty uznanych dostawców i otrzymujesz prowizję za każdą skuteczną sprzedaż—często od 30% do 70%.`,
            practicalExamples: ['Przykład dodatkowego dochodu: pracownik chce zarabiać dodatkowe 500 € miesięcznie. Polecasz mu sprawdzony program krok po kroku i otrzymujesz 50% prowizji.', 'Przykład automatyzacji: zainteresowana osoba zapisuje się na stronie o 23:00. System natychmiast wysyła poradnik i przedstawia ofertę partnerską. Sprzedaż może nastąpić, gdy śpisz.'],
            videoChapters: [
              { time: '0:00', title: 'Witamy w GOM-MAR Academy' },
              { time: '2:15', title: 'Zasada tworzenia wartości' },
              { time: '4:30', title: 'Dlaczego afiliacja jest dobra na start' },
              { time: '6:50', title: 'Podsumowanie i pierwsze zadanie' },
            ],
          },
          understandContent: {
            coreTakeaway: 'Nie musisz tworzyć własnego produktu—możesz polecać istniejące, sprawdzone rozwiązania w marketingu afiliacyjnym.',
            keyPrinciples: ['Skup się na rozwiązaniu problemu, nie na presji sprzedażowej', 'Prosty system jest lepszy niż skomplikowany chaos', 'Konsekwencja przez pierwsze 30 dni decyduje o postępie'],
          },
          actionTask: {
            instruction: 'Podejmij zobowiązanie: jaki cel chcesz osiągnąć w ciągu 90 dni?',
            placeholder: 'Wybierz swój główny cel…',
          },
        },
        '1.2': {
          stageTitle: 'Twój start',
          title: 'Jakie są możliwości?',
          description: 'Przegląd marketingu afiliacyjnego, produktów cyfrowych i automatycznych systemów rekomendacji.',
          learnContent: {
            videoTitle: 'Porównanie modeli: która droga pasuje do Ciebie?',
            summaryText: 'Istnieje wiele sposobów zarabiania online. Dla początkujących afiliacja jest najmniej ryzykowna: bez obsługi klienta, tworzenia produktu i logistyki.',
            bulletPoints: ['Marketing afiliacyjny: 30–70% prowizji od sprzedaży.', 'Własne produkty cyfrowe: wysoka marża, ale dużo przygotowań.', 'Usługi i coaching: szybszy przychód, ale zależny od Twojego czasu.'],
            fullArticleGuide: `### Najpopularniejsze modele biznesu online—porównanie

Początkujący często czują się przytłoczeni liczbą możliwości. Nie każdy model nadaje się jednak na start bez specjalistycznej wiedzy lub dużego kapitału.

#### 1. Marketing afiliacyjny—rekomendacja GOM-MAR
* **Jak działa**: Polecasz produkty innych dostawców przez osobisty link partnerski.
* **Zalety**: Bez tworzenia produktu, obsługi klienta i realizacji zamówień; możesz zacząć od razu, a produkty cyfrowe często oferują prowizje 30–70%.
* **Wada**: Nie budujesz przede wszystkim własnej marki produktowej—co na początku często jest zaletą.

#### 2. Własne produkty cyfrowe—e-booki i kursy wideo
* **Jak działa**: Tworzysz i sprzedajesz własne kursy lub poradniki.
* **Zalety**: Pełna kontrola nad cenami, ofertą i lejkiem oraz bardzo wysoka marża.
* **Wady**: Dużo czasu na tworzenie, aktualizacje i obsługę klienta.

#### 3. E-commerce i dropshipping
* **Jak działa**: Sprzedajesz fizyczne produkty w sklepie internetowym.
* **Zaleta**: Duży popyt na produkty fizyczne.
* **Wady**: Zwroty, opóźnienia, odprawa celna i marże wynoszące czasem tylko 10–20% zwiększają ryzyko.

#### Najlepszy punkt startowy

GOM-MAR Academy koncentruje się na **marketingu afiliacyjnym wspieranym przez automatyczną komunikację e-mail**. Łączy on niskie ryzyko z szybką drogą do pierwszego rzeczywistego przychodu online.`,
            practicalExamples: ['Afiliacja kontra sklep: w dropshippingu wymieniasz wadliwe produkty i odpowiadasz na reklamacje. W afiliacji te zadania przejmuje dostawca produktu.'],
            videoChapters: [{ time: '0:00', title: 'Przegląd cyfrowych modeli biznesowych' }, { time: '3:20', title: 'Marketing afiliacyjny w praktyce' }, { time: '6:45', title: 'Porównanie czasu i wyniku' }],
          },
          understandContent: { coreTakeaway: 'Marketing afiliacyjny to najszybsza i najbezpieczniejsza droga do pierwszego dodatkowego dochodu online.', keyPrinciples: ['Mniejsze ryzyko dzięki sprawdzonym procesom dostawcy', 'Natychmiastowy start bez rozbudowanej infrastruktury firmy', 'Skalowanie dzięki automatycznemu pozyskiwaniu kontaktów'] },
          actionTask: { instruction: 'Wybierz model, na którym skupimy się w GOM-MAR Academy.', checklistItems: ['Zaczynam od marketingu afiliacyjnego', 'Będę korzystać z automatycznej sprzedaży e-mail', 'Zbuduję prosty system krok po kroku'] },
        },
        '1.3': {
          stageTitle: 'Twój start',
          title: 'Czego naprawdę potrzebujesz?',
          description: 'Minimalny zestaw potrzebny do udanego startu bez zbędnego balastu.',
          learnContent: {
            videoTitle: 'Startowy system z trzech elementów',
            summaryText: 'Nie pozwól, by dziesiątki narzędzi marketingowych Cię rozpraszały. Na start potrzebujesz trzech rzeczy: landing page, autorespondera e-mail i oferty partnerskiej.',
            bulletPoints: ['1. Domena i landing page—Twoja cyfrowa wizytówka', '2. Autoresponder—automatyczny system sprzedaży e-mail', '3. Oferta partnerska—sprawdzony produkt z prowizją'],
            fullArticleGuide: `### Prosty system GOM-MAR z trzech elementów

Wielu początkujących gubi się w porównywaniu oprogramowania, programach graficznych i szczegółach technicznych. Tygodniami zmieniają ustawienia, nie kontaktując się z ani jedną zainteresowaną osobą.

Ograniczamy system do **absolutnego minimum**, które jest potrzebne do uzyskania mierzalnych wyników.

#### Element 1: Prosty landing page

Jedna strona, na której odwiedzający podaje adres e-mail, aby otrzymać przydatny bezpłatny poradnik. Bez zbędnych dodatków i dziesięciu podstron.

#### Element 2: Automatyczny autoresponder e-mail

Gdy ktoś się zapisze, automatyzacja przejmuje dalszą komunikację. Dostarcza poradnik, a w następnych dniach wysyła przygotowane wiadomości budujące zaufanie i zawierające linki rekomendacyjne.

#### Element 3: Sprawdzona oferta afiliacyjna

Przetestowany produkt z platformy takiej jak Digistore24 lub Copecart, który rozwiązuje realny problem grupy docelowej i zapewnia 30–70% prowizji od sprzedaży.

Wszystko ponadto—logo, wizytówki i skomplikowane lejki—jest na początku rozpraszaczem.`,
            practicalExamples: ['Minimalny system w praktyce: odwiedzający wpisuje e-mail na stronie → system automatycznie wysyła wiadomość powitalną i link rekomendacyjny → zainteresowany kupuje → otrzymujesz powiadomienie o prowizji.'],
          },
          understandContent: { coreTakeaway: 'Mniej znaczy więcej. Im prostszy jest Twój pierwszy system, tym szybciej możesz zarobić pierwsze euro.', keyPrinciples: ['Trzy podstawowe elementy wystarczą do budowy dodatkowego dochodu', 'GOM-MAR udostępnia automatyzację e-mail i narzędzia', 'Perfekcja jest wrogiem postępu'] },
          actionTask: { instruction: 'Potwierdź minimalną listę potrzebną do uruchomienia systemu.', checklistItems: ['Rozumiem: potrzebuję tylko trzech elementów', 'Jestem gotowy korzystać z automatyzacji e-mail GOM-MAR', 'Skupiam się na natychmiastowym wdrożeniu'] },
        },
        '1.4': {
          stageTitle: 'Twój start',
          title: 'Czego NIE potrzebujesz?',
          description: 'Uniknij pięciu najdroższych błędów i pożeraczy czasu początkujących.',
          learnContent: {
            videoTitle: 'Unikaj typowych pożeraczy czasu i pułapek',
            summaryText: 'Większość początkujących ponosi porażkę, ponieważ tygodniami projektuje logo, zajmuje się zbędną biurokracją albo szuka „idealnego” oprogramowania.',
            bulletPoints: ['❌ Na początku nie potrzebujesz drogiej infrastruktury firmy', '❌ Nie trać tygodni na idealne logo i kolory', '❌ Nie nagrywaj 100 filmów przed startem', '❌ Unikaj drogich narzędzi za 200 € miesięcznie'],
            fullArticleGuide: `### Pięć najdroższych pożeraczy czasu początkujących

Dlaczego niektórzy osiągają pierwszy przychód w ciągu 14 dni, a inni po sześciu miesiącach nadal stoją w miejscu? Różnicę często tworzą rzeczy, z których **świadomie rezygnujesz**.

#### 1. Perfekcjonizm przy logo i grafice

Nikt nie kupuje produktu dlatego, że logo jest zielone lub niebieskie. Na początku wystarczy czytelny tekst oraz prosty, profesjonalny wygląd.

#### 2. Skomplikowane abonamenty na oprogramowanie

Nie kupuj drogich platform „wszystko w jednym” za setki euro miesięcznie. Korzystaj ze zintegrowanych narzędzi GOM-MAR Academy, aby utrzymać koszty stałe blisko zera.

#### 3. Tworzenie 50 kont w mediach społecznościowych

Skup się na dokładnie **jednym** głównym źródle ruchu—na przykład grupach na Facebooku lub Instagram Reels—zamiast rozpraszać uwagę na dziesięć platform.

#### 4. Niekończące się poszukiwania bez działania—pułapka poradników

Wiedza bez działania nie przynosi dochodu. Poznaj tylko następny krok, od razu go wykonaj, a dopiero potem przejdź do kolejnej lekcji.`,
            practicalExamples: ['Przykład sukcesu: Marek nie ma logo ani wizytówek i używa prostego zdjęcia profilowego. Zdobywa 15 kontaktów tygodniowo i realizuje pierwsze sprzedaże. Inna osoba przez trzy tygodnie projektuje logo i nie zarabia nic.'],
          },
          understandContent: { coreTakeaway: 'Unikaj nadmiernego analizowania. Twoim głównym zadaniem jest kierowanie zainteresowanych osób na landing page.', keyPrinciples: ['Widoczność wygrywa z perfekcjonizmem', 'Najpierw zdobywaj kontakty, później ulepszaj', 'Korzystaj ze sprawdzonych inspiracji zamiast wymyślać wszystko od nowa'] },
          actionTask: {
            instruction: 'Usuń rozpraszacze: której pułapki będziesz od dziś świadomie unikać?',
            placeholder: 'Np. wielogodzinnego poprawiania logo lub kolorów…',
          },
        },
      },
    },
    2: {
      title: '2. Twój kierunek',
      subtitle: '🔵 FUNDAMENT',
      description: 'Znajdź niszę, określ grupę docelową, poznaj jej główny problem i wybierz odpowiednią ofertę.',
      lessons: {
        '2.1': {
          stageTitle: '2. Twój kierunek', title: 'Znajdź niszę',
          description: 'Znajdź dochodową niszę w jednym z trzech najsilniejszych rynków: zdrowie, finanse lub relacje.',
          learnContent: {
            videoTitle: 'Formuła rentowności Twojej niszy',
            summaryText: 'Produkt sprzedaje się, gdy ludzie już szukają rozwiązania i są gotowi za nie zapłacić. Trzy rynki evergreen zawsze mają aktywnych klientów.',
            bulletPoints: ['1. Finanse i dodatkowy dochód—zarabianie online, oszczędzanie i inwestowanie', '2. Zdrowie i sprawność—odchudzanie, siła, witalność i sen', '3. Relacje i rozwój osobisty—randki, partnerstwo i pewność siebie'],
            fullArticleGuide: `### Trzy wielkie rynki z trwałym popytem

Nisza jest precyzyjnie wybraną częścią większego rynku. Jeśli wybierzesz temat, którego nikt nie szuka, nawet dobry marketing nie pomoże. Zacznij tam, gdzie ludzie już wydają pieniądze.

#### Trzy rynki evergreen

1. **Finanse, kariera i dodatkowy dochód**
   * Tematy: biznes online, dochód pasywny, oszczędzanie, inwestowanie i rozwój kariery.
   * Dlaczego jest rentowny: ludzie inwestują, gdy rezultat może dać im więcej pieniędzy lub wolności.

2. **Zdrowie, sprawność i dobre samopoczucie**
   * Tematy: zdrowe odchudzanie, ból pleców, lepszy sen i budowanie siły po czterdziestce.
   * Dlaczego jest rentowny: zdrowie ma ogromną wartość, a ludzie aktywnie szukają ulgi.

3. **Relacje, randki i rozwój osobisty**
   * Tematy: poprawa relacji, znalezienie partnera, wychowanie psa i większa pewność siebie.
   * Dlaczego jest rentowny: potrzeby emocjonalne silnie motywują do działania.

#### Jak wybrać subniszę

Wybierz precyzyjny kierunek w dużym rynku. Zamiast „zarabiania pieniędzy” wybierz „dodatkowy dochód online dla zapracowanych pracowników”.`,
            practicalExamples: ['Precyzyjne pozycjonowanie: rynek = zdrowie → subnisza = zdrowe odchudzanie dla pracujących matek bez wielogodzinnego gotowania.'],
          },
          understandContent: { coreTakeaway: 'Nie wymyślaj rynku. Wybierz miejsce, w którym istnieją już popyt i wydatki.', keyPrinciples: ['Konkurencja na dużym rynku potwierdza, że klienci wydają pieniądze', 'Zajmij jasną pozycję w jednej subniszy', 'Korzystaj z AI do tworzenia i oceny pomysłów'] },
          actionTask: { instruction: 'Użyj wyszukiwarki nisz GOM-MAR lub wpisz tutaj wybraną niszę:', placeholder: 'Np. dodatkowy dochód online dla pracowników' },
        },
        '2.2': {
          stageTitle: '2. Twój kierunek', title: 'Określ grupę docelową',
          description: 'Stwórz profil idealnego klienta: komu pomagasz i co motywuje tę osobę?',
          learnContent: {
            videoTitle: 'Analiza grupy: kim jest Twój idealny klient?',
            summaryText: 'Im wyraźniej widzisz jedną konkretną osobę, tym bardziej trafne będą Twoje teksty, landing page i wiadomości e-mail.',
            bulletPoints: ['Demografia: wiek, zawód i sytuacja życiowa', 'Cele: większa wolność, bezpieczeństwo finansowe i czas dla rodziny', 'Obawy: inflacja, emerytura i zależność od jednego pracodawcy'],
            fullArticleGuide: `### Profil idealnego klienta

Jeśli próbujesz mówić do wszystkich, nie docierasz do nikogo. Wiadomości napisane „do wszystkich” brzmią chłodno i anonimowo. Pisanie jak do jednej prawdziwej osoby natychmiast zwiększa trafność i zaufanie.

#### Cztery pytania o Twojego klienta

1. **Kim jest ta osoba?** Wiek, zawód i sytuacja rodzinna—np. Tomasz, 42 lata, pracownik przemysłu, żonaty, dwoje dzieci.
2. **Co obecnie ją frustruje?** Mało wolnego czasu, rosnące koszty życia i poczucie utknięcia w rutynie.
3. **Czego pragnie najbardziej?** Dodatkowych 500–1000 € miesięcznie, aby zmniejszyć presję finansową i dać rodzinie więcej możliwości.
4. **Jakie ma wątpliwości?** „Czy mam wystarczająco dużo czasu?”, „Czy dam radę bez doświadczenia?” i „Czy to jest wiarygodne?”

Twoja komunikacja powinna odpowiadać na te wątpliwości i pokazywać, że pożądany rezultat jest osiągalny.`,
            practicalExamples: ['Słaby tekst: „Nasz system oferuje zaawansowane metody syndykacji dla cyfrowych resellerów.” Jest niezrozumiały.', 'Dobry tekst: „Zbuduj dodatkowe źródło dochodu bez doświadczenia w 30 minut dziennie.” Trafia bezpośrednio do odbiorcy.'],
          },
          understandContent: { coreTakeaway: 'Jeśli próbujesz mówić do wszystkich, nie docierasz do nikogo.', keyPrinciples: ['Pisz wiadomości tak, jak do dobrego znajomego', 'Używaj dokładnych słów swojej grupy', 'Odnoś się do najbardziej pilnego codziennego problemu'] },
          actionTask: { instruction: 'Opisz swoją grupę docelową w jednym lub dwóch zdaniach:', placeholder: 'Np. pracownicy w wieku 30–50 lat, którzy bez doświadczenia chcą zarabiać dodatkowe 500–1000 €.' },
        },
        '2.3': {
          stageTitle: '2. Twój kierunek', title: 'Zidentyfikuj problem',
          description: 'Znajdź palący problem, dla którego Twoja grupa aktywnie poszukuje natychmiastowego rozwiązania.',
          learnContent: {
            videoTitle: 'Znajdź i jasno opisz punkty bólu',
            summaryText: 'Ludzie kupują emocjonalnie, a decyzję uzasadniają racjonalnie. Najsilniejszą motywacją jest uniknięcie bólu lub osiągnięcie ważnego celu.',
            bulletPoints: ['Ból: „Mimo pełnego etatu pod koniec miesiąca brakuje pieniędzy.”', 'Cel: „Zarabiać dodatkowe 500 € z domu.”', 'Przeszkoda: „Brakuje mi wiedzy technicznej i czasu.”'],
            fullArticleGuide: `### Palący problem jako impuls zakupowy

Sprzedaż następuje, gdy oferta zamyka lukę między **obecną sytuacją**—bólem i frustracją—a **pożądaną sytuacją**—celem klienta.

#### Przemiana „przed i po”

* **Przed**: Tomasz pod koniec miesiąca prawie nie ma pieniędzy. Martwi go inflacja, czuje się uwięziony w pracy i brakuje mu czasu oraz doświadczenia technicznego.
* **Po**: Tomasz zbudował prosty system. Zapewnia mu dodatkowe 600 € miesięcznie, większe bezpieczeństwo i spokojniejsze weekendy z rodziną.

Twoją rolą jako partnera afiliacyjnego jest pokazanie wiarygodnego mostu od obecnej sytuacji do pożądanego rezultatu.`,
            practicalExamples: ['Formuła oferty: „Osiągnij [pożądany rezultat] bez [największej obawy lub przeszkody].”'],
          },
          understandContent: { coreTakeaway: 'Twój system usuwa główną przeszkodę i prowadzi odbiorcę od problemu do pożądanego rezultatu.', keyPrinciples: ['Pokaż problem konkretnie', 'Wyjaśnij, dlaczego wcześniejsze próby się nie udały', 'Przedstaw swoją drogę jako najprostszy wiarygodny następny krok'] },
          actionTask: { instruction: 'Jaki główny problem Twojej grupy rozwiązuje Twój system?', placeholder: 'Np. brak czasu i wiedzy technicznej potrzebnej do startu online' },
        },
        '2.4': {
          stageTitle: '2. Twój kierunek', title: 'Wybierz ofertę',
          description: 'Wybierz skuteczną ofertę afiliacyjną z platformy takiej jak Digistore24 lub Copecart.',
          learnContent: {
            videoTitle: 'Znajdź i oceń odpowiednią ofertę afiliacyjną',
            summaryText: 'Dobra oferta łączy wysoką konwersję, niski poziom zwrotów, uczciwą prowizję i profesjonalną stronę sprzedażową.',
            bulletPoints: ['Przeszukaj platformę Digistore24 lub Copecart', 'Oceń stronę sprzedażową i jej wideo', 'Sprawdź dostępność szablonów e-mail, grafik i banerów'],
            fullArticleGuide: `### Pięć kryteriów dobrego produktu afiliacyjnego

Nie każdy produkt na platformie zasługuje na Twój czas. Przed wyborem oceń pięć punktów.

1. **Profesjonalna strona z dobrym wideo sprzedażowym**: Obejrzyj stronę jak potencjalny klient. Czy obietnica jest jasna i wiarygodna?
2. **Prowizja**: Kursy cyfrowe powinny zwykle zapewniać co najmniej **30–50%** albo prowizje cykliczne.
3. **Poziom zwrotów**: Wskaźnik poniżej 10% może świadczyć o wysokim zadowoleniu klientów.
4. **Materiały promocyjne**: Dobrzy dostawcy udostępniają partnerom szablony e-mail, grafiki i banery.
5. **Osobisty link promocyjny**: Link zawiera Twój identyfikator afiliacyjny i śledzenie, dzięki któremu sprzedaż zostanie przypisana do Ciebie.

Polecaj tylko oferty, które naprawdę pasują do grupy i dostarczają użyteczną wartość.`,
            practicalExamples: ['Krok praktyczny: załóż bezpłatne konto Digistore24, przejrzyj bestsellery w kategorii Internet Marketing & Business i zapisz link promocyjny wybranej oferty.'],
          },
          understandContent: { coreTakeaway: 'Polecaj tylko produkty, których jakości i przydatności naprawdę ufasz.', keyPrinciples: ['Zaufanie jest najcenniejszym zasobem w biznesie online', 'Zabezpiecz i zapisz swój link afiliacyjny', 'Przetestuj proces sprzedaży z perspektywy klienta'] },
          actionTask: { instruction: 'Jak nazywa się wybrana oferta lub produkt afiliacyjny?', placeholder: 'Np. nazwa produktu lub identyfikator produktu Digistore' },
        },
      },
    },
    3: {
      title: '3. Twój pierwszy system',
      subtitle: '🟣 BUDOWA',
      description: 'Domena, landing page, połączenie oferty afiliacyjnej i fundament techniczny.',
      lessons: {
        '3.1': {
          stageTitle: '3. Twój pierwszy system', title: 'Domena i nazwa marki',
          description: 'Wybierz zapadającą w pamięć nazwę landing page i całego systemu.',
          learnContent: {
            videoTitle: 'Idealna domena i nazwa marki',
            summaryText: 'Domena powinna być krótka, zrozumiała i budzić zaufanie. Unikaj skomplikowanej pisowni oraz znaków specjalnych.',
            bulletPoints: ['Przykłady: twoj-dodatkowy-dochod.pl, sukces-z-systemem.com', 'Korzystaj z zaufanych końcówek, takich jak .pl, .com, .de lub .net', 'Nie naruszaj znaków towarowych innych firm'],
            fullArticleGuide: `### Jak wybrać wiarygodną domenę

Domena jest adresem internetowym Twojej strony zapisu. Powinna brzmieć profesjonalnie i być łatwa do zapamiętania.

#### Zasady dobrej nazwy domeny

1. **Jasna i opisowa**: Nazwa powinna sugerować temat strony, np. formula-wolnosci.pl lub madrze-zacznij.pl.
2. **Krótka**: Użyj maksymalnie dwóch lub trzech słów.
3. **Odpowiednia końcówka**: .pl budzi zaufanie w Polsce, .de w Niemczech, a .com pasuje do oferty międzynarodowej.
4. **Bez cudzych marek**: Nie używaj chronionych nazw takich jak Facebook, Digistore ani innych znaków towarowych.`,
            practicalExamples: ['Dobre przykłady: starter-funnel.pl, twoja-droga-online.pl, kompas-sukcesu.com.', 'Zły przykład: zarabiaj-szybko-i-zostan-bogaty-1234.info.'],
          },
          understandContent: { coreTakeaway: 'Prosta domena od razu buduje zaufanie nowych odwiedzających.', keyPrinciples: ['Łatwa do wpisania', 'Zrozumiała podczas rozmowy telefonicznej', 'Bez nadmiaru łączników'] },
          actionTask: { instruction: 'Wpisz wybraną nazwę lub domenę:', placeholder: 'Np. moja-droga-online.pl' },
        },
        '3.2': {
          stageTitle: '3. Twój pierwszy system', title: 'Podstawy landing page',
          description: 'Zbuduj skuteczną stronę zapisu, która pozyskuje kontakty.',
          learnContent: {
            videoTitle: 'Anatomia landing page z konwersją ponad 50%',
            summaryText: 'Landing page do pozyskiwania kontaktów ma jeden cel: wymienić wartościowy lead magnet na adres e-mail odwiedzającego. Usuń rozpraszacze i schowaj dodatkowe linki.',
            bulletPoints: ['1. Nagłówek budzący ciekawość i pokazujący korzyść', '2. Trzy krótkie główne korzyści', '3. Formularz zapisu z polem e-mail i przyciskiem'],
            fullArticleGuide: `### Anatomia landing page z konwersją ponad 50%

Dlaczego na jednej stronie zapisuje się 50 na 100 osób, a na innej tylko dwie? Różnicę tworzą prostota i jasne prowadzenie odbiorcy.

#### Cztery elementy skutecznej strony zapisu

1. **Główny nagłówek—haczyk ciekawości**: W ciągu trzech sekund powinien wyjaśnić korzyść. Przykład: „Bezpłatna lista kontrolna: zbuduj pierwsze źródło dochodu online w 30 minut dziennie.”
2. **Trzy konkretne korzyści**: Pokaż dokładnie, co zawiera darmowy poradnik, np. plan krok po kroku, proste wyjaśnienia i natychmiastowy plik PDF.
3. **Prosty formularz**: Imię jest opcjonalne, adres e-mail obowiązkowy. Użyj aktywnego przycisku, np. „Pobierz bezpłatnie ➔”.
4. **Elementy zaufania**: Dodaj krótki komunikat: „100% bezpłatnie, rezygnacja w każdej chwili, bez spamu.”`,
            practicalExamples: ['Skorzystaj z Asystenta Landing Page GOM-MAR w Toolboxie, aby automatycznie ulepszyć tekst.'],
          },
          understandContent: { coreTakeaway: 'Usuń wszystkie rozpraszacze. Jedna strona oznacza jeden cel.', keyPrinciples: ['Zastosuj wyraźny kontrast przycisku', 'Użyj formuły nagłówka „Jak [osiągnąć cel] bez [problemu]”', 'Twórz zwięzłe nagłówki z pomocą GOM-MAR Toolbox'] },
          actionTask: { instruction: 'Użyj Asystenta Landing Page GOM-MAR lub napisz własny nagłówek:', placeholder: 'Np. Jak zbudować dodatkowy dochód online w 30 minut dziennie' },
        },
        '3.3': {
          stageTitle: '3. Twój pierwszy system', title: 'Połącz ofertę afiliacyjną',
          description: 'Połącz formularz zapisu ze stroną podziękowania i linkiem afiliacyjnym.',
          learnContent: {
            videoTitle: 'Strategia przekierowania przez bridge page',
            summaryText: 'Po wysłaniu formularza skieruj odwiedzającego na stronę podziękowania z ofertą afiliacyjną. System może generować przychód, gdy sekwencja e-mail działa w tle.',
            bulletPoints: ['Wysłanie formularza → przekierowanie na stronę podziękowania', 'Strona potwierdza lead magnet i pokazuje odpowiednią ofertę partnerską', 'Prowizja jest możliwa już od pierwszego dnia'],
            fullArticleGuide: `### Strategia bridge page dla szybkiego przychodu

Moment bezpośrednio po zapisie jest najcenniejszy w całym lejku. Odbiorca jest uważny, korzysta z telefonu lub komputera i właśnie okazał zaufanie.

#### Dwuetapowy proces przekierowania

1. **Wysłanie formularza**: Odwiedzający wpisuje adres e-mail i klika przycisk. W tle kontakt trafia do automatyzacji e-mail.
2. **Inteligentna strona podziękowania**: Zamiast samego „Dziękujemy” pokaż informację, że bezpłatny poradnik dotrze w ciągu dwóch minut, oraz zaproś do obejrzenia krótkiego filmu z rekomendacją. Pod nim umieść przycisk afiliacyjny. Część nowych kontaktów obejrzy materiał i kupi od razu.`,
            practicalExamples: ['Przykład: ze 100 nowych kontaktów 40 ogląda film, a od dwóch do czterech kupuje jeszcze przed pierwszą wiadomością follow-up.'],
          },
          understandContent: { coreTakeaway: 'Dotrzyj do odbiorcy wtedy, gdy jego uwaga jest największa.', keyPrinciples: ['Nie kieruj do linku afiliacyjnego przed zapisem', 'Najpierw pozyskaj kontakt, potem przedstaw rekomendację', 'Kontakt staje się częścią Twojej własnej grupy odbiorców'] },
          actionTask: { instruction: 'Potwierdź, że rozumiesz logikę przekierowania.', checklistItems: ['Odwiedzający wpisuje adres e-mail', 'Kontakt trafia do automatyzacji e-mail GOM-MAR', 'Odwiedzający zostaje przekierowany na afiliacyjną stronę podziękowania'] },
        },
        '3.4': {
          stageTitle: '3. Twój pierwszy system', title: 'Śledzenie i test systemu',
          description: 'Dokładnie sprawdź cały system przed wysłaniem pierwszych odwiedzających.',
          learnContent: {
            videoTitle: 'Audyt systemu: czy wszystko działa?',
            summaryText: 'Testowanie jest niezbędne. Zapisz się jako kontakt testowy i sprawdź, czy otrzymasz wiadomość powitalną.',
            bulletPoints: ['Przetestuj formularz na telefonie i komputerze', 'Sprawdź skrzynkę odbiorczą oraz spam', 'Zweryfikuj prawidłowe śledzenie linku afiliacyjnego'],
            fullArticleGuide: `### Lista kontrolna przed uruchomieniem

Zanim wyślesz odwiedzających na stronę, upewnij się, że cały system działa. Jeden uszkodzony link lub formularz może kosztować cenne kontakty.

#### Przetestuj samodzielnie cztery kroki

1. **Test zapisu**: Otwórz landing page na telefonie i komputerze, a następnie zapisz się testowym adresem e-mail.
2. **Test przekierowania**: Sprawdź, czy strona podziękowania lub oferta otwiera się natychmiast po zapisie.
3. **Test dostarczenia wiadomości**: E-mail powitalny powinien dotrzeć w ciągu jednej do trzech minut. Sprawdź każdy zawarty link.
4. **Test śledzenia afiliacyjnego**: Kliknij link partnerski i upewnij się, że identyfikator afiliacyjny jest prawidłowo przekazywany w adresie docelowym.`,
            practicalExamples: ['Pięciominutowy test zapobiega problemom i zapewnia prawidłową obsługę każdego przyszłego odwiedzającego.'],
          },
          understandContent: { coreTakeaway: 'Sprawny system daje Ci pewność przed rozpoczęciem pozyskiwania ruchu.', keyPrinciples: ['Zbuduj dobrze raz i korzystaj przez lata', 'Znajdź błędy podczas testu, nie dzięki klientom'] },
          actionTask: { instruction: 'Wykonaj pełny test procesu zapisu.', checklistItems: ['Testowy zapis zakończony powodzeniem', 'Strona podziękowania otwiera się prawidłowo', 'Automatyzacja e-mail GOM-MAR zapisała kontakt'] },
        },
      },
    },
    4: {
      title: '4. Docieraj do ludzi',
      subtitle: '🟠 RUCH',
      description: 'Bezpłatne strategie ruchu na Facebooku, Instagramie, Pintereście i YouTube—bez budżetu reklamowego.',
      lessons: {
        '4.1': {
          stageTitle: '4. Docieraj do ludzi', title: 'Grupy niszowe na Facebooku',
          description: 'Zdobywaj codziennie 5–15 wartościowych kontaktów z istniejących grup na Facebooku.',
          learnContent: {
            videoTitle: 'Organiczny ruch z wartościowych treści w grupach Facebooka',
            summaryText: 'Znajdź grupy, w których Twoi odbiorcy już rozmawiają o swoich problemach. Odpowiadaj konkretnie i kieruj zainteresowanych do bezpłatnego lead magnetu.',
            bulletPoints: ['Znajdź 5–10 odpowiednich grup w swojej niszy', 'Dostarczaj realną wartość zamiast reklamowego spamu', 'Wykorzystuj historie: „Jak rozwiązałem ten problem…”'],
            fullArticleGuide: `### Organiczne pozyskiwanie kontaktów w grupach niszowych

Miliony osób codziennie rozmawiają w grupach na Facebooku o konkretnych zainteresowaniach i problemach. Nie musisz szukać ich pojedynczo—są już zgromadzeni w odpowiednich społecznościach.

#### Formuła wartościowego wpisu grupowego

1. **Bez nachalnego spamu**: Wpisy w stylu „Zarabiaj pieniądze—kliknij tutaj” szybko są usuwane i mogą prowadzić do ograniczenia konta.
2. **Historia plus wartość**: Opisz własne doświadczenie, podaj trzy praktyczne wskazówki i zakończ zaproszeniem budzącym ciekawość. Przykład: „Przygotowałem krótkie podsumowanie PDF. Napisz INFO w komentarzu, jeśli chcesz je otrzymać.”
3. **Strategia komentarzy**: Każdej komentującej osobie wyślij przyjazną wiadomość prywatną z linkiem do landing page.`,
            practicalExamples: ['Przykład: „Długo nie mogłem znaleźć czasu na dodatkowy dochód przy pełnym etacie. Pomogły mi te trzy rutyny. Daj znać, jeśli chcesz listę kontrolną.” Taki wpis może wygenerować 20–40 komentarzy.'],
          },
          understandContent: { coreTakeaway: 'Pomocne wpisy rozpoczynają rozmowy i naturalnie przyciągają zainteresowanych na Twój profil.', keyPrinciples: ['Najpierw pomóż, później sprzedawaj', 'Zoptymalizuj profil jak landing page', 'Korzystaj z Generatora Treści GOM-MAR'] },
          actionTask: { instruction: 'Utwórz pierwszy wpis grupowy z pomocą GOM-MAR Toolbox:', placeholder: 'Np. gotowy projekt wartościowego wpisu na Facebooka' },
        },
        '4.2': {
          stageTitle: '4. Docieraj do ludzi', title: 'Instagram Reels i Stories',
          description: 'Buduj zasięg krótkimi Reelsami i interaktywnymi Stories.',
          learnContent: {
            videoTitle: 'Trzysekundowa formuła Reelsa zwiększającego zasięg',
            summaryText: 'Reelsy mogą zapewnić duży bezpłatny zasięg. Użyj trzech części: haczyka ciekawości, trzech wskazówek i wezwania „Napisz START w komentarzu, aby otrzymać poradnik.”',
            bulletPoints: ['Wizualny haczyk w pierwszych trzech sekundach', 'Dopasowane popularne audio i czytelne napisy', 'Automatyczne wiadomości prywatne wysyłające link po komentarzu'],
            fullArticleGuide: `### Zasięg krótkich filmów dzięki Instagram Reels

Instagram promuje krótkie filmy, które utrzymują uwagę. Nie musisz pokazywać twarzy: kanał faceless może korzystać z nagrań ekranu, natury, biurka lub estetycznych ujęć.

#### Trzy elementy skutecznego Reelsa

1. **Haczyk—sekundy 0–3**: Pokaż mocny tekst, np. „Trzy rzeczy, których nikt nie mówi o dodatkowym dochodzie online.”
2. **Wartość—sekundy 3–12**: Przedstaw krótkie praktyczne punkty w filmie albo opisie.
3. **Wezwanie do działania**: Zakończ zdaniem „Napisz START w komentarzu, a wyślę Ci bezpłatny poradnik w wiadomości prywatnej.”`,
            practicalExamples: ['Reels faceless: nagraj nalewanie kawy przy biurku, umieść haczyk na ekranie, a trzy wskazówki i instrukcję odpowiedzi dodaj w opisie.'],
          },
          understandContent: { coreTakeaway: 'Reelsy przyciągają nowych widzów, a Stories zmieniają obserwujących w wartościowe kontakty.', keyPrinciples: ['Krócej zwykle znaczy lepiej—7 do 15 sekund', 'Ciekawość zamiast żargonu', 'Regularność wygrywa z chwilowym zapałem'] },
          actionTask: { instruction: 'Zaplanuj jeden pomysł na Reels w swojej niszy:', placeholder: 'Np. Trzy rzeczy, których nie wiesz o dochodzie online' },
        },
        '4.3': {
          stageTitle: '4. Docieraj do ludzi', title: 'Evergreen na Pintereście i YouTube',
          description: 'Buduj ruch z wyszukiwarek, który przynosi kliknięcia także po wielu miesiącach.',
          learnContent: {
            videoTitle: 'Pasywny ruch z wizualnych wyszukiwarek',
            summaryText: 'W odróżnieniu od szybkich kanałów społecznościowych Pinterest i YouTube działają jak wizualne wyszukiwarki. Dobry Pin może przez lata codziennie kierować użytkowników na landing page.',
            bulletPoints: ['Linkuj Piny bezpośrednio do landing page', 'Używaj trafnych słów kluczowych w tytule i opisie', 'Przyspieszaj zasięg dzięki YouTube Shorts'],
            fullArticleGuide: `### Trwały ruch evergreen

Wpisy na Instagramie szybko znikają w kanale, natomiast Pinterest i YouTube działają jak wyszukiwarki. Treść opublikowana dzisiaj może nadal zdobywać odwiedzających za dwanaście miesięcy.

#### Marketing na Pintereście w trzech krokach

1. Twórz w Canvie pionowe grafiki, najlepiej 1080 × 1920 pikseli.
2. Pisz tytuły bogate w słowa kluczowe, np. „Poradnik: jak zbudować dodatkowy dochód z domu”.
3. Linkuj każdy Pin bezpośrednio do landing page z formularzem zapisu.`,
            practicalExamples: ['Jeden skuteczny Pin może przez wiele miesięcy generować 300–500 kliknięć miesięcznie bez codziennego publikowania.'],
          },
          understandContent: { coreTakeaway: 'Ruch evergreen buduje trwały cyfrowy fundament długoterminowego sukcesu.', keyPrinciples: ['Twórz szablony Canva do szybkiego przygotowania Pinów', 'Słowa kluczowe decydują o pozycji w wynikach'] },
          actionTask: { instruction: 'Zaplanuj pierwsze trzy Piny z pomocą Toolboxa.', checklistItems: ['Konto Pinterest utworzone i skonfigurowane', 'Trzy frazy kluczowe zidentyfikowane', 'Piny utworzone i połączone z landing page'] },
        },
        '4.4': {
          stageTitle: '4. Docieraj do ludzi', title: 'Twój siedmiodniowy plan ruchu',
          description: 'Wprowadź strukturę: wystarczy 30 minut działania dziennie, aby regularnie zdobywać kontakty.',
          learnContent: {
            videoTitle: 'Codzienny workflow w 30 minut',
            summaryText: 'Wyniki przynoszą codzienne rutyny, a nie jednorazowe akcje. Wystarczy trzydzieści minut skupionej pracy dziennie.',
            bulletPoints: ['Dni 1–3: wartościowe wpisy i komentarze na Facebooku', 'Dni 4–5: Instagram Reel i interakcje w Stories', 'Dni 6–7: publikacja Pinów i analiza wyników'],
            fullArticleGuide: `### Uporządkowany plan 30 minut dziennie

Rozwój biznesu online nie wymaga ośmiu godzin pracy dziennie. Wymaga dyscypliny w małych, powtarzalnych działaniach.

#### Twój plan tygodniowy

* **Od poniedziałku do środy—15 minut**: Udostępnij jeden wartościowy wpis w dwóch grupach i odpowiedz na pytania.
* **Od czwartku do piątku—15 minut**: Opublikuj jeden Reel lub Short i odpowiedz na wiadomości.
* **Sobota—15 minut**: Zaplanuj trzy Piny.
* **Niedziela**: Odpocznij i przeanalizuj kontakty pozyskane w ciągu tygodnia.`,
            practicalExamples: ['Po 30 dniach możesz mieć 20 wpisów grupowych, 10 Reelsów i 15 Pinów—aktywność wystarczającą do zdobycia 50–150 kontaktów i pierwszych sprzedaży.'],
          },
          understandContent: { coreTakeaway: 'Zmień plan ruchu w codzienny nawyk.', keyPrinciples: ['Rezerwuj stałe pory działania', 'Skup się na liczbie kontaktów, nie obserwujących'] },
          actionTask: { instruction: 'Zobowiąż się do tygodniowego planu ruchu:', placeholder: 'Zarezerwuj 30 minut każdego dnia' },
        },
      },
    },
  },
};

const mergeLesson = (lesson: Lesson, patch?: LessonPatch): Lesson => {
  if (!patch) return lesson;
  return {
    ...lesson,
    ...patch,
    learnContent: { ...lesson.learnContent, ...patch.learnContent },
    understandContent: { ...lesson.understandContent, ...patch.understandContent },
    actionTask: { ...lesson.actionTask, ...patch.actionTask },
  };
};

export const localizeAcademyStages = (stages: Stage[], language: LanguageCode): Stage[] => {
  const languagePatches = translations[language];
  if (!languagePatches) return stages;

  return stages.map((stage) => {
    const patch = languagePatches[stage.id];
    if (!patch) return stage;
    return {
      ...stage,
      ...patch,
      lessons: stage.lessons.map((lesson) => mergeLesson(lesson, patch.lessons?.[lesson.id])),
    };
  });
};
