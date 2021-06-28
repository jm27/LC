function foodTruckFestival(menus) {
  let flatMenus = menus.flat();

  let combinedMenu = new Set();
  flatMenus.forEach((item) => {
    combinedMenu.add(item);
  });

  return combinedMenu;
}

console.log(
  foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]])
);
