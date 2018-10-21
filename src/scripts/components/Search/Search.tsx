import * as React from "react";
import SearchField from './SearchField';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            artistName: "",
            artistSelected: "",
        };
    }

    onChangeArtistValue(newArtistName:any){
        this.setState({
            artistName: newArtistName
        });
        this.props.callArtistValue(this.state.artistName);
    }
    onSelectArtistValue(newArtistSelected:any){
        this.setState({
            artistSelected: newArtistSelected
        });

        this.props.callArtistSelection(this.state.artistSelected);
    }

    render() {
        return (
            <section id="pageSearch" className="page-content__container">
                <h1>Давайте вместе поищем вашего любимого исполнителя</h1>
                <SearchField
                    defaultName={ this.state.name }
                    callArtistValue={ this.onChangeArtistValue.bind(this) }
                    callArtistSelection={ this.onSelectArtistValue.bind(this) }
                />
            </section>
        );
    }
}