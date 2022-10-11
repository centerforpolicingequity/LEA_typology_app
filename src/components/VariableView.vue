<template>
  <div class="settings">
    <div class="col">
      <p><b>Variable name:</b></p>
      <form class="example" action="">
        <input type="text" placeholder="Ex: age" name="search">
        <button type="submit" class="search-btn">
          <font-awesome-icon icon="fa-search" />
        </button>
      </form>
    </div>
    <div class="col">
      <p><b>Search by:</b></p>
      <div class="filters-row">
        <input type="radio" id="1" name="option" value=""><label for="1">Name</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="2" name="option" value=""><label for="2">Description</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="3" name="option" value=""><label for="3">Dataset</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="4" name="option" value=""><label for="4">All</label>
      </div>

    </div>
    <div class="col">
      <p><b>Date:</b></p>
      <div class="filters-row date-row">
        <input class="date-input" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
        <label for="start">&nbsp; to &nbsp;</label>
        <input class="date-input" type="date" id="" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
      </div>
    </div>
    <div class="col">
      <p><b>Additional:</b></p>
      <div class="col-list">
        <label for="contain">Results
          contain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" id="contain" placeholder="Ex: age, name" name="search">
        <button type="submit" class="search-btn">
          <font-awesome-icon icon="fa-search" />
        </button>
      </div>
      <div class="col-list">
        <label for="contain">Results DO NOT contain:&nbsp;</label>
        <input type="text" id="contain" placeholder="Ex: age, name" name="search">
        <button type="submit" class="search-btn">
          <font-awesome-icon icon="fa-search" />
        </button>
      </div>
    </div>
    <div class="col">
      <p><b>Average:</b></p>
      <div class="col-list">
        <input type="checkbox" id="a" value="Bike">
        <label for="a"> Merge and Generate Average </label>
      </div>
    </div>
    <div class="button-row">
      <button class="runquery primary-btn">&nbsp;<font-awesome-icon icon="fa-solid fa-play" />&nbsp;Run Query&nbsp;</button>
    </div>
  </div>
  <div class="hr-row">
      <hr>
  </div>


  <div class="data-table">
    <div class="table-buttons">
      <button>&nbsp;Raw&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
      <button>&nbsp;By State&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
      <button>&nbsp;By Country&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
      <button>&nbsp;By Type&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
    </div>
    <br />
    <table>
      <thead>
      <tr>
        <th>variable name</th>
        <th>dataset</th>
        <th>type</th>
        <th>variable description</th>
      </tr>
    </thead>
      <tbody>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
    <br>
    <button class="primary-btn">&nbsp;<font-awesome-icon icon="fa-solid fa-download" />&nbsp;Export&nbsp;</button>
    <div class="SQL query">
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
<style>
template {
  display: block;
}

.settings {
  font-size: smaller;
  height: min-content;
  display: block;
  padding: 1%;
  width: 100%;
  height: max-content;
}

.col {
  float: left;
  text-align: left;
  display: block;
  padding: 0.5%;
  padding-right: 2%;
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

.dropdown-content a:hover {
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


input {
  height: min-content;
  width: min-content;
}

.button-row {
  display: inline-block;
  float: left;
  width: 100%;
  padding: 0.5%;
  height: min-content;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.button-row button {
  float: left;
}

.col-list1 input {
  float: left;
}

.col-list1 {
  display: block;
}
.hr-row{
  display: inline-block;
  float: left;
  width: 100%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}
hr{
  color: #1A3D74 ;
}
input{
  border-color: #9e9e9e;
  border-top-left-radius:  0.25rem;
  border-bottom-left-radius:  0.25rem;
  box-shadow: none;
}
.search-btn{
  color: white!important;
  background-color: #122A50!important;
  border-color: #122A50;
  font-size: small;
  border-top-right-radius:  0.25rem;
  border-bottom-right-radius:  0.25rem;
}
.search-btn:hover{
  background-color: #1A3D74!important;
}
.date-row{
  align-items: center;
}
.date-input{
  border-style: solid;
  border-radius: 0.25rem;
}
.data-table {
  display: block;
  padding: 1.5%;
  height: fit-content;
  background-color: white;
  overflow: hidden;
}

.data-table button {
  float: left;
}

.table-buttons button{
  color: white;
  background-color: #1A3D74;
  border-color: white;
  font-size: small;
  font-weight: bold;
  border-style: solid;
  padding: 0.75rem;
}
.table-buttons button:hover{
  background-color: #122A50;
}
input{
  border-right-style: none;
}
input button{
  border-right-style: none;
}
table {
  background-color: white;
  width: 100%;
  height: 20vh;
  overflow: scroll;
}
table thead{
  background-color: #CEDEF3;
}
table tbody tr:nth-child(2n){
  background-color: #EFF4FB;
}
table td, table th{
  padding: 0.5%;
}
.data-table img {
  width: 100%;
}
</style>
  