import * as React from "react";
import * as ReactDOM from "react-dom";

import "../css/main.scss";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Footer} from "./components/Footer";

ReactDOM.render(
    <Search compiler="TypeScript" framework="React"/>,
    document.getElementById("example")
);

ReactDOM.render(
    <Header/>,
    document.getElementById("pageHeader")
);

ReactDOM.render(
    <Footer/>,
    document.getElementById("pageFooter")
);