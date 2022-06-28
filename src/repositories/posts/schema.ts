import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum VisibleType {
  PUBLIC = 'public',
  ONLYME = 'onlyme',
}

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true, default: '' })
  title: string;

  @Prop({ required: true, default: '' })
  content: string;

  @Prop({ default: VisibleType.PUBLIC })
  visible: VisibleType;
}

export const PostSchema = SchemaFactory.createForClass(Post);
