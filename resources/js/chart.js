function buildGraph(ageInSeconds) {
    document.getElementById("ageChart").style.visibility = "visible";
    var ctx = document.getElementById("ageChart");
    var ageChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Age", "Left School"],
            datasets: [{
                label: 'Age in Seconds',
                data: [ageInSeconds, 583815600]
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}