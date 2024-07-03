function updateTime() {
    const currentTimeUTC = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = `Current Time (UTC): ${currentTimeUTC}`;
    document.querySelector('[data-testid="currentDay"]').innerText = `Current Day: ${currentDay}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateTime();
    setInterval(updateTime, 1000); // Update the time every second
});