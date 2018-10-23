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
            artistName: "",
            artistSelected: ""
        };
    }
    onChangeArtistValue(newArtistName:any){
        this.setState({
            artistName: newArtistName
        });
    }
    onSelectArtistValue(newArtistSelected:any){
        this.setState({
            artistSelected: newArtistSelected
        });
    }

    render(){
        return(
            <div className="page__container">
                <Header transferedArtistName={ this.state.artistSelected } />
                <div className="content__container wrapper">
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={500} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path="/">
                                        <Search
                                            callArtistValue={ this.onChangeArtistValue.bind(this) }
                                            callArtistSelection={ this.onSelectArtistValue.bind(this) }
                                            transferedArtistName={ this.state.artistName }
                                        />
                                    </Route>
                                    <Route path="/artist">
                                        <Artist
                                            transferedArtistName={ this.state.artistName }
                                            submittedArtistName={ this.state.artistSelected }
                                        />
                                    </Route>
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