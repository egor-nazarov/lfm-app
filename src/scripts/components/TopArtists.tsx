import * as React from "react";

export default class TopArtists extends React.Component {
    render() {
        return (
            <div className="top-artists-container">
                <div className="wrapper">
                    <h2>Рейтинг исполнителей</h2>
                    {/*<ul id="topArtistsResult" />*/}
                    <ul id="ArtistsSearch" />
                </div>
            </div>
        );
    }
}

$(document).ready(function() {

    const UserApiKey = "4a9f5581a9cdf20a699f540ac52a95c9";
    const ItemLimit = "10";
    const Method = "user.getTopArtists";

    // "http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=10&format=json&callback=?"

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=" + Method + "&user=test&api_key=" + UserApiKey + "&limit=" + ItemLimit + "&format=json&callback=?", function(json) {
        let TopArtistsContent = '';
        $.each(json.topartists.artist, function(i, item) {
            TopArtistsContent += "<li><a href=" + item.url + " target='_blank'>Исполнитель " + item.name + " - " + "Воспроизводился : " + item.playcount + " раз</a></li>";
        });
        $('#topArtistsResult').append(TopArtistsContent);
    })
});

// "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Coldplay&limit=10&api_key=4a9f5581a9cdf20a699f540ac52a95c9&format=json"

$(document).ready(function() {

    const UserApiKey = "4a9f5581a9cdf20a699f540ac52a95c9";
    const Artist = "Coldplay";
    const ItemLimit = "5";
    const Method = "artist.search";
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=" + Method + "&artist=" + Artist + "&user=test&api_key=" + UserApiKey + "&limit=" + ItemLimit + "&format=json&callback=?", function(json) {
        let ArtistsSearch = '';
        $.each(json.results.artistmatches.artist, function(i, item) {

            let ItemData = JSON.stringify(item.image);
            let FetchingResult = JSON.parse(ItemData);
            for (let i = 0; i < FetchingResult.length; i++) {
                console.log(FetchingResult[i]['#text']);
            }
            let FetchingImage = "<img src='" + FetchingResult[4]['#text'] + "' />";

            let imgList= "";
            let elm = (<>this.#text</>);
            $.each(item.image, function () {
                imgList += "<image src='" + FetchingResult + "' />";
            });

            ArtistsSearch += "<li><a href=" + item.url + " target='_blank'>Исполнителя " + item.name + " - " + "слушают: " + item.listeners + " раз и вот его изображения: <br> " + FetchingImage + "</a></li>";
        });
        $('#ArtistsSearch').append(ArtistsSearch);
    })
});
