// src/app/api/youtube/analyze/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { videoId } = await req.json();

    // Mock response data for analyzed YouTube video.
    const mockClipData = {
        videoId: videoId,
        title: "Mock Video Title",
        description: "This is a mock description for the video.",
        clips: [
            {
                start: 0,
                end: 30,
                title: "Intro Clip",
                description: "This is a mock intro clip."
            },
            {
                start: 31,
                end: 60,
                title: "Main Content Clip",
                description: "This is a mock main content clip."
            }
        ]
    };

    return NextResponse.json(mockClipData);
}