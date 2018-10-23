import * as React from 'react';
import {Link, Redirect, Switch} from 'react-router-dom';
import axios from "axios";

export default class Artist extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            artistAlbums: [],
            inputedArtist: "",
            artistSelected: ""
        };
    }

    componentDidMount()
    {
        const artistSelected = this.props.submittedArtistName;
        const url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistSelected + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&format=json";
        axios.get(url)
            .then(res => {
                const artistAlbums = res.data.topalbums.album;
                { artistAlbums ? (this.setState({ artistAlbums })) : console.log("пустое значение") }
            });
    }

    render() {
        return (
            <section id="artistInfo" className="page-content__container">
                <div className="albums-page__title">
                    <Link to="/" >
                        <span>Вернуться назад</span>
                    </Link>
                    <p>
                        <span>Добро пожаловать на страницу исполнителя <b>{ this.props.submittedArtistName }</b>!</span>
                        <span>Выберите интересующий вас альбом</span>
                    </p>
                </div>
                { !this.props.transferedArtistName ? (
                    <Switch>
                        <Redirect  to="/" />
                    </Switch>
                ) : null }
                <div className="albums-page__items_wrapper">
                    { this.state.artistAlbums.map((artistAlbums:any, i:any) => <a target="_blank" href={ artistAlbums.url } className="albums-page__single-item" key={ i }>
                        <p>Имя альбома: { artistAlbums.name }</p>
                        <img src={ artistAlbums.image[2]['#text'] } alt={ "К сожалению, в нашей медиатеке нет изображений для данного альбома: " + artistAlbums.name } />
                    </a>) }
                </div>
            </section>
        );
    }
};