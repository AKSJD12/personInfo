/**
 * 个人介绍网站 — 数据中心
 * 集中管理所有个人信息，修改此文件即可更新全站内容
 * 注：个人信息已做脱敏处理
 */

export const profile = {
  // ---- 基本信息（已脱敏）----
  name: '杨同学',
  title: 'Java 后端开发工程师',
  subtitle: '软件工程本科 · 热爱技术 · 持续学习',

  // ---- 头像（先留空）----
  avatar: '',

  // ---- 关于我 ----
  bio: [
    '我是2025届软件工程专业应届毕业生，主攻 Java 后端开发方向。在校期间系统学习了数据结构、计算机网络、操作系统等基础课程，并通过多个实战项目积累了扎实的工程能力。',
    '技术栈以 Java 为核心，熟悉 Spring Boot、Spring Cloud Alibaba 等主流框架的使用，理解 IoC / AOP 思想以及微服务架构的设计理念。具备 MySQL 索引调优、Redis 缓存设计、RocketMQ 消息队列等实际应用经验。',
    '曾在科技公司担任后端开发实习生，主导了赛事管理小程序的业务主流程设计与支付模块对接。乐于通过博客和开源项目分享技术思考，希望成为一名优秀的后端工程师。',
  ],

  // ---- 数据统计 ----
  stats: [
    { label: '实习经历', value: 1, suffix: '段' },
    { label: '项目经验', value: 3, suffix: '个' },
    { label: '技术方向', value: 7, suffix: '+' },
    { label: '开源项目', value: 1, suffix: '个' },
  ],

  // ---- 技能列表 ----
  skills: [
    { name: 'Java',           level: 85, icon: '☕' },
    { name: 'Spring Boot',    level: 85, icon: '🍃' },
    { name: 'MySQL',          level: 80, icon: '🗄️' },
    { name: 'Redis',          level: 80, icon: '🔴' },
    { name: 'Spring Cloud',   level: 75, icon: '☁️' },
    { name: 'MyBatis',        level: 82, icon: '🔗' },
    { name: 'RabbitMQ',       level: 70, icon: '🐇' },
    { name: 'RocketMQ',       level: 68, icon: '🚀' },
    { name: 'Nginx',          level: 65, icon: '🌐' },
  ],

  // ---- 项目经历 ----
  projects: [
    {
      title: '爱台球 — 赛事管理小程序',
      description: '基于 Spring Boot 3 + MySQL + Redis + MyBatis-Plus 的台球俱乐部赛事管理平台。采用工厂模式+策略模式设计赛制引擎，支持单败/双败等多种赛程推进；集成微信 JSAPI 支付实现完整的支付闭环；设计身份核验功能，通过乐观锁解决多人协作审核的并发冲突。',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Redis', '微信支付'],
      link: '#',
      image: '',
    },
    {
      title: '智行顺风车',
      description: '基于 Spring Boot + SpringCloud Alibaba 的顺风车出行小程序后端。对接百度地图和 OCR 服务实现司机实名认证；基于 Redis GEO 实现乘客-司机路径匹配度计算与推荐；通过 RabbitMQ 延迟队列 + 死信交换机实现邀请超时自动取消；采用装饰者模式设计行程计费规则，遵循开闭原则灵活扩展。',
      tags: ['Java', 'Spring Cloud', 'Redis', 'RabbitMQ', 'FastDFS'],
      link: '#',
      image: '',
    },
    {
      title: '手写 RPC 框架',
      description: '基于 Java + Etcd + Vert.x + 自定义协议实现的轻量级 RPC 框架。通过 JDK 动态代理实现远程方法无感知调用；基于 Etcd 租约 + Watch 机制实现服务注册与健康检测；内置 JDK / JSON / Kryo / Hessian 四种序列化器；支持随机、轮询、一致性 Hash 三种负载均衡及 FailFast / FailSafe 等四种容错策略。',
      tags: ['Java', 'Etcd', 'Vert.x', 'SPI', '动态代理'],
      link: '#',
      image: '',
    },
  ],

  // ---- 联系方式（已脱敏）----
  contact: {
    email: '264***@qq.com',
    github: 'https://github.com/AKSJD12',
    juejin: '#',
    linkedin: '#',
  },

  // ---- 页脚 ----
  footer: {
    year: new Date().getFullYear(),
    tech: 'React + Vite + Vercel',
  },
};
