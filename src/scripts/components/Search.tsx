import * as React from "react";
import ArtistRequest from './ArtistRequest';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        // this.state={name: "cool"}
    }

    render() {
        console.log(this.props);
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>Заготовка компонента поиска на языке программирования!</h1>
                    <ArtistRequest/>
                </div>
            </div>
        );
    }
}