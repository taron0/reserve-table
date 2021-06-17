import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "../../helpers/routes";
import "../../App.css";

const MainLayout = () => {
  return (
    <Switch>
      {Routes.map(({ path, options = {}, component: Component }) => {
        return (
          <Route key={path} path={path} component={Component} {...options} />
        );
      })}
      <Route path="*">
        <div className="box-not-found">
          <h1>Not Found</h1>
          <p>404 ERROR</p>
        </div>
      </Route>
    </Switch>
  );
};

export default MainLayout;
