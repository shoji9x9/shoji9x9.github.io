export type Artifact = {
  title: string;
  url: string;
  repositoryUrl: string;
  articleTitle: string;
  articleUrl: string;
  tech_stack: string[];
};

export const artifacts: Artifact[] = [
  {
    title: "ポートフォリオ（このページ）",
    url: "https://shoji9x9.github.io/",
    repositoryUrl: "https://github.com/shoji9x9/shoji9x9.github.io",
    articleTitle: "GitHub PagesにNext.jsでポートフォリオ作ってみた",
    articleUrl: "https://zenn.dev/shoji9x9/articles/90897d3f772e8a",
    tech_stack: [
      "React",
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "GithubActions",
    ],
  },
  {
    title: "Qiita記事検索",
    url: "https://search-components-mui.vercel.app/",
    repositoryUrl: "https://github.com/shoji9x9/search_components_mui",
    articleTitle: "React、TypeScriptでQiita記事検索機能作ってみた",
    articleUrl: "https://zenn.dev/shoji9x9/articles/cdc688518da3f8",
    tech_stack: ["React", "TypeScript", "Storybook", "Vercel"],
  },
  {
    title: "メモアプリ",
    url: "https://vite-react-f4c90.web.app/",
    repositoryUrl: "https://github.com/shoji9x9/memo-app",
    articleTitle: "React（TypeScript） + Firebaseでメモアプリ開発",
    articleUrl: "https://zenn.dev/shoji9x9/articles/eb185b3d66567b",
    tech_stack: ["React", "TypeScript", "Recoil", "Firebase"],
  },
];
