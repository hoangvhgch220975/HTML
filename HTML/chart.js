
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'red', 'blue', 'yellow', 'green', 'purple', 'orange'
                ],
                borderColor: [
                    'red', 'blue', 'yellow', 'green', 'purple', 'orange'
                ],
                borderWidth: 1
            }]
        }
    });
});
