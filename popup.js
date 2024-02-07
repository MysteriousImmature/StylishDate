document.addEventListener('DOMContentLoaded', function () {
    const currentDateElement = document.getElementById('current-date');
    const dayNameElement = document.getElementById('day-name');
    const calendarContentElement = document.getElementById('calendar-content');

    // Get the current date
    const currentDate = new Date();
    currentDateElement.innerText = currentDate.toDateString();

    // Display the name of the day
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = dayNames[currentDate.getDay()];
    dayNameElement.innerText = dayName;

    // Generate a simple calendar for demonstration (you can replace this with your own logic)
    for (let i = 1; i <= 31; i++) {
        const dayElement = document.createElement('div');
        dayElement.innerText = i;
        calendarContentElement.appendChild(dayElement);
    }
});
