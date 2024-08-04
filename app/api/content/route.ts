import { getContentData } from "@/lib/operations";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    var content = await getContentData();
    return NextResponse.json({
      result: content,
      results: [],
      success: true,
    });
  } catch (ex) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
