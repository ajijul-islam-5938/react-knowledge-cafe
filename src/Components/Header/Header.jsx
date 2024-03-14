import React from 'react'
import Profile from "../../assets/images/profile.png"
const Header = () => {
  return (
		<header className="max-w-[1440px] mx-auto">
			<nav className="w-[90%] mx-auto flex justify-between items-center border-b-2 py-5">
				<h1 className="text-2xl">Knowledge Cafe</h1>
				<img className="w-12" src={Profile} />
			</nav>
		</header>
  )
}

export default Header