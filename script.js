// Waypoint - Day 3 Update
// Created: June 23, 2026
// Updated: June 24, 2026 - Added itinerary generation
// Updated: June 25, 2026 - Added budget calculator

// Budget breakdown by category
const budgetCategories = {
    accommodation: { min: 0.35, max: 0.45, name: 'Accommodation' },
    food: { min: 0.25, max: 0.35, name: 'Food & Dining' },
    activities: { min: 0.20, max: 0.30, name: 'Activities & Tours' },
    transport: { min: 0.10, max: 0.15, name: 'Local Transport' },
    misc: { min: 0.05, max: 0.10, name: 'Miscellaneous' }
};

// Activity costs by interest type (multiplier of daily budget)
const activityCosts = {
    adventure: { min: 0.05, max: 0.15 },
    culture: { min: 0.03, max: 0.10 },
    relaxation: { min: 0.04, max: 0.12 },
    food: { min: 0.06, max: 0.14 },
    urban: { min: 0.02, max: 0.08 }
};

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

function generateItinerary(destination, days, interest, dailyBudget) {
    const itinerary = [];
    const availableActivities = [...activities[interest]];
    const costRange = activityCosts[interest];
    
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
            
            // Calculate estimated cost for this activity
            const costMultiplier = costRange.min + Math.random() * (costRange.max - costRange.min);
            const estimatedCost = Math.round(dailyBudget * costMultiplier);
            
            dayPlan.activities.push({
                time: slot,
                activity: activity,
                cost: estimatedCost
            });
        }
        
        itinerary.push(dayPlan);
    }
    
    return itinerary;
}

function calculateBudgetBreakdown(dailyBudget, days) {
    const breakdown = {};
    const totalBudget = dailyBudget * days;
    
    for (let [key, category] of Object.entries(budgetCategories)) {
        const percentage = category.min + Math.random() * (category.max - category.min);
        const amount = Math.round(totalBudget * percentage);
        breakdown[key] = {
            name: category.name,
            amount: amount,
            daily: Math.round(amount / days)
        };
    }
    
    return breakdown;
}

function displayItinerary(destination, days, interest, dailyBudget, itinerary, budgetBreakdown) {
    const outputSection = document.getElementById('outputSection');
    const totalBudget = dailyBudget * days;
    
    let html = `
        <div class="itinerary-header">
            <h3>🗺️ Your ${days}-Day Itinerary</h3>
            <div class="trip-details">
                <span><strong>📍 Destination:</strong> ${destination}</span>
                <span><strong>🎯 Focus:</strong> ${interest.charAt(0).toUpperCase() + interest.slice(1)}</span>
                <span><strong>💰 Budget:</strong> $${dailyBudget}/day</span>
            </div>
        </div>

        <!-- Budget Overview -->
        <div class="budget-overview">
            <div class="budget-total">
                <h4>💵 Total Trip Budget</h4>
                <div class="budget-amount">$${totalBudget.toLocaleString()}</div>
                <div class="budget-subtitle">${days} days × $${dailyBudget}/day</div>
            </div>
            
            <div class="budget-breakdown">
                <h4>Budget Breakdown</h4>
                <div class="breakdown-items">
    `;
    
    for (let [key, item] of Object.entries(budgetBreakdown)) {
        const percentage = Math.round((item.amount / totalBudget) * 100);
        html += `
            <div class="breakdown-item">
                <div class="breakdown-label">
                    <span>${item.name}</span>
                    <span class="breakdown-percent">${percentage}%</span>
                </div>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="breakdown-amount">$${item.amount.toLocaleString()} ($${item.daily}/day)</div>
            </div>
        `;
    }
    
    html += `
                </div>
            </div>
        </div>

        <!-- Day by Day Itinerary -->
        <h3 style="margin: 30px 0 20px 0; color: #333;">📅 Day-by-Day Plan</h3>
    `;
    
    itinerary.forEach(day => {
        const dayTotal = day.activities.reduce((sum, act) => sum + act.cost, 0);
        
        html += `
            <div class="day-card">
                <div class="day-header">
                    <h4>Day ${day.day}</h4>
                    <span class="day-cost">~$${dayTotal}</span>
                </div>
                <div class="activities">
        `;
        
        day.activities.forEach(item => {
            const emoji = item.time === 'Morning' ? '🌅' : 
                         item.time === 'Afternoon' ? '☀️' : '🌙';
            html += `
                <div class="activity-item">
                    <div class="activity-main">
                        <span class="time-badge">${emoji} ${item.time}</span>
                        <span class="activity-name">${item.activity}</span>
                    </div>
                    <span class="activity-cost">$${item.cost}</span>
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
            <p>💡 <em>Costs are estimates. Actual expenses may vary based on season, location, and personal choices.</em></p>
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
    const dailyBudget = parseInt(document.getElementById('budget').value);
    
    // Generate itinerary with costs
    const itinerary = generateItinerary(destination, days, interest, dailyBudget);
    
    // Calculate budget breakdown
    const budgetBreakdown = calculateBudgetBreakdown(dailyBudget, days);
    
    // Display everything
    displayItinerary(destination, days, interest, dailyBudget, itinerary, budgetBreakdown);
});

// TODO: Add ability to save/export itinerary (Day 4?)
// TODO: Add print-friendly view
// TODO: Add currency converter
