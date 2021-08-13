import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!false}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}