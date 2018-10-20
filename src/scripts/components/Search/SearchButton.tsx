import * as React from 'react';

export default class SearchButton extends React.Component<SearchButtonProps, any>{
    public render(){
        return(
            <button
                type="submit"
                title="Искать!">
                Искать { this.props.name }
            </button>
        );
    }
}