// Sample data
const clubData = {
    labels: ['Enterpreneur', 'Coding', 'Dance', 'Sports'],
    eventsConducted: [20, 15, 25, 18],
    eventsWon: [15, 10, 20, 12],
    eventsLost: [5, 5, 5, 6]
};

document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create the chart
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: clubData.labels,
            datasets: [{
                label: 'Events Conducted',
                data: clubData.eventsConducted,
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Events Won',
                data: clubData.eventsWon,
                backgroundColor: 'rgba(75, 192, 192, 0.5)', // Green color
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Events Lost',
                data: clubData.eventsLost,
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});