import { Heading } from "@/components/atoms/Heading";
import { Career } from "@/services/careers";
import { ProjectCardList } from "../ProjectCardList";

export function CareerList({
  careers,
}: {
  careers: Career[];
}): React.ReactNode {
  return careers.map((career) => {
    return (
      <div className="mb-4 ml-2">
        <Heading level={3}>{career.company}</Heading>
        <div className="flex items-top w-512 flex-wrap">
          <ProjectCardList projects={...career.projects} />
        </div>
      </div>
    );
  });
}
