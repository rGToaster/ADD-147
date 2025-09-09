const cat1 = {
    name: "Abyssinian Cat",
    common_name: "Abys",
    image: "images/Abyssinian-cat.jpg",
    origin: "Indian Ocean, Southeast Asia",
    description: 'The head is moderately wedge-shaped, with a slight break at the muzzle, and nose and chin ideally forming a straight vertical line when viewed in profile. They have alert, relatively large pointed ears. The eyes are almond-shaped and are gold, green, hazel or copper depending on coat colour. The legs tend to be long in proportion to a graceful body, with small oval paws; the tail is likewise long and tapering.',
    source: "http://www.abyssiniancatclub.com/breed-standard.html"
}
const cat2 = {
    name: "Siamese cat",
    common_name: "Meezer, Mese, Sagwa",
    image: "images/Siamese-cat.jpg",
    origin: "Thailand",
    description: 'The breed standard of the modern Siamese calls for an elongated, tubular, and muscular body and a triangular head, forming a triangle from the tip of the nose to each tip of the ear. The eyes are almond-shaped and light blue, while the ears are large, wide-based, and positioned more towards the side of the head. The breed has a long neck, a slender tail, and fur that is short, glossy, fine and adheres to the body with no undercoat. Its pointed colour scheme and blue eyes distinguish it from the closely related Oriental Shorthair. The modern Siamese shares the pointed colour pattern with the Thai, or traditional Siamese, but they differ in head and body type.',
    source: "https://en.wikipedia.org/wiki/Siamese_cat"
}
const cat3 = {
    name: "Ragdoll Cat",
    common_name: "Ragdoll",
    image: "images/Ragdoll-cat.jpg",
    origin: "United States",
    description: 'Breed standard marketing and publicity material describe the Ragdoll as affectionate, intelligent, relaxed in temperament, gentle, and an easy-to-handle lap cat.',
    source: "https://en.wikipedia.org/wiki/Ragdoll"
}
const cat4 = {
    name: "Maine Coon Cat",
    common_name: "Coon Cat, Maine Cat, Maine Shag",
    image: "images/Maine_Coon-cat.jpg",
    origin: "United States",
    description: 'The Maine Coon is a long- or medium-haired cat. The coat is soft and silky, although texture may vary with coat color. The length is shorter on the head and shoulders and longer on the stomach and flanks, with some cats having a leonine ruff around their neck. Minimal grooming is required for the breed compared to other long-haired breeds, as their double coat is mostly self-maintaining owing to a light-density undercoat.',
    source: "https://en.wikipedia.org/wiki/Maine_Coon"
}
const cat5 = {
    name: "Persian Cat",
    common_name: "Persian Longhair, Shirazi",
    image: "images/Persian-cat.jpg",
    origin: "Eastern Iran",
    description: 'A show-style Persian cat has an extremely long and thick coat, short legs, a wide head with ears set far apart, large eyes, and an extremely shortened muzzle. The breed was originally established with a short muzzle, but over time, this characteristic has become extremely exaggerated, particularly in North America. Persian cats can have virtually any colour or markings.',
    source: "https://en.wikipedia.org/wiki/Persian_cat"
}
function display() {
    // helper function to build cat HTML
    function buildCatHTML(cat) {
        return `
            <h2>Breed</h2>
            <h3>${cat.name}</h3>
            <h2>Common name</h2>
            <h3>${cat.common_name}</h3>
            <img src="${cat.image}" alt="${cat.common_name}">
            <h3>Origin</h3>
            <p>${cat.origin}</p>
            <h3>Description</h3>
            <p>${cat.description}</p>
            <h3>Source</h3>
            <p><a href="${cat.source}" target="_blank">Source</a></p>
        `;
    }

    // display each cat in its own container
    document.getElementById('ob1').innerHTML = buildCatHTML(cat1);
    document.getElementById('ob2').innerHTML = buildCatHTML(cat2);
    document.getElementById('ob3').innerHTML = buildCatHTML(cat3);
    document.getElementById('ob4').innerHTML = buildCatHTML(cat4);
    document.getElementById('ob5').innerHTML = buildCatHTML(cat5);
}
