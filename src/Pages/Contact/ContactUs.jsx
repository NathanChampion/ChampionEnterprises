// Copyright © 2024 Champion Estates LLC
import React from 'react';
import { Colors } from '../../Resources/Colors'
import { ContactCard } from '../../Components/Cards/ContactCard';

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
			zIndex: '1'
		},
		splashScreenHeader: {
			top: '10vh',
			color: 'white',
			fontSize: '50px',
			fontWeight: 'bold',
		},
		splashScreenHeaderB: {
			top: '10vh',
			color: 'black',
			fontSize: '50px',
			fontWeight: 'bold',
		},
		splashScreenNotes: {
			top: '12vh',
			color: 'black',
			fontSize: '28px',
			fontFamily: 'Segoe UI Bold'
		},
		splashScreenNotesB: {
			top: '12vh',
			color: 'black',
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
		},
		circle: {
			height: '75px',
			width: '75px',
			backgroundColor: Colors.silver,
			borderRadius: '50%',
			borderWidth: '6px',
			borderStyle: 'groove',
			borderColor: '#eeeeee',
		},
		splashScreenTop: {
			height: '300px',
			width: '100%',
			backgroundColor: Colors.caramel,
			marginTop: '-24px',
		},
		splashScreenLeft: {
			height: 'calc(100vh - 150px)',
			width: '900px',
			backgroundColor: Colors.caramel,
			flexDirection: 'row',
			gap: '36px',
			marginTop: '-200px',
			borderRadius: '6px',
			zIndex: 2
		},
		splashScreenRight: {
			height: 'calc(100vh - 150px)',
			width: '900px',
			backgroundColor: '#eeeeee',
			flexDirection: 'row',
			borderRadius: '12px',
			gap: '36px',
			marginTop: '-200px',
			zIndex: 2
		}
	};
};

export function ContactUs() {
	const styles = Styles();
	//on button click, scroll the applicationBackground element to the calculated height
	const handleClick = () => { 
		//Calculate 0.  in pixels. This is the fully collapsed splash screen distance
		const viewHeight = window.innerHeight;
		const scrollHeight = viewHeight - (viewHeight * 0.33);
		document.getElementById("applicationBackground").scrollTo({top: scrollHeight, behavior: 'smooth'});
	};

	return (
		<div className={'splashScreen'} style={styles.splashScreen}>

			<div style={styles.splashScreenTop}/>
			<div style={styles.splashScreenP}>

				<div style={styles.splashScreenRight}>
					<div style={styles.circle}>
					</div>
					
					<ContactCard src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86000.36623084289!2d-117.32733029143334!3d47.655060000937674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e235fb0cf06af%3A0xdae7a00670e4f06!2sSpokane%20Valley%2C%20WA!5e0!3m2!1sen!2sus!4v1726254150331!5m2!1sen!2sus"/>
					<ContactCard src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702271.4307470423!2d-121.35366884117164!3d46.56256528084208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5499f957512e3cb3%3A0x62b49fba298fd7a2!2sYakima%20County%2C%20WA!5e0!3m2!1sen!2sus!4v1726254288927!5m2!1sen!2sus"/>
					<ContactCard src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176527.80254462548!2d-119.42165339909307!3d46.265197101815595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54987b193e72a147%3A0xfd256fdce5f75c5!2sTri-Cities%2C%20WA!5e0!3m2!1sen!2sus!4v1726254376789!5m2!1sen!2sus"/>
					<div className="google-map-code">
       
        			</div>

		
				</div>
			</div>
		</div>
	);
}