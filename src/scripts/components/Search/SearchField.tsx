import * as React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default class SearchField extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            artists: [],
            name: this.props.defaultName,
            value: "",
            inputedArtist: "",
            searchedArtist: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleOnChange(event: any) : void{
        this.setState({
            name:event.target.value,
            value: event.target.value
        });
    }

    public handleSubmit(event:any) : void {
        const inputedArtist = this.state.value;
        const url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + inputedArtist + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&limit=10&format=json";
        axios.get(url)
            .then(res => {
                const artists = res.data.results.artistmatches.artist;
                this.setState({ artists });
                this.setState({
                    searchedArtist: inputedArtist
                });
                this.props.callArtistValue(this.state.searchedArtist);
            });
        event.preventDefault();
    }

    public render(){
        return(
            <div className="search-field__wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="search-field__input-handler">
                        <SearchInput
                            name={ this.state.name }
                            handleOnChange={ this.handleOnChange }
                        />
                        <SearchButton
                            name ={ this.state.name }
                        />
                    </div>
                </form>
                <ul>
                    { this.state.artists.map((artist:any) => <li key={ artist.listeners }>
                        <NavLink to="/artist" activeClassName="active">
                            <span>Имя исполнителя: { artist.name }</span>
                            <img src={ artist.image[1]['#text'] } alt={ "У исполнителя " + artist.name + " отсутствует изображение" } />
                        </NavLink>
                    </li>) }
                </ul>
            </div>
        );
    }
}