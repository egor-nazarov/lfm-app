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
        this.state = {
            artistName: ""
        };
    }
    onChangeArtistValue(newArtistName:any){
        this.setState({
            artistName: newArtistName
        });
        console.log("получили и записали новый this.state в компоненте ComponentsHandler === " + this.state.artistName);
    }

    render(){
        return(
            <div className="page__container">
                <Header />
                { console.log("начальный this.state в компоненте ComponentsHandler === " + this.state.artistName) }
                <div className="wrapper">
                    <p>{ this.state.artistName ? ( "Вот мы и получили артиста: " + this.state.artistName + " из компонента SearchField" ) : null }</p>
                </div>
                <div className="content__container wrapper">
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={500} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path="/">
                                        <Search callArtistValue={ this.onChangeArtistValue.bind(this) } />
                                    </Route>
                                    <Route path="/artist" component={Artist}/>
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