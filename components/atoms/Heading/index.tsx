import React from "react";
import { containPresenter } from "../../utils/ComponentBuilder";

const headerClasses = {
  1: "text-4xl mb-3 font-semibold",
  2: "text-3xl mb-3 font-semibold",
  3: "text-2xl mb-2 font-semibold",
  4: "text-xl mb-2 font-semibold",
  5: "text-lg mb-1 font-semibold",
  6: "text-base mb-1 font-semibold",
};

/* プレゼンター */
type HeadingPresenterProps = {
  tagName: string;
  visualLevel: keyof typeof headerClasses;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
};

const HeadingPresenter = (props: HeadingPresenterProps): React.ReactNode => {
  const { tagName: Tag, visualLevel, className, children, ...others } = props;
  // const element = <Tag>{children}</Tag>; のように定義するとエラーとなったため、
  // 以下の方法で要素作成する
  const element = React.createElement(
    Tag,
    {
      className: `${headerClasses[visualLevel]} ${className ? className : ""}`,
      ...others,
    },
    children
  );

  return element;
};

/* コンテナー */
type HeadingContainerProps = HeadingProps & {
  presenter: React.FunctionComponent;
};

const HeadingContainer = (props: HeadingContainerProps): React.ReactNode => {
  const { presenter, level, visualLevel, ...others } = props;

  const fixedLevel = Math.max(1, Math.min(6, level));
  const fixedVisualLevel = Math.max(1, Math.min(6, visualLevel || fixedLevel));
  const tagName = `h${fixedLevel}`;

  return presenter({ tagName, visualLevel: fixedVisualLevel, ...others });
};

/* コンポーネント */
type HeadingProps = {
  level: number;
  visualLevel?: number;
  [key: string]: any;
};

export const Heading: React.FunctionComponent<HeadingProps> = containPresenter(
  HeadingContainer,
  HeadingPresenter
);
