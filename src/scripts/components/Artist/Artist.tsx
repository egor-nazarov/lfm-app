import * as React from 'react';
import {Link, Redirect, Switch} from 'react-router-dom';
import axios from "axios";

export default class Artist extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            artistAlbums: [],
            inputedArtist: "",
            artistSelected: ""
        };
    }

    componentDidMount() {
        const artistSelected = this.props.submittedArtistName;
        const replacedWhiteSpaces = artistSelected.split(' ').join('+');
        const url = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + replacedWhiteSpaces + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&format=json";
        axios.get(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                const newData = res.data.error;
                if (newData == 6) {
                    alert("Ой, кажется произошла ошибка. К сожалению, в нашей медиатеке нет альбомов этого исполнителя. Попробуйте поискать другого исполнителя");
                    window.history.back();
                } else {
                    const artistAlbums = res.data.topalbums.album;
                    this.setState({artistAlbums})
                }
            });
    }

    render() {
        return (
            <section id="artistInfo" className="page-content__container">
                <div className="albums-page__title">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#4bc7f0">
                            <path
                                d="M 19.980469 3.9902344 A 1.0001 1.0001 0 0 0 19.292969 4.2929688 L 9.2929688 14.292969 A 1.0001 1.0001 0 0 0 9.2929688 15.707031 L 19.292969 25.707031 A 1.0001 1.0001 0 1 0 20.707031 24.292969 L 11.414062 15 L 20.707031 5.7070312 A 1.0001 1.0001 0 0 0 19.980469 3.9902344 z"
                                fill="#4bc7f0"/>
                        </svg>
                        <span>Вернуться назад</span>
                    </Link>
                    <p>
                        <span><b>{this.props.submittedArtistName}</b></span>
                        <span>Выберите альбом</span>
                    </p>
                </div>
                {!this.props.transferedArtistName ? (
                    <Switch>
                        <Redirect to="/"/>
                    </Switch>
                ) : null}
                <div className="albums-page__items_wrapper">
                    {this.state.artistAlbums.map((artistAlbums: any, i: any) => <a target="_blank"
                                                                                   href={artistAlbums.url}
                                                                                   className="albums-page__single-item"
                                                                                   key={i}
                                                                                   style={{backgroundImage: "url(" + (artistAlbums.image[3]['#text']) + ")"}}>
                        <p><span>{artistAlbums.name}</span></p>
                    </a>)}
                </div>
            </section>
        );
    }
};