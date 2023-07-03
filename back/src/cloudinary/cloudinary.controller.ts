import { Controller, Get, Param, Query } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloud')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Get()
  async getImages() {
    return this.cloudinaryService.getImages();
  }
}
