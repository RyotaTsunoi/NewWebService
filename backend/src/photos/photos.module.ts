import { Module } from '@nestjs/common';
import { PhotosResolver } from './photos.resolver';
import { PhotosService } from './photos.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PhotosResolver, PhotosService, PrismaService],
})
export class PhotosModule {}
