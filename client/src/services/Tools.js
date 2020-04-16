'use strict';

class Tools {
  /**
   * Shuffle the items in the given array.
   *
   * @param {Array} arr
   * @returns {Array} Shuffled array
   */
  static shuffle(arr = []) {
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (0 < currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      let temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  }

  /**
   * Get a random item from the given array.
   *
   * @param {Array} arr
   * @returns {*} Random item
   */
  static getRandomElement(arr = []) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

export default Tools;
