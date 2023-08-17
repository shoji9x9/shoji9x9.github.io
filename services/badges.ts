/* バッジのリンク */
export const accountBadges = {
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

export const languageBadges = {
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

export const frameworkBadges = {
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
export const techStackBadges = {
  ...languageBadges,
  ...frameworkBadges,
};
