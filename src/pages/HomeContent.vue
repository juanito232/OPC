<template>
    <home>
        <div v-for="income in incomes" :key="income.id">{{income}}</div>
    </home>
</template>

<script>
import Home from './Home.vue'
import Axios from "axios";
export default {
    data(){
        return{
            incomes:[]
        }
    },
    name:'Home-Content',
    components:{
        Home
    },
    beforeMount(){
        console.log(this.$route.params.id);
        //this.getIncomes()
    },
    methods:{
        getIncomes(){
            Axios.get('http://localhost:3000/getIncomes',this.$route.params.id).then(res=>{
                console.log(res.code);
                console.log(res);
                if (res.data.code == 100){
                    console.log("OK");
                    this.incomes = res.data.data;
                }else{
                    console.log("Error",res);
                }
            }).catch((err)=>{
                    console.log("Error",err);
            })
        }
    }
}
</script>
