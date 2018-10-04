import * as React from "react";

type SearchProps = { };
type SearchStates = { value: string };
export default class Search extends React.Component<SearchProps, SearchStates> {
    // constructor(props:any) {
    //     super(props);
    //     this.state={name: "cool"}
    // }

    render() {
        console.log(this.props);
        return (
            <div className="example-container">
                <div className="wrapper">
                    <h1>Заготовка компонента поиска на языке программирования!</h1>
                    {/*{this.state.text}*/}
                    {/*<input type="text" placeholder="Введите имя исполнителя" />*/}
                    {/*<button onClick={*/}
                        {/*(e) => {*/}
                            {/*this.clicked("hello");*/}
                        {/*}}>*/}
                        {/*Искать*/}
                    {/*</button>*/}
                    {/*<div>{this.state.name}</div>*/}
                    <button>Искать</button>
                </div>
            </div>
        );
    }
}