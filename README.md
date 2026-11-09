<div align="center">
  <img src="docs/assets/logo.svg" width="96" alt="Logo de GeoBolivia" />
  <h1>🗺️ GeoBolivia</h1>
  <p><b>Los 9 departamentos de Bolivia con código INE, ISO 3166-2, capital, sigla de CI y prefijo telefónico; búsqueda sin tildes. Cero dependencias.</b></p>
  <img src="https://img.shields.io/badge/versi%C3%B3n-1.0.0-blue?style=for-the-badge" alt="Versión 1.0.0" />
  <img src="https://img.shields.io/badge/node-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js 18+" />
  <img src="https://img.shields.io/badge/dependencias-cero-brightgreen?style=for-the-badge" alt="Cero dependencias" />
  <img src="https://img.shields.io/badge/tests-node%3Atest-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Tests con node:test" />
  <img src="https://img.shields.io/badge/paquete-GitHub%20Packages-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Packages" />
  <img src="https://img.shields.io/badge/licencia-MIT-yellow?style=for-the-badge" alt="Licencia MIT" />
  <img src="https://img.shields.io/github/last-commit/Luiss2080/GeoBolivia" alt="Último commit" />
  <img src="https://img.shields.io/badge/PRs-bienvenidos-brightgreen.svg" alt="PRs bienvenidos" />
  <p>
    <a href="#-inicio-rápido">Inicio rápido</a> ·
    <a href="#-características">Características</a> ·
    <a href="#-arquitectura">Arquitectura</a> ·
    <a href="#-pruebas">Pruebas</a> ·
    <a href="#-alcance">Alcance</a> ·
    <a href="#-contribuir">Contribuir</a>
  </p>
</div>

Los 9 departamentos de Bolivia como datos listos para formularios: código INE, ISO 3166-2, capital, sigla de expedición de CI y prefijo telefónico de área. La búsqueda ignora tildes y mayúsculas. Funciona en Node.js 18 o superior.

## 🎬 Vista rápida

```js
import { buscarDepartamento, sugerir, departamentos, departamentosPorPrefijo } from '@luiss2080/geobolivia';

buscarDepartamento('POTOSI');           // { codigoINE: '05', iso: 'BO-P', nombre: 'Potosí', ... }
buscarDepartamento('lp').nombre;        // 'La Paz' (por sigla de CI)
buscarDepartamento('Trinidad').nombre;  // 'Beni' (por capital)
sugerir('sa');                          // autocompletar por nombre o capital
departamentosPorPrefijo(3);             // Santa Cruz, Beni, Pando
```

## ✨ Características

| Característica | Detalle |
|---|---|
| Datos completos por departamento | Código INE, ISO 3166-2, capital, sigla de CI y prefijo telefónico de área. |
| Búsqueda flexible | `buscarDepartamento` acepta el nombre, la sigla de CI o la capital, sin importar tildes ni mayúsculas. |
| Autocompletado | `sugerir` propone departamentos por nombre o capital mientras se escribe. |
| Filtro por prefijo | `departamentosPorPrefijo` lista los departamentos de un prefijo telefónico. |
| Lista completa | `departamentos` expone los 9 departamentos para armar selectores. |
| Cero dependencias | Un solo módulo ES, sin paquetes externos. |

## 🏗️ Arquitectura

| Archivo | Propósito |
|---|---|
| `index.js` | Módulo ES con los datos y las funciones exportadas. |
| `index.test.js` | Pruebas con `node:test`. |
| `package.json` | Metadatos del paquete y publicación en GitHub Packages. |
| `.github/workflows/` | Flujo de GitHub Actions para probar y publicar. |

## 🚀 Inicio rápido

| Requisito | Versión |
|---|---|
| Node.js | 18+ |

Se publica en GitHub Packages. Agrega a tu `.npmrc`:

```
@luiss2080:registry=https://npm.pkg.github.com
```

Luego instala el paquete:

```bash
npm install @luiss2080/geobolivia
```

> GitHub Packages pide autenticarse (token con `read:packages`) incluso para paquetes públicos.

## 🧪 Pruebas

```bash
npm test # usa node:test, sin dependencias
```

## 🚧 Alcance

Incluye departamentos. Provincias y municipios aún no están incluidos; se agregarán solo desde una fuente oficial verificable (INE). Se aceptan PRs con la fuente citada.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee la [guía de contribución](CONTRIBUTING.md) y el [código de conducta](CODE_OF_CONDUCT.md) antes de abrir un PR. Para bugs o ideas abre un issue; los problemas de seguridad se reportan según la [política de seguridad](SECURITY.md). ¿Dudas? Mira [SUPPORT.md](SUPPORT.md). Los cambios por versión están en el [CHANGELOG](CHANGELOG.md).

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver [LICENSE](LICENSE).

---

<div align="center">
  <sub>Hecho por <a href="https://github.com/Luiss2080">Luiss2080</a> · datos geográficos de Bolivia listos para formularios</sub>
</div>
