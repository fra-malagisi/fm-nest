import { MovieDto } from 'src/modules/movie/dto';
import { Movie } from 'src/modules/movie/movie.schema';

export const movieConverterDB = (movieDto: MovieDto): Movie => ({
  Poster_Link: movieDto.imgSrc,
  Series_Title: movieDto.title,
  Released_Year: movieDto.releasedYear,
  Certificate: movieDto.certificate,
  Runtime: movieDto.runtime,
  Genre: movieDto.genre,
  IMDB_Rating: movieDto.imdbRating,
  Overview: movieDto.overview,
  Meta_score: movieDto.metaScore,
  Director: movieDto.director,
  Star1: movieDto.star1,
  Star2: movieDto.star2,
  Star3: movieDto.star3,
  Star4: movieDto.star4,
  No_of_Votes: movieDto.noOfVotes,
  Gross: movieDto.gross,
});

export const movieConverterFE = (movieBe: Movie): MovieDto => ({
  id: movieBe['_id'],
  imgSrc: movieBe['Poster_Link'],
  title: movieBe['Series_Title'],
  releasedYear: movieBe['Released_Year'],
  certificate: movieBe.Certificate,
  runtime: movieBe.Runtime,
  genre: movieBe.Genre,
  imdbRating: movieBe['IMDB_Rating'],
  overview: movieBe.Overview,
  metaScore: movieBe['Meta_score'],
  director: movieBe.Director,
  star1: movieBe.Star1,
  star2: movieBe.Star2,
  star3: movieBe.Star3,
  star4: movieBe.Star4,
  noOfVotes: movieBe['No_of_Votes'],
  gross: movieBe.Gross,
});
