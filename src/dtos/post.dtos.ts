import { VisibleType } from 'src/repositories/posts/schema';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsOptional()
  visible: VisibleType;
}
