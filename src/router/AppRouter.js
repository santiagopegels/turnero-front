import React, { useEffect } from 'react'
import {
    Switch,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { QueueMainScreen } from '../components/queue/QueueMainScreen';
import { PublicScreen } from '../components/screen/PublicScreen';
import { PrinterScreen } from '../components/printer/PrinterScreen';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';
import { Spin } from 'antd';


export const AppRouter = () => {

    const dispatch = useDispatch()
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (<Spin className="spinner-body" size="large" />)
    }

    return (
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

            <PrivateRoute
                exact
                path="/queues"
                isAuthenticated={!!uid}
                component={QueueMainScreen}
            />

            <PrivateRoute
                exact
                path="/screen"
                isAuthenticated={!!uid}
                component={PublicScreen}
            />

            <PrivateRoute
                exact
                path="/printer"
                isAuthenticated={!!uid}
                component={PrinterScreen}
            />

            <Redirect to="/" />
        </Switch>
    )
}