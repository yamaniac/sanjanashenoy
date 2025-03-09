import React from 'react';
import Link from 'next/link';

const VideoCard = ({ video }) => {
  const { id, title, description, youtubeId, category, date, articleLink, type } = video;
  const isShort = type === "short";
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`relative ${isShort ? 'pb-[177.78%] max-w-[320px] mx-auto' : 'pb-[56.25%]'} h-0`}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary-100 text-primary-800 rounded-full">
            {category}
          </span>
          {/* <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span> */}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        {articleLink && (
          <Link 
            href={articleLink} 
            className="inline-block text-primary-600 hover:text-primary-800 font-medium"
          >
            Read related article →
          </Link>
        )}
      </div>
    </div>
  );
};

export default VideoCard; 