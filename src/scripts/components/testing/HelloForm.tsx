import * as React from 'react';

export default class HelloForm extends React.Component<IHelloFormProps, any> {
    constructor(props:IHelloFormProps){
        super(props);
    }

    public render(){
        return(
            <div>
                <input
                    value={ this.props.name }
                    onChange={ e => this.props.handleOnChange(e) }
                />
            </div>
        );
    }
}