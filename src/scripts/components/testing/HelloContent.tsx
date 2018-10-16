import * as React from 'react';

export default class HelloContent extends React.Component<IHelloContentProps, any>{
    constructor(props:IHelloContentProps){
        super(props);
    }

    public render(){
        return(
            <button>
                Искать { this.props.name }!
            </button>
        );
    }
}