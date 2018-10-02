import * as React from "react";

export interface FooterProps {}

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        return (
            <div className="wrapper">
                <p>This is the footer of test application</p>
            </div>
        );
    }
}