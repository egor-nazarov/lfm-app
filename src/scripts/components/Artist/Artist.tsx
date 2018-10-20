import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Artist extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <section id="artistInfo" className="page-content__container">
                <div className="example-container">
                    <div className="wrapper">
                        <p>Вы попали на страницу конкретного артиста</p>
                        <Link to="/">
                            <button>Вернуться назад</button>
                        </Link>
                    </div>
                </div>
            </section>
    );
    }
};