import * as React from 'react';

export default class SearchInput extends React.Component<SearchInputProps, any> {
    constructor(props:SearchInputProps){
        super(props);
    }

    public render(){
        return(
            <div>
                <label>
                    <input
                        type="text"
                        value={ (!this.props.name) ? "введите исполнителя" : this.props.name }
                        onChange={ e => this.props.handleOnChange(e) }
                        title="Введите пожалуйста значение"
                    />
                </label>
            </div>
        );
    }
}