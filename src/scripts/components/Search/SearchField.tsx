import * as React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import axios from "axios";

export default class SearchField extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            name: this.props.defaultName,
            artists: [],
            value:''
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
        alert('Заготовка для ввода исполнителей: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount(){
        const url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Coldplay&user=test&api_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=10&format=json&callback=?";
        const example = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then(res => {
                console.log(res.data);
            })
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
            </div>
        );
    }
}