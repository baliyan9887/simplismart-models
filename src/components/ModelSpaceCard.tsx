import Link from "next/link";
import Image from "next/image";
import { ModelSpace } from "@/types";

interface ModelSpaceCardProps {
  modelSpace: ModelSpace;
}

export const ModelSpaceCard: React.FC<ModelSpaceCardProps> = ({
  modelSpace,
}) => (
  <li className="border p-4 rounded-md shadow-sm">
    <Link href={`/model-space/${modelSpace.id}`}>
      <a>
        <Image
          src={modelSpace.avatar}
          alt={modelSpace.name}
          width={64}
          height={64}
          className="w-16 h-16 object-cover mb-2 rounded-full"
        />
        <h2 className="text-xl font-semibold">{modelSpace.name}</h2>
        <p className="text-gray-500">{modelSpace.description}</p>
      </a>
    </Link>
  </li>
);
