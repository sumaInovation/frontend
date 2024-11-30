<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real-time Sensor Data Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white">

  <!-- Container -->
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-8">Real-Time Sensor Data Dashboard</h1>

    <!-- Flex container to arrange charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- Line Chart Container -->
      <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Sensor Speed - Line Chart</h2>
        <canvas id="lineChart"></canvas>
      </div>

      <!-- Pie Chart Container -->
      <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Sensor Status - Pie Chart</h2>
        <canvas id="pieChart"></canvas>
      </div>

    </div>
  </div>

  <script>
    // Data for line chart (speed over time)
    let lineChartData = {
      labels: [],
      datasets: [{
        label: 'Sensor Speed (m/s)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1
      }]
    };

    // Data for pie chart (Sensor status: Active vs Inactive)
    let pieChartData = {
      labels: ['Active', 'Inactive'],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverOffset: 4
      }]
    };

    // Line Chart configuration
    const lineChartConfig = {
      type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        scales: {
          x: { 
            type: 'linear', 
            position: 'bottom' 
          },
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Pie Chart configuration
    const pieChartConfig = {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
              }
            }
          }
        }
      }
    };

    // Initialize charts
    const lineChart = new Chart(document.getElementById('lineChart'), lineChartConfig);
    const pieChart = new Chart(document.getElementById('pieChart'), pieChartConfig);

    // Simulate real-time data updates every 2 seconds
    let time = 0;
    let sensorStatus = 1; // 1 = Active, 0 = Inactive

    function updateData() {
      // Simulating real-time data update for line chart
      if (lineChartData.labels.length > 20) {
        lineChartData.labels.shift();
        lineChartData.datasets[0].data.shift();
      }

      lineChartData.labels.push(time);
      lineChartData.datasets[0].data.push(Math.random() * 10); // Random speed value
      lineChart.update();

      // Simulating real-time data update for pie chart
      if (Math.random() > 0.5) {
        sensorStatus = 1; // Active
        pieChartData.datasets[0].data = [80, 20]; // Active = 80%, Inactive = 20%
      } else {
        sensorStatus = 0; // Inactive
        pieChartData.datasets[0].data = [20, 80]; // Active = 20%, Inactive = 80%
      }
      pieChart.update();

      time++;
    }

    // Update every 2 seconds
    setInterval(updateData, 2000);
  </script>

</body>
</html>
