<template>
  <div class="view-about">
    <h2>Databases</h2>
    <p>Browse datatables used for LEA Typology.</p>
  </div>

  <div class="settings">
    <div class="col">
      <p><b>Select Database:</b></p>
      <form class="" action="">
        <SearchAutocomplete :items="this.data.searchAutoItems" />
        <button type='button' class="search-btn" @click="this.makeQuery()">
          <font-awesome-icon icon="fa-search" />
        </button>
      </form>
    </div>
  </div>

  <div class="hr-row">
    <hr>
  </div>


  <div class="data-table">
    <vue-good-table ref="my-table" :columns="columns" :rows="rows" styleClass="vgt-table striped condensed"
      :pagination-options="{
        enabled: true,
        mode: 'records'
      }" :sort-options="{
  enabled: true,
}" :line-numbers="true" v-on:selected-rows-change="selectionChanged" :select-options="{ enabled: true }">
      <template #selected-row-actions>
        <button @click="this.exportRows()">&nbsp;<font-awesome-icon icon="fa-solid fa-download" />&nbsp;Export
          Row(s)&nbsp;</button>
        <button @click="this.copyRows()">&nbsp;<font-awesome-icon icon="fa-solid fa-copy" />&nbsp;Copy
          Row(s)&nbsp;</button>
      </template>

    </vue-good-table>

    <br>
    <button class="primary-btn" @click="this.exportData()">&nbsp;
      <font-awesome-icon icon="fa-solid fa-download" />&nbsp;Export CSV&nbsp;
    </button>
  </div>
</template>
  
<script>
//import { tSExpressionWithTypeArguments } from '@babel/types';
import SearchAutocomplete from '@/components/SearchAutocomplete.vue'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table-next';

export default {
  name: 'DataView',
  data() {
    return {
      data: [],
      searchAutoItems: ["datatest", "datavariables", "dataacs", "datageo"],
      tags: [],
      queryList: [],
      variableArray: [],
      searchBy: '',
      columns: [{},],
      rows: [{},]
    };
  },
  components: {
    SearchAutocomplete,
    VueGoodTable
  },
  //When the app is loaded make auto suggestions
  async mounted() {


    this.data.searchAutoItems = ["typology_variables", "LEAR ACS: typ_stg_lear_acs", "LEAR GEO: typ_stg_lear_geo", "state_agencies", "state_data_collection"]


  },
  methods: {
    //When the query button is pressed, makes a query (data filters)
    async makeQuery() {
      //VARIABLE NAME
      var searchBy = document.getElementById('search-input').value

      this.data.searchBy = searchBy

      //console.log(searchBy)

      var url = ''

      if (searchBy === "typology_variables") {
        url = 'https://polar-castle-87290.herokuapp.com/datavariables'
      } else if (searchBy === "LEAR ACS: typ_stg_lear_acs") {
        url = 'https://polar-castle-87290.herokuapp.com/dataacs'
      } else if (searchBy === "LEAR GEO: typ_stg_lear_geo") {
        url = 'https://polar-castle-87290.herokuapp.com/datageo'
      } else if (searchBy === "state_agencies") {
        url = 'https://polar-castle-87290.herokuapp.com/datastateagencies'
      }
      else if (searchBy === "state_data_collection") {
        url = 'https://polar-castle-87290.herokuapp.com/data_state_data_collection'
      } else {
        url = 'https://polar-castle-87290.herokuapp.com/datavariables'
      }

      var obj = []
      await fetch(url)
        .then((response) => {
          return response.json();
        }).then((result) => {

          //Save the API response to the data
          this.data.data = result
          obj = result
        }
        )

      //Once the query is run and returns the data found, displays the results
      this.data.variableArray = obj
      this.displayResults(obj)
    },
    //Displays the resultant filtered data items in a table
    displayResults(obj) {


      var variableArray = obj //this.data.data

      this.columns = []
      this.rows = []

      for (var item1 in variableArray[0]) {

        console.log(item1)
        this.columns.push({
          label: item1, field: item1, filterOptions: {
            enabled: true, // enable filter for this column
          }
        })
      }

      for (var i = 0; i < variableArray.length; i++) {
        this.rows.push(variableArray[i])
      }

    },
    exportRows() {
      console.log(this.$refs['my-table'].selectedRows)

      var data = this.$refs['my-table'].selectedRows
      var textArr = [];

      //Adds the headings based on the first row's object's property names
      var headingsRow = [];
      for (var property in data[0]) {
        headingsRow.push(property);
      }
      textArr.push(headingsRow)

      //Push each data row
      for (var i = 0; i < data.length; i++) {
        var textRow = [];
        for (var item in data[i]) {
          textRow.push(data[i][item])
        }
        textArr.push(textRow)
      }

      //Format the data row
      var text = textArr.join('\n');

      //Create a link that downloads the file
      var link = document.createElement('a');
      link.setAttribute(
        'href',
        'data:text/csv;charset=utf-8,' + encodeURI(text)
      );
      link.setAttribute('download', 'data_csv.csv');


      //Add the link to the HTML document so that it
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    copyRows() {
      console.log(this.$refs['my-table'].selectedRows)

      var data = this.$refs['my-table'].selectedRows
      var textArr = [];

      //Adds the headings based on the first row's object's property names
      var headingsRow = [];
      for (var property in data[0]) {
        headingsRow.push(property);
      }
      textArr.push(headingsRow)

      //Push each data row
      for (var i = 0; i < data.length; i++) {
        var textRow = [];
        for (var item in data[i]) {
          textRow.push(data[i][item])
        }
        textArr.push(textRow)
      }

      //Format the data row
      var text = textArr.join('\n');

      navigator.clipboard.writeText(text);

      // Alert the copied text
      alert("Copied the text: " + text);
    },
    //Exports the data as a .CSV file
    exportData() {
      var data = this.data.variableArray
      var textArr = [];

      //Adds the headings based on the first row's object's property names
      var headingsRow = [];
      for (var property in data[0]) {
        headingsRow.push(property);
      }
      textArr.push(headingsRow)

      //Push each data row
      for (var i = 0; i < data.length; i++) {
        var textRow = [];
        for (var item in data[i]) {
          textRow.push(data[i][item])
        }
        textArr.push(textRow)
      }

      //Format the data row
      var text = textArr.join('\n');

      //Create a link that downloads the file
      var link = document.createElement('a');
      link.setAttribute(
        'href',
        'data:text/csv;charset=utf-8,' + encodeURI(text)
      );
      link.setAttribute('download', 'data_csv.csv');


      //Add the link to the HTML document so that it
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  display: block;
  overflow-x: none !important;
  font-size: medium !important;
}

.view-about {
  text-align: left;
}

.settings button {
  color: white;
  background-color: #1A3D74;
  border-color: white;
  font-size: small;
  font-weight: bold;
  border-style: solid;
  padding: 0.75rem;
}

.settings button:hover {
  background-color: #122A50;
}



.search-btn {
  color: white !important;
  background-color: #122A50 !important;
  border-color: #122A50;
  font-size: small;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: medium !important;
  padding: 0.75em !important;
  display: flex;
}

.search-btn:hover {
  background-color: #1A3D74 !important;
}

.settings {
  font-size: medium !important;
  height: min-content;
  display: block;
  padding: 1%;
  width: 100%;
  height: max-content;
}

.settings input {
  cursor: pointer;
}

.col {
  float: left;
  text-align: left;
  align-content: flex-start;
  padding: 0.5%;
  padding-right: 2.5%;
  max-width: 100%;
  display: inline-block;
}


input {
  border-color: #9e9e9e;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  box-shadow: none;
}

form {
  display: flex !important;
}

.search-btn {
  height: max-content;
  min-height: 1em;
  color: white !important;
  background-color: #122A50 !important;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  min-height: fit-content;
  border-color: #122A50 !important;
}

.search-btn:hover {
  background-color: #1A3D74 !important;
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
  text-align: left;
  display: flex;
  width: fit-content;
}

input {
  display: block;
  height: min-content;
  max-width: 20em;
  border-right: solid;
  font-size: medium;
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
  text-align: left !important;
}

.hr-row {
  display: inline-block;
  float: left;
  width: 100%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}

hr {
  color: #1A3D74;

}


.date-row {
  align-items: center;
}

.date-input {
  border-style: solid;
  border-radius: 0.25rem;
}


.data-table button {
  float: left;
}



input {
  border-right-style: none;
}

input button {
  border-right-style: none;
}

.data-table {
  display: block;
  padding: 1.5%;
  height: fit-content;
  background-color: white;
  overflow: hidden;
  height: 100%;
}

.data-view-table {
  width: 100%;
  height: 20vh;
  overflow: scroll;
  text-align: left;
  font-size: small;
  table-layout: fixed;
}


table thead {
  background-color: #CEDEF3;
}

table tbody tr:nth-child(2n) {
  background-color: #EFF4FB;
}
</style>
  
  