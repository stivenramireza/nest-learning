import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConverions: true
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitConverions: true
  offset?: number;
}
