<template>
  <div>
    <div id="pointer">Breaking News</div>
    <div>{{ news.title }}</div>
  </div>
</template>

<script>
import data from "@/assets/data/news.json";

export default {
  name: "NewsList",

  data() {
    return {
      news: data[0],
    };
  },

  created() {
    console.log(data);
  },
};
</script>

<style scoped>
#pointer {
  width: 200px;
  height: 40px;
  position: relative;
  background: red;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}
#pointer:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid white;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
#pointer:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid red;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
</style>
