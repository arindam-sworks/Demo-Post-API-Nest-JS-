import { Inject, Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { PostRepository } from 'src/repositories/posts';
import { Post } from 'src/repositories/posts/schema';
type TObjectId = mongoose.ObjectId;

@Injectable()
export class PostsService {
  constructor(
    @Inject(PostRepository) private readonly postDB: PostRepository,
  ) {}

  fetchAllPosts(): Promise<Post[]> {
    return this.postDB.findAll();
  }

  fetchOnePost(id: TObjectId): Promise<Post> {
    return this.postDB.findOne(id);
  }

  createPost(post: any): Promise<Post> {
    return this.postDB.create(post);
  }

  updatePost(id: TObjectId, post: any): Promise<Post> {
    return this.postDB.update(id, post);
  }

  deletePost(id: TObjectId): Promise<Post> {
    return this.postDB.delete(id);
  }
}
