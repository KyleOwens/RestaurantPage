const getMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu';

    menuContainer.appendChild(getHeader())
    menuContainer.appendChild(getTopSection())
    menuContainer.appendChild(getBottomSection())

    return menuContainer;

}

const getHeader = () => {
    const header = document.createElement('div');
    const image = document.createElement('img');
    const headerText = document.createElement('H3');

    header.classList.add('header');
    
    image.src= 'imgs/logo.png';
    image.classList.add('menu-logo');

    headerText.classList.add('menu-header');
    headerText.innerText = 'Pizza Planet';

    header.appendChild(image);
    header.appendChild(headerText);

    return header;
}

const getTopSection = () => {
    const pizzas = ['Pepperoni Motherload', 'Sausage Overload', 'Taco Lovers', 'Bacon Cheeseburger', 'Pineapple Pizza'];
    const pizzaPrices = ['$12', '$10', '$13', '$15', '$5'];
    const pDescriptions = ['For the pepperoni lovers. Extra pepperoni, extra cheese, and a crust loaded wih our hottest melted mozzerella cheese',
                            'Towering with our monsterous hand spice italian sausage, this will be sure to please any meat lover',
                            'Covered with our family secret taco seasoning, loaded with beef, and topped with our crunchy tortilla chips',
                            'Exploding with all of the classics. Crumbled hamburger, thicked melted cheddar cheese, and enough bacon bits to melt your heart',
                            "It's on the bottom for a reason. If you want to ruin a perfectly good meal, we let you for the low, low price of 5 dollars"]

    const appetizers = ['Mozzerlla Sticks', 'Seasoned Waffle Fries', 'Cheese Curds', 'Nachos and Cheese', 'Chicken Tenders'];
    const appetizerPrices = ['$10', '$6', '$8', '$12', '$6'];
    const aDescriptions = ["An absolute must-have on italian night. Don't let these hot melty mozzerella sticks pass you by",
                            "Family night out wouldn't be the same without our world famous spiced waffle fries",
                            "Honestly, we just copied Chillies because their cheese curds are the best in the world",
                            "World famous tray of spiced cheese and salted nachos. Comes with cruncy jalapenos",
                            "Because of course we need to have some chicken tenders, we aren't savages."];


    
    const topSection = document.createElement('div');
    topSection.classList.add('top-section');

    topSection.appendChild(getMenuSection('Gourmet Pizzas', pizzas, pizzaPrices, pDescriptions))
    topSection.appendChild(getMenuSection('Appetizers', appetizers, appetizerPrices, aDescriptions))

    return topSection;
}

const getBottomSection = () => {
    const pastas = ['Spaghetti and Meatballs', 'Cheesy Ravioli', 'Chicken Alfredo'];
    const pastaPrices = ['$12', '$12', '$13'];
    const paDescriptions = ["Our special meatball recipe with used to pack meatballs the size of your hand",
                            "Packed with 5 of our different cheese, this is sure to satisfy the cheese lover",
                            "I don't even know what this is, but I know people like it, so it's on the list"];

    const bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');

    bottomSection.appendChild(getMenuSection('Pastas', pastas, pastaPrices, paDescriptions));

    return bottomSection;
}

const getItemHeader = (text, dollarAmount) => {
    const section = document.createElement('div');
    const header = document.createElement('H2');
    const price = document.createElement('span');

    section.classList.add('item-header');
    price.classList.add('price');
    
    header.textContent = text;
    price.textContent = dollarAmount;

    section.appendChild(header);
    section.appendChild(price);

    return section;
}

const getMenuSection = (sectionHeader, items, itemPrices, itemDescriptions) => {
        const menuSection = document.createElement('div');
        const foodSection = document.createElement('div');
        const header = document.createElement('H2');

        menuSection.classList.add('menu-section');
        foodSection.classList.add('food-items');
        header.classList.add('section-header');
        header.textContent = sectionHeader;

        for(let i = 0; i < items.length; i++){
            foodSection.appendChild(getItemHeader(items[i], itemPrices[i]));
            foodSection.appendChild(getItemDescription(itemDescriptions[i]));
        }

        menuSection.appendChild(header);
        menuSection.appendChild(foodSection);

        return menuSection;
}

const getItemDescription = (desc) => {
    const description = document.createElement('p');
    description.classList.add('item-description');
    description.textContent = desc;

    return description;
}

export {getMenu}


/* <div id="menu">
            <div class='header'>
                <img src='imgs/logo.png' class='menu-logo'>
                <h3 class='menu-header'>Pizza Planet</h3>
            </div>
            <div class='top-section'>
                <div class='menu-section'>
                    <h2 class='section-header'>Gourmet Pizzas</h2>
                    <div class='food-items'>
                        <div class='item-header'>
                            <h2>Pepperoni Motherload</h2>
                            <span class='price'>$12</span>
                        </div>
                        <p class='item-description'>For the pepperoni lovers. Extra pepperoni, extra cheese, and a crust loaded wih our hottest melted mozzerella cheese</p>
                        <div class='item-header'>
                            <h2>Sausage Overload</h2>
                            <span class='price'>$10</span>
                        </div>
                        <p class='item-description'>Towering with our monsterous hand spice italian sausage, this will be sure to please any meat lover</p>
                        <div class='item-header'>
                            <h2>Taco Lovers</h2>
                            <span class='price'>$13</span>
                        </div>
                        <p class='item-description'>Covered with our family secret taco seasoning, loaded with beef, and topped with our crunchy tortilla chips</p>
                        <div class='item-header'>
                            <h2>Bacon Cheeseburger</h2>
                            <span class='price'>$15</span>
                        </div>
                        <p class='item-description'>Exploding with all of the classics. Crumbled hamburger, thicked melted cheddar cheese, and enough bacon bits to melt your heart</p>
                        <div class='item-header'>
                            <h2>Pineapple Pizza</h2>
                            <span class='price'>$5</span>
                        </div>
                        <p class='item-description'>It's on the bottom for a reason. If you want to ruin a perfectly good meal, we let you for the low, low price of 5 dollars</p>
                    </div>
                </div>
                <div class='menu-section'>
                    <h2 class='section-header'>Appetizers</h2>
                    <div class='food-items'>
                        <div class='item-header'>
                            <h2>Mozzerella Sticks</h2>
                            <span class='price'>$8</span>
                        </div>
                        <p class='item-description'>An absolute must-have on italian night. Don't let these hot melty mozzerella sticks pass you by</p>
                        <div class='item-header'>
                            <h2>Seasoned Waffle Fries</h2>
                            <span class='price'>$5</span>
                        </div>
                        <p class='item-description'>Family night out wouldn't be the same without our world famous spiced waffle fries</p>
                        <div class='item-header'>
                            <h2>Cheese Curds</h2>
                            <span class='price'>$10</span>
                        </div>
                        <p class='item-description'>Honestly, we just copied Chillies because their cheese curds are the best in the world</p>
                        <div class='item-header'>
                            <h2>Nacos and cheese</h2>
                            <span class='price'>$12</span>
                        </div>
                        <p class='item-description'>World famous tray of spiced cheese and salted nachos. Comes with cruncy jalapenos</p>
                        <div class='item-header'>
                            <h2>Chicken Tenders</h2>
                            <span class='price'>$7</span>
                        </div>
                        <p class='item-description'>Because of course we need to have some chicken tenders, we aren't savages.</p>
                    </div>
                </div>
            </div>
            <div class='bottom-section'>
                <div class='menu-section'>
                    <h2 class='section-header'>Pastas</h2>
                    <div class='item-header'>
                        <h2>Spaghetti and meatballs</h2>
                        <span class='price'>$12</span>
                    </div>
                    <p class='item-description'>Our special meatball recipe with used to pack meatballs the size of your hand</p>
                    <div class='item-header'>
                        <h2>Cheesy Ravioli</h2>
                        <span class='price'>$12</span>
                    </div>
                    <p class='item-description'>Packed with 5 of our different cheese, this is sure to satisfy the cheese lover</p>
                    <div class='item-header'>
                        <h2>Chicken Alfredo</h2>
                        <span class='price'>$12</span>
                    </div>
                    <p class='item-description'>I don't even know what this is, but I know people like it, so it's on the list</p>
                </div>
            </div>
        </div> */