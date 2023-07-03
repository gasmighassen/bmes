import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
  async getImages(): Promise<any[]> {
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.BMES_CLOUD_NAME}/resources/search`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.BMES_API_KEY + ':' + process.env.BMES_API_SECRET,
            ).toString('base64')}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch images from Cloudinary');
      }

      const data = await response.json();

      const images = data.resources.map((resource) => ({
        public_id: resource.asset_id,
        folder: resource.folder,
        secure_url: resource.secure_url,
      }));

      return images;
    } catch (error) {
      throw new Error('Error fetching images from Cloudinary');
    }
  }
}
