import React from 'react';
import './Homepage.css';
import Modal from '../Modal/Modal';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            textEditor: '',
            textHeader: ''
        }
    }

    getData(data, header) {
        this.setState({ textEditor: data, textHeader: header })
        this.closeModal();
    }

    openModal() {
        this.setState({
            modalOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false
        });
    }

    render() {

        const { modalOpen } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="wrapper">
                        <h1>Article Editor</h1>
                        <div className="card">
                            <div className="card-header">
                                Text
                            </div>
                            <a href="#" className="card-block" onClick={this.openModal.bind(this)}>
                                <h4>{this.state.textHeader}</h4>
                                <span className="card-text">{this.state.textEditor}</span>
                            </a>
                        </div>

                        {/* check if the modal is open then pass props and expose function to the Modal component */}
                        {modalOpen
                            ? <Modal closeModal={this.closeModal.bind(this)} sendData={this.getData.bind(this)} />
                            : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;