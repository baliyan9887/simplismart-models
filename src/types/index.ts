export interface ModelSpace {
  id: string;
  name: string;
  description: string;
  avatar: string;
}

export interface ModelSpaceDetails extends ModelSpace {
  inputs: any[];
  outputs: any[];
}

export interface ModelSpaceOutput {
  textOutputName: string;
  numberOutputName: number;
  boolOutputName: boolean;
  audioOutputName: string;
  imageOutputName: string;
  imagesOutputName: string[];
}
