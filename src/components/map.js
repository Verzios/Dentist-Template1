import React from 'react';

export default function Map() {
	return (
		<div style={{ textAlign: 'center', marginTop: 32, marginBottom: 50 }}>
			<h2 style={{ fontSize: 32, fontWeight: 600 }}>Locate Us</h2>
			<div class="mapouter" style={{ marginTop: 32 }}>
				<div class="gmap_canvas">
					<iframe
						title="test"
						width="80%"
						height="400"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
					/>

					<a href="https://www.embedgooglemap.net"></a>
				</div>
			</div>
		</div>
	);
}
