export const numberFormatting = (number) => {
  let formattedNumber;
  if (number) {
    formattedNumber = !isNaN(number)
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : number;
  }
  return formattedNumber;
};
