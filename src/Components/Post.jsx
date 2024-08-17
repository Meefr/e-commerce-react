import React from 'react'
import AnimatedPage from './AnimatedPage/AnimatedPage';

function Post({post}) {
  return (
    <AnimatedPage>
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 mb-6">{post.body}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            <p>{tag}</p>
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <span className="flex items-center text-gray-500">
            <i class="fa-solid fa-eye mr-1 text-blue-500"></i>

            {post.views}
          </span>
          <span className="flex items-center text-gray-500">
            <i class="fa-solid fa-thumbs-up second-color mr-1"></i>
            {post.reactions.likes}
          </span>
          <span className="flex items-center text-gray-500">
            <i class="fa-solid fa-thumbs-down mr-1"></i>
            {post.reactions.dislikes}
          </span>
        </div>
      </div>
    </div>
    </AnimatedPage>
    
  );
}

export default Post