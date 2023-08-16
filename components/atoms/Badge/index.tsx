type BadgeProps = {
  alt: string;
  src: string;
  [key: string]: any;
};

type BadgeWithLinkProps = BadgeProps & {
  href: string;
};

export function Badge(props: BadgeProps): React.ReactNode {
  const { alt, src, ...others } = props;
  return <img alt={alt} src={src} {...others} />;
}

export function BadgeWithLink(props: BadgeWithLinkProps): React.ReactNode {
  const { alt, src, href, ...others } = props;
  return (
    <a href={href} target="_blank">
      <img alt={alt} src={src} {...others} />
    </a>
  );
}
