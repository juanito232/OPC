<template>
    <div>
      <VueApexCharts
      type="line" height="350" :options="chartOptions" :series="series"
      ></VueApexCharts>
    </div>
</template>

<script>
import Axios from "axios";

export default {
  layout: 'home', 
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
  beforeMount(){
    console.log('holis');
    Axios({
        method:'get',
        url:"http://localhost:3000/getData",
        headers:{
          'OPC-Auth-Token':this.$store.getters['auth/authToken']
        }
      }).then((result)=>{
        if (result.data.code == 100){
          console.log(result.data.data.income);
          console.log(result.data.data.expenses);
          this.series[0].data = result.data.data.income;
          this.series[1].data = result.data.data.expenses;
        }
        else{
          console.log("error");
        }
      }).catch((error)=>{console.log(error)});
  },
  data() {
    return {
      series: [{
            name: 'Ingresos',
            type: 'column',
            data: []
          }, {
            name: 'Gastos',
            type: 'column',
            data: []
          }, {
            name: 'Balance',
            type: 'line',
            data: this.balance
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
    }
  }
}
</script>