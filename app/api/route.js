import { connectDb } from "../utils/mongoose";
import UserSchema from "../models/directory";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  await connectDb();
  const data = await UserSchema.find();
  console.log(data);
  return NextResponse.json( data );
}



export async function POST(req) {
  const { name, username, descripcion, image, proyects, skills, icons, bange } =
    await req.json();
  console.log(req);
  await connectDb();
  await UserSchema.create({
    name,
    username,
    descripcion,
    image,
    proyects,
    skills,
    icons,
    bange,
  })
    .then((r) => console.log(r))
    .catch((err) => console.log("rrrre"+err));
}
