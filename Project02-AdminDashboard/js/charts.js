const ctx = document.getElementById('myChart1');

new Chart(ctx, {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [1200, 1900, 3000, 2500, 2200, 3000, 3500],
        borderWidth: 1,
        backgroundColor: '#A975D6'
      },
      {
        type: 'line',
        label: 'Growth',
        data: [1510, 3215, 120, 1218, 616, 203, 825],
        borderWidth: 3,
        backgroundColor: '#20c997',
        tension: 0, // smooth curve
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const progressCtx1 = document.getElementById('progressChart1');

new Chart(progressCtx1, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [75, 25], // 75% progress
      backgroundColor: [
        '#20c997',
        '#0d6efd'
      ],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '85%', // ring thickness
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});


const progressCtx2 = document.getElementById('progressChart2');

new Chart(progressCtx2, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [15, 25], // 75% progress
      backgroundColor: [
        '#20c997',
        '#0d6efd'
      ],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '85%', // ring thickness
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});




const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [1200, 1900, 3000, 2500, 2200, 3000, 3500],
        borderWidth: 1,
        backgroundColor: '#0d6efd'
      }
      // {
      //   type: 'line',
      //   label: 'Growth',
      //   data: [1510, 3215, 120, 1218, 616, 203, 825],
      //   borderWidth: 3,
      //   backgroundColor: '#20c997',
      //   tension: 0, // smooth curve
      //   fill: false
      // }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [1200, 1900, 3200, 2500, 2200, 4000, 3500],
        borderWidth: 1,
        backgroundColor: '#6f42c1'
      }
      // {
      //   type: 'line',
      //   label: 'Growth',
      //   data: [1510, 3215, 120, 1218, 616, 203, 825],
      //   borderWidth: 3,
      //   backgroundColor: '#20c997',
      //   tension: 0, // smooth curve
      //   fill: false
      // }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

