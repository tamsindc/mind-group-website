// Time zones to display
const timeZones = [
    { name: 'New York', timezone: 'America/New_York', region: 'EST/EDT' },
    { name: 'London', timezone: 'Europe/London', region: 'GMT/BST' },
    { name: 'Paris', timezone: 'Europe/Paris', region: 'CET/CEST' },
    { name: 'Dubai', timezone: 'Asia/Dubai', region: 'GST' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', region: 'JST' },
    { name: 'Sydney', timezone: 'Australia/Sydney', region: 'AEDT/AEST' },
    { name: 'Singapore', timezone: 'Asia/Singapore', region: 'SGT' },
    { name: 'Mumbai', timezone: 'Asia/Kolkata', region: 'IST' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', region: 'PST/PDT' },
    { name: 'Toronto', timezone: 'America/Toronto', region: 'EST/EDT' },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo', region: 'BRT' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', region: 'ICT' }
];

// Initialize the clock grid
function initializeClocks() {
    const clockGrid = document.getElementById('clockGrid');
    clockGrid.innerHTML = '';

    timeZones.forEach((tz, index) => {
        const clockCard = createClockCard(tz, index);
        clockGrid.appendChild(clockCard);
    });

    updateAllClocks();
    setInterval(updateAllClocks, 1000);
}

// Create a clock card element
function createClockCard(tz, index) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = `clock-${index}`;

    card.innerHTML = `
        <div class="timezone-name">${tz.name}</div>
        <div class="timezone-region">${tz.region}</div>
        <div class="digital-time" id="digital-${index}">00:00:00</div>
        <div class="analog-clock" id="analog-${index}">
            <div class="clock-number" id="numbers-${index}"></div>
            <div class="hand hour-hand" id="hour-${index}"></div>
            <div class="hand minute-hand" id="minute-${index}"></div>
            <div class="hand second-hand" id="second-${index}"></div>
            <div class="clock-center"></div>
        </div>
    `;

    // Add clock numbers
    const numbersContainer = card.querySelector(`#numbers-${index}`);
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * 30 * Math.PI / 180;
        const x = Math.cos(angle) * 60;
        const y = Math.sin(angle) * 60;
        const number = document.createElement('span');
        number.textContent = i;
        number.style.transform = `translate(${x}px, ${y}px)`;
        numbersContainer.appendChild(number);
    }

    return card;
}

// Update all clocks
function updateAllClocks() {
    timeZones.forEach((tz, index) => {
        updateClock(tz.timezone, index);
    });
}

// Update individual clock
function updateClock(timezone, index) {
    const now = new Date();

    // Get time in specific timezone
    const timeString = now.toLocaleString('en-US', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Parse the time string
    const [hours, minutes, seconds] = timeString.split(':').map(Number);

    // Update digital clock
    const digitalElement = document.getElementById(`digital-${index}`);
    digitalElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update analog clock
    updateAnalogClock(hours, minutes, seconds, index);
}

// Update analog clock hands
function updateAnalogClock(hours, minutes, seconds, index) {
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

    const hourHand = document.getElementById(`hour-${index}`);
    const minuteHand = document.getElementById(`minute-${index}`);
    const secondHand = document.getElementById(`second-${index}`);

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeClocks);
