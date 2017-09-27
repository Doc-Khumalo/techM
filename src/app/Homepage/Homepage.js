import React from 'react';
import './Homepage.css';
import ModalText from '../ModalText/ModalText';
import ModalProduct from '../ModalProduct/ModalProduct';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTextOpen: false,
            modalProductOpen: false,
            productEditor: '',
            textEditor: '',
            textHeader: '',
            productsHeader: ''
        }
    }

    getData(data, header) {
        this.setState({ textEditor: data, textHeader: header })
        this.closeModalText();
    }

    getProducts(products, headerImages) {
        this.setState({ productEditor: products, productsHeader: headerImages })
        this.closeModalProduct();
    }

    openModalText() {
        this.setState({
            modalTextOpen: true
        });
    }

    closeModalText() {
        this.setState({
            modalTextOpen: false
        });
    }

    openModalProduct() {
        this.setState({
            modalProductOpen: true
        });
    }

    closeModalProduct() {
        this.setState({
            modalProductOpen: false
        });
    }

    render() {

        const { modalTextOpen, modalProductOpen, textHeader, productsHeader, textEditor, productEditor } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="wrapper">
                        <h1>Article Editor</h1>
                        <div className="card">
                            <div className="card-header">
                                Text
                            </div>
                            <a href="#" className="card-block" onClick={this.openModalText.bind(this)}>
                                <h4>{textHeader}</h4>
                                <span className="card-text">{textEditor}</span>
                            </a>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                Products
                            </div>
                            <a href="#" className="card-block" onClick={this.openModalProduct.bind(this)}>
                                <h4>{productsHeader}</h4>
                                <span className="card-text">{productEditor}</span>
                            </a>
                        </div>

                        {/* check if the modal is open then pass props and expose function to the Modal component */}
                        {modalTextOpen
                            ? <ModalText closeModalText={this.closeModalText.bind(this)} sendData={this.getData.bind(this)} />
                            : ''}

                        {/* check if the modal is open then pass props and expose function to the Modal component */}
                        {modalProductOpen
                            ? <ModalProduct closeModalProduct={this.closeModalProduct.bind(this)} sendProducts={this.getProducts.bind(this)} />
                            : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;