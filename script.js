// Waypoint - Day 2 Update
// Created: June 23, 2026
// Updated: June 24, 2026 - Added itinerary generation

// Activity database by interest type
const activities = {
    adventure: [
        'Hiking in local trails', 'Rock climbing', 'Zip-lining adventure',
        'Kayaking/Canoeing', 'Mountain biking', 'Paragliding',
        'Scuba diving/Snorkeling', 'White water rafting', 'ATV tours'
    ],
    culture: [
        'Visit historical museums', 'Explore ancient temples', 'Walking city tour',
        'Art gallery visit', 'Attend local cultural show', 'Heritage site exploration',
        'Visit historical monuments', 'Local craft workshop', 'Archaeological site tour'
    ],
    relaxation: [
        'Beach day', 'Spa and wellness center', 'Sunset viewing',
        'Yoga session by the beach', 'Leisurely garden stroll', 'Hot springs visit',
        'Meditation retreat', 'Scenic boat cruise', 'Resort pool day'
    ],
    food: [
        'Street food tour', 'Cooking class experience', 'Local market visit',
        'Fine dining experience', 'Wine/beer tasting', 'Farm-to-table restaurant',
        'Food festival visit', 'Specialty coffee tasting', 'Traditional cuisine dinner'
    ],
    urban: [
        'Rooftop bar hopping', 'Shopping district exploration', 'Street art tour',
        'Local neighborhood walk', 'Public market visit', 'Observation deck visit',
        'Live music venue', 'Architecture walking tour', 'Night market exploration'
    ]
};

// Time slots for activities
const timeSlots = ['Morning', 'Afternoon', 'Evening'];

function generateItinerary(destination, days, interest) {
    const itinerary = [];
    const availableActivities = [...activities[interest]];
    
    for (let day = 1; day <= days; day++) {
        const dayPlan = {
            day: day,
            activities: []
        };
        
        // Generate 3 activities per day (morning, afternoon, evening)
        for (let slot of timeSlots) {
            if (availableActivities.length === 0) {
                // Refresh activities if we run out
                availableActivities.push(...activities[interest]);
            }
            
            // Pick random activity and remove it to avoid duplicates
            const randomIndex = Math.floor(Math.random() * availableActivities.length);
            const activity = availableActivities.splice(randomIndex, 1)[0];
            
            dayPlan.activities.push({
                time: slot,
                activity: activity
            });
        }
        
        itinerary.push(dayPlan);
    }
    
    return itinerary;
}

function displayItinerary(destination, days, interest, itinerary) {
    const outputSection = document.getElementById('outputSection');
    
    let html = `
        <div class="itinerary-header">
            <h3>🗺️ Your ${days}-Day Itinerary</h3>
            <div class="trip-details">
                <span><strong>📍 Destination:</strong> ${destination}</span>
                <span><strong>🎯 Focus:</strong> ${interest.charAt(0).toUpperCase() + interest.slice(1)}</span>
            </div>
        </div>
    `;
    
    itinerary.forEach(day => {
        html += `
            <div class="day-card">
                <h4>Day ${day.day}</h4>
                <div class="activities">
        `;
        
        day.activities.forEach(item => {
            const emoji = item.time === 'Morning' ? '🌅' : 
                         item.time === 'Afternoon' ? '☀️' : '🌙';
            html += `
                <div class="activity-item">
                    <span class="time-badge">${emoji} ${item.time}</span>
                    <span class="activity-name">${item.activity}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="footer-note">
            <p>💡 <em>This is a suggested itinerary. Feel free to adjust based on your preferences!</em></p>
        </div>
    `;
    
    outputSection.innerHTML = html;
    outputSection.style.display = 'block';
    
    // Smooth scroll to results
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('tripForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const interest = document.getElementById('interests').value;
    
    // Generate and display itinerary
    const itinerary = generateItinerary(destination, days, interest);
    displayItinerary(destination, days, interest, itinerary);
});

// TODO: Add budget calculator (Day 3?)
// TODO: Add ability to save/export itinerary
// TODO: Add map integration
