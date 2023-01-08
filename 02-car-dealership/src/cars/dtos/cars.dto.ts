import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}

export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
