/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let arr = Array.from(s),
    ret = "";

  arr.sort();

  while (arr.length) {
    arr = arr.filter((x, i) => {
      if (i === 0 || x !== ret[ret.length - 1]) {
        ret += x;
        return false;
      }
      return true;
    });

    arr.reverse();
  }

  return ret;
};

/**
 * Runtime: 148 ms, faster than 13.37% of JavaScript online submissions for Increasing Decreasing String.
 * Memory Usage: 44.3 MB, less than 55.45% of JavaScript online submissions for Increasing Decreasing String.
 */
