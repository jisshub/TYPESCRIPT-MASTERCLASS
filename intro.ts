interface MenuItem {
    name: string;
    price: number;
}

function order(menuItem: MenuItem): void {
    // log the price and name of the menu item
    console.log(menuItem.name, menuItem.price);
}

order({ name: "sushi", price: 10 });
order({ name: "pizza", price: 15 });