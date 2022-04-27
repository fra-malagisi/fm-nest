import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/pagination-query.dto';
import { movieConverterFE } from 'src/utils/converters/movie-converter';
import { MovieDto } from './dto';
import { MoviePaginationDto } from './dto/movie.dto';
import { MoviesService } from './movies.service';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: MovieDto,
    isArray: true,
    description: 'Return All Movies',
  })
  async getMovies(@Res() res): Promise<MovieDto[]> {
    const movies = await this.moviesService.findAll();
    return res
      .status(HttpStatus.OK)
      .json(movies.map((movie) => movieConverterFE(movie)));
  }

  @Get('/pagination')
  @ApiResponse({
    status: 200,
    type: MoviePaginationDto,
    description: 'Return All Movies with pagination',
  })
  public async getMoviesWithPagination(
    @Res() res,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    const data = await this.moviesService.findAllWithPagination(
      paginationQuery,
    );
    return res.status(HttpStatus.OK).json({
      movies: data.movies.map((movie) => movieConverterFE(movie)),
      total: data.total,
    });
  }
}
