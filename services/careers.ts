/* 職務経歴 */
export type Career = {
  company: string;
  projects: Project[];
};

export type Project = {
  name: string;
  term: string;
  role_tasks: {
    summary: string;
    items: string[];
  }[];
  tech_stack: {
    items: string[];
    comment?: string;
  };
  n_members: {
    team: number;
    project: number;
  };
};

export const careers: Career[] = [
  {
    company: "フリーランス (2022年1月～現在)",
    projects: [
      {
        name: "自動車会社基幹システム（商品販売システム）の再構築",
        term: "2023年1月～2023年9月",
        role_tasks: [
          {
            summary: "アーキテクトチームのメンバーとして以下を担当。",
            items: [
              "フロントエンドのアーキテクチャー検討と検証 (Drupal、React)",
              "検証計画書、検証結果報告書の作成と顧客への報告",
            ],
          },
        ],
        tech_stack: {
          items: ["TypeScript", "PHP", "React", "Drupal", "Azure"],
          comment:
            "上記以外にプロジェクトで採用しているDDD、CQRS、マイクロサービス等の技術も学んだ。",
        },
        n_members: {
          team: 10,
          project: 50,
        },
      },
      {
        name: "自動車会社基幹システム（工事管理システム）の再構築",
        term: "2022年1月～2023年3月",
        role_tasks: [
          {
            summary: "アーキテクトチームのリーダーとして以下を担当。",
            items: [
              "システム/ソフトウェアアーキテクチャー設計",
              "開発標準策定",
              "開発者の技術支援、レビュー",
              "アプリケーション全体のテーブル設計 (ER図作成など)",
            ],
          },
        ],
        tech_stack: {
          items: ["JavaScript", "CSharp", "OutSystems", "Oracle"],
        },
        n_members: {
          team: 3,
          project: 30,
        },
      },
    ],
  },
  {
    company: "トヨタ自動車株式会社 (2005年4月～2021年6月)",
    projects: [
      {
        name: "中国ライドシェア会社向け車両管理システムの新規開発",
        term: "2020年1月～2021年6月",
        role_tasks: [
          {
            summary: "プロダクトオーナーとして以下を担当。",
            items: ["事業計画立案", "要件定義、受入テスト", "顧客との折衝"],
          },
        ],
        tech_stack: {
          items: [],
          comment: "プロジェクトとしてはJava、Hadoop、Kafka等を利用していた。",
        },
        n_members: {
          team: 20,
          project: 20,
        },
      },
      {
        name: "自社基幹システム（試作車生産管理、部品調達、生産システム）の再構築",
        term: "2017年4月～2019年12月",
        role_tasks: [
          {
            summary:
              "2017年4月～2018年12月はプロジェクトマネージャーとして以下を担当。",
            items: [
              "企画 (SAFeを導入)",
              "構想検討、要件定義のマネジメント (方針検討、成果物のレビュー、プロジェクト運営)",
            ],
          },
          {
            summary:
              "2019年1月～2019年12月はアーキテクトチームのリーダーとして以下を担当。",
            items: [
              "システム/ソフトウェアアーキテクチャー設計",
              "開発標準策定",
              "開発者の技術支援、レビュー",
            ],
          },
        ],
        tech_stack: {
          items: ["JavaScript", "CSharp", "OutSystems", "Oracle"],
        },
        n_members: {
          team: 5,
          project: 30,
        },
      },
      {
        name: "OutSystemsを利用したアプリケーション開発のトライアル、展開",
        term: "2014年1月～2018年12月",
        role_tasks: [
          {
            summary: "プロジェクトマネージャーとして以下を担当。",
            items: [
              "段階的なトライアルと評価の企画",
              "他部署への展開とサポートの企画、実行時のマネジメント",
              "開発元 (OutSystems社) との製品改善交渉、要件定義",
            ],
          },
        ],
        tech_stack: {
          items: ["JavaScript", "OutSystems"],
          comment:
            "OutSystems用データグリッドを作るため、ag-GridやWijmoも利用した。",
        },
        n_members: {
          team: 10,
          project: 10,
        },
      },
      {
        name: "自社基幹システム（試作車生産管理、部品調達、生産システム）の改善、保守運用",
        term: "2007年1月～2017年12月",
        role_tasks: [
          {
            summary: "プロジェクトマネージャーとして以下を担当。",
            items: [
              "企画、構想検討、要件定義",
              "各局面におけるにおけるマネジメント (成果物のレビュー、プロジェクト運営、トラブル時の陣頭指揮)",
            ],
          },
        ],
        tech_stack: {
          items: ["Java", "COBOL", "DB2"],
        },
        n_members: {
          team: 15,
          project: 15,
        },
      },
    ],
  },
];
