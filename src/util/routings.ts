type Pages =
  | "top"
  | "news"
  | "about"
  | "workstyle"
  | "company"
  | "recruit"
  | "contact"
  | "policy";

type Routings = {
  [T in Pages]: {
    location: string;
    parent: Pages | null;
    label: string;
  }
};

const routings: Routings = {
  top: {
    location: "/",
    parent: null,
    label: "TOPページ",
  },
  news: {
    location: "/news/",
    parent: "top",
    label: "ニュース",
  },
  about: {
    location: "/about/",
    parent: "top",
    label: "私たちについて",
  },
  workstyle: {
    location: "/workstyle/",
    parent: "top",
    label: "ワークスタイル",
  },
  company: {
    location: "/company/",
    parent: "top",
    label: "会社概要",
  },
  recruit: {
    location: "/recruit/",
    parent: "top",
    label: "採用情報",
  },
  contact: {
    location: "/contact/",
    parent: "top",
    label: "お問い合わせ",
  },
  policy: {
    location: "/policy/",
    parent: "top",
    label: "個人情報保護方針",
  },
};

export default routings;
