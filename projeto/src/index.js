import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<h1>Projeto</h1>
		<h2>Calculadora</h2>
		<h2>Mac Clone</h2>
		<Calculator />
		<h3>Fabio Carneiro</h3>
	</React.StrictMode>
);


reportWebVitals();
