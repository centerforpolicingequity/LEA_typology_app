<template>
  <h1>Variable View</h1>
  <hr>
  <div class="settings">
    <div class="col-1">
      <div class="dropdown">
        <button @click="this.myFunction1()" class="dropbtn">Data Group</button>
        <div id="myDropdown1" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div class="dropdown">
        <button @click="this.myFunction2()" class="dropbtn">Data Set</button>
        <div id="myDropdown2" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

    </div>
    <div class="col-2">
      <div class="extra-filters">
        <p>Additional Filters</p>
        <p>Time</p>
        <div class="checkboxes">
          <input type="checkbox" id="a" value="Bike">
          <label for="a"> Filter by date </label>
          <input type="checkbox" id="b" value="Bike">
          <label for="b"> Display SQL </label>
          <input type="checkbox" id="c" value="Bike">
          <label for="c"> Include Sorting </label>
          <input type="checkbox" id="d" value="Bike">
          <label for="d"> Limit Results </label>
        </div>
        <button>Run Query</button>
      </div>
    </div>
  </div>
  <div class="data-table">
    <div class="table-buttons">
    <button>Raw</button>
    <button>By State</button>
    <button>By Country</button>
    <button>By Type</button>
  </div>
  <br/>
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
  name: 'VariableView',
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
<style>
.settings {
  height: 40%;
  display: flex;
}

.col-1 {
  float: left;
  flex: 40%;
  border-right-style: solid;
  border-right-color: darkgray;
  margin-right: 1.5%;
}

.col-2 {
  float: left;
  flex: 60%;
}

/* Dropdown Button */
.dropbtn {
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
  background-color: #f1f1f1;
  z-index: 1;
  width: 100%;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  display: block;
}

.show {
  display: block;
}
.col-2{
  text-align: left;
}
.col-2 .user-data {
  display: flex;
}
.extra-settings {
  background-color: azure;
}

.extra-settings .checkboxes {
  display: flex;
  align-content: flex-start;
}

.data-table {
  padding: 1.5%;
  height: fit-content;
  background-color: lightcyan;
  overflow: hidden;
}
.data-table button{
  float: left;
}
.table-buttons{
  float: left;
}
table{
  background-color: azure;
  width: 100%;
  height: 20vh;
}
</style>
  