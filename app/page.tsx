import { Heading } from "@/components/atoms/Heading";
import { Badge, BadgeWithLink } from "@/components/atoms/Badge";
import {
  accountBadges,
  languageBadges,
  frameworkBadges,
} from "@/services/badges";
import { careers } from "@/services/careers";
import { CareerList } from "@/components/organisms/CareerList";
import { ArtifactCardList } from "@/components/organisms/ArtifactCardList";
import { artifacts } from "@/services/artifacts";

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
                key={key}
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
                  key={key}
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
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mb-8">
        <Heading level={2}>職務経歴詳細</Heading>
        <CareerList careers={...careers} />
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
        <Heading level={2}>製作物</Heading>
        <div className="flex items-top w-512 flex-wrap">
          <ArtifactCardList artifacts={...artifacts} />
        </div>
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
