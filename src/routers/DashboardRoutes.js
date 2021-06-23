import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route path="/marvel" component={ MarvelScreen } />
                    <Route path="/hero/:heroeId" component={ HeroScreen } />
                    <Route path="/dc" component={ DcScreen } />
                    <Route path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
