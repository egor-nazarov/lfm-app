import * as React from "react";
import axios from 'axios';

export default class ArtistRequest extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
            .then(json => json.data.results.map((result:any) => (
                {
                    name: `${result.name.first} ${result.name.last}`,
                    id: result.registered
                }
            )))
            .then(newData => this.setState({users: newData,  store: newData}))
            .catch(error => alert(error))
    }

    public render() {
        return (
            <div>
                new line from artist request
            </div>
        );
    }
}

// http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Coldplay&user=test&api_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=10&format=json&callback=?
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