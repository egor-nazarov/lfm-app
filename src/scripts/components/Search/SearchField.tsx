import * as React from 'react';
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

export default class SearchField extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    public handleOnChange(event: any) : void{
        this.setState({name:event.target.value});
    }

    public render(){
        return(
            <div>
                <SearchInput
                    name={ this.state.name }
                    handleOnChange={ this.handleOnChange }
                />
                <SearchButton
                    name ={ this.state.name }
                />
            </div>
        );
    }
}