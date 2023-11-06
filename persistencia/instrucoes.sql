CREATE DATABASE meubancobackend;
USE meubancobackend;
CREATE TABLE categoria(
    cat_codigo INT NOT NULL AUTO_INCREMENT,
    cat_descricao VARCHAR(100) NOT NULL,
    CONSTRAINT pk_categoria PRIMARY KEY(cat_codigo)
);
CREATE TABLE produto(
    prod_codigo INT NOT NULL AUTO_INCREMENT,
    prod_descricao VARCHAR(100) NOT NULL,
    prod_precoCusto DECIMAL(10,2) NOT NULL DEFAULT 0,
    prod_precoVenda DECIMAL(10,2) NOT NULL DEFAULT 0,
    prod_dataValidade DATE,
    prod_qtdeEstoque DECIMAL(10,2) NOT NULL DEFAULT 0,
    prod_cat_codigo INT NOT NULL,
    CONSTRAINT pk_produto PRIMARY KEY(prod_codigo),
    CONSTRAINT fk_cat_codigo FOREIGN KEY(prod_cat_codigo) REFERENCES categoria(cat_codigo)
);