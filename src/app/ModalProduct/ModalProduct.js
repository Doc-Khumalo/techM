import React from 'react';
import css from './ModalProduct.css';
import productResults from '../../../products';

class ModalProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            headerImages: '',
            products: productResults
        }
    }

    buttonClick(e) {
        e.preventDefault();
        this.props.sendProducts(this.state.product, this.state.headerImages);
    }

    render() {
        console.log(this.state.products)
        const { getProducts, closeModalProduct } = this.props;
        const { product, products, headerImages } = this.state;

        return (
            <div className="backdrop">
                <div className="card">
                    <div className="card-header">
                        Editing Products
                    </div>
                    
                    <div className="block-wrapper group">
                    {products.productList.map((item, i) => {
                        return (
                                <div className="image-wrapper" key={i}>
                                    <img className="images" src= {item.image} />
                                    <p>{item.title} </p>
                                    <p>{item.price}</p>
                                </div>
                        )
                    })}
                    </div>

                    <div className="card-block">
                        <a
                            href="#"
                            className="button-cancel"
                            onClick={closeModalProduct}>
                            Cancel
                            </a>
                        <button
                            href="#"
                            className="button-save"
                            onClick={e => this.buttonClick(e)}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalProduct;