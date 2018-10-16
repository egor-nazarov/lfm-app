import * as React from 'react';

export default class SearchInput extends React.Component<SearchInputProps, any> {
    constructor(props:SearchInputProps){
        super(props);
    }

    public render(){
        return(
            <div>
                <input
                    value={ this.props.name }
                    onChange={ e => this.props.handleOnChange(e) }
                    placeholder="Введите исполнителя"
                />
            </div>
        );
    }
}