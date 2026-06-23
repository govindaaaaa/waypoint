// Waypoint - Travel Itinerary Generator
// Created: June 23, 2026

// Sample data for different destinations and interests
const destinationData = {
    adventure: {
        morning: ['Mountain trekking', 'Rock climbing', 'Paragliding', 'Zip-lining'],
        afternoon: ['Water rafting', 'Kayaking', 'Mountain biking', 'ATV riding'],
        evening: ['Sunset viewpoint', 'Beach bonfire', 'Night camping', 'Stargazing']
    },
    culture: {
        morning: ['Museum visit', 'Historical monuments', 'Art gallery tour', 'Heritage walk'],
        afternoon: ['Local market exploration', 'Cultural workshop', 'Temple/Church visit', 'Architecture tour'],
        evening: ['Traditional dance show', 'Theater performance', 'Heritage light show', 'Cultural dinner']
    },
    relaxation: {
        morning: ['Spa treatment', 'Yoga session', 'Beach walk', 'Meditation'],
        afternoon: ['Pool lounging', 'Massage therapy', 'Scenic boat ride', 'Garden stroll'],
        evening: ['Sunset watching', 'Beachside dinner', 'Relaxing at hotel', 'Light shopping']
    },
    food: {
        morning: ['Breakfast food tour', 'Local bakery visit', 'Coffee tasting', 'Market food sampling'],
        afternoon: ['Cooking class', 'Street food tour', 'Restaurant hopping', 'Wine/Tea tasting'],
        evening: ['Fine dining experience', 'Food festival', 'Rooftop restaurant', 'Night food market']
    },
    nature: {
        morning: ['Nature trail hiking', 'Bird watching', 'Botanical garden', 'Wildlife safari'],
        afternoon: ['Waterfall visit', 'Lake activities', 'Forest exploration', 'Nature photography'],
        evening: ['Sunset point', 'Night safari', 'Riverside walk', 'Outdoor picnic']
    }
};

// Form submission handler
document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const budget = parseInt(document.getElementById('budget').value);
    const interests = document.getElementById('interests').value;
    
    generateItinerary(destination, days, budget, interests);
});

function generateItinerary(destination, days, budget, interests) {
    const outputSection = document.getElementById('outputSection');
    const itineraryOutput = document.getElementById('itineraryOutput');
    
    // Clear previous output
    itineraryOutput.innerHTML = '';
    
    // Show destination header
    const destHeader = document.createElement('div');
    destHeader.innerHTML = `
        <h3 style="color: #667eea; font-size: 2em; margin-bottom: 20px;">
            📍 ${destination} - ${days} Day Adventure
        </h3>
    `;
    itineraryOutput.appendChild(destHeader);
    
    // Generate daily itinerary
    const activities = destinationData[interests];
    const budgetPerDay = Math.floor(budget / days);
    
    for (let day = 1; day <= days; day++) {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        
        const morningActivity = activities.morning[Math.floor(Math.random() * activities.morning.length)];
        const afternoonActivity = activities.afternoon[Math.floor(Math.random() * activities.afternoon.length)];
        const eveningActivity = activities.evening[Math.floor(Math.random() * activities.evening.length)];
        
        dayCard.innerHTML = `
            <h3>Day ${day}</h3>
            <div class="activity">
                <span class="activity-time">🌅 Morning (9:00 AM):</span> ${morningActivity}
            </div>
            <div class="activity">
                <span class="activity-time">☀️ Afternoon (2:00 PM):</span> ${afternoonActivity}
            </div>
            <div class="activity">
                <span class="activity-time">🌆 Evening (6:00 PM):</span> ${eveningActivity}
            </div>
            <div style="margin-top: 15px; color: #666;">
                <strong>Estimated daily cost:</strong> $${budgetPerDay}
            </div>
        `;
        
        itineraryOutput.appendChild(dayCard);
    }
    
    // Add budget summary
    const budgetInfo = document.createElement('div');
    budgetInfo.className = 'budget-info';
    budgetInfo.innerHTML = `
        <h3>💰 Budget Breakdown</h3>
        <p><strong>Total Budget:</strong> $${budget}</p>
        <p><strong>Per Day:</strong> $${budgetPerDay}</p>
        <p><strong>Accommodation (est):</strong> $${Math.floor(budget * 0.4)}</p>
        <p><strong>Activities (est):</strong> $${Math.floor(budget * 0.35)}</p>
        <p><strong>Food (est):</strong> $${Math.floor(budget * 0.25)}</p>
    `;
    itineraryOutput.appendChild(budgetInfo);
    
    // Show output section with smooth scroll
    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add a reset button functionality
document.getElementById('tripForm').addEventListener('reset', function() {
    document.getElementById('outputSection').style.display = 'none';
});
