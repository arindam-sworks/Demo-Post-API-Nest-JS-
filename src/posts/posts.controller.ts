import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { CreatePostDto } from 'src/dtos/post.dtos';
import { VisibleType } from '../repositories/posts/schema';

import { PostsService } from './posts.service';
type TObjectId = mongoose.ObjectId;

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get()
  findAllPosts(): Promise<any> {
    return this.postService.fetchAllPosts();
  }

  @Get('/:id')
  findOnePost(@Param('id') id: TObjectId): Promise<any> {
    return this.postService.fetchOnePost(id);
  }

  @Post()
  createPost(@Body() { title, content, visible }: CreatePostDto): Promise<any> {
    if (visible) {
      if (visible !== VisibleType.ONLYME && visible !== VisibleType.PUBLIC) {
        throw new Error('visible type is invalid');
      }
    }
    return this.postService.createPost({
      title,
      content,
      visible,
    });
  }

  @Put('/:id')
  updatePost(
    @Param('id') id: TObjectId,
    @Body() { title, content, visible }: CreatePostDto,
  ): Promise<any> {
    return this.postService.updatePost(id, { title, content, visible });
  }

  @Delete('/:id')
  removePost(@Param('id') id: TObjectId): Promise<any> {
    return this.postService.deletePost(id);
  }
}
