const filme_controller = require("./filmes.js");
const sala_controller = require("./sala.js");

const db = [];
let nextId = 1;

const validarCadeiras = (cadeira) => {
  const cadeirasValidas = Array.from({ length: 10 }, (_, i) => `${i + 1}a`);
  return cadeirasValidas.includes(cadeira);
};

const model = (sessao, id = nextId++) => {
  
  if (
    sessao.data > 0 &&
    sessao.hora > 0 &&
    sessao.filme_id != undefined &&
    sessao.sala_id != undefined &&
    filme_controller.show(sessao.filme_id) &&
    sala_controller.show(sessao.sala_id) &&
    sessao.cadeiras && validarCadeiras(sessao.cadeiras)
  ) {
    return {
      id,
      data: sessao.data,
      hora: sessao.hora,
      filme_id: sessao.filme_id,
      sala_id: sessao.sala_id,
      cadeiras: sessao.cadeiras
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
