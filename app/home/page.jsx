/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Quotecard from "@/components/Quotecard";
import Masonry from "react-masonry-css";

export default function Page() {
  const [quotes, setQuotes] = useState([]);
  const { user } = useUser();

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await fetch("/api/get-quotes/for-home", {
            method: "POST",
            body: JSON.stringify({
              creator: user.emailAddresses[0].emailAddress,
            }),
          });
          if (!response.ok) {
            throw new Error("Failed to fetch quotes");
          }
          const data = await response.json();
          setQuotes(data);
        } else {
          console.log("User not found");
          // Handle the case where user is null
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    if (user) {
      fetchData();
    } else {
      console.log("non");
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-content items-center mt-4 mx-auto h-[32rem] w-3/4">
      <div className="flex flex-col justify-content items-center mt-4 mx-auto h-[32rem]">
        <h3 className="text-2xl font-bold">Your Posts</h3>
        <div className="mt-4 mx-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {quotes.map((quote, index) => (
              <div key={index}>
                <Quotecard
                  quote={quote.quote}
                  author={quote.author}
                  source={quote.source}
                  identifier={quote.identifier}
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}
