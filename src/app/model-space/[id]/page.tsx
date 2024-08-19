import { notFound } from "next/navigation";
import Image from "next/image";
import { getModelSpaceDetails } from "@/utils/api";
import { ModelSpaceDetails } from "@/types";
import InputForm from "@/components/InputForm";
import OutputSection from "@/components/OutputSection";
import GoBackButton from "@/components/GoBackButton";

interface Props {
  params: { id: string };
}

const ModelSpacePage = async ({ params }: Props) => {
  const { id } = params;

  try {
    const details: ModelSpaceDetails = await getModelSpaceDetails(id);

    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center gap-5">
          <GoBackButton />
          <h1 className="text-2xl font-bold my-6">{details.name}</h1>
        </div>
        <Image
          src={details.avatar}
          alt={details.name}
          width={60}
          height={60}
          className="object-cover rounded-full"
        />
        <p className="text-sm text-gray-400 mt-5">{details.description}</p>
        {/* Render input form for predictions */}
        <InputForm modelSpaceId={id} />
        <OutputSection output={details.outputs} />
      </div>
    );
  } catch (error) {
    notFound(); // Show 404 page if data fetching fails
  }
};

export default ModelSpacePage;
