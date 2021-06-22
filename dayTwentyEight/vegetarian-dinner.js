// Create menu 
const menu = [
    {
        name: 'Stuffed Shells',
        isVegetarian: true
    },
    {
        name: 'Spaghetti and meatballs',
        isVegetarian: false,
    },
    {
        name: "Tiramisu",
        isVegetarian: true,
    },
    {
        name: "Salad",
        isVegetarian: true,
    },
    {
        name: "Veggie Pizza",
        isVegetarian: true
    },
    {
        name: "Hamburger",
        isVegetarian: false
    }
]

// Create function to populate UL element
function vegetarianMenu(menu){
    const menuNode = document.createElement('ul');
    const vegetarianOptions = menu.filter(option => option.isVegetarian);
    // Create list items and append to menu
    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    })
    return menuNode
}

console.log(menu.filter(dish => dish.isVegetarian))