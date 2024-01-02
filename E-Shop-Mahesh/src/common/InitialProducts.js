import Book from "../assests/images/book.jpg";
import SweatShirt from "../assests/images/Sweat Shirt.jpg";
import SweatShirt2 from "../assests/images/sweat shirt-2.jpg";
import Watch from "../assests/images/watch.jpg";

export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'DSA Book',
            price:800,
            description: "The data structures and algorithms made easy pdf by narasimha karumanch book and chapter are mainly emphasizing problems ",
            photo: Book,
            category: 'BOOKS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 60,
            manufacturer: 'Author'
        },
        {
            key: 2,
            name:'Sweat Shirt',
            price:500,
            description: "Crew-Neck Sweatshirt With Brand Print",
            photo: SweatShirt,
            category: 'CLOTHES',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'Balman'
        },
        {
            key: 3,
            name:'Sweat Shirt',
            price:600,
            description: "Crew-Neck Sweatshirt With Brand Print",
            photo: SweatShirt2,
            category: 'CLOTHES',
            modifiedDate: new Date().toLocaleString(),
            quantity: 300,
            manufacturer: 'GILDAN'
        },
        {
            key: 4,
            name:'Rolex',
            price:30000,
            description: "This is our Oyster case, the world’s first waterproof wristwatch case, conceived by Rolex in 1926 and patented. A one-of-a-kind feature, which holds within it an intricate world of cogs and minutely crafted parts. Made of some of the most refined alloys, the Oyster case is incomparably resistant to all sorts of external aggressions.",
            photo: Watch,
            category: 'WATCHES',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'ROLEX'
        } /*,
        {
            key: 5,
            name:'Sandels',
            price:600,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Sandels,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 60,
            manufacturer: 'TATA'
        } */
    ];
}