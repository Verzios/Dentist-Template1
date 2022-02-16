import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
export default function PhoneSideBar(props) {
	const [state, setState] = React.useState({
		left: props.left,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
		props.setLeft(false);
	};
	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Button
				style={{
					position: 'relative',
					left: '80%',
					color: 'black',
					fontFamily: 'Inconsolata',
				}}
			>
				x
			</Button>
			<Typography
				style={{
					height: 100,
					fontFamily: 'Inconsolata',
					margin: '0 auto',
					textAlign: 'center',
					fontWeight: 700,
				}}
			>
				Dentist
			</Typography>
			<Divider />
			<List style={{ fontFamily: 'Inconsolata', fontWeight: 700 }}>
				<a href="/">
					<ListItem button style={{ marginBottom: 20 }}>
						HOME
					</ListItem>
				</a>

				<ListItem button style={{ marginBottom: 20 }}>
					ABOUT
				</ListItem>
				<ListItem button style={{ marginBottom: 20 }}>
					GALLERY
				</ListItem>

				<ListItem button style={{ marginBottom: 20 }}>
					HELP
				</ListItem>
			</List>
			<Divider />
			<List style={{ fontFamily: 'Inconsolata', fontWeight: 700 }}>
				<ListItem button style={{ marginBottom: 20 }}>
					CONTACT
				</ListItem>
				<ListItem button style={{ marginBottom: 20 }}>
					BOOK
				</ListItem>
			</List>
		</Box>
	);
	// console.log(props);
	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Drawer
						anchor={anchor}
						open={props.open}
						onClose={toggleDrawer('left', false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
