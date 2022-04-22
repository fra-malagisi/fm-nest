import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { movieConverterFE } from 'src/utils/converters/movie-converter';
import { MovieModel } from './dto';
import { MoviesService } from './movies.service';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: MovieModel,
    isArray: true,
    description: 'Return All Movies',
  })
  async getMovies(@Res() res): Promise<MovieModel[]> {
    const movies = await this.moviesService.findAll();
    return res
      .status(HttpStatus.OK)
      .json(movies.map((movie) => movieConverterFE(movie)));
  }
}
