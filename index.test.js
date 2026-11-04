import test from 'node:test';
import assert from 'node:assert/strict';
import { departamentos, buscarDepartamento, sugerir, departamentosPorPrefijo } from './index.js';

test('hay 9 departamentos con códigos únicos', () => {
  assert.equal(departamentos.length, 9);
  for (const campo of ['codigoINE', 'iso', 'nombre', 'expedido']) {
    assert.equal(new Set(departamentos.map((d) => d[campo])).size, 9, campo);
  }
});

test('busca ignorando tildes y mayúsculas, por varias claves', () => {
  assert.equal(buscarDepartamento('POTOSI').nombre, 'Potosí');
  assert.equal(buscarDepartamento('santa cruz de la sierra').iso, 'BO-S');
  assert.equal(buscarDepartamento('lp').nombre, 'La Paz');
  assert.equal(buscarDepartamento('08').capital, 'Trinidad');
  assert.equal(buscarDepartamento('Atlantis'), undefined);
  assert.equal(buscarDepartamento(null), undefined);
});

test('sugerir por prefijo', () => {
  assert.deepEqual(sugerir('co').map((d) => d.nombre), ['Cochabamba', 'Pando']); // Pando coincide por su capital, Cobija
  assert.deepEqual(sugerir('  '), []);
});

test('prefijos telefónicos', () => {
  assert.deepEqual(departamentosPorPrefijo(3).map((d) => d.expedido).sort(), ['BE', 'PA', 'SC']);
});

test('los datos son inmutables', () => {
  assert.throws(() => { 'use strict'; departamentos[0].nombre = 'X'; });
});
