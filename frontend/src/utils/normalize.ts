export function normalize (str: string) {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase()
};
