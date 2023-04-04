<template>
  <div class="view-about">
    <h2>Variables</h2>
    <p>View variables used for LEA Typology and their descriptions and datasets.</p>
  </div>
  <div class="settings">
    <div class="col col-type">
      <p><b>Database column:</b></p>
      <div class="filters-row">
        <input type="radio" id="1" name="option" class="option" value="name" checked
          @click="this.makeAutoSuggestions(this.data.data)"><label for="1">Name</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="3" name="option" class="option" value="dataset"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="3">Dataset</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="2" name="option" class="option" value="database"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="2">Database</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="5" name="option" class="option" value="type"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="2">Data Type</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="5" name="option" class="option" value="category"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="2">Category</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="5" name="option" class="option" value="source"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="2">Source</label>
      </div>
      <div class="filters-row">
        <input type="radio" id="4" name="option" class="option" value="all"
          @click="this.makeAutoSuggestions(this.data.data)"><label for="4">All</label>
      </div>
    </div>

    <div class="col">
      <p><b>Variable Name/Value:</b></p>
      <form class="" action="">
        <SearchAutocomplete :items="this.data.searchAutoItems" />
      </form>
    </div>

    <div class="col">
      <p><b>Additional:</b></p>
      <div class="col-list">
        <label for="contain">Results
          contain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <TagInput1 v-model="tags" />
      </div>
      <div class="col-list">
        <label for="contain">Results DO NOT contain:&nbsp;</label>
        <TagInput2 v-model="tags" />
      </div>
    </div>

    <div class="button-row">
      <button type="button" class="runquery primary-btn" @click="this.makeQuery()">&nbsp;
        <font-awesome-icon icon="fa-solid fa-play" />&nbsp;Run Query&nbsp;
      </button>
    </div>
  </div>
  <div class="hr-row">
    <hr>
  </div>


  <div class="variable-data-table">
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
        <button @click="this.copyRows()">&nbsp;<font-awesome-icon icon="fa-solid fa-copy" />&nbsp;Copy Row(s)&nbsp;</button>
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
import TagInput1 from "@/components/TagInput1.vue";
import TagInput2 from "@/components/TagInput2.vue";
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table-next';


export default {
  name: 'VariableView',
  data() {
    return {
      data: [],
      searchAutoItems: [""],
      tags: [],
      queryList: [],
      variableArray: [],
      searchBy: '',
      columns: [{
        label: 'name',
        field: 'name',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'description',
        field: 'description',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'dataset',
        field: 'dataset',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'database',
        field: 'database',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'type',
        field: 'type',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'category',
        field: 'category',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'source',
        field: 'source',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      },
      {
        label: 'dbt',
        field: 'dbt',
        filterOptions: {
          enabled: true, // enable filter for this column
        }
      }

      ],
      rows: [
        {},
      ]
    };
  },
  components: {
    SearchAutocomplete,
    TagInput1,
    TagInput2,
    VueGoodTable
  },
  //When the app is loaded make auto suggestions
  async mounted() {

    //Make an API Call
    var url = 'https://polar-castle-87290.herokuapp.com/datavariables'

    await fetch(url)
      .then((response) => {
        return response.json();
      }).then((result) => {

        //Save the API response to the data
        var obj = result
        this.data.data = obj

        //Based on the variable option selected, display autosuggestions list
        var searchBy = ''
        const ele = document.getElementsByName('option')
        for (var i = 0; i < ele.length; i++) {
          if (ele[i].checked)
            searchBy = ele[i].value;
        }
        if (searchBy === "name")
          this.data.searchAutoItems = this.makeAutoSuggestions(this.data.data)
      }
      )

  },
  methods: {
    // Makes auto suggestions
    makeAutoSuggestions(data) {

      //Find which option was selected
      var searchBy = ''
      const ele = document.getElementsByName('option')
      for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked)
          searchBy = ele[i].value;
      }


      //Based on the option, get the list of variable names 
      var result = data
      var suggestionsList = [];

      if (result.length) {
        for (var j = 0; j < result.length; j++) {

          var item, item2, item3, item4, item5, item6 = ''

          if (searchBy === "name") {
            item = result[j].name
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }
          else if (searchBy === "dataset") {
            item = result[j].dataset
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }
          else if (searchBy === "database") {
            item = result[j].database
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }
          else if (searchBy === "type") {
            item = result[j].type
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }
          else if (searchBy === "category") {
            item = result[j].category
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }
          else if (searchBy === "source") {
            item = result[j].source
            if (!suggestionsList.includes(item))
              suggestionsList.push(item);
          }

          else {
            item = result[j].name
            item2 = result[j].database
            item3 = result[j].dataset
            item4 = result[j].type
            item5 = result[j].category
            item6 = result[j].source
            if (!suggestionsList.includes(item))
              suggestionsList.push(item)
            if (!suggestionsList.includes(item2))
              suggestionsList.push(item2)
            if (!suggestionsList.includes(item3))
              suggestionsList.push(item3)
            if (!suggestionsList.includes(item4))
              suggestionsList.push(item4)
            if (!suggestionsList.includes(item5))
              suggestionsList.push(item5)
            if (!suggestionsList.includes(item6))
              suggestionsList.push(item6)
          }
        }
      }

      //Save it to the data and display it 
      this.data.searchAutoItems = suggestionsList
      return suggestionsList
    }
    ,
    //When the query button is pressed, makes a query (data filters)
    makeQuery() {
      //Finds an input value for each of the following options:

      //SEARCH BY
      var searchBy = ''
      const ele = document.getElementsByName('option')
      for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked)
          searchBy = ele[i].value;
      }

      //VARIABLE NAME
      var variableName = document.getElementById('search-input').value

      //ADDITIONAL
      //RESULTS CONTAIN
      var contain = document.getElementsByClassName("tag-input__tag1")
      var containArray = Array.from(contain);
      var containTagsList = []

      for (var j = 0; j < contain.length; j++) {
        containTagsList.push(containArray[j].__vnode.key)
      }

      //RESULTS DO NOT CONTAIN
      var donotContain = document.getElementsByClassName("tag-input__tag2")
      var donotContainArray = Array.from(donotContain);
      var donotContainTagsList = []

      for (var k = 0; k < donotContain.length; k++) {
        donotContainTagsList.push(donotContainArray[k].__vnode.key)
      }

      //Runs the query with the filter values included
      var variableArray = this.runQuery(variableName, searchBy, containTagsList, donotContainTagsList)

      console.log(donotContainTagsList)

      this.data.searchBy = searchBy

      //Once the query is run and returns the data found, displays the results
      this.displayResults(variableArray)
    },
    //Runs the query and filters the data
    runQuery(variableName1, searchBy1, containTagsList1, donotContainTagsList1) {
      //Query values
      var variableName = variableName1;
      var searchBy = searchBy1;
      var containTagsList = containTagsList1;
      var donotContainTagsList = donotContainTagsList1;


      var variableArray = []
      const data = this.data.data

      //1) Goes through each row of the data
      for (var i = 0; i < data.length; i++) {
        var contains = true;
        var doesntContain = true;
        var item = data[i]

        //2) Checks if any of the values are in the "Contain" tags list
        for (var q = 0; q < containTagsList.length; q++) {
          var valArray = Object.values(item)

          //Not case-sensitive
          valArray.forEach((el, index) => {
            valArray[index] = el.toLowerCase()
          })
          var tagItem = containTagsList[q].toLowerCase()

          //Checks for substring matches
          var isFound = valArray.findIndex(el => el.includes(tagItem))
          if (isFound > -1) {
            contains = true;
          }
          else {
            contains = false;
          }
        }

        //2) Checks if any of the values are not in the "Do not contain" tags list
        for (var r = 0; r < donotContainTagsList.length; r++) {
          var valArray2 = Object.values(item)

          //Not case-sensitive
          valArray2.forEach((el, index) => {
            valArray2[index] = el.toLowerCase()
          })

          var tagItem2 = donotContainTagsList[r]

          //Checks for substring matches
          var isFound2 = valArray2.findIndex(el => el.includes(tagItem2))
          if (isFound2 > -1) {
            doesntContain = false;
          }
          else {
            doesntContain = true;
          }
        }

        //3) If the row item's value matches the variable option AND the row values match the contain/dont contain tag lists, push the item to the variableArray
        if (searchBy === "name") {
          if (contains === true && doesntContain === true && (item.name === variableName || item.name.toString().includes(variableName))) {
            variableArray.push(item)
          }
        }
        else if (searchBy === "dataset" && contains === true && doesntContain === true) {
          if (item.dataset.toString().includes(variableName)) {
            variableArray.push(item)
          }
        }
        else if (searchBy === "database" && contains === true && doesntContain === true) {
          if (item.database.toString().includes(variableName)) {
            variableArray.push(item)
          }
        }
        else if (searchBy === "type" && contains === true && doesntContain === true) {
          if (item.type.toString().includes(variableName)) {
            variableArray.push(item)
          }
        }

        else if (searchBy === "category" && contains === true && doesntContain === true) {
          if (item.category.toString().includes(variableName)) {
            variableArray.push(item)
          }

        }
        else if (searchBy === "source" && contains === true && doesntContain === true) {
          if (item.source.toString().includes(variableName)) {
            variableArray.push(item)
          }

        }
        else if(contains === true && doesntContain === true){
          variableArray.push(item)
        }
      }
      //Save the resultant filtered variable array and return it to display the results
      this.data.variableArray = variableArray
      return variableArray;
    },
    //Displays the resultant filtered data items in a table
    displayResults(variableArray) {

      this.rows = []

      //var searchBy = this.data.searchBy;
      //var text = ``

      //Clear/update the data table

      //Go through each item and based on the selected option, highlight the column selected
      for (var i = 0; i < variableArray.length; i++) {

        //Make a row of data items

        console.log(variableArray[i])

        this.rows.push(variableArray[i])

        //Insert the data row into the table
        //document.getElementById('var-data-table').insertAdjacentHTML('beforeend', text)
      }

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
  }
}


</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  display: block;
}

.view-about {
  text-align: left;
}

.settings {
  font-size: medium;
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
  width: min-content;
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

input {
  border-color: #9e9e9e;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  box-shadow: none;
}

.search-btn {
  color: white !important;
  background-color: #122A50 !important;
  border-color: #122A50;
  font-size: small;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  min-height: fit-content;
}

.search-btn:hover {
  background-color: #1A3D74 !important;
}

.date-row {
  align-items: center;
}

.date-input {
  border-style: solid;
  border-radius: 0.25rem;
}

.variable-data-table {
  display: block;
  padding: 1.5%;
  height: fit-content;
  background-color: white;
  overflow: hidden;
  height: 100%;
}

.variable-data-table button {
  float: left;
}

.table-buttons button {
  color: white;
  background-color: #1A3D74;
  border-color: white;
  font-size: small;
  font-weight: bold;
  border-style: solid;
  padding: 0.75rem;
}

.table-buttons button:hover {
  background-color: #122A50;
}

input {
  border-right-style: none;
}

input button {
  border-right-style: none;
}
</style>
  