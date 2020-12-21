import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;

		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
				<div className="card mb-3">
					<ProductConsumer>
						{(value) => (
							<div
								className="img-container p-5"
								onClick={() => {
									value.handleDetail(id);
								}}
							>
								<Link to="/details">
									<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt={title} className="card-img-top" />
								</Link>
								<button
									
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}
								>
                                    									<img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_960_720.png" style={{width: 50, height: 50}} />

									{inCart ? (
										<p className="text-capitalize mb-0 small" disabled>
											{' '}
											 In Cart
										</p>
									) : (
										<p className="text-capitalize mb-0 small" disabled>
											{' '}
											Not In Cart
										</p>
									)}
								</button>
							</div>
						)}
					</ProductConsumer>

					{/* Card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="mb-0">
							<span className="mr-1">£</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// Set up PropTypes to check for propTypes and make them required
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number
		//inCart: PropTypes.boolean
	})
};

const ProductWrapper = styled.div`
	.card {
		border-radius: 0;
		border-color: transparent;
		transition: all .25s linear;
	}
	.card-footer {
		border-top: transparent;
		background: transparent;
		transition: all .25s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(247, 247, 247);
			box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.card-img-top {
		transition: all .25s linear;
	}
	.cart-btn {
		cursor: pointer;
		position: absolute;
		right: 0;
		bottom: 0;
		border: none;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		color: var(--mainWhite);
		font-size: 1.35rem;
		transition: all .25s linear;
		&:focus {
			outline: none;
		}
		transform: translate(100%, 100%);
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
`;
