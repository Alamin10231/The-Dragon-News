import React from 'react';
import { FaStar, FaCalendarAlt, FaEye } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {
  const {  title, image_url, details, author, rating, total_view } = data;

  return (
    <div className=" card  p-4 m-4   h-[400px] bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
      {/* Image Section */}
      <figure>
        <img
          src={image_url || "https://placehold.co/600x400"} // Fallback image if image_url is not available
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="pt-4">
        {/* Title */}
        <h2 className=" text-lg">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          <span>By {author?.name || "Unknown Author"}</span> {/* Safely access author.name */}
        </p>

        {/* Details */}
        {/* <p className="text-gray-700">{details || "No description available."}</p> */}

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{rating?.number || "N/A"}</span> {/* Safely access rating.number */}
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <FaEye className="text-gray-400" />
            <span>{total_view || "N/A"} views</span>
          </div>
        </div>

        {/* Read More Button */}
        <div className="card-actions  justify-end mt-4">
          <Link to={`/news/${data._id}`}><button className="btn btn-primary text-md">Read More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;