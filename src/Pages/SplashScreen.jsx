// Copyright © 2024 Champion Estates LLC
import React from 'react';
import logo from '../Resources/VendingWhite.png';
import { Colors } from '../Resources/Colors'

const Styles = () => {
	return {
		splashScreen: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: 'calc(100vh - 40px)',
			backgroundColor: Colors.charcoal,
			backgroundSize: '120px 120px',
			textAlign: 'center',
			zIndex: '1',
			margin: '-12px',
			marginBottom: '6px'
		},
		splashScreenLogo: {
			marginTop: '24px',
			marginRight: '48px',
			marginBottom: '12px',
			//position: 'sticky',
			top: '1vh',
			transition: 'height 0.2s linear'
		},
		splashScreenText: {
			top: '10vh',
			color: 'white',
			fontSize: '100px',
		},
		splashScreenNotes: {
			top: '12vh',
			color: 'white',
			fontSize: '28px',
			fontFamily: 'Segoe UI Bold'
		},
		splashScreenBranding: {
			position: 'sticky',
			top: 0,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: '-15vh'
		},
		splashScreenButton: {
			display: 'block',
			position: 'fixed',
			bottom: '50px',
            color: '#ffffff',
            backgroundColor: 'transparent',
			fontSize: '24px',
			height: '50px',
			width: '200px'
		},
		splashScreenP: {  
			display: 'flex',
			flexDirection: 'row',
			gap: '36px'
		}
	};
};

export function SplashScreen() {
	const styles = Styles();
	//on button click, scroll the applicationBackground element to the calculated height
	const handleClick = () => { 
		//Calculate 0.35vh in pixels. This is the fully collapsed splash screen distance
		const viewHeight = window.innerHeight;
		const scrollHeight = viewHeight - (viewHeight * 0.33);
		document.getElementById("applicationBackground").scrollTo({top: scrollHeight, behavior: 'smooth'});
	};

	return (
		<div className={'splashScreen'} style={styles.splashScreen}>
			<img src={logo} id="splashScreenLogo" style={styles.splashScreenLogo} alt="Blue Print Logo"/>
			<h variant="h1" className={'splashScreenText'} style={styles.splashScreenText}>
			Over 30 years of family owned craftmanship
			</h>
			<div style={styles.splashScreenP}>
				<p style={styles.splashScreenNotes}>Concrete Finishing</p>
				<p style={styles.splashScreenNotes}>Vending Solutions</p>
				<p style={styles.splashScreenNotes}>Real Estate</p>
				<p style={styles.splashScreenNotes}>Consultations</p>
			</div>
			{/*<h variant="h2" className={'splashScreenText'} style={{...styles.splashScreenText, marginTop: '75px', fontSize: '74px'}}>
				25 years of family owned craftmanship
			</h>
			 <button variant='inline' id="splashScreenButton" style={styles.splashScreenButton} onClick={handleClick}>
				Explore
			</button> */}
		</div>
	);
}