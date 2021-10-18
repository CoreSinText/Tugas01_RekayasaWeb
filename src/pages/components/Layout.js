// mengimpor components yang dibutuhkan
import React from 'react';
import Navbar from './Navbar';
import Seo from './Seo';
// pada bagian ini dapat dibilang induk dari semua components yang ada
export default function Layout({ children }) {
	return (
		<div>
			<Seo />
			<Navbar />
			<main className="max-w-7xl mx-auto my-20 font-poppins">{children}</main>
		</div>
	);
}
