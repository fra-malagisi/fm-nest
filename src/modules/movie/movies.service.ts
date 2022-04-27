import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from 'src/modules/movie/movie.schema';
import { MovieDto } from './dto';
import { movieConverterDB } from 'src/utils/converters/movie-converter';
import { PaginationQueryDto } from 'src/common/pagination-query.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: MovieDto): Promise<Movie> {
    const createdCat = new this.movieModel(movieConverterDB(createMovieDto));
    return createdCat.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findAllWithPagination(
    paginationQuery: PaginationQueryDto,
  ): Promise<{ movies: Movie[]; total: number }> {
    const { limit, offset } = paginationQuery;
    const movies = await this.movieModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
    const total = await this.movieModel.count().exec();
    return { movies, total };
  }
}
