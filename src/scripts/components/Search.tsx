import * as React from "react";

export interface SearchProps {
    compiler: string;
    framework: string;
}

export class Search extends React.Component<SearchProps, {}> {
    render() {
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>This is the Search component from {this.props.compiler} and {this.props.framework}!</h1>
                </div>
            </div>
        );
    }
}