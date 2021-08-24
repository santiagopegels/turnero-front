import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';


export const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<h1>Espere...</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!uid}
                    />

                    <PublicRoute
                        exact
                        path="/register"
                        component={RegisterScreen}
                        isAuthenticated={!!uid}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        isAuthenticated={!!uid}
                        component={DashboardScreen}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}