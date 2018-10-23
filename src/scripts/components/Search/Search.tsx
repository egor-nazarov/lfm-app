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
        const catchedArtist = newArtistSelected;
        this.props.callArtistSelection(catchedArtist);
    }

    render() {
        return (
            <section id="pageSearch" className="page-content__container">
                <h1>Давайте вместе поищем вашего любимого исполнителя</h1>
                { this.props.transferedArtistName ? ( <p>Последнее что вы искали <b>{ this.props.transferedArtistName }</b></p> ) : null }
                <SearchField
                    defaultName={ this.state.name }
                    callArtistValue={ this.onChangeArtistValue.bind(this) }
                    callArtistSelected={ this.onSelectArtistValue.bind(this) }
                    transferedArtistName={ this.props.transferedArtistName }
                />
            </section>
        );
    }
}