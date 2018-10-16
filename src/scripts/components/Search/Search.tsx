import * as React from "react";
import SearchField from './SearchField';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>Заготовка компонента поиска на языке программирования!</h1>
                    <SearchField defaultName='Исполнителя' />
                    {/*<ArtistRequest/>*/}
                </div>
            </div>
        );
    }
}