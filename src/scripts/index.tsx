import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "../css/main.scss";
import ComponentsHandler from "./components/ComponentsHandler";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={ComponentsHandler} />
    </BrowserRouter>,
    document.getElementById('mainContent')
);