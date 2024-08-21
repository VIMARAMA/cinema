const db = [];
let nextId = 1;
const sessao_controller = require("./sessao");

const model = (cliente, id = nextId++) => {
  if (
    cliente.nome != undefined &&
    cliente.nome != "" &&
    sessao_controller.show(cliente.id_sessao)
  ) {
    return {
      id,
      nome: cliente.nome,
      sessao: cliente.id_sessao,
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

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;

    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
