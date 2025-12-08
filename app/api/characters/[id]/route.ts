import { NextRequest, NextResponse } from "next/server";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${BASE_URL}/character/${id}`);

        if (!res.ok) {
            return NextResponse.json(
                { success: true, message: "Character not found", data: null },
                { status: 200 })
        }

        const data = await res.json();

        return NextResponse.json(
            {
                success: true,
                message: "Character found",
                data: data,
                meta: null,
            }, { status: 200 });
    } catch (error) {
        console.error("GET /character/:id error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch character detail" },
            { status: 500 }
        );
    }
}