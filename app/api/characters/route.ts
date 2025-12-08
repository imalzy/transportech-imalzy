import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page") || "1";
    const name = searchParams.get("name") || "";
    const status = searchParams.get("status") || "";

    const query = new URLSearchParams({
      ...(page && { page }),
      ...(name && { name }),
      ...(status && { status }),
    }).toString();

    const res = await fetch(`${BASE_URL}/character/?${query}`);
    const data = await res.json();

    return NextResponse.json(
      {
        success: true,
        message: "Characters fetched successfully",
        data: data.results,
        meta: data.info,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /character error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}
