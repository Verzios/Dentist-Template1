import React, { useState } from 'react';

export default function FancyCard(props) {
	const [onHover, setOnHover] = useState(false);
	console.log(props);
	return (
		<div
			onMouseEnter={() => setOnHover(!onHover)}
			onMouseLeave={() => setOnHover(!onHover)}
			style={{
				transform: onHover ? 'scale(1.05)' : '',
				transition: 'transform .3s',
				cursor: 'pointer',
			}}
		>
			<img
				src={props.path}
				alt="icon"
				width="100px"
				height="100px"
				style={{
					border: '0 solid #333',
					borderRadius: '100%',
					padding: '10px',
					alignContent: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					boxShadow: '0px 0px 0px 2px rgba(209,179,127,0.31)',
					borderWidth: 15,
					borderColor: '#ffffff',
				}}
			/>
			<h3 style={{ fontWeight: 600, marginTop: 20, marginBottom: 20 }}>
				{props.title}
			</h3>
			<p
				className=""
				style={{
					wordWrap: 'break-word',
					color: '#666',
					fontWeight: 500,
					width: '100%',
				}}
			>
				{props.paragraph}
			</p>
		</div>
	);
}
