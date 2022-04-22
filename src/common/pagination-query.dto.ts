import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @ApiProperty({
    description: 'Limit',
    type: Number,
  })
  limit: number;

  @IsOptional()
  @IsPositive()
  @ApiProperty({
    description: 'Offset',
    type: Number,
  })
  offset: number;
}
