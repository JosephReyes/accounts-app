import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import React from 'react';
import { AccountsPage } from "./components/accounts-page/accounts-page";
import { AddAccountPage } from "./components/add-account-page/add-account-page";
import { TransferPage } from "./components/transfer-page/transfer-page";

export function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/accounts" children={<AccountsPage />} />
        
        <Route exact path="/add-account" children={<AddAccountPage />} />
        
        <Route exact path="/transfer" children={<TransferPage />} />

        <Redirect from="/" to="/accounts" />
      </Switch>
    </div>
  );
}
