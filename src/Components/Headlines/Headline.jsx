// Copyright © 2024 Champion Estates LLC.
import React, { Fragment } from 'react';
import Button from '@mui/material/Button';

const Styles = () => {
    return {
        title: {
            display: 'inline-block',
            fontSize: '52px',
            fontFamily: 'Century Schoolbook',
            fontWeight: 700,
            margin: '0px',
            marginBottom: '12px'
        },
        description: {
            marginTop: '12px',
            fontSize: '20px',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 500,
            lineHeight: 1.65,
            letterSpacing: 1.25
        },
        button: {
            color: '#gggggg',
            margin: 'auto',
            marginTop: '12px',
            width: '150px',
            height: '42px',
            borderRadius: '75px'
        },
        image: {
            maxHeight: '550px',
            borderRadius: '12px'
        },
        root: {
            width: '100%',
            alignContent: 'flex-end',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eeeeee',
            height: '600px',
            gap: '100px',
            borderRadius: '12px'
        },
        post: {
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
            width: '812px',
        }
    }
};

export function Headline(props) {
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
        <div style={{...styles.root, backgroundColor: props.isAlternate ? '#f8f8f8' : '#fdfdfd'}}>
            { props.orientation !== 'right' && image }
            <span style={styles.post} > 
                <p variant="h3" style={styles.title}>
                    { props.name }
                </p>
                <p variant="body1" style={styles.description}>
                    { props.description }
                </p>
                { 
                    props.canStart ? 
                        <Button variant="contained" 
                            onClick={handleRedirect} 
                            style={styles.button}
                            sx={{
                                backgroundColor: '#gggggg',
                                '& .MuiButton-Primary': {
                                    color: '#gggggg',
                                }
                            }}>
                            {'Contact Us'}
                        </Button> : 
                        <Fragment/>
                }
            </span>
            { props.orientation === 'right' && image }
        </div>
    );
}