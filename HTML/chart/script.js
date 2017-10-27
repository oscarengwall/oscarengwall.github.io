// Our labels along the x-axis
var days = [0, 1, 2, 3, 4, 5, 6, 7];
// For drawing the lines
var Marijuana = [0, 1.93, 3.72, 7.18, 13.87, 26.77, 51.68, 100];

var years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014];
var iphone = [0, 0, 2, 5, 10, 20, 50, 90, 100];
var human = [100, 100, 98, 95, 90, 80, 50, 10, 0];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      { 

        data: Marijuana,
        label: 'Marijuana',
        fill: false,
        borderColor: 'green'

      }
    ]
  }
});

var ctx2 = document.getElementById("secondChart");
var secondChart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
    {
      data: iphone,
      label: 'Iphone',
      fill: false,
      borderColor: 'red'
    },
    {
      data: human,
      label: 'Human',
      fill: false,
      borderColor: 'blue'
    }]
  }
});