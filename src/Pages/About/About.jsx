// Copyright © 2024 Champion Estates LLC
import React, { Fragment } from 'react';
import { Colors } from '../../Resources/Colors'
import { HeadlineCollectionAbout } from '../../Components/Headlines/HeadlineCollectionAbout';

const Styles = () => {
	return {
		splashScreenText: {
			fontFamily: 'Playfair Display',
			fontSize: '74px',
			fontWeight: 600,
			textAlign: 'Center',
			marginTop: '100px',
			marginBottom: '24px',
			color: '#FFFFFF'
		}
	};
};

export function About () {
	const styles = Styles();
	//on button click, scroll the applicationBackground element to the calculated height

	return (
		<div style={{background: '#BE7C4D'}}>
			<p style={styles.splashScreenText}>About Us</p>
			<HeadlineCollectionAbout />
		</div>
	);
}