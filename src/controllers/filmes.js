const produtora_controller = require("./produtora.js");
const elenco_controller = require("./elenco.js");


const db = [];

let proxId = 1;

const model = (body, id = proxId++) => {
  let ID_produtora = produtora.show(0);
  if (
    (filmes.titulo != undefined &&
      filmes.titulo != "" &&
      filmes.duracao != undefined &&
      filmes.duracao > 0 &&
      filmes.genero != "" &&
      filmes.classificacao > 0 &&
      filmes.classificacao == "L") ||
    filmes.classificacao == 10 ||
    filmes.classificacao == 12 ||
    filmes.classificacao == 14 ||
    filmes.classificacao == 16 ||
    (filmes.classificacao == 18 &&
        filmes.elenco != "" &&
      filmes.ID_produtora != undefined &&
      produtora_controller.show(filmes.ID_produtora))
  ) {
    return {
      id,
      produtora_id: filmes.ID_produtora,
      elenco_id: filme.elenco,
      titulo: filmes.titulo,
      duracao: filmes.duracao,
      genero: filmes.genero,
      classificacao_indicativa: filmes.classificacao,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (body, id) => {
  const indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    const novo = model(body, id);

    if (novo) {
      db[indice] = novo;
      return 200;
    }
  }

  return 400;
};

const destroy = (id) => {
  const indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    db.splice(indice, 1);
    return 200;
  }

  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
