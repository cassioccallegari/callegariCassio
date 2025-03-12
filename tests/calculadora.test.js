const {
  getExpectedRequestStore,
} = require("next/dist/server/app-render/work-unit-async-storage.external.js");
const calculadora = require("../models/calculadora.js");

test(" somar 2 + 2 deve ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test(" somar 5 + 100 deve ser 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});
