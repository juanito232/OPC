<template>
  <div>
    <div v-if="!$store.getters.loading">
      <h1 class="title-incomes">Ingresos</h1>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="incomes">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.date">
          <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>
          <a-card-meta :title="item.name" :description="item.description">
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
    <h1 class="title-expenses">Gastos</h1>
     <a-list :grid="{ gutter: 16, column: 4 }" :data-source="expenses">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.name">

          <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
    </div>
    <div v-else>
        <img src="~/assets/loading.gif" alt="" class="loading">
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  layout: "home",
  data() {
    return {
      incomes: [],
      expenses: []
    };
  },
  beforeMount() {
    this.getIncomes();
    this.getExpenses();
  },
  methods: {
    async getIncomes() {
      this.$store.commit('setLoading',true);
      Axios({
        method: "get",
        url: "http://localhost:3000/getAllIncomes/",
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"]
        }
      })
        .then(res => {
          console.log(res.code);
          console.log(res);
          this.$store.commit('setLoading',false);
          if (res.data.code == 100) {
            console.log(res.data.data);
            this.incomes = res.data.data;
          } else {
            console.log("Error", res);
          }
        })
        .catch(err => {
          this.$store.commit('setLoading',false);
          console.log("Error", err);
        });
    },
    getExpenses() {
      Axios({
        method: "get",
        url: "http://localhost:3000/getExpenses/",
        headers: {
          "OPC-Auth-Token": this.$store.getters["auth/authToken"]
        }
      })
        .then(res => {
          console.log(res.code);
          console.log(res);
          if (res.data.code == 100) {
            console.log(res.data.data);
            this.expenses = res.data.data;
          } else {
            console.log("Error", res);
          }
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
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

.loading{
  margin: 0 auto;
  width: 50%;
}

#image-income{
  transition: 0.5s ease-in-out;
}

#image-income:hover{
  transform: rotate(15deg);
}

</style>
