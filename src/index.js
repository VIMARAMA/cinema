const express = require("express");
const app = express();
const port = 3500;

const bilheteria_controller = require("./controllers/bilheteria.js");
const cinema_controller = require("./controllers/cinema.js");
const cliente_controller = require("./controllers/cliente.js");
const elenco_controller = require("./controllers/elenco.js");
const filmes_controller = require("./controllers/filmes.js");
const funcionarios_controller = require("./controllers/funcionarios.js");
const produtora_controller = require("./controllers/produtora.js");
const rede_controller = require("./controllers/rede.js");
const sala_controller = require("./controllers/sala.js");
const sessao_controller = require("./controllers/sessao.js");


app.use(express.json());

// GERENCIAMENTO BILHETERIA

app.post("/bilheteria", (req, res) => {
  const bilheteria = req.body;
  const code = bilheteria_controller.store(bilheteria);
  res.status(code).json();
});

app.get("/bilheteria", (req, res) => {
  const bilheterias = bilheteria_controller.index();
  res.json(bilheterias);
});

app.get("/bilheteria/:id", (req, res) => {
  const bilheteria = bilheteria_controller.show(req.params.id);
  res.json(bilheteria);
});

app.put("/bilheteria/:id", (req, res) => {
  const bilheteria = req.body;
  const code = bilheteria_controller.update(req.params.id, bilheteria);
  res.status(code).json();
});

app.delete("/bilheteria/:id", (req, res) => {
  bilheteria_controller.destroy(req.params.id);
  res.json();
});


// GERENCIAMENTO CINEMA

app.post("/cinema", (req, res) => {
    const cinema = req.body;
    const code = cinema_controller.store(cinema);
    res.status(code).json();
  });
  
  app.get("/cinema", (req, res) => {
    const cinemas = cinema_controller.index();
    res.json(cinemas);
  });
  
  app.get("/cinema/:id", (req, res) => {
    const cinema = cinema_controller.show(req.params.id);
    res.json(cinema);
  });
  
  app.put("/cinema/:id", (req, res) => {
    const cinema = req.body;
    const code = cinema_controller.update(req.params.id, cinema);
    res.status(code).json();
  });
  
  app.delete("/cinema/:id", (req, res) => {
    cinema_controller.destroy(req.params.id);
    res.json();
  });


// GERENCIAMENTO CLIENTE

app.post("/cliente", (req, res) => {
    const cliente = req.body;
    const code = cliente_controller.store(cliente);
    res.status(code).json();
  });
  
  app.get("/cliente", (req, res) => {
    const clientes = cliente_controller.index();
    res.json(clientes);
  });
  
  app.get("/cliente/:id", (req, res) => {
    const cliente = cliente_controller.show(req.params.id);
    res.json(cliente);
  });
  
  app.put("/cliente/:id", (req, res) => {
    const cliente = req.body;
    const code = cliente_controller.update(req.params.id, cliente);
    res.status(code).json();
  });
  
  app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id);
    res.json();
  });


// GERENCIAMENTO ELENCO

app.post("/elenco", (req, res) => {
    const elenco = req.body;
    const code = elenco_controller.store(elenco);
    res.status(code).json();
  });
  
  app.get("/elenco", (req, res) => {
    const elencos = elenco_controller.index();
    res.json(elencos);
  });
  
  app.get("/elenco/:id", (req, res) => {
    const elenco = elenco_controller.show(req.params.id);
    res.json(elenco);
  });
  
  app.put("/elenco/:id", (req, res) => {
    const elenco = req.body;
    const code = elenco_controller.update(req.params.id, elenco);
    res.status(code).json();
  });
  
  app.delete("/elenco/:id", (req, res) => {
    elenco_controller.destroy(req.params.id);
    res.json();
  });


// GERENCIAMENTO FILMES

app.post("/filmes", (req, res) => {
    const filmes = req.body;
    const code = filmes_controller.store(filmes);
    res.status(code).json();
  });
  
  app.get("/filmes", (req, res) => {
    const filmess = filmes_controller.index();
    res.json(filmess);
  });
  
  app.get("/filmes/:id", (req, res) => {
    const filmes = filmes_controller.show(req.params.id);
    res.json(filmes);
  });
  
  app.put("/filmes/:id", (req, res) => {
    const filmes = req.body;
    const code = filmes_controller.update(req.params.id, filmes);
    res.status(code).json();
  });
  
  app.delete("/filmes/:id", (req, res) => {
    filmes_controller.destroy(req.params.id);
    res.json();
  });
  

// GERENCIAMENTO FUNCIONÁRIOS

app.post("/funcionarios", (req, res) => {
    const funcionarios = req.body;
    const code = funcionarios_controller.store(funcionarios);
    res.status(code).json();
  });
  
  app.get("/funcionarios", (req, res) => {
    const funcionarios = funcionarios_controller.index();
    res.json(funcionarios);
  });
  
  app.get("/funcionarios/:id", (req, res) => {
    const funcionarios = funcionarios_controller.show(req.params.id);
    res.json(funcionarios);
  });
  
  app.put("/funcionarios/:id", (req, res) => {
    const funcionarios = req.body;
    const code = funcionarios_controller.update(req.params.id, funcionarios);
    res.status(code).json();
  });
  
  app.delete("/funcionarios/:id", (req, res) => {
    funcionarios_controller.destroy(req.params.id);
    res.json();
  });
  

// GERENCIAMENTO PRODUTORA

app.post("/produtora", (req, res) => {
    const produtora = req.body;
    const code = produtora_controller.store(produtora);
    res.status(code).json();
  });
  
  app.get("/produtora", (req, res) => {
    const produtoras = produtora_controller.index();
    res.json(produtoras);
  });
  
  app.get("/produtora/:id", (req, res) => {
    const produtora = produtora_controller.show(req.params.id);
    res.json(produtora);
  });
  
  app.put("/produtora/:id", (req, res) => {
    const produtora = req.body;
    const code = produtora_controller.update(req.params.id, produtora);
    res.status(code).json();
  });
  
  app.delete("/produtora/:id", (req, res) => {
    produtora_controller.destroy(req.params.id);
    res.json();
  });


// GERENCIAMENTO REDE

app.post("/rede", (req, res) => {
    const rede = req.body;
    const code = rede_controller.store(rede);
    res.status(code).json();
  });
  
  app.get("/rede", (req, res) => {
    const redes = rede_controller.index();
    res.json(redes);
  });
  
  app.get("/rede/:id", (req, res) => {
    const rede = rede_controller.show(req.params.id);
    res.json(rede);
  });
  
  app.put("/rede/:id", (req, res) => {
    const rede = req.body;
    const code = rede_controller.update(req.params.id, rede);
    res.status(code).json();
  });
  
  app.delete("/rede/:id", (req, res) => {
    rede_controller.destroy(req.params.id);
    res.json();
  });
  

// GERENCIAMENTO SESSÃO

app.post("/sessao", (req, res) => {
    const sessao = req.body;
    const code = sessao_controller.store(sessao);
    res.status(code).json();
  });
  
  app.get("/sessao", (req, res) => {
    const sessaos = sessao_controller.index();
    res.json(sessaos);
  });
  
  app.get("/sessao/:id", (req, res) => {
    const sessao = sessao_controller.show(req.params.id);
    res.json(sessao);
  });
  
  app.put("/sessao/:id", (req, res) => {
    const sessao = req.body;
    const code = sessao_controller.update(req.params.id, sessao);
    res.status(code).json();
  });
  
  app.delete("/sessao/:id", (req, res) => {
    sessao_controller.destroy(req.params.id);
    res.json();
  });


// GERENCIAMENTO SALA

app.post("/sala", (req, res) => {
    const sala = req.body;
    const code = sala_controller.store(sala);
    res.status(code).json();
  });
  
  app.get("/sala", (req, res) => {
    const salas = sala_controller.index();
    res.json(salas);
  });
  
  app.get("/sala/:id", (req, res) => {
    const sala = sala_controller.show(req.params.id);
    res.json(sala);
  });
  
  app.put("/sala/:id", (req, res) => {
    const sala = req.body;
    const code = sala_controller.update(req.params.id, sala);
    res.status(code).json();
  });
  
  app.delete("/sala/:id", (req, res) => {
    sala_controller.destroy(req.params.id);
    res.json();
  });
  
  
// PORTA/SERVER
app.listen(port, () => {
  console.log("Gerenciador executando na porta: " + port);
});