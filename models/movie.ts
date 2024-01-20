// models/Movie.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface MovieDocument extends Document {
  title: string;
  publishYear: string;
  imageUrl: string;
}

const movieSchema = new Schema<MovieDocument>({
  title: { type: String, required: true },
  publishYear: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Movie = mongoose.model<MovieDocument>('Movie', movieSchema);

export default Movie;
