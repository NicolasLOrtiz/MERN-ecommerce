import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductPage(props: { match: { params: { id: string; }; }; }) {
	const product = data.products.find((x) => x.id === props.match.params.id);

	if (!product) {
		return <div>Produto Não Encontrado</div>;
	}

	return (
		<section>
			<Link to="/">Voltar ao Inicio</Link>
			<div className="row top">
				<div className="col-2">
					<img src={product.image} alt={product.name} className="large"></img>
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

	);
}