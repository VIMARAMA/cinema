const db = [];
let nextId = 1;
const sessao_controller = require("./sessao");
const funcionarios_controller = require("./funcionarios");
const pipoca_controller = require("./pipoca");

const model = (bilheteria, id = nextId++) => {
  if (
    sessao_controller.show(bilheteria.id_sessao) &&
    funcionarios_controller.show(bilheteria.id_funcionario) &&
    pipoca_controller.show(bilheteria.id_pipoca)
  ) {
    return {
      id,
      sessao: bilheteria.id_sessao,
      funcionario: bilheteria.id_funcionario,
      pipoca: bilheteria.id_pipoca,
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
