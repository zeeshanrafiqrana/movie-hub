
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Movie, { MovieDocument } from "../../../../models/movie";



interface RequestBody {
    title: string;
    publishYear: string;
    imageUrl: string;
  }
  
  export async function POST(request: { json: () => Promise<RequestBody> }) {
    debugger
    const { title, publishYear, imageUrl } = await request.json();
    await connectMongoDB();
    await Movie.create({ title, publishYear, imageUrl });
    return NextResponse.json({ message: "Movie Created" }, { status: 201 });
  }

  export async function GET() {
    await connectMongoDB();
    const movies: MovieDocument[] = await Movie.find();
    return NextResponse.json({ movies });
  }




