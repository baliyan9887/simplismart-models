import axios from "axios";
import { ModelSpace, ModelSpaceDetails, ModelSpaceOutput } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Fetch all model spaces
export const getModelSpaces = async (): Promise<ModelSpace[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/model-spaces`);
    return response.data.data;
  } catch (error) {
    throw new Error(`Failed to fetch model spaces: ${error}`);
  }
};

// Fetch model space details by ID
export const getModelSpaceDetails = async (
  id: string
): Promise<ModelSpaceDetails> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/model-spaces/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(`Failed to fetch model space details: ${error}`);
  }
};

// Call the predict API
export const predictModel = async (modelSpaceId: string, inputs: any) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/model-spaces/${modelSpaceId}/predict`,
      inputs
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to predict model: ${error}`);
  }
};
