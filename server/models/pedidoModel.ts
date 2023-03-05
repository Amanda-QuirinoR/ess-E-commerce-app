module.exports = () => {
  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;

  // Define um Schema
  const pedidoSchema = new Schema({
    id_pedido: String,
    id_produto: String,
    mes_ano: Date,
  });

  // Define o modelo
  const model = mongoose.model("Pedido", pedidoSchema);

  return model;
};