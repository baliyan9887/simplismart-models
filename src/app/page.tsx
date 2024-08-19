import { getModelSpaces } from "@/utils/api";
import { ModelSpace } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const modelSpaces: ModelSpace[] = await getModelSpaces();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mt-10">Available Model Spaces</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {modelSpaces.map((space) => (
          <li key={space.id} className="border p-4 rounded-md shadow-sm">
            <Link href={`/model-space/${space.id}`}>
              <div>
                <Image
                  src={space.avatar}
                  alt={space.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover mb-2 rounded-full"
                />
                <h2 className="text-xl font-semibold mt-5">{space.name}</h2>
                <p className="text-gray-400 text-sm mt-3">
                  {space.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
