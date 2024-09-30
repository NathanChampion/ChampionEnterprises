// Copyright © 2024 Champion Estates LLC
import React, { Fragment, useEffect } from 'react';
import { FinishingThumbnailCollection } from '../../Components/Thumbnails/FinishingThumbnailCollection';
import { VendingThumbnailCollection } from '../../Components/Thumbnails/VendingThumbnailCollection';

const Styles = () => {
	return {
		splashScreenText: {
			top: '10vh',
			fontSize: '40px',
		}
	};
};
export function Services(props) {

	const styles = Styles();
	return (
		<div style={{marginTop: '100px'}}>
			<FinishingThumbnailCollection/>
			{/* <VendingThumbnailCollection/> */}
		</div>
	);
};