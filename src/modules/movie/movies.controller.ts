import { Controller, Get } from '@nestjs/common';
import { Movie } from './movie.schema';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }
}
