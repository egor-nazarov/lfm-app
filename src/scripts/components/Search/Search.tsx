import * as React from "react";
import SearchField from './SearchField';
// import ArtistRequest from './ArtistRequest';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>Введите имя Вашего любимого исполнителя</h1>
                    <SearchField defaultName='Исполнителя' />
                    {/*<ArtistRequest/>*/}
                </div>
            </div>
        );
    }
}