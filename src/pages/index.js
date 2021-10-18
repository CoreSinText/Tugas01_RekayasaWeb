// digunakan untuk memuat gambar di gatsby
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from './components/Layout';

export default function index() {
	
	return (
		<Layout>
			<main className="flex justify-center items-center flex-col min-h-screen">
				<div>
					{/* pada bagian ini saya akan memasukkan gambar profile */}
					<StaticImage src="../images/profil.png" className="h-auto w-32" />
				</div>
				<div>
					{/* pada bagian ini saya membuat sedikit deskripsi mengenai diri saya */}
					<div className="text-2xl text-center font-bold">
						Hai Kenalkan Saya <nama className="text-blue-800 dark:text-blue-400">RAZAK</nama> Apakah Kamu
						Mau Mendengar Curhatan Saya
					</div>
					<div className="text-center font-semibold">
						Saya Mahasiswa Dari Universitas Teknologi Yogyakarta,Sudah 3 Tahun Lamanya Saya Berkuliah
						Disana, Saya Begitu Tertarik Dengan Dunia Web Development, Setiap Hari Saya Menghayal Menjadi
						Programmer Yang Handal
					</div>
				</div>
			</main>
		</Layout>
	);
}
