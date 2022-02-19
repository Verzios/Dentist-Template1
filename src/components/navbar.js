import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneSideBar from './phoneSideBar';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [left, setLeft] = useState(false);
	console.log(open);
	return (
		<nav
			className="flex justify-between items-center h-32 bg-transparent text-white relative shadow-sm font-mono text-base"
			role="navigation"
		>
			<img
				src="assets/logo.png"
				className="pl-10"
				alt="logo"
				width="282px"
				height="65px"
			/>
			{left ? <PhoneSideBar open={left} setLeft={setLeft} /> : ''}
			<div className="px-4 cursor-pointer lg:hidden ">
				<svg
					className="w-24 h-10"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => setLeft(!left)}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6H16M4 12H16M4 18H16"
					/>
				</svg>
			</div>

			<div className="pr-8 lg:block hidden">
				<Link className="p-4" to="/" href="/">
					Home
				</Link>
				<Link className="p-4" to="/" href="/">
					About
				</Link>
				<Link className="p-4" to="/" href="/">
					Services
				</Link>
				<Link className="p-4" to="/" href="/">
					Contact
				</Link>
			</div>
		</nav>
	);
}
