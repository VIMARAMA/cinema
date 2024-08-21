const bilheteria_controller = require("./bilheteria.js");

const db = [];

let proxId = 1;

const model = (body, id = proxId++) => {
  let ID_bilheteria = bilheteria.show(0);
  if (
    cinema.nome != undefined &&
    cinema.nome != "" &&
    cinema.rua != "" &&
    cinema.numero != "" &&
    cinema.nome > 0 &&
    cinema.bairro != "" &&
    cinema.ID_bilheteria != undefined &&
    bilheteria_controller.show(cinema.ID_bilheteria)
  ) {
    return {
      id,
      bilheteria_id: cinema.ID_bilheteria,
      nome: cinema.nome,
      rua: cinema.rua,
      numero: cinema.numero,
      bairro: cinema.bairro,
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
