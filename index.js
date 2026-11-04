// Datos oficiales de los 9 departamentos de Bolivia. Sin dependencias.
// Códigos INE de 2 dígitos, ISO 3166-2, sigla de expedición de CI y prefijo telefónico de área.

export const departamentos = Object.freeze([
  { codigoINE: '01', iso: 'BO-H', nombre: 'Chuquisaca', capital: 'Sucre', expedido: 'CH', prefijoTelefonico: '4' },
  { codigoINE: '02', iso: 'BO-L', nombre: 'La Paz', capital: 'La Paz', expedido: 'LP', prefijoTelefonico: '2' },
  { codigoINE: '03', iso: 'BO-C', nombre: 'Cochabamba', capital: 'Cochabamba', expedido: 'CB', prefijoTelefonico: '4' },
  { codigoINE: '04', iso: 'BO-O', nombre: 'Oruro', capital: 'Oruro', expedido: 'OR', prefijoTelefonico: '2' },
  { codigoINE: '05', iso: 'BO-P', nombre: 'Potosí', capital: 'Potosí', expedido: 'PT', prefijoTelefonico: '2' },
  { codigoINE: '06', iso: 'BO-T', nombre: 'Tarija', capital: 'Tarija', expedido: 'TJ', prefijoTelefonico: '4' },
  { codigoINE: '07', iso: 'BO-S', nombre: 'Santa Cruz', capital: 'Santa Cruz de la Sierra', expedido: 'SC', prefijoTelefonico: '3' },
  { codigoINE: '08', iso: 'BO-B', nombre: 'Beni', capital: 'Trinidad', expedido: 'BE', prefijoTelefonico: '3' },
  { codigoINE: '09', iso: 'BO-N', nombre: 'Pando', capital: 'Cobija', expedido: 'PA', prefijoTelefonico: '3' },
].map(Object.freeze));

export const ZONA_HORARIA = 'America/La_Paz'; // UTC-4, sin horario de verano

export const normalizar = (s) =>
  String(s).normalize('NFD').replace(/\p{Diacritic}/gu, '').trim().toLowerCase().replace(/\s+/g, ' ');

const indice = new Map();
for (const d of departamentos) {
  for (const clave of [d.codigoINE, d.iso, d.nombre, d.capital, d.expedido]) indice.set(normalizar(clave), d);
}

/** Busca por nombre, capital, código INE, ISO o sigla de CI; ignora tildes y mayúsculas. */
export function buscarDepartamento(consulta) {
  if (consulta == null) return undefined;
  return indice.get(normalizar(consulta));
}

/** Sugerencias por prefijo del nombre o capital: útil para autocompletar. */
export function sugerir(prefijo) {
  const p = normalizar(prefijo);
  if (!p) return [];
  return departamentos.filter((d) => normalizar(d.nombre).startsWith(p) || normalizar(d.capital).startsWith(p));
}

/** Departamento según el primer dígito de un teléfono fijo: 2, 3 o 4. */
export function departamentosPorPrefijo(prefijo) {
  return departamentos.filter((d) => d.prefijoTelefonico === String(prefijo));
}
