import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostRepository } from 'src/repositories/posts';
import { Post, PostSchema } from 'src/repositories/posts/schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostRepository],
  exports: [PostsService],
})
export class PostsModule {}
