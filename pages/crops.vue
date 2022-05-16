<template>
   <a-list item-layout="horizontal" :data-source="data">
      <a-list-item v-for="item in data" :key="item.id" @click="clickItem(item.id)">
        <a-list-item-meta
          :description="item.description"
        >
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <template #avatar>
            <a-avatar :src="item.photo" />
          </template>
        </a-list-item-meta>
      </a-list-item>
  </a-list>
</template>

<script>
import Axios from "axios";
export default {
  layout: "home",
  data() {
    return {
      incomes: [],
      expenses: [],
      data:[]
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    async getData() {
      this.$store.commit("setLoading", true);
      Axios({
        method: "get",
        url: "https://optipapa-426b0-default-rtdb.firebaseio.com/users/"+this.$cookies.get('uuid')+"/cultivos.json",
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"],
        },
      })
        .then((res) => {
          this.$store.commit("setLoading", false);
          if (res.status==200) {
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
    deleteIncome(id) {
      Axios({
        method: "post",
        url: "http://localhost:3000/deleteIncome/" + id,
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"],
        },
      })
        .then((res) => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            this.getData();
          } else {
            console.log("Error", res);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
    clickItem(id){
      this.$router.push({path:'/cropDetail/'+id});
  },
  },
};
</script>

<style scoped>
.title-incomes {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 1.5em;
}
.title-expenses {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 1.5em;
}

.loading {
  margin: 0 auto;
  width: 50%;
}

#image-income {
  transition: 0.5s ease-in-out;
}

#image-income:hover {
  transform: rotate(15deg);
}
</style>
