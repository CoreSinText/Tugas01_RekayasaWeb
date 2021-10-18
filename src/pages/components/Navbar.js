import React, { useState } from 'react';

// ini saya gunakan mengimport icon yang ada pada react icon
import { BiUser } from '@react-icons/all-files/bi/BiUser';
import { FaRegKeyboard } from '@react-icons/all-files/fa/FaRegKeyboard';
import { BsSun } from '@react-icons/all-files/bs/BsSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import { Link } from 'gatsby';

export default function Navbar() {
	// Handle OnClick
	const [ active, setActive ] = useState(false);
	const Tekan = (value) => {
		// membuat handle atau pengatur pada toogle
		setActive(!active);

		// DarkMode pengaturan darkmode
		localStorage.setItem('theme', value);
		document.querySelector('html').classList.add(localStorage.getItem('theme'));
		if (value === 'dark') {
			document.querySelector('html').classList.remove('light');
		} else {
			document.querySelector('html').classList.remove('dark');
		}
	};
	return (
		<div className="max-w-7xl mx-auto z-50 fixed top-0 w-screen">
			<div className="flex justify-between items-center bg-blue-700 py-4">
				<div className="text-xl text-white mx-4 font-poppins font-extrabold">Razak</div>
				<ul className="flex justify-evenly items-center text-white fixed bottom-0 bg-blue-700 w-screen py-2 md:static md:py-0 md:justify-end">
					<li>
						<Link to="/" className="flex flex-col items-center md:px-4">
							<div>
								<BiUser className="h-6 w-auto md:hidden" />
							</div>
							<div>Perkenalan</div>
						</Link>
					</li>
					<li>
						<Link to="/Skill" className="flex flex-col items-center md:px-4">
							<div>
								<FaRegKeyboard className="h-6 w-auto md:hidden" />
							</div>
							<div>Skill</div>
						</Link>
					</li>
					<li className="md:px-4">
						{/* mengatur kondisi toogle pada saat di klik */}
						<button
							onClick={() => Tekan('dark')}
							className={active ? 'hidden' : 'flex flex-col items-center'}
						>
							<BsSun className="h-6 w-auto" />
							<div className="md:hidden">Terang</div>
						</button>
						<button
							onClick={() => Tekan('light')}
							className={active ? 'flex flex-col items-center' : 'hidden'}
						>
							<BsMoon className="h-6 w-auto" />
							<div className="md:hidden">Gelap</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
