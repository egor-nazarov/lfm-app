import * as React from "react";
import * as ReactDOM from "react-dom";

import "../css/main.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import TopArtists from "./components/TopArtists";
import Footer from "./components/Footer";
import "./components/ArtistRequest";

ReactDOM.render(
    <Header/>,
    document.getElementById("pageHeader")
);

ReactDOM.render(
    <Search/>,
    document.getElementById("pageSearch")
);

ReactDOM.render(
    <TopArtists/>,
    document.getElementById("topArtists")
);

ReactDOM.render(
    <Footer/>,
    document.getElementById("pageFooter")
);