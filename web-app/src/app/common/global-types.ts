import { ObjectId } from 'mongodb';

export type Pedido = {
  id_pedido: Number;
  id_produto: String[];
  nome_produto: String[];
  quantidade_produto: number[];
  data_hora: Date;
  valor: number;
  status: String;
  quantidade: number[];
};

export type Categoria = {
  nome_categoria: String;
  descricao_categoria: String;
};

export type Itens = {
  _id: ObjectId | null;
  nome: String;
  descricao: String;
  imagem: File | null;
  quantidade: number;
  preco: number;
  forma_pagamento: String[];
  categoria: String[];
};

export type dataSharing = {
  item: Itens[];
  quantidade: number[];
};