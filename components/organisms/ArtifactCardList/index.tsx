import { ArtifactCard } from "@/components/organisms/ArtifactCard";
import { Artifact } from "@/services/artifacts";
import { techStackBadges } from "@/services/badges";

export function ArtifactCardList({
  artifacts,
}: {
  artifacts: Artifact[];
}): React.ReactNode {
  return artifacts.map((artifact) => {
    // 各製作物の技術スタックをバッジに変換
    const tech_stack_items: Partial<typeof techStackBadges> = {};
    artifact.tech_stack.forEach((tech) => {
      tech_stack_items[tech as keyof typeof techStackBadges] =
        techStackBadges[tech as keyof typeof techStackBadges];
    });

    // ArtifactCardに渡す引数の作成
    const artifactWithBadge: React.ComponentProps<typeof ArtifactCard> = {
      ...artifact,
      tech_stack: tech_stack_items,
    };

    return <ArtifactCard {...artifactWithBadge} />;
  });
}
