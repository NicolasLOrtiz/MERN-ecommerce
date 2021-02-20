import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingSpinner from '../components/LoadingSpinner';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductPage(props: { match: { params: { id: string; }; }; }) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const productDetails = useSelector((state: {productDetails: any}) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(detailsProduct(productId));
	}, [dispatch, productId]);

	return (
		<div>
			{loading ? (
				<LoadingSpinner></LoadingSpinner>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<section>
					<Link to="/">Voltar ao Inicio</Link>
					<div className="row top">
						<div className="col-2">
							{/* <img src={product.image} alt={product.name} className="large"></img> */}
						</div>
						<div className="col-1">
							<ul>
								<li><h1>{product.name}</h1></li>
								<li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
								<li>Preço: R${product.price}</li>
								<li>Descrição: <p>{product.description}</p></li>
							</ul>
						</div>
						<div className="col-1">
							<div className="cart-card" >
								<div className="cart-card-content">
										<div className="row">
											<h4>Preço</h4>
											<span className="cart-card-price">R${product.price}</span>
										</div>
										<div  className="row">
											<h4>Estoque</h4>
											<div>
												{product.contInStock > 0 ? (
													<span className="success">Em Estoque</span>
												) : (
														<span className="danger">Indisponível</span>
													)}
											</div>
										</div>
									<button className="secondary block">Adicionar ao Carrinho</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
		

	);
}
