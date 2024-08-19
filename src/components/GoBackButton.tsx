"use client"; // This directive makes this component a Client Component

import { useRouter } from "next/navigation";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <button onClick={handleGoBack} className="flex items-center gap-5">
      <ArrowLongLeftIcon className="w-8 h-8 cursor-pointer" />
    </button>
  );
};

export default GoBackButton;
