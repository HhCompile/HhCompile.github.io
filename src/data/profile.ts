/**
 * 个人信息数据源
 *
 * 修改这里的占位值即可更新整站内容。
 * 注意：这里的占位文本是占位符，请在部署前替换为你的真实信息。
 */

export interface Project {
  name: string
  desc: string
  tags: string[]
  url?: string
  repo?: string
  /** 关键成就/数据点（1-2 条） */
  highlight?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  points: string[]
}

export interface Profile {
  name: string
  title: string          // 一句话身份标签，例如「高级前端开发工程师」
  location: string
  bio: string[]          // About 段落，每条一段
  skills: string[]       // 技术栈标签
  experiences: Experience[]
  projects: Project[]
  contact: {
    github: string
    email: string
    /** 其他渠道：知乎、掘金、Twitter/X、LinkedIn、个人博客 */
    others?: Array<{ label: string; url: string }>
  }
}

export const profile: Profile = {
  name: '孙浩航',
  title: '高级前端开发工程师 / 前端架构师',
  location: '北京',

  bio: [
    '8 年前端开发经验，主导过 4 条完整产品线前端体系（低代码 / SaaS 计费 / 云测试 / 数字化中后台），具备架构思维与产品意识。',
    '配置化抽象能力突出：自研 JSON Schema 表单引擎 + G-Audit 审批组件库，新场景交付效率提升 200%+；AI-Native 工作流重度使用者，json-schema-form-engine 用 Vibe Coding 2 周完成开源。'
  ],

  skills: [
    'Vue 3 / Vue 2', 'TypeScript', 'Vite / Webpack',
    '低代码（阿里 LowCodeEngine）', 'JSON Schema 表单引擎',
    'React + Umi 4 + Ant Design Pro', '前端工程化（ESLint/Prettier/Husky）',
    '微前端（qiankun）', 'CI/CD（Jenkins / GitHub Actions / miniprogram-CI）',
    'Taro / uni-app / 微信小程序', 'Node.js 中间层（Express / Koa）',
    '前端监控 / 性能优化', 'AI 工具链（Claude Code / Cursor / Vibe Coding）'
  ],

  experiences: [
    {
      company: '深圳极市科技有限公司【马上消费】',
      role: '高级前端开发工程师',
      period: '2025/06 - 2026/04',
      points: [
        '主导云测 / 低代码 / 得助 LTC 三条业务线前端迭代，承担复杂模块技术方案设计与代码评审',
        '云测录制回放编辑器：动态组件工厂 + 步骤树形拖拽，首屏 FCP 4.2s → 1.6s，体积减少 60%',
        '低码平台（马上搭）：物料体系 + 跨环境一键同步，业务页面搭建效率提升 40%，跨环境同步 5-10 分钟 → <3 秒',
        '得助 SaaS LTC 计费中台（一期）：商品 / 订单 / 账单 / 账户 4 模块，支撑 3 类角色业务落地',
        '主导前端 code review 30+ 次 / 月，组织 LowCodeEngine / JSON Schema / AI Coding 等技术分享 5+ 场'
      ]
    },
    {
      company: '北京筑管云网络科技有限公司',
      role: '高级前端开发工程师',
      period: '2023/09 - 2025/05',
      points: [
        '从 0 主导数字化后台管理系统（Vue 3），封装 5 类公共 Hooks，单个 CRUD 页面从 3 天缩短至 1 天',
        '自研 G-Audit 审批组件库：审批场景从硬编码 2-3 天改为配置 2-3 小时（效率 10x）',
        '自研 JSON Schema 表单引擎 + 可视化拖拽，新增表单从 2-3 天缩短至 1 天',
        'Axios 请求层优化：同一接口重复请求从 5-8 次收敛为 1 次，回显 3-5s → <1s',
        '数字化小程序（Taro + 微信支付）：双角色 + EventChannel，考勤工资核算替代 2 人每日 1-2 小时人工对账'
      ]
    },
    {
      company: '北京邮来邮网网络科技有限公司',
      role: '中级前端开发工程师',
      period: '2021/05 - 2023/08',
      points: [
        '主导 E 集藏运营管理后台从 0 搭建：藏品管理 / 用户运营 / 订单管理 3 大业务模块',
        '封装 Layout 布局 + 权限路由 + Axios 全局网关，承担前端技术方案评审与组员代码 Review',
        '支撑藏品交易额从 0 到月百万级规模'
      ]
    },
    {
      company: '沈阳华贯汽车市场调研有限公司',
      role: 'WEB 前端开发',
      period: '2018/05 - 2021/04',
      points: [
        '负责公司后台管理系统 + 时代汽服小程序搭建，制定开发规范，封装公共组件库',
        '后台支撑 50+ 内部用户日常数据录入与查询',
        '3 年间支撑公司业务从 PC 后台扩展到移动端小程序'
      ]
    }
  ],

  projects: [
    {
      name: '得助 SaaS LTC 计费中台',
      desc: '马上消费旗下 SaaS 订阅制计费中台，覆盖商品 / 订单 / 账单 / 账户全链路',
      tags: ['React 18', 'Umi 4', 'TypeScript', 'qiankun', 'JSON Schema'],
      highlight: '财务对账效率提升 60%；视图定位工具将线上问题定位从 3-5 分钟降至 <10 秒（30x 提速）'
    },
    {
      name: '低码开发平台（马上搭）',
      desc: '基于阿里 LowCodeEngine 二次开发，物料 / 设计器 / 渲染器深度改造',
      tags: ['Vue 3', 'Vite', 'Pinia', 'Naive UI', 'LowCodeEngine'],
      highlight: '业务页面搭建效率提升 40%，跨环境同步 5-10 分钟 → <3 秒（100x 提速）'
    },
    {
      name: '云测自动化测试平台',
      desc: '企业级云真机自动化测试平台：录制回放 / 远程操控 / 数据看板',
      tags: ['Vue 3', 'Vite', 'CodeMirror', 'ECharts'],
      highlight: '录制回放编辑器首屏 FCP 4.2s → 1.6s，体积减少 60%'
    },
    {
      name: 'json-schema-form-engine',
      desc: 'JSON Schema 驱动的可视化表单引擎 · 渲染 / 校验 / 拖拽设计一体化',
      tags: ['TypeScript', '可视化', '组件库'],
      repo: 'https://github.com/HhCompile/json-schema-form-engine',
      highlight: 'Vibe Coding 2 周完成开源'
    },
    {
      name: '筑管云数字化后台 + 小程序',
      desc: '工地项目管理全生命周期系统 + 双角色（管理 / 工人）小程序',
      tags: ['Vue 3', 'Taro', 'Nut-UI', '微信支付'],
      highlight: '考勤工资核算替代 2 人每日 1-2 小时人工对账（每月节省 40+ 工时）'
    }
  ],

  contact: {
    github: 'https://github.com/HhCompile',
    email: 'sunxiansheng99999@163.com',
    others: [
      { label: '个人博客', url: 'https://hhcompile.github.io/blog/' }
    ]
  }
}
