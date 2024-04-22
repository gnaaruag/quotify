"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export default function Page() {
  const [quoteData, setQuoteData] = useState({
    quote: "",
    author: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { user } = useUser();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would submit quoteData to your API
    if (quoteData.quote == "" || quoteData.author == "") {
      toast.error("Post cannot be empty");
    } else {
      try {
        const uuid = uuidv4();
        console.log('ppe',uuid)
        const response = await fetch("/api/new-quote", {
          method: "POST",
          body: JSON.stringify({
            quote: quoteData.quote,
            author: quoteData.author,
            source: quoteData.source,
            creator: user.emailAddresses[0].emailAddress,
            identifier: uuid,
            likes: 0
          }),
        });

        if (response.ok) {
          toast.success("Quote Posted Successfully");
          console.log(response)
        }
      } catch (err) {
        console.log(err);
      } finally {
        setQuoteData({
          quote: "",
          author: "",
          source: "",
        });
      }
    }
  };

  const handleCancel = () => {
    setQuoteData({
      quote: "",
      author: "",
      source: "",
    });
  };

  return (
    <div className="flex flex-col justify-content items-center mt-4 mx-auto h-[32rem]">
      <h3 className="text-2xl font-bold">Submit a new Quote</h3>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8">
        <div className="mb-4">
          <label
            htmlFor="quote"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Quote:
          </label>
          <textarea
            id="quote"
            name="quote"
            value={quoteData.quote}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author:
          </label>
          <input
            id="author"
            name="author"
            type="text"
            value={quoteData.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Source:
          </label>
          <input
            id="source"
            name="source"
            type="text"
            value={quoteData.source}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
