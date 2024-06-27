import { type NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

// Correct database environment variable name
const DATABASE = process.env.DATABASE;

export const GET = async (req: NextRequest) => {
  const client = await clientPromise;
  const db = client.db(DATABASE);

  const assets = await db.collection("assets").find({}).toArray();
  return NextResponse.json({ status: 200, data: assets });
};

export const POST = async (req: NextRequest) => {
  const client = await clientPromise;
  const db = client.db(DATABASE);

  const bodyObject = await req.json(); // Parse the request body
  const result = await db.collection("assets").insertOne(bodyObject);
  const insertedAsset = await db
    .collection("assets")
    .findOne({ _id: result.insertedId });

  return NextResponse.json(insertedAsset);
};
