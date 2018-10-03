import * as React from "react";

export interface SearchProps {
    compiler: string;
    framework: string;
}

export default class Search extends React.Component<SearchProps, {}> {
    render() {
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>Заготовка компонента поиска на языке программирования {this.props.compiler} и фреймворке {this.props.framework}!</h1>
                </div>
            </div>
        );
    }
}