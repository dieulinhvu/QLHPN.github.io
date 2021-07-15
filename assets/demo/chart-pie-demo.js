// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Trợ giảng", "Giảng viên", "Giảng viên chính", "Phó GS","GS"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32,5.56,9.56],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',"red","#e5ce6d"],
    }],
  },
});



// Pie Chart Example
var ctx = document.getElementById("myPieChart1");
var myPieChart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sơ cấp", "Trung cấp", "Cao đẳng", "Đại học","Thạc sỹ"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32,5.96],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',"red"],
    }],
  },
});

// Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["SQ", "QNCN", "CNVQP", "LĐHĐ","DT thiểu số"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32,5.96],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',"red"],
    }],
  },
});

// Pie Chart Example
var ctx = document.getElementById("myPieChart3");
var myPieChart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Bậc 2", "Bậc 3", "Bậc 4", "Bậc 5","Bậc 6"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32,5.96],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',"red"],
    }],
  },
});

// Pie Chart Example
var ctx = document.getElementById("myPieChart4");
var myPieChart1 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["CN Khoa", "Phó CN Khoa", "CN Bộ môn", "Phó CN Bộ môn","Trưởng phòng"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32,5.96],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745',"red"],
    }],
  },
});