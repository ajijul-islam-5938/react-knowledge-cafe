import { useState } from 'react'
import Header from"./Components/Header/Header"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"

function App() {
  const [blogs,setBlogs] = useState([]);
  const [readTime,setReadTime] = useState(0);
  
  const handleBookmark = (blog,e)=>{
		setBlogs([...blogs,blog]);
  		e.target.classList.add("text-red-500");
  }
  
  const handleMarkAsRead = (reading_time,id)=>{
		setReadTime(readTime + reading_time);
  		const remainingBookmark = blogs.filter(blog => blog.id !== id);
  		//alert(remainingBookmark)
  		setBlogs(remainingBookmark)
  }
  
  return (
    <>
   	<Header/>
   	<main className="max-w-[1440px] mx-auto">
   		<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
   			<Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}/>
   			<Bookmarks blogs={blogs} readTime={readTime} />
   		</div>
   	</main>
    </>
  )
}

export default App;
