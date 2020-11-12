import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import LinksPage from "./Pages/LinksPage";
import CreatePage from "./Pages/CreatePage";
import DetailsPage from "./Pages/DetailsPage";
import AuthPage from "./Pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>

                <Route path="/links" exact>
                    <LinksPage />
                </Route>

                <Route path="/create" exact>
                    <CreatePage />
                </Route>

                <Route path="/details/:id">
                    <DetailsPage />
                </Route>

                <Redirect to="/create" />

            </Switch>
        )
    }

    return (
        <Switch>

            <Route path="/" exact>
                <AuthPage />
            </Route>

            <Redirect to="/" />

        </Switch>
    )
}