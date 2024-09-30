//Copyright © 2024 Champion Estates LLC.
import React, {Fragment} from 'react';
import { Headline } from './Headline';

//Descriptions
import { DaveDescription } from './DaveDescription';
import { NateDescription } from './NateDescription';
import { JoshDescription } from './JoshDescription';
import { ConstructionDescription } from './ConstructionDescription';

import dave from '../../Resources/Images/DaveChampion.jpg';
import nate from '../../Resources/Images/NathanChampion.jpg';
import josh from '../../Resources/Images/JoshChampion.jpg';
import house from '../../Resources/Images/House2.png';
import concrete from '../../Resources/Images/Concrete.jpeg';

import pool from '../../Resources/Images/pool.jpg';
export function HeadlineCollectionAbout(props) {

    return (
        <Fragment>
            <Headline name='Dave Champion'
                image={dave}
                isAlternate={true}
                description={DaveDescription} 
                link='/concrete'/>
            <Headline name='Nathan Champion' 
                image={nate}
                orientation={'right'}
                description={NateDescription} 
                link='/vending' />
            <Headline name='Joshua Champion' 
                image={josh}
                isAlternate={true}
                description={JoshDescription} 
                link='/estates' />
           {/*  <Headline name='Engineering Consultation' 
                canStart={true}
                description={EngineeringDescription} 
                link='/engineering'/> */}
        </Fragment>
    );
}