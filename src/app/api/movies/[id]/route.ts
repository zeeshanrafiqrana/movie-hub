import { NextResponse } from "next/server";
import Movie, { MovieDocument } from "../../../../../models/movie";
import connectMongoDB from "../../../../../libs/mongodb";

interface RequestBody {
  newTitle: string;
  newPublishYear: string; 
  newImageUrl: string;
}

export async function PUT(request: { json: () => Promise<RequestBody> }, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newPublishYear: publishYear, newImageUrl: imageUrl } = await request.json();
  await connectMongoDB();
  await Movie.findByIdAndUpdate(id, { title, publishYear, imageUrl });
  return NextResponse.json({ message: "Movie updated" }, { status: 200 });
}

export async function GET(_: unknown, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectMongoDB();
  const movie: MovieDocument | null = await Movie.findOne({ _id: id });
  
  if (!movie) {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 });
  }

  return NextResponse.json({ movie }, { status: 200 });
}
