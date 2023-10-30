export default class Produto{
    #codigo;
    #descricao;
    #precoCusto;
    #precoVenda;
    #dataValidade;
    #qtdEstoque;
    #categoria

    constructor(codigo=0, descricao="",precoCusto=0,precoVenda=0,dataValidade="",qtdEstoque=0,categoria={}){
        this.#codigo=codigo;
        this.#descricao=descricao;
        this.#precoCusto=precoCusto;
        this.#precoVenda=precoVenda;
        this.#dataValidade=dataValidade;
        this.#qtdEstoque=qtdEstoque;
        this.#categoria=categoria;
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

    get precoCusto(){
        return this.#precoCusto
    }
    set precoCusto(novoCusto){
        this.#precoCusto = novoCusto
    }

    get precoVenda(){
        return this.#precoVenda
    }
    set precoVenda(novoVenda){
        this.#precoVenda = novoVenda
    }

    get dataValidade(){
        return this.#dataValidade;
    }
    set dataValidade(novaData){
        this.#dataValidade=novaData;
    }

    get qtdEstoque(){
        return this.#qtdEstoque;
    }
    set qtdEstoque(novoQtde){
        this.#qtdEstoque=novoQtde;
    }

    get categoria(){
        return this.#categoria;
    }
    set categoria(novoCategoria){
        this.#categoria=novoCategoria;
    }

    toJSON(){
        return{
            codigo:this.#codigo,
            descricao:this.#descricao,
            precoCusto:this.#precoCusto,
            precoVenda:this.#precoVenda,
            dataValidade:this.#dataValidade,
            qtdEstoque:this.#qtdEstoque,
            categoria:this.#categoria.toJSON()
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