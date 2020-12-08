import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
* We don't have any problem with meteor 1.12
*/
// import { useTracker } from 'meteor/react-meteor-data';

import { AccountProvider } from './account-context.js';

/**
* We don't have any problem with meteor 1.12
*/
// import UseTheContext from "./use-context.js";
const UseTheContext = lazy(() => import("./use-context.js"));

export const App = () => (
  <Router>
    <AccountProvider>
      <h1>Welcome to Meteor!</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route component={UseTheContext} />
        </Switch>
      </Suspense>
    </AccountProvider>
  </Router>
);
