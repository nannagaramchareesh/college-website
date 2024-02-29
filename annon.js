document.addEventListener('DOMContentLoaded', function () {
    const announcements = document.querySelectorAll('.announcement');

    // Add click event listener to each announcement
    announcements.forEach(function (announcement) {
        announcement.addEventListener('click', function () {
            // Toggle class to expand or collapse announcement content
            this.classList.toggle('active');
            const content = this.querySelector('.announcement-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Highlight today's date
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const dates = document.querySelectorAll('.date');
    dates.forEach(function (dateElement) {
        const dateParts = dateElement.textContent.split(' ');
        const date = parseInt(dateParts[1], 10);
        const month = getMonthNumber(dateParts[2]);
        const year = parseInt(dateParts[3], 10);

        if (date === currentDate && month === currentMonth && year === currentYear) {
            dateElement.style.color = 'blue';
            dateElement.style.fontWeight = 'bold';
        }
    });
});

// Function to get the month number from month name
function getMonthNumber(monthName) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(monthName) + 1;
}