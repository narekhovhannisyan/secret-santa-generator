/**
 * @param {Array} array - The array containing grantees names.
 * @returns {Array}
 * @description Shuffles given `namesArray`.
 */
function shuffle (array) {
  const arrayCopy = array.slice()

  let i = arrayCopy.length - 1
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
  }

  return arrayCopy
}

/**
 * @param {Array} array - The array containing grantees names.
 * @param {Array} shuffledArray - The shuffled array containing grantees names.
 * @returns {boolean}
 * @description Checks if given `namesArray` and `shuffledArray` have same name at the same order, then returns false.
 *  Otherwise it returns true.
 */
function shuffleIsValid (array, shuffledArray) {
  let isSame = true
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= shuffledArray.length - 1; j++) {
      if (array[i] === shuffledArray[j] && i === j) {
        isSame = false
        break
      }
    }
  }

  return isSame
}

/**
 * @param {Array} array - The array containing grantees names.
 * @returns {Array}
 * @description Shuffles given `namesArray`.
 *  In case if shuffled array is not valid, calls recursively `shuffleUntilValid` function.
 *  Otherwise returns shuffled array.
 */
function shuffleArrayCompletely (array) {
  const shuffledArray = shuffle(array)

  if (!shuffleIsValid(array, shuffledArray)) {
    return shuffleArrayCompletely(array)
  }

  return shuffledArray
}

module.exports = {
  shuffleArrayCompletely
}
