import { buildR2AccessKey, uploadImage } from "./r2.helper";

export const getImageUrl = async (folder: string, key: string, file: File) => {
  if (!file) return null;
  try {
    const imageKey = buildR2AccessKey(folder, key, file);
    const result = await uploadImage(file, imageKey);

    if (!result) {
      throw new Error(`Failed to upload ${key} image`);
    }

    return result.url;
  } catch (error) {
    console.error(`Failed to upload ${key} image:`, error);
    throw new Error(
      error instanceof Error
        ? error.message
        : `Unknown error uploading ${key} image`,
    );
  }
};
