import React from 'react';
import Cards from './cards';
import FancyCard from './fancyCard';

export default function Afterhero() {
	return (
		<div className="p-4 ml-auto mr-auto text-center">
			<h2
				className="font-mono text-2xl font-extrabold mb-8"
				style={{ color: '#333' }}
			>
				Our Services
			</h2>
			<p
				className="lg:w-[600px] w-[400px] ml-auto mr-auto"
				style={{ color: '#666' }}
			>
				Our dental office in Toronto uses the latest dental technology
				and personalized patient care to identify dental problems that
				ultimately affect your overall health. This method allows us to
				take dentistry to the next level and become more than just your
				dentist but your overall wellness partner.
			</p>
			<button
				className="mt-8 px-8 py-3"
				style={{
					color: '#9f752d',
					border: '2px solid #d1c0b1',
					fontSize: '18px',
					fontWeight: 600,
					borderRadius: '5px',
					boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.3)',
				}}
			>
				Our Dental Services
			</button>
			<div className=" mt-12  grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1  mr-auto ml-auto">
				<div className="relative xl:-top-24 top-0 mt-12 xl:mt-0">
					<FancyCard
						path="assets/icon_dental-implant.png"
						title="Dental Implant"
						paragraph="Replace your missing teeth with high quality and durable implants. These implants can stabilize your bite and bring functionality back to your smile."
					/>
				</div>
				<div className="relative top-0 mt-12 xl:mt-0">
					<FancyCard
						path="assets/icon_wisdom-extraction.png"
						title="Wisdom Tooth Extraction"
						paragraph="Your wisdom teeth are bothering you? Do not worry, we can remove them with minimal anxiety and pain with sedation dentistry."
					/>
				</div>
				<div className="relative xl:top-24 top-0 mt-12 xl:mt-0">
					<FancyCard
						path="assets/icon_invisible-brace.png"
						title="Invisalign"
						paragraph="Straighten your teeth and smile with a discreet and non-intrusive orthodontic treatment. Invisable braces work for teens and adults."
					/>
				</div>
				<div className="mt-12 xl:mt-0">
					<FancyCard
						path="assets/icon_teeth-whitening.png"
						title="Teeth Whitening"
						paragraph="Restore the brightness of your smile with effective and safe whitening treatments. You can be confidant about your smile again."
					/>
				</div>
				<div className="relative xl:-top-24 top-0 mt-12 xl:mt-0">
					<FancyCard
						path="assets/icon_dental-crown.png"
						title="Dental Crowns"
						paragraph="Get reliable and state-of-the-art CEREC® crowns that allows Dr. Alavi to design, create, and place a beautiful crown in just a single visit."
					/>
				</div>
			</div>
			<h2
				className="mt-64"
				style={{ fontSize: '38px', color: '#333', fontWeight: 600 }}
			>
				Why Choose Us
			</h2>
			<div
				className="grid lg:grid-cols-3 grid-cols-1 mt-12"
				style={{ textAlign: 'start', placeItems: 'center' }}
			>
				<div>
					<Cards
						path="assets/toronto-dentist-holistic-dentistry.jpg"
						title="Holistic Dentist"
						paragraph="With years of education and experience, Dr. Alavi & Dr. Cheng are passionate holistic dentists in Toronto. They lead by example for our dedicated team of dental professionals to follow. We use our training to educate you on your dental health so you can care for your teeth long-term."
					/>
				</div>
				<div>
					<Cards
						path="assets/toronto-dentist-office-amenities-netflix.jpg"
						title="Patient-centered Care"
						paragraph="We make it our aim to accommodate your individual needs and place you as our priority. We offer a range of comforts and conveniences, such as Netflix, Saturday appointments and online booking. We also do our best to offer a safe and comfortable setting for our more anxious patients."
					/>
				</div>
				<div>
					<Cards
						path="assets/toronto-dentist-technology-cerec.jpg"
						title="Innovative Dentistry"
						paragraph="Modern technology and new techniques allow us to provide you and your family with great results efficiently and quickly. Experience dentistry with more accuracy and less discomfort in a calm, relaxing environment. We offer single-visit dentistry with same-day dental crowns (CEREC®)."
					/>
				</div>
			</div>
		</div>
	);
}
