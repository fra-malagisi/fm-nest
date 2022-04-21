import { CreateMovieDto } from 'src/modules/movie/dto';
import { Movie } from 'src/modules/movie/movie.schema';

const movieConverter = (movieDto: CreateMovieDto): Movie => ({
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

export default movieConverter;
