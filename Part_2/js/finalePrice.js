const PRODUCTS = [
    {
        name: "Anno 117: Pax Romana",
        price: 1300,
        quantity: 1,
    },
    {
        name: "Avatar: Frontiers of Pandora",
        price: 1000,
        quantity: 4,
    },
    {
        name: "Assassin's Creed Shadows",
        price: 1499,
        quantity: 5,
    },
    {
        name: "The Rogue Prince of Persia",
        price: 800,
        quantity: 7,
    },
    {
        name: "The Crew Motorfest",
        price: 2799,
        quantity: 8,
    }
]

const DISCOUNT = 10;

const finalePrice = (products, discount) =>
    products.reduce((total, { price, quantity }) => {
        const isDiscounted = quantity > 5;
        const finalPrice = isDiscounted
            ? price * quantity * (1 - discount / 100)
            : price * quantity;
        return total + finalPrice;
    }, 0);
