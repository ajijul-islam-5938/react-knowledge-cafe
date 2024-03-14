import Bookmark from"../Bookmark/Bookmark"
const Bookmarks = ({blogs,readTime}) => {
  return (
  	<div className="md:col-span-1 space-y-5">
    <div className=" bg-gray-200 p-3 rounded-xl text-2xl text-blue-500">
   	Spent time on read : {readTime} min
    </div>
    <div className="bg-gray-200 p-3 rounded-xl">
   		<h1 className="text-2xl">Bookmarks : {blogs.length}</h1>
   			{
   				blogs.map((blog,idx) => <Bookmark key={idx} blog={blog}/>)
   			}
   	</div>
    </div>
  )
}

export default Bookmarks