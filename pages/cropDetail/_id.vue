<template>
  <div class="wrapper">
    <div class="circle-left"></div> 
    <div class="circle-right"></div> 
    <img :width="400" :src="data.photo"/>
    <h2>{{data.name}}</h2>
    <div class="itemDetail"><span>Temperature </span> <span>{{data.temperature}}</span></div>
    <div class="itemDetail"><span>Hydrogen </span> <span>{{data.hydrogen}}</span></div>
    <div class="itemDetail"><span>Water level </span> <span>{{data.water}}</span></div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  layout: "home",
  data() {
    return {
      data: {
        water: 0,
        hydrogen: 0,
        id: 0,
        name: "",
        photo: "",
        temperature: "",
      },
    };
  },
  beforeMount(){
    this.getDetail();
  },
  methods: {
    async getDetail() {
      this.$store.commit("setLoading", true);
      Axios({
        method: "get",
        url:
          "https://optipapa-426b0-default-rtdb.firebaseio.com/users/" +
          this.$cookies.get("uuid") +
          "/cultivos/" +
          this.$route.params.id+".json",
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"],
        },
      })
        .then((res) => {
          this.$store.commit("setLoading", false);
          if (res.status == 200) {
            this.data = res.data;
            console.log(this.data);
          } else {
            console.log("Error", res);
          }
        })
        .catch((err) => {
          this.$store.commit("setLoading", false);
          console.log("Error", err);
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  .wrapper{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20%;
    margin-top: 5%;
  }

  img{
    border-radius: 10%;
    border: solid 0.2em green;
  }

  h2{
    padding-top: 1em;
    font-size: 3.3em;
    color: #001529;
    font-family: 'Rubik';
  }

  .itemDetail{
    width: 20em;
    display: flex;
    justify-content: space-between;
  }
  
  span{
    font-family: 'Rubik';
    font-size: 1.76em;
  }

  .circle-left {
  width: 71px;
  height: 71px;
  background-color: #7cd9eb;
  border-radius: 200em;
  position: absolute;
  top: 0%;
  left: 0%;
  text-align: center;
}

.circle-right {
  width: 71px;
  height: 71px;
  background-color: #7cd9eb;
  border-radius: 200em;
  position: absolute;
  bottom: 0%;
  right: 0%;
  text-align: center;
}
</style>