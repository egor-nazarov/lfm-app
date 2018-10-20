import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Search from "./Search/Search";
import Artist from "./Artist/Artist";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

export default class ComponentsHandler extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div className="page__container">
                <Header />
                <div className="content__container wrapper">
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={500} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path="/" component={Search} />
                                    <Route path="/artist" component={Artist} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById("pageFooter")
);