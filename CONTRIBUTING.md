# Guía de contribución

¡Gracias por querer aportar a GeoBolivia!

## Cómo proponer cambios

1. Abre un issue describiendo el bug o la idea antes de empezar un cambio grande.
2. Haz un fork y crea una rama con un nombre claro (`fix/descripcion`, `feat/descripcion`).
3. Mantén el cambio pequeño y enfocado: una cosa por PR.
4. Agrega o ajusta pruebas en `index.test.js` cuando cambies el comportamiento. Si agregas datos, cita la fuente oficial (INE).
5. Corre `npm test` y confirma que todo pasa antes de abrir el PR.

## Estilo

- Módulos ES, sin dependencias externas.
- Los datos nuevos deben venir de una fuente oficial verificable.
- Mensajes de commit en español, con prefijo (`feat:`, `fix:`, `docs:`, `chore:`).

## Reportar problemas de seguridad

No abras un issue público: sigue la [política de seguridad](SECURITY.md).
