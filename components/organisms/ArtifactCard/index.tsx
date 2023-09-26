import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";

type ArtifactCardProps = {
  title: string;
  url: string;
  repositoryUrl: string;
  articleTitle: string;
  articleUrl: string;
  tech_stack: {
    [key: string]: string;
  };
};

export function ArtifactCard(props: ArtifactCardProps) {
  const { title, url, repositoryUrl, tech_stack, articleUrl, articleTitle } =
    props;
  return (
    <div
      className="mb-8 border-2 border-gray-300 rounded-lg shadow-xl p-4 mr-4 w-192"
      key={title}
    >
      <Heading level={4} className="mb-4">
        {title}
      </Heading>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          URL
        </Heading>
        <a
          href={url}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {url}
        </a>
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          リポジトリー
        </Heading>
        <a
          href={repositoryUrl}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {repositoryUrl}
        </a>
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          技術スタック
        </Heading>
        <div className="flex items-center mb-2">
          {Object.keys(tech_stack).map((key) => {
            return (
              <Badge
                alt={key}
                src={tech_stack[key as keyof typeof tech_stack]}
                className="mr-2 h-5"
                key={key}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          記事
        </Heading>
        <a
          href={articleUrl}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {articleTitle}
        </a>
      </div>
    </div>
  );
}
