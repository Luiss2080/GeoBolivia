# GeoBolivia

Los **9 departamentos de Bolivia** como datos tipados y listos para formularios: código INE, ISO 3166-2, capital, sigla de expedición de CI y prefijo telefónico de área. Búsqueda sin tildes ni mayúsculas. Cero dependencias.

```js
import { buscarDepartamento, sugerir, departamentos, departamentosPorPrefijo } from '@luiss2080/geobolivia';

buscarDepartamento('POTOSI');          // { codigoINE: '05', iso: 'BO-P', nombre: 'Potosí', ... }
buscarDepartamento('lp').nombre;       // 'La Paz'  (por sigla de CI)
buscarDepartamento('Trinidad').nombre; // 'Beni'    (por capital)
sugerir('sa');                         // autocompletar por nombre o capital
departamentosPorPrefijo(3);            // Santa Cruz, Beni, Pando
```

## Alcance

Incluye departamentos. **Provincias y municipios aún no están incluidos**; se agregarán solo desde una fuente oficial verificable (INE). Se aceptan PRs con la fuente citada.

## Instalación

Se publica en GitHub Packages. Agrega a tu `.npmrc`:

```
@luiss2080:registry=https://npm.pkg.github.com
```

```bash
npm install @luiss2080/geobolivia
```

> GitHub Packages pide autenticarse (token con `read:packages`) incluso para paquetes públicos.

## Desarrollo

```bash
npm test   # usa node:test, sin dependencias
```

Licencia MIT.
