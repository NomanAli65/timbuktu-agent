function shortenNumber(number: number) {
  const powers = ['', 'k', 'M', 'B', 'T', 'Q'];
  let magnitude = 0;

  while (number >= 1000) {
    magnitude++;
    number /= 1000;
  }

  // Format number with appropriate magnitude and 'k' suffix
  return number.toFixed(1) + powers[magnitude];
}

export default shortenNumber;
