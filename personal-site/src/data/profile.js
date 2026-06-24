/**
 * 个人介绍网站 — 数据中心
 * 个人信息已做脱敏处理
 */

export const profile = {
  // ---- 基本信息 ----
  name: '杨同学',
  title: 'Java 后端开发工程师',
  subtitle: '软件工程本科 · 2025届 · 持续学习',

  // ---- 关于我 ----
  bio: [
    '我是2025届软件工程专业毕业生，主攻 Java 后端方向。在校期间系统学习了数据结构、操作系统、计算机网络等基础课程，并通过多个实战项目积累了扎实的工程能力。',
    '技术栈以 Java 为核心，熟悉 Spring Boot / Spring Cloud Alibaba 等主流框架，理解 IoC / AOP 及微服务架构设计理念。具备 MySQL 索引调优、Redis 缓存设计、RabbitMQ / RocketMQ 消息队列等实际应用经验。',
    '曾在科技公司担任后端开发实习生，主导赛事管理小程序的业务主流程设计与微信支付模块对接。乐于通过博客和开源项目分享技术思考。',
  ],

  // ---- 数据统计 ----
  stats: [
    { label: '实习经历', value: 1, suffix: ' 段' },
    { label: '项目经验', value: 3, suffix: ' 个' },
    { label: '技术栈',    value: 9, suffix: '+' },
    { label: '开源项目', value: 1, suffix: ' 个' },
  ],

  // ---- 技能列表 ----
  skills: [
    { name: 'Java',           level: 85 },
    { name: 'Spring Boot',    level: 85 },
    { name: 'MySQL',          level: 80 },
    { name: 'Redis',          level: 80 },
    { name: 'Spring Cloud',   level: 75 },
    { name: 'MyBatis',        level: 82 },
    { name: 'RabbitMQ',       level: 70 },
    { name: 'RocketMQ',       level: 68 },
    { name: 'Nginx',          level: 65 },
  ],

  // ---- 项目经历 ----
  projects: [
    {
      title: '爱台球 — 赛事管理小程序',
      description: '基于 Spring Boot 3 + MySQL + Redis 的台球俱乐部赛事管理平台。采用工厂模式 + 策略模式设计赛制引擎，支持单败/双败赛程推进；集成微信 JSAPI 支付实现完整支付闭环；通过乐观锁解决多人协作审核的并发冲突。',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Redis', '微信支付'],
    },
    {
      title: '智行顺风车',
      description: '基于 Spring Boot + SpringCloud Alibaba 的顺风车后端服务。对接百度地图和 OCR 实现司机实名认证；基于 Redis GEO 实现乘客-司机路径匹配；通过 RabbitMQ 延迟队列 + 死信交换机实现超时自动取消；采用装饰者模式设计行程计费规则。',
      tags: ['Java', 'Spring Cloud', 'Redis', 'RabbitMQ', 'FastDFS'],
    },
    {
      title: '手写 RPC 框架',
      description: '基于 Java + Etcd + Vert.x + 自定义协议实现的轻量级 RPC 框架。通过 JDK 动态代理实现远程方法无感知调用；内置 JDK / JSON / Kryo / Hessian 四种序列化器；支持随机、轮询、一致性 Hash 三种负载均衡与 FailFast / FailSafe 等四种容错策略。',
      tags: ['Java', 'Etcd', 'Vert.x', 'SPI', '动态代理'],
    },
  ],

  // ---- 联系方式 ----
  contact: {
    email: '264***@qq.com',
    github: 'https://github.com/AKSJD12',
  },

  // ---- 页脚 ----
  footer: {
    year: new Date().getFullYear(),
    tech: 'React + Vite + Vercel',
  },
};
