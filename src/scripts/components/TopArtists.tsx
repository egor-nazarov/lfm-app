import * as React from "react";

export default class TopArtists extends React.Component {
    render() {
        return (
            <div className="top-artists-container">
                <div className="wrapper">
                    <h2>Информация об исполнителях</h2>
                    <ul id="ArtistsSearch" />
                </div>
            </div>
        );
    }
}
