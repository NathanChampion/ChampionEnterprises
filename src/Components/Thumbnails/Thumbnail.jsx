// Copyright © 2024 Champion Estates LLC.
import React, { Fragment } from 'react';
import Button from '@mui/material/Button';

const Styles = () => {
    return {
        title: {
            display: 'inline-block',
            fontSize: '36px',
            fontFamily: 'Segoe UI',
            fontWeight: 600,
            marginTop: '24px',
            marginBottom: '6px'
        },
        description: {
            fontSize: '20px',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 500,
            lineHeight: 1.65,
            letterSpacing: 1.25,
            margin: '0px'
        },
        image: {
            maxHeight: '300px',
            borderRadius: '12px'
        },
        root: {
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            height: '500px',
            borderRadius: '12px'
        },
        post: {
            width: '812px',
        }
    }
};

export function Thumbnail(props) {
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
            { image }
            <p variant="h3" style={styles.title}>
                { props.name }
            </p>
            <p variant="body1" style={styles.description}>
                { props.description }
            </p>
        </div>
    );
}