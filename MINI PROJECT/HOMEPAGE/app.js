// // scripts.js

// // Function to create and display destination cards
// function displayDestinations() {
//     const destinationList = document.getElementById('destination-list');
  
//     destinations.forEach(destination => {
//       // Create card for each destination
//       const card = document.createElement('div');
//       card.classList.add('destination-card');
  
//       // Add image
//       const img = document.createElement('img');
//       img.src = destination.image;
//       card.appendChild(img);
  
//       // Add destination name
//       const destinationName = document.createElement('h3');
//       destinationName.textContent = destination.name;
//       card.appendChild(destinationName);
  
//       // Add description
//       const description = document.createElement('p');
//       description.textContent = destination.description;
//       card.appendChild(description);
  
//       // Add top attractions
//       const attractionsTitle = document.createElement('h4');
//       attractionsTitle.textContent = "Top Attractions:";
//       card.appendChild(attractionsTitle);
  
//       const attractionsList = document.createElement('ul');
//       destination.top_attractions.forEach(attraction => {
//         const attractionItem = document.createElement('li');
//         attractionItem.textContent = `${attraction.name} - ${attraction.highlight}`;
//         attractionsList.appendChild(attractionItem);
//       });
//       card.appendChild(attractionsList);
  
//       // Add accommodation options
//       const accommodationTitle = document.createElement('h4');
//       accommodationTitle.textContent = "Accommodation:";
//       card.appendChild(accommodationTitle);
  
//       const accommodationList = document.createElement('ul');
//       destination.accommodation.forEach(accommodation => {
//         const accommodationItem = document.createElement('li');
//         accommodationItem.textContent = `${accommodation.name} (${accommodation.price_range}) - Rating: ${accommodation.rating}`;
//         accommodationList.appendChild(accommodationItem);
//       });
//       card.appendChild(accommodationList);
  
//       // Add local transport options
//       const transportTitle = document.createElement('h4');
//       transportTitle.textContent = "Local Transport:";
//       card.appendChild(transportTitle);
  
//       const transportList = document.createElement('ul');
//       destination.local_transport.forEach(transport => {
//         const transportItem = document.createElement('li');
//         transportItem.textContent = `${transport.type} - Average fare: ${transport.average_fare}`;
//         transportList.appendChild(transportItem);
//       });
//       card.appendChild(transportList);
  
//       // Append card to destination list
//       destinationList.appendChild(card);
//     });
//   }
  
//   // Call function to display destinations
//   displayDestinations();
  
// app.js

document.getElementById("travel-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user input
    const destination = document.getElementById("destination").value.toLowerCase();
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const budget = parseFloat(document.getElementById("budget").value);
    
    // Find matching destinations based on input
    const destinationData = destinations.filter(dest => 
      dest.name.toLowerCase().includes(destination) && dest.budget <= budget
    );
  
    // Clear previous suggestions
    const suggestionsList = document.getElementById("suggestions-list");
    suggestionsList.innerHTML = "";
  
    if (destinationData.length > 0) {
      // Display matching destinations
      destinationData.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("destination-card");
  
        const img = document.createElement("img");
        img.src = dest.image;
        card.appendChild(img);
  
        const name = document.createElement("h3");
        name.textContent = dest.name;
        card.appendChild(name);
  
        const description = document.createElement("p");
        description.textContent = dest.description;
        card.appendChild(description);
  
        const budgetText = document.createElement("p");
        budgetText.textContent = `Suggested Budget: $${dest.budget}`;
        card.appendChild(budgetText);
  
        suggestionsList.appendChild(card);
      });
    } else {
      // Display message if no results found
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = "No destinations found that match your criteria.";
      suggestionsList.appendChild(noResultsMessage);
    }
  });
  