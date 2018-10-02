import * as React from "react";

export interface TopArtistsProps {}

export class TopArtists extends React.Component<TopArtistsProps, {}> {
    render() {
        return (
            <div className="top-artists-container">
                <div className="wrapper">
                    <h2>Рейтинг исполнителей</h2>
                    <ul id="topArtistsResult" />
                </div>
            </div>
        );
    }
}

$(document).ready(function() {

    const UserApiKey = "4a9f5581a9cdf20a699f540ac52a95c9";
    const ItemLimit = "10";
    const Method = "user.getTopArtists";

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=" + Method + "&user=test&api_key=" + UserApiKey + "&limit=" + ItemLimit + "&format=json&callback=?", function(json) {
        let TopArtistsContent = '';
        $.each(json.topartists.artist, function(i, item) {
            TopArtistsContent += "<li><a href=" + item.url + " target='_blank'>Исполнитель " + item.name + " - " + "Воспроизводился : " + item.playcount + " раз</a></li>";
        });
        $('#topArtistsResult').append(TopArtistsContent);
    })
});