import * as React from 'react';

export default class SearchInput extends React.Component<SearchInputProps, any> {
    public render(){
        return(
            <label htmlFor="input-button">
					<input
                        type="text"
                        id="input-button"
                        value={ this.props.name }
                        placeholder="Введите исполнителя"
                        onChange={ e => this.props.handleOnChange(e) }
                        title="Введите пожалуйста значение"
                    />
            </label>
        );
    }
}