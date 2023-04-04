<template>
   <header>
    <img src="@/components/cpe_logo.png" alt="cpe_logo">
    <h2>LEA Typology</h2>
    <button class="login-btn">Login</button>
  </header>
  <div class="menu-panel">
    <ul>
    <li><button><router-link to="/variable">Variables</router-link></button></li>
    <li><button disabled>&nbsp;|&nbsp;</button></li>
    <li><button><router-link to="/data">Databases</router-link></button></li>
    <li><button disabled>&nbsp;|&nbsp;</button></li>
    <li><button><router-link to="/agency">Agency</router-link></button></li>
    <li><button disabled>&nbsp;|&nbsp;</button></li>
    <li><button><router-link to="/state">State</router-link></button></li>
    <li><button disabled>&nbsp;|&nbsp;</button></li>
    <li><button><router-link to="/about">About</router-link></button></li>
  </ul>
  </div>
  <div class="main-app-panel">

<div class="display-panel">
  <router-view/>
</div>
</div>
<footer>
<p>...</p>
</footer>
</template>

<script>
export default {
  name: 'App',
  props: {
  },
  data() {
    return {
      type: 'variable',
      query: ''
    }
  },
  methods: {
    async test() {

      //var url = 'https://polar-castle-87290.herokuapp.com/data'
      var url = 'https://localhost:3000/data'


      await fetch(url)
        .then((response) => {
          return response.json();
        }).then((result) => {

          var obj = result.data
          console.log(obj);
        }
        )

    }
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
.menu-panel, nav {
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
  color: white!important;;
  background-color: #1A3D74;
  text-align: left;
  cursor: pointer;
  font-size: larger;
  border: none;
  box-shadow: none;
}
button a{
  color: white!important;
  text-decoration: none;
}
button a:hover{
  color: #E0E0E0!important;
  text-decoration: underline;
}
button a::after{
  color: pink!important;
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
