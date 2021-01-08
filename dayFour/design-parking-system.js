/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  // create array to store count
  this.counts = [null, big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  // if car type matches count remove one and return true
  if (this.counts[carType]) {
    this.counts[carType]--;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

/**
 * Runtime: 216 ms, faster than 7.11% of JavaScript online submissions for Design Parking System.
 * Memory Usage: 45.9 MB, less than 74.84% of JavaScript online submissions for Design Parking System.
 */
