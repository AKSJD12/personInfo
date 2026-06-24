/**
 * 个人介绍网站 — 数据中心
 * 集中管理所有个人信息，修改此文件即可更新全站内容
 */

export const profile = {
  // ---- 基本信息 ----
  name: '张三',
  title: '全栈开发工程师',
  subtitle: '热爱技术 · 专注Java生态与前端开发 · 终身学习者',

  // ---- 头像（先留空，后续替换为真实图片路径）----
  avatar: '',

  // ---- 关于我 ----
  bio: [
    '我是一名拥有5年经验的全栈开发工程师，擅长 Java 生态和现代前端技术。曾主导多个企业级项目从0到1的架构设计与落地交付，对代码质量和工程效率有极致的追求。',
    '技术栈涵盖 Spring Boot、MyBatis、React、Vue 等领域，对数据库设计和系统性能优化有深入理解。热衷于开源社区，保持持续学习的技术热情。',
    '业余时间喜欢写技术博客，在掘金和 GitHub 上分享自己的项目经验。我相信优秀的代码来自清晰的思考和持续的迭代。',
  ],

  // ---- 数据统计 ----
  stats: [
    { label: '工作经验', value: 5, suffix: '年+' },
    { label: '完成项目', value: 20, suffix: '+' },
    { label: '获得奖项', value: 3, suffix: '个' },
    { label: '开源贡献', value: 50, suffix: '+' },
  ],

  // ---- 技能列表 ----
  skills: [
    { name: 'Java', level: 95, icon: '☕' },
    { name: 'Spring Boot', level: 90, icon: '🍃' },
    { name: 'MySQL', level: 85, icon: '🗄️' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Vue', level: 82, icon: '💚' },
    { name: 'Docker', level: 75, icon: '🐳' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'Redis', level: 78, icon: '🔴' },
    { name: 'Git', level: 88, icon: '🔀' },
  ],

  // ---- 项目经历 ----
  projects: [
    {
      title: '企业OA办公系统',
      description: '基于 Spring Boot + Vue 的全栈办公自动化平台，集成流程审批、文档管理、即时通讯等模块，支撑 200+ 用户日常使用。',
      tags: ['Java', 'Spring Boot', 'Vue', 'MySQL'],
      link: '#',
      image: '',
    },
    {
      title: '电商数据分析平台',
      description: '使用 React + ECharts 构建的数据可视化看板，实时展示订单趋势、用户行为漏斗、库存预警等核心业务指标。',
      tags: ['React', 'ECharts', 'Python', 'Redis'],
      link: '#',
      image: '',
    },
    {
      title: '微服务网关中间件',
      description: '基于 Spring Cloud Gateway 二次开发的 API 网关，实现动态路由、限流熔断、统一鉴权等功能，已开源至 GitHub。',
      tags: ['Java', 'Spring Cloud', 'Docker', 'Nacos'],
      link: '#',
      image: '',
    },
    {
      title: '个人博客系统',
      description: '前后端分离的个人技术博客，支持 Markdown 编辑、标签分类、全文搜索，服务端渲染提升 SEO 效果。',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
      image: '',
    },
  ],

  // ---- 联系方式 ----
  contact: {
    email: 'zhangsan@example.com',
    github: 'https://github.com/zhangsan',
    juejin: 'https://juejin.cn/user/zhangsan',
    linkedin: 'https://linkedin.com/in/zhangsan',
  },

  // ---- 页脚 ----
  footer: {
    year: new Date().getFullYear(),
    tech: 'React + Vite + Vercel',
  },
};
