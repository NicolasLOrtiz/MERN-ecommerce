import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
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
        <div className="row center">
			{data.product.map((product) => (
			<Product key={product._id} product={product}></Product>
		  ))}
        </div>
      </main>
      <footer className="row center">Todos os direitos reservados</footer>
    </section>
  );
}

export default App;
