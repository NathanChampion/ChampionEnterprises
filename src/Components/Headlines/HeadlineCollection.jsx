//Copyright © 2024 Champion Estates LLC.
import React, {Fragment} from 'react';
import { Headline } from './Headline';

//Descriptions
import { EstatesDescription } from './EstatesDescription';
import { VendingDescription } from './VendingDescription';
import { EngineeringDescription } from './EngineeringDescription';
import { ConstructionDescription } from './ConstructionDescription';

import slab from '../../Resources/Images/Slab.jpeg';
import vend from '../../Resources/Images/Vending.jpg';
import house from '../../Resources/Images/House2.png';
import concrete from '../../Resources/Images/Concrete.jpeg';

import pool from '../../Resources/Images/pool.jpg';
export function HeadlineCollection(props) {

    return (
        <Fragment>
            <Headline name='DC Concrete Finishing' 
                canStart={true}
                image={pool}
                description={ConstructionDescription} 
                link='/concrete'/>
            <Headline name='Champion Vending' 
                canStart={true}
                image={vend}
                orientation={'right'}
                description={VendingDescription} 
                isAlternate={true}
                link='/vending' />
            <Headline name='Consultations & Real Estate' 
                canStart={true}
                image={house}
                description={EstatesDescription} 
                link='/estates' />
           {/*  <Headline name='Engineering Consultation' 
                canStart={true}
                description={EngineeringDescription} 
                link='/engineering'/> */}
        </Fragment>
    );
}