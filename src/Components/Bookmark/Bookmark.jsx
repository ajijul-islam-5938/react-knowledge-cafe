import React from 'react'

const Bookmark = ({blog}) => {
  return (
    <div className="bg-white p-3 rounded-xl my-3">
   	{blog.title}
    </div>
  )
}

export default Bookmark