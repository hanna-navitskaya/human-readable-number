module.exports = function toReadable (number) {
  const readableNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five', 
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  if (number === 0) {
    return readableNumbers[number];
  }

  let hundreds = Math.floor(number / 100);
  let decimals = getDecimals(number);
  let single = getSingle(number);
  let result = '';

  if (hundreds) {
    result = result + readableNumbers[hundreds] + ' ' + readableNumbers[100];
  }

  if (decimals) {
    result = result + ' ' + readableNumbers[decimals];
  }

  if (single) {
    result = result + ' ' + readableNumbers[single]; 
  }

  return result.trim();
}

function getDecimals(number) {
    const d = number % 100;

    if (d < 20) {
        return d;
    }

    return Math.floor(number % 100 / 10) * 10;
}

function getSingle(number) {
    const d = number % 100;

    if (d < 20) {
        return 0;
    }

    return d % 10;
}
