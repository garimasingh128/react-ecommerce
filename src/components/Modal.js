import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer} from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom'; 

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {/* get the value params */}
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const { img, title, price } = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                        <h5>Item added to the cart</h5>
									<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt={title} className="card-img-top" />
                                        <h5>{title}</h5>
                                        <h6 className="text-muted">price: ${price}</h6>
                                        <Link to='/'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Continue Shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer 
                                                cart 
                                                onClick={() => closeModal()}
                                                className="mt-1">
                                                Your Shopping Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;