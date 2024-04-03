var topics = [
    "Police", 
    "Psychology of human", 
    "Education", 
    "Olympic Games", 
    "Fishing",
    "Artificial intelligence",
    "Internet of Things (IoT)",
    "Virtual reality",
    "Augmented reality",
    "Machine learning",
    "Cybersecurity",
    "Blockchain",
    "Cloud computing",
    "Data privacy",
    "5G technology",
    "Robotics",
    "Quantum computing",
    "Autonomous vehicles",
    "Biometric technology",
    "E-commerce",
    "Mobile applications",
    "Social media",
    "Wearable technology",
    "Digital marketing",
    "Cryptocurrency",
    "Gaming industry",
    "Renewable energy technology",
    "Space exploration technology",
    "Nanotechnology",
    "Drones",
    "Health tech",
    "Smart homes",
    "3D printing",
    "Genetic engineering",
    "Internet censorship",
    "Digital currencies",
    "Green technology",
    "Data analytics",
    "Online education",
    "Internet banking",
    "Voice recognition technology",
    "Internet security",
    "Smart cities",
    "Digital art",
    "Virtual assistants",
    "Biotechnology",
    "Mobile payment systems",
    "Telecommunications",
    "Internet connectivity",
    "Cloud storage",
    "Robotics in healthcare",
    "Self-driving cars",
    "Internet surveillance",
    "Automation",
    "Data mining",
    "Video streaming",
    "E-waste management",
    "Facial recognition technology",
    "Online shopping",
    "Internet addiction",
    "E-learning platforms",
    "Genetic testing",
    "Internet of Medical Things (IoMT)",
    "Data breaches",
    "Online gaming",
    "Voice-controlled devices",
    "Digital healthcare",
    "Smart farming",
    "Virtual meetings",
    "Online dating",
    "Internet fraud",
    "Cognitive computing",
    "Digital transformation",
    "Robotics in manufacturing",
    "Online privacy",
    "Biometric authentication",
    "Internet regulations",
    "Artificial neural networks",
    "E-commerce platforms",
    "Cryptocurrency mining",
    "Cloud-based services",
    "Gaming consoles",
    "Mobile banking",
    "Smart appliances",
    "Data visualization",
    "Internet censorship laws",
    "Online security",
    "Internet of Everything (IoE)",
    "Automation in manufacturing",
    "Cyberbullying",
    "3D modeling",
    "Internet memes",
    "Smart clothing",
    "Artificial life",
    "Internet scams",
    "Video conferencing",
    "Virtual simulations",
    "Online forums",
    "Mobile advertising",
    "Smart transportation systems",
    "Data storage solutions",
    "Internet ethics",
    "Internet of Robotic Things (IoRT)",
];

var websites = new Array(topics.length);

// Function to fetch images from Unsplash API for each topic
async function fetchImages() {
    const apiKey = '6f5nbqoYYBe1_-pTqmIaGMSIHoIIJBOsbEGsqNogznM';
    const apiUrl = 'https://api.unsplash.com/photos/random';

    for (let i = 0; i < topics.length; i++) {
        try {
            const response = await fetch(`${apiUrl}?query=${topics[i]}&client_id=${apiKey}`);
            const data = await response.json();
            const imageUrl = data.urls.regular;
            websites[i] = `
                <div style="text-align:center">
                    <p>The topic is "${topics[i]}"</p>
                    <img src="${imageUrl}" alt="${topics[i]}" style="max-width: 100%">
                </div>
            `;
        } catch (error) {
            console.error('Error fetching image:', error);
            websites[i] = `
                <div style="text-align:center">
                    <p>The topic is "${topics[i]}"</p>
                    <p>No image available</p>
                </div>
            `;
        }
    }
}

// Call the fetchImages function to populate the websites array
fetchImages();

document.querySelector('button').onclick = () => {
    var random = Math.floor(Math.random() * topics.length);
    document.querySelector('#box').innerHTML = websites[random];
}