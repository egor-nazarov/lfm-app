import * as React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import axios from "axios";

export default class SearchField extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            artists: [],
            name: this.props.defaultName,
            placeHolder: "введите исполнителя",
            value: "",
            inputedArtist: ""
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
            });
        event.preventDefault();
    }

    public render(){
        return(
            <div className="search-field__wrapper">
                <form onSubmit={this.handleSubmit}>
                    <SearchInput
                        name={ this.state.name }
                        handleOnChange={ this.handleOnChange }
                    />
                    <SearchButton
                        name ={ this.state.name }
                    />
                </form>
                <ul>
                    { this.state.artists.map((artist:any) => <li key={ artist.listeners }>
                        <span><b>Имя исполнителя:</b> <a href={ artist.url }>{ artist.name }</a></span>
                        <p>
                            <a target="_blank" href={ artist.url } title={ "Посетить страницу " + artist.name }>
                                <img src={ artist.image[4]['#text'] } alt={ "У исполнителя " + artist.name + " отсутствует изображение" } />
                            </a>
                        </p>
                    </li>) }
                </ul>
            </div>
        );
    }
}