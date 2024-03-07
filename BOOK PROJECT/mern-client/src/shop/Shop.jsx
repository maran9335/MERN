import React, {  useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books,setbooks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json ()).then(data=> setbooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Boooks are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-sm-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>  <Card
        
          >
            <img src={book.imageURL} alt="" className='h-80' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             {book.bookDescription}
            </p>
            <button className='bg-blue-700 text-white font-extrabold py-2 rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
