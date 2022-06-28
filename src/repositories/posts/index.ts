import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post } from './schema';
type TObjectId = mongoose.ObjectId;

@Injectable()
export class PostRepository {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  /**
   * @desc find all documents from post collection
   * @returns Promise<Post[]>
   * @param page
   */
  public async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  /**
   * @desc find one document from post collection
   * @returns Promise<Post>
   * @param id
   */
  public async findOne(id: TObjectId): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  /**
   * @desc create a new document in post collection
   * @returns Promise<Post>
   * @param post
   */
  public async create(post: Post): Promise<Post> {
    return this.postModel.create(post);
  }

  /**
   * @desc update a exist document in post collection
   * @returns Promise<Post>
   * @param post
   * @param id
   */
  public async update(id: TObjectId, post: Post): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, post, { new: true }).exec();
  }

  /**
   * @desc delete a exist document in post collection
   * @returns Promise<Post>
   * @param id
   */
  public async delete(id: TObjectId): Promise<Post> {
    return this.postModel.findByIdAndRemove(id).exec();
  }
}
