import React from 'react';
import css from './ModalText.css';

class ModalText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            header: ''
        }
    }

    buttonClick(e) {
        e.preventDefault();
        this.props.sendData(this.state.text, this.state.header);
    }

    render() {
        const { getData, closeModalText } = this.props;
        const { text, header } = this.state;

        return (
            <div className="backdrop">
                <div className="card">
                    <div className="card-header">
                        Editing Text
                    </div>
                    <div className="card-block">
                        <form action="" noValidate="novalidate" onSubmit={e => this.buttonClick(e)}>
                            <input 
                                className="form-control"
                                placeholder="header"
                                value={header}
                                className="form-control" id="message-text"

                                onChange={e => this.setState({
                                    header: e.target.value
                                })}
                            />
                            <textarea
                                className="form-control"
                                placeholder="body"
                                value={text}
                                className="form-control" id="message-text"

                                onChange={e => this.setState({
                                    text: e.target.value
                                })}
                            />
                            <a
                                href="#"
                                className="button-cancel"
                                onClick={closeModalText}>
                                Cancel
                            </a>
                            <button
                                href="#"
                                className="button-save"
                                type="submit">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalText;