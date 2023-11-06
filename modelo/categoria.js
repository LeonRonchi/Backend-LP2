
import CategoriaDAO from "../persistencia/categoriaDAO.js";
export default class Categoria {
    #codigo //private int codigo; -> em java
    #descricao
    
    constructor(codigo=0,descricao=''){
        this.#codigo=codigo;
        this.#descricao=descricao;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo=novoCodigo;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novoDescricao){
        this.#descricao=novoDescricao;
    }

    //override do método toJSON -> cuidado que o JSON deve ser tudo maiúsculo
    toJSON(){
        return{
            codigo:this.#codigo,
            descricao:this.#descricao
        }
    }
    toString(){

    }

    //camada de modelo acessa a camada de persistencia
    async gravar(){
        const catDAO= new CategoriaDAO();
        await catDAO.gravar(this);
    }
    async alterar(){
        const catDAO= new CategoriaDAO();
        await catDAO.atualizar(this);
    }
    async excluir(){
        const catDAO= new CategoriaDAO();
        await catDAO.excluir(this);
    }
    async consultar(parametro){
        const catDAO= new CategoriaDAO();
        return await catDAO.consultar(parametro);
    }
}