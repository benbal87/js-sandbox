let _ = require('lodash');

const object1 = {
  autosize: true,
  plot_bgcolor: 'white',
  hovermode: 'x',
  barmode: 'group',
  showlegend: true,
  hoverlabel: {
    bgcolor: 'black',
    bordercolor: 'blue',
    font: {
      color: 'green'
    }
  },
  margin: {
    t: 0,
    r: 15,
    b: 80,
    l: 15,
    pad: 0
  },
  legend: {
    orientation: 'h',
    yanchor: 'bottom',
    y: -0.35,
    xanchor: 'center',
    x: 0.5,
    font: {
      size: 8,
      color: 'yellow'
    }
  },
  xaxis: {
    type: 'date',
    tickformat: '%b %e, %y'
  }
}

const object2 = {
  hoverlabel: {
    font: {
      color: 'red',
      size: 12
    }
  },
  legend: {
    font: {
      size: 19
    }
  },
  xaxis: {
    color: 'skyblue',
    zeroline: false,
    showgrid: false,
    showline: true,
    linewidth: 5,
    linecolor: 'cian',
    tickfont: {
      size: 9
    }
  },
  yaxis: {
    color: 'skyblue',
    zeroline: false,
    showgrid: false,
    showline: true,
    linewidth: 5,
    linecolor: 'cian',
    tickfont: {
      size: 9
    }
  }
}

console.log(_.merge(object1, object2))
