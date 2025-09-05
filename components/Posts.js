'use client';

import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newContent, setNewContent] = useState('');
    const [replyTo, setReplyTo] = useState(null);

    const fetchPosts = async () => {
        setLoading(true)
        const res = await fetch('/api/posts')
        const data = await res.json()
        setPosts(data)
        setLoading(false)
    }

    const handleSubmit = async () => {
        if (!newContent.trim()) return
        
        await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ content: newContent, parent_id: replyTo }),
        })

        setNewContent('')
        setReplyTo(null)
        fetchPosts()
    }

    const handleDelete = async (id) => {
        const res = await fetch('/api/posts', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error(data.error);
            return;
        }

        fetchPosts()
    };

    useEffect(() => {
        fetchPosts()
    }, [])

    const topLevelPosts = posts.filter(p => p.parent_id===null)
    const repliesByParent = posts.reduce((acc, post) => {
        if (post.parent_id) {
            acc[post.parent_id] = acc[post.parent_id] || []
            acc[post.parent_id].push(post)
        }
        return acc
    }, {})

    return (
        <div className="grid grid-cols-2">
            <div className="col-start-1 mr-12">
                <h3 className="font-bold text-xl">
                    {replyTo ? 'Replying to Post' : 'Create New Post'}
                </h3>
                <textarea
                    className="w-full border rounded p-2 mt-2 bg-white"
                    rows="3"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                    <button
                        className="bg-[#89dff0] px-2 py-1 border-1 border-solid border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:underline"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    {replyTo && (
                        <button
                            className="text-gray-500 underline"
                            onClick={() => setReplyTo(null)}
                        >
                            Cancel Reply
                        </button>
                    )}
                </div>
            </div>
            <div className="col-start-2 ml-12">
                <h2 className="text-xl font-bold mb-4">Posts</h2>
                {loading && <p>Loading...</p>}
                {!loading && topLevelPosts.map(post => (
                    <div key={post.id} className="mb-4 border p-4 rounded bg-white">
                        <p>{post.content}</p>
                        <button
                            className="bg-[#89dff0] px-2 py-1 border-1 border-solid border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:underline mt-2"
                            onClick={() => setReplyTo(post.id)}
                        >
                            Reply
                        </button>
                        <button
                            className="bg-[#89dff0] px-2 py-1 border-1 border-solid border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:underline mt-2"
                            onClick={() => handleDelete(post.id)}
                        >
                            Delete
                        </button>
                        {repliesByParent[post.id]?.map(reply => (
                            <div key={reply.id} className="ml-4 mt-2 p-2 border-1 bg-gray-200">
                                <p>{reply.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}