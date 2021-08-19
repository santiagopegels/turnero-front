import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';


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

                    <PublicRoute
                        exact
                        path="/register"
                        component={RegisterScreen}
                        isAuthenticated={!!false}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}