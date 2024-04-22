import { connectToDB } from "@/app/utils/connectDB";
import Quote from "@/models/quote";

export const  POST = async (request, response) => {
  const {creator} = await request.json();
  try {
    await connectToDB();
    console.log(creator);
    const quoteInstance = await Quote.find({creator: creator});
    return new Response(JSON.stringify(quoteInstance), {status: 200});
  }
  catch (err) {
    return new Response("Failed to create a quote", {status: 500});
  }
}