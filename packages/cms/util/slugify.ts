export const slugify = (input: string = ''): string => {
  return input.replace(/\s/g, '-').toLocaleLowerCase()
}
