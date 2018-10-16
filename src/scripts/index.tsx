import * as React from "react";
import * as ReactDOM from "react-dom";

import "../css/main.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

ReactDOM.render(
    <Header />,
    document.getElementById("pageHeader")
);

ReactDOM.render(
    <Search />,
    document.getElementById("pageSearch")
);

ReactDOM.render(
    <Footer />,
    document.getElementById("pageFooter")
);