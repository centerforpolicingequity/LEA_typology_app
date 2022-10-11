<template>
  <div class="settings">
    <div class="col">
      <p>Data:</p>
      <div class="dropdown">
        <button @click="this.myFunction1()" class="dropbtn">Data Group
          <font-awesome-icon icon="fa-caret-down" />
        </button>
        <div id="myDropdown1" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button @click="this.myFunction2()" class="dropbtn">Data Set
          <font-awesome-icon icon="fa-caret-down" />
        </button>
        <div id="myDropdown2" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
    <div class="col">
          <p>Column:</p>
          <div class="filters-row">
          <button @click="this.myDropdown2" class="dropbtn">Column Name
            <font-awesome-icon icon="fa-caret-down" />
          </button>
          <button @click="this.myDropdown2" class="dropbtn">equal to
            <font-awesome-icon icon="fa-caret-down" />
          </button>
          <div id="myDropdown1" class="dropdown-content">
            <a href="#">less than</a>
            <a href="#">more than</a>
          </div>
          <input type="text" placeholder="LEAR ID">
        </div>
      </div>
      <div class="col">
        <p>Time:</p>
        <div class="filters-row">
          <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
          <label for="start"> - to - </label>
          <input type="date" id="" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
        </div>
      </div>
      <div class="col">
        <p>Additional:</p>
        <div class="col-list">
        <input type="checkbox" id="a" value="Bike">
          <label for="a"> By date </label>
          <input type="checkbox" id="b" value="Bike">
          <label for="a"> Show SQL </label>
           <input type="checkbox" id="c" value="Bike">
          <label for="a"> Sorting </label>
          <input type="checkbox" id="d" value="Bike">
          <label for="a"> Limit results </label>
        </div>
      </div>
      <div class="button-row">
        <button class="runquery">Run Query</button>
      </div>
    </div>

  <div class="data-table">
    <div class="table-buttons">
      <button>Raw</button>
      <button>By State</button>
      <button>By Country</button>
      <button>By Type</button>
    </div>
    <br />
    <table>
      <tr>
        <th>Index</th>
        <th>lear_id</th>
        <th>agencyname</th>
      </tr>
    </table>
    <img src="./datatable.png" alt="data table">
    <button>Export</button>
    <div class="SQL query">
      <p>(Shows SQL Query)</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'DataView',
  props: {
  },
  methods: {
    myFunction1() {
      document.getElementById("myDropdown1").classList.toggle("show");
    },
    myFunction2() {
      document.getElementById("myDropdown2").classList.toggle("show");
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settings {
  height: min-content;
  display: block;
  padding: 1%;
  width: 100%;
}

.col{
  float: left;
  text-align: left;
  display: block;
  padding: 0.5%;
  width: max-content;
}
/* Dropdown Button */
.dropbtn {
  background-color: white;
  color: gray;
  cursor: pointer;
}

.dropdown {
  float: left;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  z-index: 1;
  width: 100%;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  display: block;
}
.dropdown-content a:hover{
  background-color: lightgray;
}

.show {
  display: block;
}

.user-data {
  display: flex;
}

.filters-row {
  text-align: center;
  display: flex;
}

.col ul li{
  list-style: none;
  text-align: left;
  float: left;
}
input{
  height: min-content;
  width: min-content;
}
.button-row{
  display: inline-block;
  float: left;
  width: 100%;
  padding: 0.5%;
  height: min-content;
  padding-top: 1%;
  padding-bottom: 1%;
}
.button-row button{
  float: left;
}
.data-table {
  display: block;
  padding: 1.5%;
  height: fit-content;
  background-color: lightcyan;
  overflow: hidden;
}

.data-table button {
  float: left;
}

.table-buttons {
  float: left;
}

table {
  background-color: azure;
  width: 100%;
  height: 20vh;
}

.data-table img {
  width: 100%;
}
</style>
  