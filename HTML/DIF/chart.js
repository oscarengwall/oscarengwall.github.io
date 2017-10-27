//Var General
var games = ["IKSi H", "BKH B", "IFE H", "MFF B", "HBK B", "IFKN H", "ÖSK B", "IFKG H", "JSIF B", "AIK H", "AFC H", "HIF B", "KFF H", "GIF H", "ÖFK B", "ÖFK H", "AFC B", "MFF H", "IFKN B", "HBK H", "AIK B", "IFKG B", "ÖSK H", "IFE B", "HIF H", "GIF B", "IKS B", "BKH H", "JSIF H", "KFF B"];

// Var for Chart 1
var points = [0, 1, 4, 4, 7, 8, 11, 14, 15, 15, 18, 18, 21, 24, 24, 27, 30, 30, 33, 36, 37, 40, 43, 44, 45, 48, 48, 49];

var fixture = ['l', 'd', 'w', 'l', 'w', 'd', 'w', 'w', 'd', 'l', 'w', 'l', 'w', 'w', 'l', 'w', 'w', 'l', 'w', 'w', 'd', 'w', 'w', 'd', 'd', 'w', 'l', 'd'];

var obj = { };
for (var i = 0, j = fixture.length; i < j; i++) {
   if (obj[fixture[i]]) {
      obj[fixture[i]]++;
   }
   else {
      obj[fixture[i]] = 1;
   } 
}
var sumL = obj['l'];
var sumD = obj['d'];
var sumW = obj['w'];
document.getElementById('numberOfTypes').innerHTML = 'Antalet vinster: '+sumW+' stycken'+'</br>'+' Antalet lika: '+sumD+' stycken'+'</br>'+' Antalet förluster: '+sumL+' stycken';

// Var for Chart 2
var pointPerGame = [0, 1, 3, 0, 3, 1, 3, 3, 1, 0, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 1, 3, 3, 1, 1, 3, 0, 1];
var sum = 0;
for( var i = 0; i < pointPerGame.length; i++ ){
    sum += parseInt( pointPerGame[i], 0); 
}
var avg = sum/pointPerGame.length;
document.getElementById('averagePoint').innerHTML = 'Genomsnittet är '+avg+' poäng per match över hela säsongen';


//Var for Chart 3
var goalsFor = [0, 0, 3, 2, 1, 3, 4, 1, 1, 0, 4, 1, 4, 2, 1, 3, 2, 0, 1, 2, 1, 3, 4, 2, 1, 5, 0, 1];
var goalsAgainst = [2, 0, 0, 3, 0, 3, 0, 0, 1, 1, 1, 3, 1, 1, 2, 0, 1, 1, 0, 1, 1, 1, 1, 2, 1, 0, 2, 1];

var sumFor = 0;
for ( var i = 0; i < goalsFor.length; i++){
  sumFor += parseInt (goalsFor[i], 0);
}
var avgFor = sumFor/goalsFor.length;
document.getElementById('avergeFor').innerHTML = 'Antal gjorda mål är '+sumFor+' och genomsnittet för gjorda mål är '+avgFor.toFixed(2);

var sumAgainst = 0;
for ( var i = 0; i <goalsAgainst.length; i++){
  sumAgainst += parseInt (goalsAgainst[i]);
}
var avgAgainst = sumAgainst/goalsAgainst.length;
document.getElementById('averageAgainst').innerHTML = 'Antal insläppta mål är '+sumAgainst+' och genomsnittet för insläppta mål är '+avgAgainst.toFixed(2);

var avgTotal1 = sumFor-sumAgainst;
var avgTotal2 = avgFor-avgAgainst;
document.getElementById('averageTotal').innerHTML = 'Målskillnaden är '+avgTotal1+' och genomsnittet är '+avgTotal2.toFixed(2);


//Var for Chart 4
var players = ['Magnus Eriksson', 'Gustav Engvall', 'Kerim Mrabti', 'Othman El Kabir', 'Aliou Badji', 'Jesper Karlström', 'Jonas Ohlsson', 'Kevin Walker', 'Kim Källström', 'Felix Beijmo', 'Tinotenda Kadawere', 'Jacob Une Larsson', 'Elliot Käck'];
var gamesPerPlayer = [27, 23, 23, 27, 18, 22, 21, 25, 27, 24, 10, 27, 28];
var goalsPerPlayer = [14, 8, 6, 4, 3, 3, 3, 3, 3, 2, 2, 1, 0];
var assistPerPlayer = [6, 4, 7, 5, 0, 1, 0, 2, 7, 3, 0, 3, 2];

var goalsAndAssist = [];

for (var i=0; i<players.length; i++){
  goalsAndAssist[i] = goalsPerPlayer[i] + assistPerPlayer[i];
}


var totGoals = 0;
for ( var i = 0; i < goalsPerPlayer.length; i++){
  totGoals += parseInt (goalsPerPlayer[i], 0);
}
document.getElementById("totGoal").innerHTML = totGoals;

var totAssist = 0;
for (var i = 0; i < assistPerPlayer.length; i++){
  totAssist += parseInt (assistPerPlayer[i], 0);
}
document.getElementById("totAssist").innerHTML = totAssist;

var goalsAndAssistPerGame = [];

for (var i=0; i<gamesPerPlayer.length; i++){
  goalsAndAssistPerGame[i] = goalsAndAssist[i]/gamesPerPlayer[i];
}



//Script for Chart 1

var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: games,
    datasets: [
      { 

        data: points,
        label: 'Poäng',
        fill: false,
        borderColor: 'rgb(3, 40, 83)'

      }
    ]
  }
});


//Script for Chart 2

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: games,
    datasets: [
      { 

        data: pointPerGame,
        label: 'Poäng per match',
        fill: false,
        borderColor: 'rgb(3, 40, 83)'

      }

    ]
  }
});

//Script for Chart 3

var ctx = document.getElementById("myChart3");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: games,
    datasets: [
      { 
        data: goalsFor,
        label: 'Mål per match',
        fill: false,
        borderColor: 'rgb(3, 40, 83)'

      },
      {
        data: goalsAgainst,
        label: 'Insläppta mål per match',
        fill: false,
        borderColor: 'rgb(228, 28, 47)'
      }

    ]
  }
});

//Script for Chart 4

var ctx = document.getElementById("myChart4");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: players,
    datasets: [
    {
      data: goalsPerPlayer,
      label: 'Mål',
      backgroundColor: 'rgb(228, 28, 47)'
    },
    {
      data: assistPerPlayer,
      label: 'Assist',
      backgroundColor: 'rgb(3, 40, 83)'
    },
    {
      data: goalsAndAssist,
      label: 'Mål och Assist',
      backgroundColor: 'rgb(249, 236, 83)'
    },
    {
      data: gamesPerPlayer,
      label: 'Matcher',
      backgroundColor: 'rgb(206, 182, 120)'
    },
    {
      data: goalsAndAssistPerGame,
      label: 'Snittpoäng per match',
      backgroundColor: 'silver'
    }
  ]
  }
});







