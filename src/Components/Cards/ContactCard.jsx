// Copyright © 2024 Champion Estates LLC.
import React from 'react';

const Styles = () => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'row',
			height: 'calc(100vh - 40px)',
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

export function ContactCard(props) {
    const styles = Styles();

    const image = <img alt="Logo Outline" src={props.image} style={styles.image}/>;

    const handleRedirect = () => {
/*         if(props.link.startsWith('http')){
            window.location.href = props.link;
        }
        else {
            navigate(props.link);
        } */
    };

    return (
        <div style={styles.root}>
           <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176527.80254462548!2d-119.42165339909307!3d46.265197101815595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54987b193e72a147%3A0xfd256fdce5f75c5!2sTri-Cities%2C%20WA!5e0!3m2!1sen!2sus!4v1726254376789!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                >
                </iframe>
                
                    
               
            </div>
            <div style={styles.splashScreenRight}>
                <p style={styles.splashScreenHeaderB}>Vending & Consultations</p>
                <p style={styles.splashScreenNotesB}>Contact: Nathan Champion</p>
                <p style={styles.splashScreenNotesB}>Phone: (509) 564-9727</p>
                <p style={styles.splashScreenNotesB}>Email: ChampionVending@outlook.com</p>
            </div>
{/*             <p style={styles.splashScreenHeaderB}>DC Concrete Finishing</p>
            <p style={styles.splashScreenNotesB}>Phone: (509) 930-4774</p>
            <p style={styles.splashScreenNotesB}>Phone: (509) 930-4774</p>
            <p style={styles.splashScreenNotesB}>Email: djnjchamps@live.com</p> */}
        </div>
    );
}