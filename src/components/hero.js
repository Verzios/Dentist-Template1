import React, { useState, useEffect } from 'react';
import {
	FaReact,
	FaStar,
	FaPeopleArrows,
	FaLocationArrow,
	FaVoicemail,
	FaMap,
} from 'react-icons/fa';
export default function Hero() {
	const [animation, setAnimation] = useState(false);
	const [buttonAnimation, setButtonAnimation] = useState(false);
	useEffect(() => {
		setAnimation(true);
	}, []);
	console.log(animation);
	return (
		<>
			<div
				style={{
					height: 1000,
					width: '100%',
					top: '0',
					marginTop: -150,
					position: 'static',
					overflow: 'hidden',
				}}
			>
				<div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 top-0 w-full h-full  bg-hero-pattern bg-no-repeat bg-center bg-cover text-white rounded-bl-[140px 40px] rounded-br-[140px 40px]">
					<div className="xl:px-48 lg:col-span-1 col-span-2 md:pl-32 pl-16 h-full lg:top-[200px] top-52 w-full relative">
						<h3
							className="xl:text-3xl text-xl"
							style={{
								left: animation ? '0' : '-10%',
								opacity: animation ? 1 : 0.2,
								transition: 'left 0.8s ease,opacity 0.5s ease',
								position: 'relative',
							}}
						>
							Welcome to Dentistry on King
						</h3>
						<h4
							className="xl:text-2xl text-lg text-amber-400 pt-3"
							style={{
								left: animation ? '0' : '-10%',
								opacity: animation ? 1 : 0.2,
								transition: 'left 1s ease,opacity 1s ease',
								position: 'relative',
							}}
						>
							Your Toronto Dentist
						</h4>
						<ul
							className="pt-4 list-disc 2xl:leading-8 leading-5 pl-4 2xl:text-lg text-md font-sans"
							style={{
								left: animation ? '0' : '-10%',
								opacity: animation ? 1 : 0.2,
								transition: 'left 1s ease,opacity 1s ease',
								position: 'relative',
							}}
						>
							<li>
								Open during the{' '}
								<strong>COVID-19 lockdown</strong>
							</li>
							<li>
								<strong>Top-rated</strong> Dentist in Toronto by
								Google users
							</li>
							<li>
								University of Toronto Graduate & Clinical
								Instructor
							</li>
							<li>
								Compassionate, Holistic & Innovative Dental Care
							</li>
							<li>
								Serving patients from various Toronto
								neighbourhoods
							</li>
						</ul>
						<button
							className="rounded-[12px] bg-gold-button w-60 h-10 block mt-6 shadow-lg text-lg"
							onMouseEnter={() => setButtonAnimation(true)}
							onMouseLeave={() => setButtonAnimation(false)}
							style={{
								width: buttonAnimation ? '50%' : '',
								transition: 'width 0.4s ease',
							}}
						>
							Request Appointment{' '}
							<FaMap
								style={{
									display: buttonAnimation
										? 'inline-block'
										: 'none',
									opacity: buttonAnimation ? 1 : 0,
									transition:
										'display 0.8s ease,opacity 0.8s ease',
								}}
							/>
						</button>
						<button className="rounded-[12px] bg-blue-button w-60 h-10 block mt-8 mb-5 shadow-lg text-lg">
							Call: 210210210210
						</button>
					</div>
					<div className="lg:px-24 h-1/3 w-full lg:top-[200px] top-16 lg:m-0  relative lg:col-span-1 col-span-2 sm:mt-12 mt-16 right-0 lg:right-20">
						<div class="box-border md:box-content  shadow-xl w-2/3 sm:w-1/2 md:w-1/2 lg:w-full ml-auto mr-auto ">
							<img
								className="rounded-[16px]"
								src="assets/toronto-dentist.jpg"
								alt="image1"
							/>
						</div>
					</div>
					<div className="col-span-2 top-[300px] relative content-center items-center flex h-10">
						<div className="shadow-after-image w-3/5 h-28 px-4 bg-after-image  ml-auto mr-auto  items-center content-center rounded-[12px] xl:space-x-32 md:space-x-24 hidden lg:flex">
							<div
								className=""
								style={{
									display: 'flex',
									justifyContent: 'center',
									fontWeight: 600,
									bottom: animation ? '-0%' : '-25%',
									opacity: animation ? 1 : 0,
									transition:
										'opacity .4s ease,bottom .4s ease',
									position: 'relative',
								}}
							>
								<FaReact
									style={{
										fontSize: 24,
										color: 'orange',
										marginRight: 2,
									}}
								/>
								<span>COVID-19 Info</span>
							</div>
							<div
								className=" "
								style={{
									display: 'flex',
									justifyContent: 'center',
									fontWeight: 600,
									bottom: animation ? '-0%' : '-25%',
									opacity: animation ? 1 : 0,
									transition:
										'opacity .6s ease,bottom .6s ease',
									position: 'relative',
								}}
							>
								<FaStar
									style={{
										fontSize: 24,
										color: '#d2a85e',
										marginRight: 2,
									}}
								/>
								<span>Top-Rated on Google</span>
							</div>
							<div
								className=" "
								style={{
									display: 'flex',
									justifyContent: 'center',
									fontWeight: 600,
									bottom: animation ? '-0%' : '-25%',
									opacity: animation ? 1 : 0,
									transition:
										'opacity .8s ease,bottom .8s ease',
									position: 'relative',
								}}
							>
								<FaPeopleArrows
									style={{
										fontSize: 24,
										color: '#d2a85e',
										marginRight: 2,
									}}
								/>
								<span>Accepts New Patients</span>
							</div>
							<div
								className=" "
								style={{
									display: 'flex',
									justifyContent: 'center',
									fontWeight: 600,
									bottom: animation ? '-0%' : '-25%',
									opacity: animation ? 1 : 0,
									transition:
										'opacity 1s ease,bottom 1s ease',
									position: 'relative',
								}}
							>
								<FaLocationArrow
									style={{
										fontSize: 24,
										color: '#d2a85e',
										marginRight: 2,
									}}
								/>
								<span>Downtown Location</span>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						height: '100px',
						bottom: 0,
						backgroundSize: '100% 3vw',
						backgroundColor: 'white',
						marginTop: -70,
						borderTopLeftRadius: '100% 250px',
						borderTopRightRadius: '100% 250px',
					}}
				></div>
			</div>
		</>
	);
}
