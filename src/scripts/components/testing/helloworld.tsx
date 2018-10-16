import * as React from 'react';
import HelloForm from './HelloForm';
import HelloContent from './HelloContent';

export default class HelloWorld extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    public handleOnChange(event: any) : void{
        this.setState({name:event.target.value});
    }

    public render() {
        return (
            <div>
                <HelloForm
                    name ={ this.state.name }
                    handleOnChange ={ this.handleOnChange }
                />
                <HelloContent
                    name ={ this.state.name }
                />
            </div>
        );
    }
}