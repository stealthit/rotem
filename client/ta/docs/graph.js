/* page 4 */


var ctx = document.getElementById("page04-graph"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});



/* 팀역동성 */
var ctx = document.getElementById("page04-graph01"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

/* 팀생산성 */
var ctx = document.getElementById("page04-graph02"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

/* page05 */
var ctx = document.getElementById("page05-graph01"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph02"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph03"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph04"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph05"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph06"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph07"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph08"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph09"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

var ctx = document.getElementById("page05-graph10"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'bar', //그래프 형태 지정하기
data: {
    labels: ["총점", "Blue", "Yellow"],
    datasets: [{
        label: '# of Votes', //상단 라벨(데이터값들의 그룹명)
        data: [12, 19, 3],//데이터값
        backgroundColor: [
            'rgba(0, 0, 0, 0.3)',   //1번째 그래프의 바탕색
            'rgba(0, 123, 184, 0.2)',   //2번째 그래프의 바탕색
            'rgba(40, 157, 66, 0.2)'   //3번째 그래프의 바탕색
        ],
        borderColor: [  
            'rgba(0,0,0,0.5)',        //1번째 그래프의 선색
            'rgba(54, 162, 235, 1)',     //2번째 그래프의 선색
            'rgba(40, 157, 66, 1)'     //3번째 그래프의 선색
        ],
        borderWidth: 1 //선굵기
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

/*page 10*/
var ctx = document.getElementById("page10-graph01"); //캔버스 id값 가져오기
var myChart = new Chart(ctx, {
type: 'line', //그래프 형태 지정하기
data: {
  labels: ["", "50%", "100%"],
  datasets: [{
    label: '역동성', //상단 라벨(데이터값들의 그룹명)
    data: [12, 3, 5],//데이터값
    backgroundColor: [
        'rgba(255, 99, 132, 0)'   //1번째 그래프의 바탕색
    ],
    borderColor: [  
      'rgba(0, 123, 184, 1)'     //1번째 그래프의 선색
    ],
    borderWidth: 3 //선굵기
  },
  {
    label: '생산성', //상단 라벨(데이터값들의 그룹명)
    data: [0, 7, 3],//데이터값
    backgroundColor: [
        'rgba(255, 99, 132, 0)'   //2번째 그래프의 바탕색
    ],
    borderColor: [  
      'rgba(40, 157, 66, 1)'     //2번째 그래프의 선색
    ],
    borderWidth: 3 //선굵기
  }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

    var ctx = document.getElementById("page10-graph02"); //캔버스 id값 가져오기
    var myChart = new Chart(ctx, {
    type: 'line', //그래프 형태 지정하기
    data: {
      labels: ["", "50%", "100%"],
      datasets: [{
        label: '역동성', //상단 라벨(데이터값들의 그룹명)
        data: [12, 3, 5],//데이터값
        backgroundColor: [
            'rgba(255, 99, 132, 0)'   //1번째 그래프의 바탕색
        ],
        borderColor: [  
          'rgba(0, 123, 184, 1)'     //1번째 그래프의 선색
        ],
        borderWidth: 3 //선굵기
      },
      {
        label: '생산성', //상단 라벨(데이터값들의 그룹명)
        data: [0, 7, 3],//데이터값
        backgroundColor: [
            'rgba(255, 99, 132, 0)'   //2번째 그래프의 바탕색
        ],
        borderColor: [  
          'rgba(40, 157, 66, 1)'     //2번째 그래프의 선색
        ],
        borderWidth: 3 //선굵기
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});