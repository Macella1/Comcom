function startCountdown() {
    const targetDate = new Date("March 21 2024"); // Set your target date here
    targetDate.setDate(targetDate.getDate() ); // For example, 10 seconds from now

    const timerInterval = setInterval(function() {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("Days").textContent = days.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("Hours").textContent = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("Minutes").textContent = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("Seconds").textContent = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            startCountdown(); // Reset the countdown
        }
    }, 1000); // Update every second
}

window.addEventListener('load', () => {
    startCountdown();
});