<template>
    <home>
        <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </home>
</template>

<script>
import Home from '../pages/Home.vue'
import VueApexCharts from 'vue3-apexcharts'

export default ({
    components:{
        Home,
        apexchart: VueApexCharts,
    },
    data: function() {
return {
        ingresos: [],
        gastos: [],
        series: [{
            name: 'Ingresos',
            type: 'column',
            data: this.ingresos
          }, {
            name: 'Gastos',
            type: 'column',
            data: this.gastos
          }, {
            name: 'Balance',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [1, 1, 4]
            },
          
            xaxis: {
              categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            },
            yaxis: {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    colors: '#008FFB',
                  }
                },
                title: {
                  text: "Income",
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: true
                }
              },
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 40
            }
          },
    };
},
})
</script>