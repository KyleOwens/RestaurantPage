const getHomePage = () => {
    const container = document.createElement('div');
    const contactCards = getContactCards();
    const header = document.createElement('h1');

    container.id="home";
    header.innerText = 'Pizza that is out of htis world!';    

    container.appendChild(header);
    container.appendChild(contactCards);

    return container;
}

const getContactCards = () => {
    const address = "6203 Williamburg Way <br> Madison, WI 53532 <br> Located across from Pinecone";
    const schedule = "<strong>Sat-Sun:</strong> 9am - 5pm <br> <strong>Mon-Fri:</strong> 10am-6pm";

    const container = document.createElement('div');

    container.classList.add('contact-cards');
    container.appendChild(getCard('imgs/location.png', address));
    container.appendChild(getCard('imgs/clock.png', schedule));

    return container;

    function getCard(imgLoc, label){
        const card = document.createElement('div');
        const icon = document.createElement('img');
        const text = document.createElement('p');

        card.classList.add('contact-card');

        icon.src = imgLoc;
        text.innerHTML = label;

        card.appendChild(icon);
        card.appendChild(text);
        
        return card;
    }
}

export {getHomePage}


