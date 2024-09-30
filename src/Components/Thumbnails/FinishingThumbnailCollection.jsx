//Copyright © 2024 Champion Estates LLC.
import React, {Fragment} from 'react';
import { Thumbnail } from './Thumbnail';

import slab from '../../Resources/Images/Slab.jpeg';
import vend from '../../Resources/Images/Vending.jpg';
import house from '../../Resources/Images/House2.png';
import concrete from '../../Resources/Images/Concrete.jpeg';

import pool from '../../Resources/Images/pool.jpg';

export function FinishingThumbnailCollection(props) {

const first = 'test';

    return (
        <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
            <Thumbnail name='Pools' 
                canStart={true}
                image={pool}
                description={first} 
                link='/concrete'/>
            <Thumbnail name='Curbs' 
                canStart={true}
                image={vend}
                orientation={'right'}
                description={first} 
                isAlternate={true}
                link='/vending' />
            <Thumbnail name='Walks' 
                canStart={true}
                image={house}
                description={first} 
                link='/estates' />
            <Thumbnail name='Driveways' 
                canStart={true}
                image={house}
                description={first} 
                link='/estates' />
            <Thumbnail name='Stairs' 
                canStart={true}
                image={house}
                description={first} 
                link='/estates' />
            <Thumbnail name='Stamps' 
                canStart={true}
                image={house}
                description={first} 
                link='/estates' />
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
        </div>
    );
}