//Copyright © 2024 Champion Estates LLC.
import React, {Fragment} from 'react';
import { Thumbnail } from './Thumbnail';

import slab from '../../Resources/Images/Slab.jpeg';
import vend from '../../Resources/Images/Vending.jpg';
import house from '../../Resources/Images/House2.png';
import concrete from '../../Resources/Images/Concrete.jpeg';

import pool from '../../Resources/Images/pool.jpg';

export function VendingThumbnailCollection(props) {

const first = '';

    return (
        <Fragment>
            <Thumbnail name='Snack Machines' 
                canStart={true}
                image={pool}
                description={first} 
                link='/concrete'/>
            <Thumbnail name='Soda Machines' 
                canStart={true}
                image={pool}
                description={first} 
                link='/concrete'/>
        </Fragment>
    );
}