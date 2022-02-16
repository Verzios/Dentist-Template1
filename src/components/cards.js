import React from 'react';

export default function Cards(props) {
	return (
		<div className=" w-[400px] inline-block lg:mt-0 mt-12">
			<div>
				<img
					src={props.path}
					alt="dentistry"
					width="400px"
					style={{
						borderTopLeftRadius: '10%',
						borderTopRightRadius: '10%',
					}}
				/>{' '}
				<div
					style={{
						textAlign: 'center',
						boxShadow: '0px 12px 18px -6px rgba(0,0,0,0.3)',
						lineHeight: '1.8em',
						padding: '10% 5% 10% 5%',
					}}
				>
					<h3
						style={{
							fontWeight: 600,
							fontSize: 22,
							marginBottom: 12,
						}}
					>
						{props.title}
					</h3>
					<p style={{ width: '100%', height: 300 }}>
						{props.paragraph}
					</p>
				</div>
			</div>
		</div>
	);
}
