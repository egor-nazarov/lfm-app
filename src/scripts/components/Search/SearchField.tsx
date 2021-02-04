import * as React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default class SearchField extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            artists: [],
            name: this.props.defaultName,
            value: "",
            searchedArtist: "",
            selectedArtist: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleOnChange(event: any): void {
        this.setState({
            name: event.target.value,
            value: event.target.value
        });
    }

    public handleSubmit(event: any): void {
        const inputedArtist = this.state.value;
        const url = "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + inputedArtist + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&format=json";
        axios.get(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                const artists = res.data.results.artistmatches.artist;
                const emptyRequest = res.data.results.artistmatches.artist;
                if (emptyRequest.length == 0) {
                    alert("Ой, что-то пошло не так. Введите, пожалуйста, корректное название исполнителя!");
                } else {
                    this.setState({artists});
                    this.setState({
                        searchedArtist: inputedArtist
                    });
                    this.props.callArtistValue(this.state.searchedArtist);
                }
            });
        event.preventDefault();
    }

    onClickArtistSelect(artist: any): void {
        const catchedArtist = artist.name;
        this.props.callArtistSelected(catchedArtist);
    }

    componentWillMount() {
        if (this.props.transferedArtistName) {
            const inputedArtist = this.props.transferedArtistName;
            const url = "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + inputedArtist + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&format=json";
            axios.get(url, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    const artists = res.data.results.artistmatches.artist;
                    this.setState({artists});
                    this.setState({
                        searchedArtist: inputedArtist
                    });
                    this.props.callArtistValue(this.state.searchedArtist);
                });
        }
    }

    public render() {
        return (
            <div className="search-field__wrapper">
                <form onSubmit={this.handleSubmit}>
                    <p>Введите имя <br/>исполнителя</p>
                    <div className="search-field__input-handler">
                        <SearchInput
                            name={this.state.name}
                            handleOnChange={this.handleOnChange}
                        />
                        <SearchButton
                            name={this.state.name}
                        />
                    </div>
                </form>
                <ul>
                    {this.state.artists.map((artist: any, i: any) => <li key={i}>
                        {artist.image[1]['#text'] ? (
                            <NavLink
                                onClick={this.onClickArtistSelect.bind(this, artist)}
                                to="/artist"
                                activeClassName="active"
                            >
                                <p>
                                    <span>{artist.name}</span>
                                </p>
                                <img src={artist.image[1]['#text']}
                                     alt={"К сожалению, в нашей медиатеке нет изображений исполнителя " + artist.name}/>
                            </NavLink>
                        ) : null}
                    </li>)}
                </ul>
            </div>
        );
    }
}