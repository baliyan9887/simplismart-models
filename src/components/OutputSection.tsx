import Image from "next/image";
import { ModelSpaceOutput } from "@/types";

interface OutputSectionProps {
  output: any[] | null;
}

const OutputSection: React.FC<OutputSectionProps> = ({ output }) => {
  if (!output) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Outputs</h2>
      {output?.map((item) => (
        <>
          <p className="text-sm text-gray-300 my-4">Inputs: {item.name}</p>
          <p className="text-sm text-gray-300">
            Description: {item.description}
          </p>
        </>
      ))}
    </div>
  );
};

export default OutputSection;
