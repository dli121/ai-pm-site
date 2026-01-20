export const contentZh = {
    home: {
      heroTitle: "李冬晴",
      heroSubtitle:
        "帝国理工 EDSML 硕士在读，具备“统计学背景 + 大厂数据架构 + 创业产品落地”的复合经验。擅长通过数据挖掘用户需求，曾主导从 0 到 1 的小程序产品设计与运营，利用 AI/数据手段提升业务转化率。拥有强生（J&J）企业级数据平台搭建经验，致力于探索 AI 技术在商业场景中的落地应用。目标方向：企业 AI 应用、LLM 治理、数据智能产品。",
    credibility: "Imperial College London ｜ Johnson & Johnson ｜ 创业者（Tada Coffee & Bistro）",
    valueProps: [
      {
        title: "业务问题 → 可落地的 AI 产品",
        desc: "将业务目标转化为可验证的产品路径，确保模型能力真正服务业务。",
      },
      {
        title: "复杂环境下的合规与治理",
        desc: "在高合规与高敏感数据场景中构建可审计、可控的 AI 能力。",
      },
      {
        title: "平台化与可扩展能力",
        desc: "沉淀可复用的架构与标准，支持 AI 能力规模化复制。",
      },
    ],
    metrics: [
      { label: "企业级 AI 平台", value: "2+ 项" },
      { label: "0→1 产品搭建", value: "3+ 项" },
      { label: "跨部门协作", value: "10+ 团队" },
    ],
    focusAreas: [
      "LLM 治理与安全合规（数据、权限、审计）",
      "企业级 AI 平台与数据能力建设",
      "B 端 SaaS 产品设计与业务流程标准化",
      "从 PoC 到规模化落地的产品路径",
    ],
    technicalProjects: [
      {
        id: "ai-briefing",
        title: "AI 资讯汇总 → 飞书",
        desc: "多源采集、摘要与去重，结构化输出到飞书。",
        image: "/tech-projects/ai-briefing.jpg",
        tags: ["信息抽取", "自动化流程", "知识整理"],
        metrics: ["多源内容聚合", "摘要与要点输出"],
      },
      {
        id: "travel-planner",
        title: "旅行计划生成",
        desc: "需求拆解 + 规则与推荐结合，输出可执行方案。",
        image: "/tech-projects/travel-planner.jpg",
        tags: ["需求拆解", "推荐策略", "规划落地"],
        metrics: ["机酒行程一体化", "打卡建议输出"],
      },
      {
        id: "personal-rag",
        title: "个人知识库（RAG）",
        desc: "采集—向量化—检索—可追溯问答闭环。",
        image: "/tech-projects/personal-rag.jpg",
        tags: ["RAG 架构", "知识治理", "可追溯"],
        metrics: ["多源资料入库", "引用可追踪"],
      },
    ],
    },
  
    projects: [
      {
        id: "law-shield",
        title: "Law Shield｜企业级 LLM 治理网关（AI 产品设计）",
        problem:
          "企业在引入大语言模型（LLM）时，面临数据泄露、合规风险与不可控输出等问题，现有方案难以被业务团队直接使用。",
        designed: [
          "设计面向企业的 LLM 治理网关产品，将 AI 风险控制能力产品化",
          "构建 Input Guard、Policy Engine、Output Auditor 的模块化治理架构",
          "将抽象的合规与安全要求转化为可配置、可扩展的产品能力",
        ],
        tradeoff:
          "在安全性与使用体验之间进行权衡，避免过度限制模型能力而影响业务效率。",
        impact:
          "形成一套可复用的 LLM 治理产品架构，为 AI 在高风险场景下的规模化落地提供产品范式。",
      },
      {
        id: "medtech-ai-platform",
        title: "MedTech Enterprise AI Data Platform｜企业级 AI 平台与安全治理（Azure）",
        problem:
          "医疗与生命科学场景中数据高度敏感，传统 AI 平台难以同时满足安全合规与业务扩展需求。",
        designed: [
          "设计基于 Azure ADLS、Azure Machine Learning 与 Databricks 的企业级 AI 数据与计算平台",
          "构建覆盖数据与计算层的双重 RBAC 权限治理机制",
          "主导业务驱动的 PoC，验证平台在复杂网络与安全限制下的可用性",
        ],
        tradeoff:
          "在平台通用性与合规安全之间取舍，优先保障高敏感数据的可审计性与风险可控性。",
        impact:
          "沉淀可复用的企业级 AI 平台架构与治理标准，为后续 AI 能力扩展提供蓝本。",
      },
      {
        id: "crm-bi",
        title: "CRM & BI｜数据驱动的决策系统（B 端 SaaS）",
        problem:
          "线下业务流程高度依赖人工经验，数据分散，管理层难以基于数据进行决策与预测。",
        designed: [
          "设计学员管理系统（CRM）的核心功能，将线下流程转化为标准化 SaaS 模块",
          "搭建覆盖用户全生命周期的 BI 指标体系",
          "通过可视化仪表盘支持运营与管理决策",
        ],
        tradeoff:
          "在系统复杂度与业务落地效率之间权衡，优先保证系统易理解、易使用。",
        impact:
          "建立数据驱动的业务决策基础，为后续引入 AI 能力奠定系统与数据基础。",
      },
    ],
  
    experience: [
      {
        company: "Johnson & Johnson",
        role: "云架构 / AI 平台方向（项目制）",
        bullets: [
          "负责 Azure IaaS 层网络拓扑与系统架构设计，满足企业级安全与合规要求",
          "主导 Azure Machine Learning 与 Databricks 的 PoC，推动 AI 能力在受限环境下落地",
          "设计并实施细粒度 RBAC 权限模型，落实最小权限原则",
          "输出可复用的架构与运维标准，为 AI 平台扩展提供依据",
        ],
      },
      {
        company: "昂立教育",
        role: "B 端系统产品负责人",
        bullets: [
          "负责学员管理系统（CRM）的核心功能规划与产品设计",
          "主导考勤、排课、通知等模块，推动业务流程线上化",
          "搭建 BI 指标体系，为管理层提供经营分析支持",
        ],
      },
      {
        company: "Tada Coffee & Bistro",
        role: "创始人 & 产品负责人",
        bullets: [
          "从 0 到 1 创立实体与线上结合的消费品牌",
          "设计并上线微信小程序，支持线上点单与用户运营",
          "基于用户数据进行产品与运营决策，探索数据驱动增长",
        ],
      },
    ],
  };
  