// Waypoint - Day 1 Basic Setup
// Created: June 23, 2026

document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const days = document.getElementById('days').value;
    
    // Basic output for now
    const outputSection = document.getElementById('outputSection');
    outputSection.innerHTML = `
        <h3>Trip Plan Created!</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Duration:</strong> ${days} days</p>
        <p style="color: #666; margin-top: 20px;">
            <em>Detailed itinerary generation coming soon...</em>
        </p>
    `;
    
    outputSection.style.display = 'block';
});

// TODO: Add itinerary generation logic
// TODO: Add budget calculator
// TODO: Add interest-based recommendations
