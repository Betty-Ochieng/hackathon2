// Function to handle form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get search criteria from form inputs
    const location = document.getElementById('locationInput').value;
    const minPrice = document.getElementById('minPriceInput').value;
    const maxPrice = document.getElementById('maxPriceInput').value;

    // Perform search (this is just a dummy example)
    const searchResults = performSearch(location, minPrice, maxPrice);

    // Display search results
    displaySearchResults(searchResults);
}

// Dummy function to perform search (replace with actual search logic)
function performSearch(location, minPrice, maxPrice) {
    // Dummy search results
    const dummyResults = [
        { location: 'Nairobi', price: 10000, description: 'Lorem ipsum dolor sit amet.' },
        { location: 'Mombasa', price: 15000, description: 'Consectetur adipiscing elit.' },
        // Add more dummy results as needed
    ];

    // Filter search results based on criteria
    const filteredResults = dummyResults.filter(result => {
        return result.location.toLowerCase() === location.toLowerCase() &&
               result.price >= minPrice &&
               result.price <= maxPrice;
    });

    return filteredResults;
}

// Function to display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');

    // Clear previous search results
    resultsContainer.innerHTML = '';

    // Display each search result
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        // Create HTML structure for displaying search result
        resultElement.innerHTML = `
            <h3>${result.location}</h3>
            <p>Price: ${result.price}</p>
            <p>${result.description}</p>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

// Add event listener to the form for submission
document.getElementById('searchForm').addEventListener('submit', handleSearch);
