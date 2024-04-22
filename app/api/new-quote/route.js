import { connectToDB } from "@/app/utils/connectDB";
import Quote from "@/models/quote";

export const  POST = async (request, response) => {
  const {quote, author, source, creator, uuid, likes} = await request.json();
  try {
    await connectToDB();
    const quoteInstance = new Quote({
      quote: quote,
      author: author,
      source: source,
      creator: creator,
      identifier: uuid,
      likes: likes,
    });
    await quoteInstance.save();
    return new Response(JSON.stringify(quoteInstance), {Status: 201});
  }
  catch (err) {
    return new Response("Failed to create a quote", {Status: 500});
  }
}
