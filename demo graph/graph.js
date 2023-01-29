// let sides = 6;

// let data = [[0.7045, 0.87, 0.5049, 0.8418, 0.545]];

// let el = document.getElementById("polygon-chart");

// let chart = new PolygonChart({
//   target: el,
//   radius: 200,
//   data: {
//     data: data,
//     sides: sides,
//     tooltips: {
//       roundTo: 2,
//       percentage: true
//     },
//     colors: {
//       normal: {
//         polygonStroke: "#A54AE9",
//         polygonFill: "#a54ae94f",
//         pointStroke: "transparent",
//         pointFill: "#A54AE9"
//       },
//       onHover: {
//         polygonStroke: "#A54AE9",
//         polygonFill: "rgba(0,0,0,0.3)",
//         pointStroke: "#A54AE9",
//         pointFill: "#fff"
//       }
//     }
//   },
//   polygon: {
//     colors: {
//       normal: {
//         fill: "#231E2C",
//         stroke: "#3A255E"
//       },
//       onHover: {
//         fill: "#231E2C",
//         stroke: "#993DE0"
//       }
//     }
//   },
//   levels: {
//     count: 3,
//     labels: {
//       enabled: true,
//       position: {
//         spline: 1,
//         quadrant: 0
//       },
//       colors: {
//         normal: "#8B27D7",
//         onHover: "#A54AE9"
//       }
//     }
//   }
// });
// chart.init();


let data = [10, 20, 30, 40, 50, 60, 70];

let width = 600;
let height = 400;

let svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

let path = svg.append("path")
.attr("d", "M " + getPoints(data) + "Z")
.attr("class", "polygon");

function getPoints(data) {
    let points = "";
    let angle = 0;
    let radius = 100;
    let x = width/2;
    let y = height/2;

    for (let i = 0; i < data.length; i++) {
        let pointX = x + radius * Math.cos(angle);
        let pointY = y + radius * Math.sin(angle);
        points += pointY + "," + pointX + " ";
        angle += (2 * Math.PI) / data.length;
    }

    return points;
}
