// Copyright © 2024 Champion Estates LLC.
import React from 'react';
import * as Pages from '../../Pages';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { MenuBar } from '../Menus/MenuBar';

export function Layout(props) {

    return ( 
        <Fragment>
            <MenuBar/>
            <Routes>
                <Route path={'/'} element={<Pages.Home/>}>
                    <Route path={'home'} element={<Pages.Home/>}/>
                </Route>
                <Route path={'Services'} element={<Pages.Services/>}/>
                <Route path={'Contact US'} element={<Pages.ContactUs/>}/>
                <Route path={'About'} element={<Pages.About/>}/>
            </Routes> 
        </Fragment>
    );
}