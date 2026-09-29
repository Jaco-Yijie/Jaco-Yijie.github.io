export type PortfolioCopy = {
  experiments: string
  watch: string
  exploring: string
  scroll: string
  heroLines: string[]
  heroCaption: string
  featured: string
  motionTitle: string
  motionSubtitle: string
  motionBody: string[]
  role: string
  roles: string[]
  tech: string
  play: string
  pause: string
  videoError: string
  openVideo: string
  labTitle: string
  labLead: string
  labItems: { name: string; note: string }[]
  aboutTitle: string
  aboutBody: string[]
  processTitle: string
  process: string[]
  archive: string
  profitLabel: string
  profitNote: string
  newsFlow: string[]
}

export const portfolioEn: PortfolioCopy = {
  experiments: 'Experiments',
  watch: 'Watch latest experiment',
  exploring: 'Currently exploring',
  scroll: 'Scroll to discover',
  heroLines: ['Building with AI,', 'from idea', 'to experience.'],
  heroCaption: 'Ideas are a beginning. Making them real is the interesting part.',
  featured: '01 / Featured experiment',
  motionTitle: 'AI × Motion',
  motionSubtitle: 'Creative Coding Experiment',
  motionBody: [
    'Building animation with React, Remotion & AI Coding.',
    'An AI Creative Coding experiment exploring how AI-assisted development can become part of the animation workflow.',
    'Instead of building a traditional video editor demo, I turned the interface into a living world where the character enters the UI, moves clips, adds transitions, adjusts controls and completes the edit.',
    'With Codex / Claude Code assisting the React + Remotion implementation, I explored the workflow through repeated previews, visual review and adjustments to the animation rhythm.',
  ],
  role: 'My role',
  roles: [
    'Creative Direction',
    'Scene Breakdown',
    'Motion Design',
    'AI Coding Workflow',
    'Visual Review',
  ],
  tech: 'Built with React, Remotion and AI-assisted coding.',
  play: 'Play video',
  pause: 'Pause video',
  videoError: 'The video could not be loaded. Open the video file to try again.',
  openVideo: 'Open video',
  labTitle: 'Things I’m currently playing with.',
  labLead:
    'Not everything needs to become a product. Some things are worth exploring simply because they are interesting.',
  labItems: [
    { name: 'Agent', note: 'From intention to action' },
    { name: 'AI Coding', note: 'Build, preview, iterate' },
    { name: 'Remotion', note: 'Motion expressed in code' },
    { name: 'Prompt Eval', note: 'Make failure observable' },
    { name: 'MCP', note: 'Tools in context' },
    { name: 'Harness Engineering', note: 'Shape the environment' },
    { name: 'Creative Web', note: 'Interfaces with a point of view' },
    { name: 'Multi-Agent', note: 'Explore collaboration' },
  ],
  aboutTitle: 'I like turning vague ideas into things that actually work.',
  aboutBody: [
    'I’m Jaco Wang, studying Computer Science / Data Science at Universiti Kebangsaan Malaysia.',
    'I like finding out what AI can do by building with it: interviews, prototypes, prompts, evaluation, code, deployment and user testing. Then another iteration.',
    'My interests meet at AI products, agents, AI-native workflows and creative coding. I use AI-assisted development to explore ideas and take responsibility for the direction, review and iteration.',
  ],
  processTitle: 'My way of building',
  process: ['Problem', 'Prototype', 'Build', 'Test', 'Break', 'Learn', 'Build again'],
  archive: 'More work & field notes',
  profitLabel: 'LLM context variables',
  profitNote: 'Calculation in Python. Interpretation with an LLM.',
  newsFlow: ['News', 'Rules', 'LLM', 'Eval', 'Telegram'],
}

export const portfolioZh: PortfolioCopy = {
  experiments: '实验',
  watch: '观看最新创作实验',
  exploring: '正在探索',
  scroll: '向下探索',
  heroLines: ['Building with AI,', 'from idea', 'to experience.'],
  heroCaption: '把想法做成真正能被体验的 AI 产品。',
  featured: '01 / 创作实验',
  motionTitle: 'AI × Motion',
  motionSubtitle: '创作实验',
  motionBody: [
    '用 React、Remotion 与 AI Coding 探索程序化动画。',
    '这是一次 AI Creative Coding 实验，探索 AI 辅助开发如何进入动画与内容创作工作流。',
    '我尝试把一个普通的视频剪辑软件，变成一个角色真正生活其中的动画世界。角色会进入 UI、搬运素材、删除片段、添加转场、调整参数，并最终完成自己的视频。',
    '通过 Codex / Claude Code 辅助完成 React + Remotion 实现，并通过不断预览、调整动画节奏和视觉效果，探索这套创作工作流。',
  ],
  role: '我负责的部分',
  roles: ['创意方向', '场景拆解', '动画设计', 'AI Coding 工作流', '视觉审查'],
  tech: '通过 AI Coding 协作，探索并完成 React + Remotion 创作。',
  play: '播放视频',
  pause: '暂停视频',
  videoError: '视频加载失败，可打开视频文件重试。',
  openVideo: '打开视频',
  labTitle: '最近正在折腾的东西。',
  labLead: '不是所有实验都必须变成产品。有些东西，只是因为足够有意思。',
  labItems: [
    { name: 'Agent', note: '从意图到行动' },
    { name: 'AI Coding', note: '构建、预览、迭代' },
    { name: 'Remotion', note: '用代码表达动画' },
    { name: 'Prompt Eval', note: '让失败可以被观察' },
    { name: 'MCP', note: '让工具进入上下文' },
    { name: 'Harness Engineering', note: '构建工作的环境' },
    { name: 'Creative Web', note: '探索有表达力的界面' },
    { name: 'Multi-Agent', note: '探索协作的可能' },
  ],
  aboutTitle: '我喜欢把模糊的想法，一点点做成真正能用的东西。',
  aboutBody: [
    '我是王一杰，目前在马来西亚国立大学学习计算机科学 / 数据科学。',
    '我喜欢亲自把 AI 产品做出来：访谈、原型、Prompt、Eval、代码、部署、用户测试，然后继续修改。',
    '我尤其感兴趣的是 AI Product、Agent、AI Native Workflow 与 Creative Coding。通过 AI Coding 协作探索实现，自己负责方向、审查和迭代。',
  ],
  processTitle: '我的构建方式',
  process: ['发现问题', '原型', '构建', '测试', '打破', '学习', '再次构建'],
  archive: '更多作品与项目笔记',
  profitLabel: 'LLM 上下文变量',
  profitNote: 'Python 负责计算，LLM 负责解释。',
  newsFlow: ['新闻', '规则', 'LLM', '评测', 'Telegram'],
}
