"use client"
import { useEffect } from 'react' 
export default function Error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong</h1>
      <p>error page</p>
      <button className='hover:text-blue-500' onClick={() => reset()}>Try again</button>
    </div>
  )
}
