const numberFomatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

export const viewCounter = number => {
  return numberFomatter.format(number);
};
