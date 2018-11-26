const arrayUtil = require('./util/array.util')

/**
 * @param {Array} namesArray - The array containing grantees names.
 * @returns {Object}
 * @description Builds secret santa table (Object containing accordance).
 */
function buildSecretSantaTable (namesArray) {
  const shuffledArray = arrayUtil.shuffleArrayCompletely(namesArray)

  return namesArray.reduce((acc, value, index) => {
    acc[value] = shuffledArray[index]
    return acc
  }, {})
}

module.exports = {
  buildSecretSantaTable
}
