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
            let FetchingImage = "<img src='" + FetchingResult[4]['#text'] + "' alt='" + item.name + "' />";
            let imgList= "";

            $.each(item.image, function () {
                imgList += "<image src='" + FetchingResult + "' />";
            });

            ArtistsSearch += "<li><a href=" + item.url + " target='_blank'>Исполнителя " + item.name + " - " + "слушают: " + item.listeners + " раз.<br> Изображение альбома: " + FetchingImage + "</a></li>";
        });
        $('#ArtistsSearch').append(ArtistsSearch);
    })
});
