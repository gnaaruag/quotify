import Link from "next/link";
import Image from "next/image";
import Logo from "../public/quotify.png"



export default function Home() {
  return (
    <div className='flex flex-col h-[32rem] justify-center items-center mb-0'>
      <Image 
      src={Logo}
      alt="Logo"
      height={100}
      width={300}/>
      <p className='text-center pt-2'>Quotify lets you share your favorite quotes with a larger audience</p>
      <div className="flex gap-4 mt-2">
      <Link href="/signup" className='underline'>Create an account</Link>
      <Link href="/explore" className='underline'>Explore</Link>
      </div>
    </div>
  );
}
