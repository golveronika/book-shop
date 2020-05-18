function unique(arr) {
    let result = []
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str)
      }
    }
    return result
  }

function roundCost(cost) {
    return Math.round(cost * 100) / 100;
}

function randomizeFloat(min, max) {
    if (max == null) {
          if (min <= 0) {
                throw new Error('Max value must be positive.');
          }

      max = (min == null ? Number.MAX_VALUE : min);
        min = 0.0;
  }

    if (min >= max) {
      throw new Error("Incorrect arguments.");
  }

  let result = min + (max - min) * Math.random();
  result = roundCost(result);

  return result
}

export { unique, randomizeFloat, roundCost };