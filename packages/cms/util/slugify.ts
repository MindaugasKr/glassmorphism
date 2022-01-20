export const slugify = (input: string = '') => {
  return input.replace(/\s/g, '-').toLocaleLowerCase();
}
