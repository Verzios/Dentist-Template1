import React from 'react';
import {
	FaPlane,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaInstagram,
	FaGoogle,
	FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Footer() {
	return (
		<div
			className="grid lg:grid-cols-3  lg:h-[500px] h-[1300px] lg:px-96 px-32 gap-4"
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(assets/toronto-dentist-holistic-dentistry.jpg)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundAttachment: 'fixed',
			}}
		>
			<div
				style={{
					textAlign: 'center',
					marginTop: 46,
					marginLeft: 'auto',
					marginRight: 'auto',
					color: 'white',
					fontSize: 32,
					maxWidth: '300px',
				}}
			>
				Logo
				<p style={{ fontSize: 16, marginTop: 24 }}>
					Etiam sutor risus, dapibus act elefend katen, lacinia
					sitamet denim. Mauris sagittis kansa interdum dignissim.
				</p>
				<div
					className=" "
					style={{
						display: 'flex',
						marginTop: 12,
						fontWeight: 600,
						position: 'relative',
						textAlign: 'center',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				>
					<FaPlane
						style={{
							fontSize: 12,
							color: '#d2a85e',
							marginRight: 12,
							marginTop: 8,
						}}
					/>
					<span style={{ fontSize: 16 }}>
						{' '}
						28 asdasdasd asda, NY, 7788569 USA
					</span>
				</div>
				<div
					className=" "
					style={{
						display: 'flex',
						marginTop: 12,
						fontWeight: 600,
						position: 'relative',
					}}
				>
					<FaPhone
						style={{
							fontSize: 12,
							color: '#d2a85e',
							marginRight: 12,
							marginTop: 8,
						}}
					/>
					<span style={{ fontSize: 16 }}>210210210210</span>
				</div>
				<div
					className=" "
					style={{
						display: 'flex',
						marginTop: 12,
						fontWeight: 600,
						position: 'relative',
					}}
				>
					<FaMailBulk
						style={{
							fontSize: 12,
							color: '#d2a85e',
							marginRight: 12,
							marginTop: 8,
						}}
					/>
					<span style={{ fontSize: 16 }}>test@example.com</span>
				</div>
			</div>
			<div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
				<div
					style={{
						marginTop: 46,
						marginLeft: 'auto',
						marginRight: 'auto',
						color: 'white',
						fontSize: 32,
					}}
				>
					<h3>Opening Hours</h3>
					<ol
						style={{
							fontSize: 18,
							marginTop: 24,
						}}
					>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							Mon-Wed{' '}
							<span style={{ textAlign: 'end' }}>8.00-18.00</span>
						</li>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							Thu-Fri{' '}
							<span style={{ textAlign: 'end' }}>8.00-18.00</span>
						</li>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							Sat{' '}
							<span style={{ textAlign: 'end' }}>8.00-18.00</span>
						</li>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							Sun{' '}
							<span style={{ textAlign: 'end' }}>8.00-18.00</span>
						</li>
					</ol>
				</div>
			</div>
			<div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
				<div
					style={{
						marginTop: 46,
						marginLeft: 'auto',
						marginRight: 'auto',
						color: 'white',
						fontSize: 32,
					}}
				>
					<h3>Quick Link</h3>
					<ol
						style={{
							fontSize: 18,
							marginTop: 24,
						}}
					>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Link to="/">About</Link>
						</li>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Link to="/">Service</Link>
						</li>
						<li
							style={{
								marginTop: 8,
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Link to="/">Contact</Link>
						</li>
					</ol>
					<div
						style={{
							display: 'flex',
							marginTop: 24,
							fontSize: 16,
						}}
					>
						<FaFacebook style={{ marginRight: '12px' }} />
						<FaGoogle style={{ marginRight: '12px' }} />
						<FaLinkedin style={{ marginRight: '12px' }} />
						<FaInstagram style={{ marginRight: '12px' }} />
					</div>
				</div>
			</div>
			<div
				className="lg:col-span-3"
				style={{
					width: '100%',
					bottom: '0',
					marginTop: 'auto',
					borderTop: '1px solid #e8e7e6',
				}}
			>
				<h3 style={{ color: 'white', textAlign: 'center' }}>
					Copyright ©2022 All rights reserved | This template is made
					by GreekFatCoders
				</h3>
			</div>
		</div>
	);
}
