const express = require('express');

const app = express();

const MESSAGE = process.env.MESSAGE || "It's alive";
app.get('/', (_req, res) => res.send(MESSAGE));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
