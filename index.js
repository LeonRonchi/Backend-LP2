import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';

const categoria = new Categoria(1,'Calçados Infantis');
const produto = new Produto(1,'Tênix Infantil AllStar',55.36,159.99,'Indeterminada',10,categoria);
console.log(produto.toJSON());