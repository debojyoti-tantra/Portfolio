'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useUser, useAuth } from '@clerk/nextjs'
import { toast } from 'sonner'

const VsCodeAndroidComments = () => {
    const { user } = useUser()
    const { getToken } = useAuth()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                toast.error("Please Sign In to Comment");
                return;
            }

            const token = await getToken()

            const { data } = await axios.post(`/api/blog/vsCodeAndroid`, {
                comment: comment
                // })
            }, { headers: { Authorization: `Bearer ${token}` } })

            if (data.success) {
                toast.success(data.message);
                setComment("");
            }

        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "An error occurred")
        }
    }

    const fetchComments = async () => {
        try {
            const { data } = await axios.get(`/api/blog/vsCodeAndroid`);
            setComments(data.comments);
        } catch (error) {
            console.error('Error to fetch comments', error);
        }
    }

    useEffect(() => {
      fetchComments();
    }, [])
    

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold underline">Leave a Comment</h2>
            <form onSubmit={handleCommentSubmit} className="mt-4">
                <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-200"
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="mt-4 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 font-medium"
                >
                    Submit Comment
                </button>
            </form>

            {/* Display Comments */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Comments</h3>
                <ul className="mt-4 space-y-4">
                    {comments.length === 0 ? (
                        <p className="text-gray-600 dark:text-gray-300">No comments yet. Be the first to comment!</p>
                    ) : (
                        comments.map((item, index) => (
                            <li key={index} className="p-4 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-slate-800 dark:text-gray-200">
                                <div className="flex flex-col gap-2">
                                    {/* User Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 border border-black dark:border-white rounded-full overflow-hidden">
                                            <img
                                                src={item.user?.imageUrl || "/default-avatar.png"} // Assuming `Image` is imported from 'next/image'
                                                alt={item.user?._id}
                                                width={32}
                                                height={32}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-gray-100">
                                                {item.user?.fullName}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {new Date(item.date || item.createdAt).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment Text */}
                                    <p className="text-gray-800 dark:text-gray-300">{item.comment}</p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VsCodeAndroidComments