function getRealFloor(n) {
  if (n <= 0) return n;
  return n > 13 ? n - 2 : n - 1;
}
