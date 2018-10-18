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
            inputedArtist: 'Drake'
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleOnChange(event: any) : void{
        this.setState({
            placeHolder:event.target.value,
            value: event.target.value
        });
    }

    public handleSubmit(event:any) : void {
        // alert('Заготовка для ввода исполнителей: ' + this.state.value);
        // event.preventDefault();
        const inputedArtist = this.state.value;
        console.log(inputedArtist);
        this.setState({inputedArtist});
    }

    componentDidMount(){
        // console.log(this.state.inputedArtist);
        const url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + this.state.inputedArtist + "&api_key=a3057b25ed2acd6143c4543e74a2cbe6&limit=10&format=json";
        // console.log(url);
        axios.get(url)
            .then(res => {
                const artists = res.data.results.artistmatches.artist;
                this.setState({ artists });
                // console.log(artists.artist[0].image[4]['#text']);
                // console.log(artists);
            })
    }

    public render(){
        return(
            <div className="search-field__wrapper">
                <form onSubmit={this.handleSubmit}>
                    <SearchInput
                        name={ this.state.placeHolder }
                        handleOnChange={ this.handleOnChange }
                    />
                    <SearchButton
                        name ={ this.state.name }
                    />
                </form>
                <p>
                    <span>
                        Выводим значение: "{this.state.inputedArtist}" из инпута по клику
                    </span>
                </p>
                <ul>
                    { this.state.artists.map((artist:any) => <li key={ artist.listeners }>
                        <span><b>Имя исполнителя:</b> <a href={ artist.url }>{ artist.name }</a></span>
                        <p>
                            <a href={ artist.url }>
                                <img src={ artist.image[4]['#text'] } alt={ artist.name }/>
                            </a>
                        </p>
                    </li>) }
                </ul>
            </div>
        );
    }
}