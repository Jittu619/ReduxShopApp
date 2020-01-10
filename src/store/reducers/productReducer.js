const initialState = {
    products: [
        { id: 1, title: 'Apple iPhone', description: 'Meld style and practicality with the Apple iPhone 8 Plus smartphone Meld style and practicality', price: '600.5', image: 'https://picsum.photos/300/200', amount: 5 },
        { id: 2, title: 'Apple MacBook Pro', description: 'This MacBook Pro has been professionally restored to working order by an approved vendor', price: '350.5', image: 'https://placebear.com/300/200', amount: 7 },
        { id: 3, title: 'Canon Camera', description: '2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread', price: '450.00', image: 'http://placeimg.com/300/200/any', amount: 5 },
        { id: 4, title: 'Samsung Full HD Smart TV ', description: 'Samsung D-Series 24" Full HD LED Smart TV. Condition is Manufacturer refurbished', price: '100.55', image: 'https://www.fillmurray.com/300/200', amount: 4 }
    ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;