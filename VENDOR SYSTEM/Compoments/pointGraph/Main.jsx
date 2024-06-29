import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import './main.css';

// Utility functions to calculate mean, mode, median
const calculateMean = (data) => {
  return data.reduce((a, b) => a + b, 0) / data.length;
};

const calculateMedian = (data) => {
  data.sort((a, b) => a - b);
  const half = Math.floor(data.length / 2);
  if (data.length % 2 === 0) {
    return (data[half - 1] + data[half]) / 2;
  }
  return data[half];
};

const calculateMode = (data) => {
  const frequency = {};
  let maxFreq = 0;
  let mode = [];
  data.forEach(value => {
    frequency[value] = (frequency[value] || 0) + 1;
    if (frequency[value] > maxFreq) {
      maxFreq = frequency[value];
      mode = [value];
    } else if (frequency[value] === maxFreq) {
      mode.push(value);
    }
  });
  return mode;
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        stroke: {
          width: [4, 0, 0]
        },
        xaxis: {
          categories: []
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100
        }
      },
      seriesMixedChart: [],
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px"
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Percent"]
      },
      seriesRadial: [],
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ["Statistics"],
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100]
          }
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right"
        }
      },
      seriesBar: []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.updateCharts, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchData() {
    axios.get('https://vendobackend-2.onrender.com/users')
      .then(result => {
        const salaries = result.data.map(user => user.salary);
        const sum = salaries.reduce((a, b) => a + b, 0);
        const mean = calculateMean(salaries);
        const median = calculateMedian(salaries);
        const mode = calculateMode(salaries);
        const seriesMixedChart = [
          {
            name: "Salary",
            type: "line",
            data: salaries
          }
        ];
        const seriesRadial = [mean];
        const seriesBar = [
          {
            name: "Sum",
            data: [sum]
          },
          {
            name: "Mean",
            data: [mean]
          },
          {
            name: "Median",
            data: [median]
          },
          {
            name: "Mode",
            data: [mode[0]] // Taking the first mode if there are multiple
          }
        ];

        this.setState({
          seriesMixedChart,
          seriesRadial,
          seriesBar,
          optionsMixedChart: {
            ...this.state.optionsMixedChart,
            xaxis: {
              categories: result.data.map(user => new Date(user.created_at).toLocaleDateString())
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  updateCharts() {
    // For this example, we'll just re-fetch the data
    this.fetchData();
  }

  render() {
    return (
      <div className="app maingrap" style={{ color: 'white' }}>
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="1000"
              height="280"
            />
          </div>
          <div className="col radial-chart ">
            <Chart className='chart'
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col percentage-chart ">
            <Chart className='chart'
              options={this.state.optionsBar}
              height={140}
              series={this.state.seriesBar}
              type="bar"
              width={500}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
