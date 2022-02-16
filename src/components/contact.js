import React, { useState } from 'react';

export default function Contact() {
	const [hover, setHover] = useState(false);
	return (
		<div
			style={{
				backgroundImage:
					'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(assets/dentist.jpg)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundAttachment: 'fixed',
				height: '700px',
			}}
		>
			<h2
				style={{
					color: 'white',
					textAlign: 'center',
					marginTop: 80,
					paddingTop: 40,
					fontWeight: 500,
					fontSize: 32,
				}}
			>
				Contact Us
			</h2>
			<form>
				<div
					className="it"
					style={{
						placeItems: 'center',
						marginTop: 64,
					}}
				>
					<input
						type="text"
						placeholder="First Name"
						className="mr-auto ml-auto"
						style={{
							marginBottom: 24,
							width: '50%',
							height: 55,
							display: 'block',
							background: 'rgba(0,0,0,.4)',
							borderRadius: '12px',
							color: 'white',
							opacity: 1,
							padding: '12px',
							fontWeight: 600,
							fontStyle: 'italic',
						}}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Second Name"
						className="mr-auto ml-auto"
						style={{
							marginBottom: 24,
							width: '50%',
							height: 55,
							display: 'block',
							background: 'rgba(0,0,0,.4)',
							borderRadius: '12px',
							color: 'white',
							opacity: 1,
							padding: '12px',
							fontWeight: 600,
							fontStyle: 'italic',
						}}
					/>
				</div>

				<div
					className="it"
					style={{
						placeItems: 'center',
					}}
				>
					<input
						type="text"
						placeholder="Email"
						className="mr-auto ml-auto"
						style={{
							marginBottom: 24,
							width: '50%',
							height: 55,
							display: 'block',
							background: 'rgba(0,0,0,.4)',
							borderRadius: '12px',
							color: 'white',
							opacity: 1,
							padding: '12px',
							fontWeight: 600,
							fontStyle: 'italic',
						}}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Phone"
						className="mr-auto ml-auto"
						style={{
							marginBottom: 24,
							width: '50%',
							height: 55,
							display: 'block',
							background: 'rgba(0,0,0,.4)',
							borderRadius: '12px',
							color: 'white',
							opacity: 1,
							padding: '12px',
							fontWeight: 600,
							fontStyle: 'italic',
						}}
					/>
				</div>
				<div>
					<textarea
						type="text"
						rows="5"
						cols="60"
						placeholder="Write your Message..."
						className="mr-auto ml-auto"
						multiple="true"
						style={{
							marginBottom: 24,
							width: '50%',
							height: 125,
							display: 'block',
							background: 'rgba(0,0,0,.4)',
							borderRadius: '12px',
							color: 'white',
							opacity: 1,
							padding: '12px',
							fontWeight: 600,
							fontStyle: 'italic',
						}}
					/>
				</div>
				<button
					onMouseEnter={() => setHover(!hover)}
					onMouseLeave={() => setHover(!hover)}
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						display: 'block',
						backgroundColor: 'white',
						color: hover ? 'white' : 'black',
						padding: 16,
						borderRadius: 18,
						fontSize: 16,
						fontWeight: 600,
						boxShadow: hover ? 'inset 150px 0px 0px #9f752d' : '',
						transition: 'all 0.8s',
					}}
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
