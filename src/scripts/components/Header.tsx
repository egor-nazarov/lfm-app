import * as React from "react";

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div className="header__container">
                <div className="wrapper">
                    <p>This is the Header of test application</p>
                </div>
            </div>
        );
    }
}