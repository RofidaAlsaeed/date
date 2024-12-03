function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const period = now.getHours() >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes; // إضافة صفر إذا كانت الدقائق أقل من 10
    seconds = seconds < 10 ? '0' + seconds : seconds; // إضافة صفر إذا كانت الثواني أقل من 10
    
    const dayNumber = now.getDay();
    let dayName;
    switch (dayNumber) {
        case 0: dayName = 'Sunday'; break;
        case 1: dayName = 'Monday'; break;
        case 2: dayName = 'Tuesday'; break;
        case 3: dayName = 'Wednesday'; break;
        case 4: dayName = 'Thursday'; break;
        case 5: dayName = 'Friday'; break;
        case 6: dayName = 'Saturday'; break;
    }

    const dayOfMonth = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const formattedDate = `${dayOfMonth}/${month}/${year}`;

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${period} <br> ${dayName} - ${formattedDate}`;
;
}

// Call updateClock every second
setInterval(updateClock, 1000);
// Initialize the clock
updateClock();
