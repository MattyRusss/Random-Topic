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

// Function to generate random topics
function generateRandomTopics(num) {
    var randomTopics = [];
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * topics.length);
        randomTopics.push(topics[randomIndex]);
    }
    return randomTopics;
}

// Event listener for "Generate" button (1 topic)
document.querySelector('.topic1').onclick = () => {
    var randomIndex = Math.floor(Math.random() * topics.length);
    var randomTopic = topics[randomIndex];
    document.querySelector('#box').innerHTML = `<p style="text-align:center">The topic is "${randomTopic}"</p>`;
};

// Event listener for "3 topics" button
document.querySelector('.topics3').onclick = () => {
    var randomTopics = generateRandomTopics(3);
    document.querySelector('#box').innerHTML = randomTopics.map(topic => `<p style="text-align:center">The topic is "${topic}"</p>`).join('');
};

// Event listener for "5 topics" button
document.querySelector('.topics5').onclick = () => {
    var randomTopics = generateRandomTopics(5);
    document.querySelector('#box').innerHTML = randomTopics.map(topic => `<p style="text-align:center">The topic is "${topic}"</p>`).join('');
};

// Event listener for "10 topics" button
document.querySelector('.topics10').onclick = () => {
    var randomTopics = generateRandomTopics(10);
    document.querySelector('#box').innerHTML = randomTopics.map(topic => `<p style="text-align:center">The topic is "${topic}"</p>`).join('');
};

// Event listener for "Download" button
document.querySelector('.download').onclick = () => {
    var currentTopics = document.querySelectorAll('#box p');
    var content = Array.from(currentTopics).map(p => p.innerText.replace('The topic is "', '').replace('"', '')).join('\n');
    
    var element = document.createElement('a');
    var file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated_topics.txt';
    document.body.appendChild(element); // Append anchor element to body
    element.click(); // Simulate click on the anchor element to trigger download
    document.body.removeChild(element); // Clean up: remove anchor element from body
};