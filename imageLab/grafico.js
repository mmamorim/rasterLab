let chart = null

function createGraph(vetLabels,vetValues,onclick) {
    const canvas = document.getElementById('myChart');
    if(chart) {
        chart.destroy()
    }

    chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: vetLabels,
            datasets: [{
                label: 'Intensidade',
                data: vetValues,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: onclick
        },
        
    });
}

export default createGraph