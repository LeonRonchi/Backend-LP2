//como manipular categoria
import Categoria from "../modelo/categoria.js";
import conectar from "./conexao.js";

export default class CategoriaDAO{  //data acess object -> objeto de acesso aos dados
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const sql = "INSERT INTO categoria(cat_descricao) VALUES(?)";
            const parametros = [categoria.descricao];
            const conexao = await conectar(); //retorna uma conexao
            const retorno = await conexao.execute(sql,parametros); //prepara a sql e executa
            categoria.id = retorno[0].insertID; //só gera o ID para ser gravado depois
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(categoria){
        if(categoria instanceof Categoria){
            const sql = "UPDATE categoria SET cat_descricao = ? WHERE cat_codigo = ?";
            const parametros = [categoria.descricao,categoria.codigo];
            const conexao = await conectar(); //retorna uma conexao
            await conexao.execute(sql,parametros); //prepara a sql e executa
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(categoria){
        if(categoria instanceof Categoria){
            const sql = "DELETE FROM categoria WHERE cat_codigo = ?";
            const parametros = [categoria.descricao,categoria.codigo];
            const conexao = await conectar(); //retorna uma conexao
            await conexao.execute(sql,parametros); //prepara a sql e executa
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(paramConsul){
        let sql='';
        let parametros='';
        if(!isNaN(parseInt(paramConsul))){
            //consultar pelo codigo
            sql = 'SELECT * FROM categoria WHERE cat_codigo = ? order by cat_descricao';
            parametros = [paramConsul];
            const conexao = await conectar(); //retorna uma conexao
            await conexao.execute(sql,parametros); //prepara a sql e executa
            global.poolConexoes.releaseConnection(conexao);
        }
        else{
            //consulta pela descricao
            if(!paramConsul){
                paramConsul='';
            }
            else{
                sql = 'SELECT * FROM categria WHERE cat_descricao like %?%';
                paramentros = ['%'+paramConsul+'%'];
            }
        }
        const conexao = await conectar();
        const [registros,campos] = conexao.execute(sql,parametros);
        let listaCategorias = [];
        for (const registro of registros){
            const categoria = new Categoria(registro.cat_codigo,registro.cat_descricao);
            listaCategorias.push(categoria);
        }
        return listaCategorias;
    }
}