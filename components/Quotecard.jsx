"use client"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

import React, { useState } from "react";

const Quotecard = ({ quote, author, source, identifier }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const updateLike = () => {
    setLike(!like);
  }

  const updateBookmark = () => {
    setBookmark(!bookmark)
  }
  return (
    <div className=" border-2 border-gray-200 p-4 rounded-lg ">
      <p className="flex justify-center">
        <span className="text-6xl">{"“"}</span>
        <span className="text-lg"><p className="break-words">{quote.trim() + "”"}</p></span>
      </p>
      <div className="flex flex-col items-end">
        <div className="flex flex-col items-end">
          <p>—{author}</p>
          <p>{source}</p>
        </div>
      </div>
      <div className="flex p-4">
        {(like) ? (<FaHeart color="#ff3040" size={30} onClick={updateLike}/>) : (<CiHeart size={30} onClick={updateLike}/>)}
        {(bookmark) ? (<FaBookmark size={30} onClick={updateBookmark}/>) : (<CiBookmark size={30} onClick={updateBookmark}/>)}
      
      
      



      </div>
    </div>
  );
};

export default Quotecard;
