import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MovieCertificatesEnum } from './dto';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  Poster_Link: string;

  @Prop({ required: [true, "Please provide the film's name"], unique: true })
  Series_Title: string;

  @Prop({ required: [true, 'Please provide a release year'] })
  Released_Year: number;

  @Prop({ maxlength: [1, 'Certificate cannot be more than 1 character'] })
  Certificate: MovieCertificatesEnum;

  @Prop()
  Runtime: number;

  @Prop()
  Genre: string;

  @Prop()
  IMDB_Rating: number;

  @Prop()
  Overview: string;

  @Prop()
  Meta_score: number;

  @Prop()
  Director: string;

  @Prop()
  Star1: string;

  @Prop()
  Star2: string;

  @Prop()
  Star3: string;

  @Prop()
  Star4: string;

  @Prop()
  No_of_Votes: number;

  @Prop()
  Gross: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
