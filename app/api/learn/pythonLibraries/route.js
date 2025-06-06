import connectDB from "@/config/db";
import PythonLibrariesComment from "@/models/pythonLibrariesCommentModel";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        if (!userId) {
            return NextResponse.json({ success: false, message: "user not authenticated" }, { status: 401 });
        }

        const { comment } = await request.json();

        await connectDB();

        const user = await User.findOne({ clerkId: userId })
        if (!user) {
            return NextResponse.json({ success: false, message: "user not found" }, { status: 404 })
        }

        const commentData = {
            user: user._id,
            comment
        }

        await PythonLibrariesComment.create(commentData);

        return NextResponse.json({ success: true, message: "Comment added successfully" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}


export async function GET(request) {
    try {
        await connectDB();
        
        const comments = await PythonLibrariesComment.find().sort({ createdAt: -1 }).populate("user");

        return NextResponse.json({ comments })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}