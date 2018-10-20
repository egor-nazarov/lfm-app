import * as React from "react";
import SearchField from './SearchField';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            artistName: ""
        };
    }

    onChangeArtistValue(newArtistName:any){
        this.setState({
            artistName: newArtistName
        });
        this.props.callArtistValue(this.state.artistName);
    }

    render() {
        return (
            <section id="pageSearch" className="page-content__container">
                <h1>Давайте вместе поищем вашего любимого исполнителя</h1>
                <SearchField
                    defaultName={ this.state.name }
                    callArtistValue={ this.onChangeArtistValue.bind(this) }
                />
            </section>
        );
    }
}