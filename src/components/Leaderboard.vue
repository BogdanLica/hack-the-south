<template>
  <div class="hello" style="font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  padding: 30px;">
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
export default {
  name: "app",
  data() {
    return {
     Ranking_attribute :["rank", "name", "money"],
     Ranking_data: [],
     theme3: {
            backgroundColor: "#364859",
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
            this.$http.get("http://35.246.18.184:5000/website_api/leaderboard").then(result => {
                this.Ranking_data = result.data;
            }
            );
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >
</style>