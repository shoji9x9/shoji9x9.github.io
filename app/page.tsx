import { Heading } from "@/components/atoms/Heading";
import { Badge, BadgeWithLink } from "@/components/atoms/Badge";
import { ProjectCard } from "@/components/organisms/ProjectCard";

/* バッジのリンク */
const accountBadges = {
  Github: {
    href: "https://github.com/shoji9x9",
    imageSrc:
      "https://img.shields.io/badge/shoji9x9-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white",
  },
  Twitter: {
    href: "https://twitter.com/shoji9x9",
    imageSrc:
      "https://img.shields.io/badge/@shoji9x9-%231DA1F2.svg?&style=flat-square&logo=twitter&logoColor=white",
  },
  Qiita: {
    href: "https://qiita.com/shoji9x9",
    imageSrc:
      "https://img.shields.io/badge/shoji9x9-55C500.svg?&style=flat-square&logo=qiita&logoColor=white",
  },
  Zenn: {
    href: "https://zenn.dev/shoji9x9",
    imageSrc:
      "https://img.shields.io/badge/shoji9x9-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white",
  },
  AtCoder: {
    href: "https://atcoder.jp/users/shoji9x9",
    imageSrc:
      "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fshoji9x9",
  },
};

const languageBadges = {
  JavaScript:
    "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white",
  Python:
    "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white",
  TypeScript:
    "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
  CSharp:
    "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
  PHP: "https://img.shields.io/badge/PHP-ccc.svg?logo=php&color=777BB4&style=flat-square&logoColor=white",
  Java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  COBOL:
    "https://img.shields.io/badge/COBOL-ccc.svg?logo=cobol&color=1572B6&style=flat-square&logoColor=white",
  // HTML5: "https://img.shields.io/badge/-HTML5-333.svg?logo=html5&style=flat",
  // CSS3: "https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&style=flat",
};

const frameworkBadges = {
  OutSystems:
    "https://img.shields.io/badge/-OutSystems-fa173d.svg?logo=&style=flat-square",
  TensorFlow:
    "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
  React:
    "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white",
  Drupal:
    "https://img.shields.io/badge/drupal-%230678BE.svg?style=for-the-badge&logo=drupal&logoColor=white",
  Oracle:
    "https://img.shields.io/badge/-Oracle-F80000.svg?logo=oracle&style=flat-square",
  DB2: "https://img.shields.io/badge/DB2-ccc.svg?logo=db2&color=0F4D92&style=flat-square&logoColor=white",
  Azure:
    "https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
};

// languageBadgesとframeworkBadgesの論理和とする
const techStackBadges = {
  ...languageBadges,
  ...frameworkBadges,
};

/* 職務経歴 */
const careers = [
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
        name: "自動車会社基幹システム（試作車生産管理、部品調達、生産システム）の再構築",
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
        name: "OutSystemsを利用したシステム開発のトライアル、展開",
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
        name: "自動車会社基幹システム（試作車生産管理、部品調達、生産システム）の改善、保守運用",
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

export default function Home() {
  return (
    <main className="p-24">
      <div className="mb-8">
        <Heading level={2}>
          <span>
            <span className="align-middle mr-2">プロフィール</span>
            <img alt="DotHiyoko" src="./dot_hiyoko.png" className="inline" />
          </span>
        </Heading>
        <table className="table-fixed border border-gray-500">
          <thead>
            <tr>
              <th className="p-1 w-1/4 border border-gray-500">キー</th>
              <th className="p-1 w-3/4 border border-gray-500">バリュー</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-1 border border-gray-500">職業</td>
              <td className="p-1 border border-gray-500">
                フリーランスのソフトウェアエンジニア (2022年～)
              </td>
            </tr>
            <tr>
              <td className="p-1 border border-gray-500">居住地</td>
              <td className="p-1 border border-gray-500">愛知県</td>
            </tr>
            <tr>
              <td className="p-1 border border-gray-500">生まれ</td>
              <td className="p-1 border border-gray-500">1982年</td>
            </tr>
            <tr>
              <td className="p-1 border border-gray-500">最終学歴</td>
              <td className="p-1 border border-gray-500">
                大阪大学 基礎工学部 情報科学科 卒業
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <Heading level={2}>アカウント</Heading>
        <div className="flex items-center">
          {Object.keys(accountBadges).map((key) => {
            return (
              <BadgeWithLink
                alt={key}
                src={accountBadges[key as keyof typeof accountBadges].imageSrc}
                href={accountBadges[key as keyof typeof accountBadges].href}
                className="mr-2 h-5"
              />
            );
          })}
        </div>
      </div>
      <div className="mb-8">
        <Heading level={2}>自己PR</Heading>
        <ul className="list-disc list-inside">
          <li>
            数百万円～十億円以上の大小50以上のプロジェクトを立ち上げてきた経験を持ち、問題点の把握、原因の分析、ROIの高い対策の立案が得意です
          </li>
          <li>
            また、これらのプロジェクトの上流～下流の各局面の成果物のレビューを行い、時には自身で成果物を作成してきました
            (Java、COBOLがメイン)
          </li>
          <li>
            日頃より現状に課題意識を持ちOutSystemsやアジャイル (Scrum、SAFe)
            の情報を集めプロジェクトに導入してきた行動力も特徴の一つと考えます
          </li>
          <li>
            今後はこれまで培ってきた経験を活かしながらも、製品やサービスの開発を行っていきたいと考えており、特にフロントエンド開発
            (Reactやコンポーネント駆動開発) への関心が高いです
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <Heading level={2}>保有スキル</Heading>
        <div className="mb-4 ml-2">
          <Heading level={3}>言語</Heading>
          <div className="flex items-center">
            {Object.keys(languageBadges).map((key) => {
              return (
                <Badge
                  alt={key}
                  src={languageBadges[key as keyof typeof languageBadges]}
                  className="mr-2 h-5"
                />
              );
            })}
          </div>
        </div>
        <div className="mb-4 ml-2">
          <Heading level={3}>フレームワーク・ミドルウェア等</Heading>
          <div className="flex items-center">
            {Object.keys(frameworkBadges).map((key) => {
              return (
                <Badge
                  alt={key}
                  src={frameworkBadges[key as keyof typeof frameworkBadges]}
                  className="mr-2 h-5"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-8">
        <Heading level={2}>職務経歴詳細</Heading>
        {careers.map((career) => {
          return (
            <div className="mb-4 ml-2">
              <Heading level={3}>{career.company}</Heading>
              <div className="flex items-top w-512 flex-wrap">
                {career.projects.map((project) => {
                  const tech_stack_items: Partial<typeof techStackBadges> = {};
                  project.tech_stack.items.forEach((tech) => {
                    tech_stack_items[tech as keyof typeof techStackBadges] =
                      techStackBadges[tech as keyof typeof techStackBadges];
                  });

                  const projectWithBadge: React.ComponentProps<
                    typeof ProjectCard
                  > = {
                    ...project,
                    tech_stack: {
                      items: tech_stack_items,
                      comment: project.tech_stack.comment,
                    },
                  };

                  return <ProjectCard {...projectWithBadge} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-8">
        <Heading level={2}>資格</Heading>
        <ul className="list-disc list-inside">
          <li>
            情報処理推進機構 (IPA)
            <ul className="list-disc list-inside pl-4">
              <li>基本情報技術者</li>
              <li>応用情報技術者</li>
              <li>システムアーキテクト</li>
              <li>プロジェクトマネージャ</li>
            </ul>
          </li>
          <li>
            日本ディープラーニング協会 (JDLA)
            <ul className="list-disc list-inside pl-4">
              <li>G検定</li>
              <li>E資格</li>
            </ul>
          </li>
          <li>
            その他
            <ul className="list-disc list-inside pl-4">
              <li>英語検定2級</li>
              <li>日商簿記検定2級</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <Heading level={2}>希望条件</Heading>
        <a
          href="https://zenn.dev/shoji9x9/articles/741bba963942a6"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          狩野モデルで考える、自分が希望する労働環境
        </a>
      </div>
      <div className="mb-8">
        <Heading level={2}>リンク</Heading>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://lapras.com/public/shoji9x9"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              LAPRAS
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
