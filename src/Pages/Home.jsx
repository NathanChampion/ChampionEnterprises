// Copyright © 2024 Champion Estates LLC
import React, { Fragment, useEffect } from 'react';
import { HeadlineCollection } from '../Components/Headlines/HeadlineCollection';
import { SplashScreen } from './SplashScreen';

export function Home(props) {

	return (
		<Fragment>
			<SplashScreen />
			<HeadlineCollection />
		</Fragment>
	);
};