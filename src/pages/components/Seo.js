import React from 'react';
// brfungsin untuk kita dapat mengatur body ataupun meta tag
import { Helmet } from 'react-helmet';

export default function Seo() {
	return (
		<Helmet>
			{/* memberikan tittle */}
			<title>Hanaya Tugas</title>

			{/* meletakkan link font google */}

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
			{/* mengatur warna body ketika ada class ligh atau dark */}
			<body className="bg-gray-300 dark:bg-gray-800 dark:text-white" />
		</Helmet>
	);
}
