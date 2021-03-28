import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Photo, PhotoInput } from './photo';
import { PhotosService } from './photos.service';

const photoTable = [
  {
    id: 1,
    title: '鯖の味噌煮',
  },
  {
    id: 2,
    title: 'ミートソーススパゲティ',
  },
  {
    id: 3,
    title: '豚の生姜焼',
  },
];

@Resolver('Photos')
export class PhotosResolver {
  constructor(private photo: PhotosService) {}
  @Query((returns) => [Photo])
  async photos(@Args('PhotoInput') args: PhotoInput): Promise<Photo[]> {
    return this.photo.photos({ where: args });
  }

  @Query((returns) => [Photo])
  async allPhotos(): Promise<Photo[]> {
    return this.photo.allPhotos();
  }

  @Mutation((returns) => Photo)
  async create(@Args('PhotoInput') args: PhotoInput): Promise<Photo> {
    return this.photo.createPhoto(args);
  }
}
