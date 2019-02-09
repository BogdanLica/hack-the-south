<template>
  <div class="hello">
     <vueye-table 
     tableStyle="bordered" 
     :theme="theme3" 
     :per-page-values="[5,10,25,50]"
     title="Ranking"  
    :rows_data="Ranking_data" 
    ></vueye-table>
  </div>
</template>

<script>
import VueyeTable from "vueye-datatable";
import rankings from "./rankings.json";
export default {
  name: "app",
  data() {
    return {
     Ranking_attribute :["rank", "name", "money"],
     Ranking_data: [],
     theme3: {
            backgroundColor: "#141443",
            color: "#eee",
            rows:{
                borderBottom: "1px solid #eee"
        },
      rowClick: {
                backgroundColor: "#0D0B2F"
            }
            }
    };
  },
  components: {
    VueyeTable
  },
  mounted() {
    this.Ranking_data=rankings;
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 20px;

}
h3 {
  margin: 40px 10px 10px;
}
ul {
  list-style-type: none;
  padding: 20px;
}
li {
  display: inline-block;
  margin: 20px 10px;
}
a {
  color: #42b983;
}
</style>
