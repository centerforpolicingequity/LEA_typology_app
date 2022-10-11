<template>
  <header>
    <img src="./components/cpe_logo.png" alt="cpe_logo">
    <h2>LEA Typology</h2>
    <button class="login-btn">Login</button>
  </header>
  <div class="menu-panel">
    <ul>
      <li><button @click="type = 'variable'">&nbsp;Variable&nbsp;</button></li>
      <li><button disabled>|</button></li>
      <li><button @click="type = 'agency'">&nbsp;Agency&nbsp;</button></li>
      <li><button disabled>|</button></li>
      <li><button @click="type = 'city'">&nbsp;City&nbsp;</button></li>
    </ul>
  </div>
  <div class="main-app-panel">

    <div class="display-panel">
      <VariableView v-if="type === 'variable'"></VariableView>
      <AgencyView v-else-if="type === 'agency'"></AgencyView>
      <CityView v-else-if="type === 'city'"></CityView>
    </div>
  </div>
  <footer>
    <p>...</p>
  </footer>
</template>

<script>

import VariableView from './components/VariableView.vue';
import AgencyView from './components/AgencyView.vue';
import CityView from './components/CityView.vue';

export default {
  name: 'App',
  props: {
  },
  data() {
    return {
      type: 'variable'
    }
  },
  components: {
    VariableView,
    AgencyView,
    CityView
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
  color: #383f51;
  align-items: center;
  align-content: center;
}

button {
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.primary-btn {
  color: white;
  background-color: #122A50;
  font-size: medium;
  border-style: none;
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.primary-btn:hover {
  background-color: #1A3D74;
}

header {
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 4vw;
  padding-right: 4vw;
  width: 90vw;
  display: flex;
  height: 6vh;
  background-color: white;
  font-size: larger;
  vertical-align: middle;
  align-items: center;
}

header img {
  display: block;
  height: 100%;
}

header h2 {
  display: block;
  float: left;
  width: 100%;
  text-align: left;
  margin-left: 2.5%;
}

header button {
  display: block;
  float: right;
  text-align: right;
}

.login-btn {
  text-align: center;
  font-weight: bolder;
  color: #383f51;
  background-color: white;
  border-style: solid;
  border-color: #1A3D74;
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.login-btn:hover {
  background-color: #EFF4FB;
}

.menu-panel {
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  color: white;
  background-color: #1A3D74;
  display: block;
  height: fit-content;
  text-align: center;
  align-content: center !important;
}

.menu-panel ul {
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;
  width: min-content;
  display: flex;
}

.menu-panel button {
  width: 100%;
  color: white;
  background-color: #1A3D74;
  text-align: left;
  cursor: pointer;
  font-size: larger;
  border: none;
  box-shadow: none;
}

.menu-panel button:hover {
  color: #E0E0E0;
  text-decoration: underline;
}

.display-panel {
  padding-left: 4%;
  padding-right: 4%;
  display: block;
  background-color: rgb(255, 255, 255);
  width: 90vw;
  height: fit-content;
}

footer {
  background-color: white;
  height: 20vh;
}
</style>
