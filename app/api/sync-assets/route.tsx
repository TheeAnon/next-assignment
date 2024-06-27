import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export const POST = async (req: NextRequest) => {
  console.log("Starting sync...");
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE);

    const collection = db.collection("assets");
    await collection.deleteMany({}); // Clear existing data
    console.log("All assets cleared, adding now...");

    // Parse the request body as JSON
    const body = await req.json();

    // Insert new assets
    const result = await collection.insertMany(body);
    console.log(`${result.insertedCount} assets synced successfully`);

    return NextResponse.json({
      message: `${result.insertedCount} assets synced successfully`,
    });
  } catch (error) {
    console.error("Error syncing assets data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
