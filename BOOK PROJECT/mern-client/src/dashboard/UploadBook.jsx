import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput,Textarea} from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistory",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horrer",
    "Bibliography",
    "AutobioGraphy",
    "History",
    "Self-Help",
    "Meoir",
    "Business",
    "children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory,setelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectValue = (event) =>{
    console.log(event.target.value);
    setelectedBookCategory(event.target.value);
  }
  // handle book submission
   const handleBookSubmit = (event) =>{
   event.preventDefault();
   const form = event.target;

   const bookTitle = form.bookTitle.value;
   const authorName = form.authorName.value;
   const imageURL = form.imageURL.value;
   const category = form.categoryName.value;
   const bookDescription = form.bookDescription.value;
   const bookPdfURL = form.bookPdfURL.value;
   const bookObj ={
    bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
   }

   console.log(bookObj)
  //  send to a data base
   fetch("http://localhost:5000/upload.book",{
    method:"POST",
    headers:{
    "content-type":"application/json"
   },
   body:JSON.stringify(bookObj)
   }).then(res => res.json()).then(data =>{

   alert("Book uploaded succesfully")
   form.reset();
   })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first Row */}
    <div className='flex gap-8'>
      {/* Book Name */}
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required /> 
      </div>
      {/* author Name */}
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
    </div>

    {/* second Row */}
    <div className='flex gap-8'>
      {/* image url */}
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
      </div>

      {/* catagory */}
    <div className='lg:w-1/2'>
    <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id="inputState" name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectValue}>
          {
            bookCategories.map((option) => <option key={option}>{option}</option>)
          }
        </select>     
      </div>
    </div>
      {/* book description */}
      <div>
        
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="BookDescription"name="bookDescription" type="text" placeholder=" Write your Book Description" required rows={5}
        className='w-full' />
    
      </div>
      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfURL" name='bookPdfURL'ype="text" placeholder="Book Pdf URL" required />
      </div>
      <Button type="submit" className='mt-5'>
        Upload Book
        </Button>
    </form>

    </div>
  )
}

export default UploadBook
