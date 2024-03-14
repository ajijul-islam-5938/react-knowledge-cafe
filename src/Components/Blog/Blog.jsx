import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
  return (
    <div className="space-y-5 mb-2">
   	<img className="rounded-xl" src={blog.cover}/>
   	<div className="flex justify-between items-center">
   		<div className="flex items-center gap-3">
   			<img className="w-10" src={blog.author_img} alt="" />
   			<div className="">
   				<h2 classaName="text-2xl">{blog.author}</h2>
   				<p>{blog.posted_date}</p>
   			</div>
   		</div>
   		<div className="">
   			<div className="flex items-center gap-3">
   				<p>{blog.reading_time} min read</p>
   				<div onClick={(e)=> handleBookmark(blog,e)} className="text-2xl">
   					<CiBookmark  />
   				</div>
   			</div>
   		</div>
   	</div>
   	<h1 className="text-3xl">{blog.title}</h1>
   	<div className="flex items-center gap-3">
   		{
   			blog.hashtags.map((tag,idx) => <p key={idx} className="underline">#{tag}</p>)
   		}
   	</div>
   	<button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)}><a className="text-blue-500 underline">Mark as read</a></button>
   	<hr/>
    </div>
  )
}

export default Blog