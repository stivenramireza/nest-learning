import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'How many rows do you need?',
    example: 20,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConverions: true
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'How many rows do you want to skip?',
    example: 5,
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitConverions: true
  offset?: number;
}
