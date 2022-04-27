import { ApiProperty } from '@nestjs/swagger';

export enum MovieCertificatesEnum {
  U = 'U',
  A = 'A',
  UA = 'UA',
  S = 'S',
}

export class MovieDto {
  @ApiProperty({
    description: 'DB id for movie',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: "Source path for the movie's image",
    type: String,
  })
  imgSrc: string;

  @ApiProperty({
    description: 'Title',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Relesed year',
    type: Number,
  })
  releasedYear: number;

  @ApiProperty({
    enum: MovieCertificatesEnum,
    enumName: 'Certificate',
  })
  certificate: MovieCertificatesEnum;

  @ApiProperty({
    description: 'Duration',
    type: Number,
  })
  runtime: number;

  @ApiProperty({
    description: 'Genre',
    type: String,
  })
  genre: string;

  @ApiProperty({
    description: 'IMDB Rating',
    type: Number,
  })
  imdbRating: number;

  @ApiProperty({
    description: 'Overview',
    type: String,
  })
  overview: string;

  @ApiProperty({
    description: 'Score on metacritic',
    type: Number,
  })
  metaScore: number;

  @ApiProperty({
    description: 'Name of director',
    type: String,
  })
  director: string;

  @ApiProperty({
    description: 'Star 1',
    type: String,
  })
  star1: string;

  @ApiProperty({
    description: 'Star 2',
    type: String,
  })
  star2: string;

  @ApiProperty({
    description: 'Star 3',
    type: String,
  })
  star3: string;

  @ApiProperty({
    description: 'Star 4',
    type: String,
  })
  star4: string;

  @ApiProperty({
    description: 'Number of votes',
    type: String,
  })
  noOfVotes: number;

  @ApiProperty({
    description: 'Gross',
    type: String,
  })
  gross: string;
}

export class MoviePaginationDto {
  @ApiProperty({
    description: 'Movie List',
    type: [MovieDto],
  })
  movies: MovieDto[];

  @ApiProperty({
    description: 'Total movies',
    type: Number,
  })
  total: number;
}
