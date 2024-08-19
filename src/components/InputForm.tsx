"use client";

import { useState } from "react";
import { predictModel } from "@/utils/api";

interface InputFormProps {
  modelSpaceId: string;
}

const InputForm = ({ modelSpaceId }: InputFormProps) => {
  const [textInput, setTextInput] = useState("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await predictModel(modelSpaceId, { prompt: textInput });
      setPrediction(result.textOutputName);
    } catch (err) {
      setError("Failed to get prediction.");
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="textInput" className="block text-sm font-medium">
            Text Input
          </label>
          <input
            id="textInput"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
        >
          Predict
        </button>
        {prediction && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Prediction:</h3>
            <p>{prediction}</p>
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputForm;
