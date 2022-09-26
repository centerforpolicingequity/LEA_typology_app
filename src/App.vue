<template>
  <header>
    <img src="./components/cpe_logo.png" alt="cpe_logo">
  <h2>LEA Typology</h2>
  <div class="user-data">
        <p> Name: Test User </p>
        <p> Role: TestUser </p>
      </div>
  </header>
  <p>Click below to explore the database.</p>
  <div class="main-app-panel">
  <div class="menu-panel">
    <ul>
      <li><button @click="type = 'data'">Data View</button></li>
      <li><button @click="type = 'variable'">Variable View</button></li>
      <li><button @click="type = 'agency'">Agency View</button></li>
      <li><button @click="type = 'city'">City View</button></li>
      <li><button @click="type = 'state'">State View</button></li>
      <li><button @click="type = 'country'">Country View</button></li>
    </ul>
  </div>
  <div class="display-panel">
    <DataView v-if="type === 'data'"></DataView>
    <VariableView v-else-if="type === 'variable'"></VariableView>
    <AgencyView v-else-if="type === 'agency'"></AgencyView>
    <CityView v-else-if="type === 'city'"></CityView>
    <StateView v-else-if="type === 'state'"></StateView>
    <CountryView v-else-if="type === 'country'"></CountryView>
  </div>
</div>
<footer>
  <p>...</p>
</footer>
</template>

<script>

import DataView from './components/DataView.vue';
import VariableView from './components/VariableView.vue';
import AgencyView from './components/AgencyView.vue';
import CityView from './components/CityView.vue';
import StateView from './components/StateView.vue';
import CountryView from './components/CountryView.vue';

export default {
  name: 'App',
  props: {
  },
  data() {
    return {
      type: 'data'
    }
  },
  components: {
    DataView,
    VariableView,
    AgencyView,
    CityView,
    StateView,
    CountryView
  },
  methods: {
  },
  mounted() {
    console.log("mounted")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 2%;
}
button{
  cursor: pointer!important;
}
header{
  display: block;
  width: 100%;
  height: 8vh;
  align-items: flex-start;
}
header img{
  height: 100%;
  float: left;
}
header h2{
  float: left;
  padding-left: 2.5%;
}
.user-data{
  float: right;
}
.main-app-panel{
  display: flex;
  width: 100%;
  height: 100%;
}
.menu-panel {
  background-color: lightblue;
  width: 15%;
}

.menu-panel ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu-panel button {
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: large;
}

.display-panel {
  background-color: lightgray;
  width: 100%;
  height: 80vh;
}
</style>
