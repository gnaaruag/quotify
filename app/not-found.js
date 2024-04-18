import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col h-[32rem] justify-center items-center mb-0'>
      <h1 className='text-4xl'>404.</h1>
      <p className='text-center'>The Page you requested does not exist or has been moved permanently</p>
      <Link href="/" className='underline'>Return to home</Link>
    </div>
  )
}