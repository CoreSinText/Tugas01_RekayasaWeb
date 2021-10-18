// berfungsi untuk menggunakan image di gatsby
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from './components/Layout';

// Berfungsi Untuk function ini dapat digunakan di file lain
export default function Skill() {
	return (
		// mengimport layout components
		<Layout>
			<main className="flex flex-col justify-evenly min-h-screen z-10">
				 
				<div className="text-3xl font-bold text-center">Skill Yang Mungkin Saya Kuasai</div>
				{/* Pada Bagian Ini Saya Akan Membuat Card Style Pada Menu Skiil */}
				<div className="flex flex-wrap justify-evenly">
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/html.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">HTML</div>
					</div>
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/css.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">CSS</div>
					</div>
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/js.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">JavaScript</div>
					</div>
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/react.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">React</div>
					</div>
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/tailwind.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">Tailwind</div>
					</div>
					<div className="flex flex-col items-center justify-evenly border-px bg-blue-700 border-gray-900 p-2 rounded-lg shadow-inner text-white m-2">
						<StaticImage src="../images/gatsby.png" className="h-auto w-36" />
						<div className="text-lg font-semibold">Gatsby</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
