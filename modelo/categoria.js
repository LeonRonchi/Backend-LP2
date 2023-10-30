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

    }
    async alterar(){

    }
    async excluir(){

    }
    async consultar(){

    }
}