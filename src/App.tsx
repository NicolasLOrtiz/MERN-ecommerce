import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<BrowserRouter>
			<section className="grid-container">
				<header className="row">
					<div>
						<a className="brand" href="/">Woodland</a>
					</div>
					<div>
						<a href="/cart">Carrinho</a>
						<a href="/singin">Entrar</a>
					</div>
				</header>
				<main>
					<Route path="/product/:id" component={ProductPage}></Route>
					<Route path="/" component={HomePage} exact></Route>
				</main>
				<footer className="row center">Todos os direitos reservados</footer>
			</section>
		</BrowserRouter>
	);
}

export default App;
