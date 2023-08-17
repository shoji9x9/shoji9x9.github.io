import { Heading } from "@/components/atoms/Heading";
import { Career } from "@/services/careers";
import { ProjectCardList } from "../ProjectCardList";

export function CareerList({
  careers,
}: {
  careers: Career[];
}): React.ReactNode {
  return careers.map((career, idx) => {
    return (
      <div className="mb-4 ml-2" key={`carrer_${idx}`}>
        <Heading level={3}>{career.company}</Heading>
        <div
          className="flex items-top w-512 flex-wrap"
          key={`carrer_project_${idx}`}
        >
          <ProjectCardList projects={...career.projects} />
        </div>
      </div>
    );
  });
}
