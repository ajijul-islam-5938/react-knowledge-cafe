import {useEffect,useState} from "react";
import Blog from"../../Components/Blog/Blog"
const Blogs = ({handleBookmark,handleMarkAsRead}) => {
  const [blogs,setBlogs] = useState([]);
  
  useEffect(()=>{
  	fetch("blogs.json")
  	.then(res => res.json())
  	.then(data => setBlogs(data));
  },[]);
  return (
	 <div className="md:col-span-2">
   	{
   		blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}/>)
   	}
	 </div>
  )
}

export default Blogs