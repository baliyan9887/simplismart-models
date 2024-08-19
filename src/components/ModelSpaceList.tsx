import { ModelSpaceCard } from "./ModelSpaceCard";
import { ModelSpace } from "@/types";

interface ModelSpaceListProps {
  modelSpaces: ModelSpace[];
}

export const ModelSpaceList: React.FC<ModelSpaceListProps> = ({
  modelSpaces,
}) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {modelSpaces.map((modelSpace) => (
      <ModelSpaceCard key={modelSpace.id} modelSpace={modelSpace} />
    ))}
  </ul>
);
