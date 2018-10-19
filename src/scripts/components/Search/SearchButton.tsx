import * as React from 'react';

export default class SearchButton extends React.Component<SearchButtonProps, any>{
    constructor(props:SearchButtonProps){
        super(props);
    }

    public render(){
        return(
            <button type="submit" title="Искать!">
                Искать { this.props.name }!
            </button>
        );
    }
}