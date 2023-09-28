import { Project } from "@/services/careers";
import { ProjectCard } from "@/components/organisms/ProjectCard";
import { techStackBadges } from "@/services/badges";

export function ProjectCardList({
  projects,
}: {
  projects: Project[];
}): React.ReactNode {
  return projects.map((project) => {
    // 各プロジェクトの技術スタックをバッジに変換
    const tech_stack_items: Partial<typeof techStackBadges> = {};
    project.tech_stack.items.forEach((tech) => {
      tech_stack_items[tech as keyof typeof techStackBadges] =
        techStackBadges[tech as keyof typeof techStackBadges];
    });

    // ProjectCardに渡す引数の作成
    const projectWithBadge: React.ComponentProps<typeof ProjectCard> = {
      ...project,
      tech_stack: {
        items: tech_stack_items,
        comment: project.tech_stack.comment,
      },
    };

    return <ProjectCard {...projectWithBadge} key={project.term} />;
  });
}
