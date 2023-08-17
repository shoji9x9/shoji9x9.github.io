import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";

type ProjectCardProps = {
  name: string;
  term: string;
  role_tasks: {
    summary: string;
    items: string[];
  }[];
  n_members: {
    team: number;
    project: number;
  };
  tech_stack: {
    items: {
      [key: string]: string;
    };
    comment?: string;
  };
};

export function ProjectCard(props: ProjectCardProps) {
  const { name, term, role_tasks, n_members, tech_stack } = props;
  return (
    <div
      className="mb-8 border-2 border-gray-300 rounded-lg shadow-xl p-4 mr-4 w-192"
      key={name}
    >
      <Heading level={4} className="mb-4">
        {name}
      </Heading>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          期間
        </Heading>
        {term}
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          ロールとタスク
        </Heading>
        {role_tasks.map((role_task) => {
          return (
            <div className="mb-2">
              {role_task.summary}
              <ul className="list-disc list-inside">
                {role_task.items.map((item, idx) => (
                  <li key={`item_${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          メンバー数
        </Heading>
        チーム: {n_members.team}名 プロジェクト全体: {n_members.project}名
      </div>
      <div className="mb-4 ml-2">
        <Heading level={5} className="mb-2">
          技術スタック
        </Heading>
        <div className="flex items-center mb-2">
          {Object.keys(tech_stack.items).map((key) => {
            return (
              <Badge
                alt={key}
                src={tech_stack.items[key as keyof typeof tech_stack.items]}
                className="mr-2 h-5"
                key={key}
              />
            );
          })}
        </div>
        {tech_stack.comment}
      </div>
    </div>
  );
}
