import * as React from "react";
import SearchField from './SearchField';

export default class Search extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <section id="pageSearch" className="page-content__container">
                <div className="example-container">
                    <div className="wrapper">
                        <h1>Введите имя Вашего любимого исполнителя</h1>
                        <SearchField defaultName='' />
                    </div>
                </div>
            </section>
        );
    }
}