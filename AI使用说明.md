# AI 使用说明文档

> 项目：个人介绍网站  
> 提交人：杨同学  
> 日期：2025-06-25

---

## 1. 使用了哪些 AI 工具

| 工具 | 用途 |
|------|------|
| **Claude Code（核心）** | 架构设计、代码生成、问题排查、样式重构、部署指导 |
| **Claude（多模态）** | 读取并理解笔试题目截图、简历文件 |

---

## 2. AI 帮助完成了哪些工作

### 2.1 需求分析与架构设计

- 将笔试要求拆解为 9 个实施步骤
- 输出完整的设计文档（配色、字体、组件树、动效清单）
- 给出技术栈推荐和部署平台对比

### 2.2 项目搭建

- 创建 Vite + React 脚手架
- 建立组件目录结构
- 编写全局 CSS 变量系统和 Reset 样式

### 2.3 代码生成

- 7 个页面组件（Navigation / Hero / About / Skills / Projects / Contact / Footer）
- 4 个自定义 Hook（`useScrollSpy` / `useTypewriter` / `useCountUp` / `useReveal`）
- 数据中心 `profile.js`
- 所有组件的 CSS Module 样式
- GitHub Pages 部署工作流

### 2.4 样式重构

- 基于 `frontend-design.md` 设计哲学完成全面重构
- 从暗色 AI 模板风格改为克制的浅色工程风
- CSS 体积从 12.37 kB 降至 7.85 kB

### 2.5 部署运维

- 配置 `vercel.json`
- 通过 GitHub API 推送 gh-pages 分支（解决 Git CLI 网络不通问题）
- 诊断 Pages 构建状态和网络连接问题

---

## 3. 自己手动修改了哪些内容

### 3.1 个人信息脱敏与填充

- 将占位数据（张三/假邮箱/假项目）替换为简历真实内容
- 对姓名（杨文财 → 杨同学）、手机号、邮箱进行脱敏处理
- 技能列表和项目经历完全基于真实简历重构

### 3.2 部署决策

- 选择 Vercel + GitHub Pages 双平台部署（因国内访问 Vercel 需 VPN）
- 决定使用 Python + GitHub API 方式推送（绕过本地 Git CLI 网络限制）
- 处理 GitHub Token 泄露问题，清理敏感信息后重新推送

### 3.3 设计方向确认

- 审核并批准设计重构方案（浅色工程风 vs 暗色 AI 模板风）
- 确认字体、配色、交互级别的取舍

### 3.4 平台操作

- 在 GitHub 创建仓库
- 在 Vercel 完成项目导入和部署
- 在 GitHub Settings 中启用 Pages 功能
- 管理 GitHub Personal Access Token 的创建与撤销

---

## 4. 遇到的问题，以及如何通过 AI 解决

| 问题 | AI 给出的方案 | 最终处理 |
|------|-------------|----------|
| **Vite 8 与 Node 20.15 不兼容** | 降级到 Vite 5，兼容现有 Node 版本 | 采纳，重新创建项目 |
| **Vercel 官网被墙，无法部署** | 1) 开 VPN 网页端部署 2) 切换到国内可访问平台 | 开 VPN 完成 Vercel 部署；同时部署 GitHub Pages 作为国内备用 |
| **Git CLI 推送 GitHub 失败（即使开了 VPN）** | 使用 Python `requests` + GitHub REST API 直接推送文件（Python 能走 VPN） | 采纳，通过 GitHub Git Database API 创建 blob/tree/commit/ref |
| **GitHub Token 在 commit 中被暴露** | 1) `git commit --amend` 修改提交 2) 删除 package.json 中的 deploy 脚本 | 采纳，amend 后成功推送；建议撤销旧 Token |
| **网站暗色风格看起来像 AI 模板** | 基于 `frontend-design.md` 设计指南，重构为浅色工程风：衬线体标题 + 单色 blue accent + 去除粒子/光晕/弹跳等装饰 | 采纳，全面重构 7 个组件 |
| **GitHub Pages 更新后看不到新内容** | 通过 API 检查 Pages 状态 → 发现是 `building` 中，需等待 2-3 分钟 | 确认配置无误，等待构建完成 |

---

## 5. 最终网站链接

| 平台 | 地址 | 说明 |
|------|------|------|
| **Vercel** | `https://person-info-xxx.vercel.app` | 国际 CDN，需 VPN |
| **GitHub Pages** | https://aksjd12.github.io/personInfo | 国内直连 |

> 注：Vercel 地址在部署时自动生成，请在 Vercel Dashboard 中查看完整 URL。

---

## 附：项目技术栈

```
框架:     React 18 + Vite 5
样式:     CSS Modules + CSS 变量
动效:     Intersection Observer + CSS transition
部署:     Vercel + GitHub Pages（双平台）
代码管理: GitHub (https://github.com/AKSJD12/personInfo)
```
