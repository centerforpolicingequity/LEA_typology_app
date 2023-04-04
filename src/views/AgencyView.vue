<template>
  <div class="view-about">
    <h2>Agency</h2>
    <p>View local police agency information.</p>
  </div>
  <div class="settings settings-agency">
    <div class="col-flex-agency">
      <p><b>Select Local Agency:</b></p>
      <form class="example" action="">
        <SearchAutocomplete type="text" placeholder="Ex: VA Beach" name="search" :items="this.data.searchAutoItems" />
        <button type='button' class="search-btn" @click="this.searchAgency()">
          <font-awesome-icon icon="fa-search" />
        </button>
      </form>
    </div>
  </div>
  <div class="hr-row">
    <hr>
  </div>
  <div class="view">
    <div class="col-1">
      <div class="info-box">
        <h4>Agency Information</h4>
        <table>
          <tbody id="agency-info-table">
            <tr>
              <td><b>lear id</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>lea name</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>location full street address or intersection</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>city</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>zip</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>state</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>samp type</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Community Demographics</h4>
        <table>
          <tbody id="demographics-info-table">
            <tr>
              <td><b>total population:</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>white</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>black</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>native american</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>asian</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>nhpi</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>other race</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>two plus races</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>latinx</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>median income</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>total poverty denom</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>num below poverty</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>per capita income</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>non citizen</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>us citizen naturalized</b></td>
              <td>...</td>
            </tr>
            <tr>
              <td><b>% insured</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-2" id="graph" :key="this.pieKey">
      <div class="demographics-row">
        <div class="demographics-card">
          <h4>Location</h4>
          <iframe width="100%" height="200" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
            :src="mapLink" allowfullscreen>
          </iframe>
        </div>
      </div>
      <div class="demographics-col">
        <div class="demographics-card">
          <h4>Racial Demographics</h4>
          <template class="chart">
            <Pie :data="this.pieChartValues_race" :options="this.pieChartOptions" />
          </template>
        </div>
      </div>
      <div class="demographics-col">
        <div class="demographics-card">
          <h4>Poverty Level</h4>
          <template class="chart">
            <Bar :data="this.barGraphValues_poverty" :options="this.barGraphOptions" />
          </template>
        </div>
        <div class="demographics-card">
          <h4>Median Income</h4>
          <template class="chart">
            <Bar :data="this.barGraphValues_income" :options="this.barGraphOptions" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import SearchAutocomplete from '@/components/SearchAutocomplete.vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS, ArcElement, Title,
  Tooltip, Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


export default {
  name: 'AgencyView',
  props: {
  },
  components: {
    SearchAutocomplete,
    Pie,
    Bar
  },
  data() {
    return {
      data: [],
      dataACS: [],
      searchAutoItems: [""],
      tags: [""],
      queryTags: [""],
      myAgency: {},
      pieKey: 1,
      pieChartValues_race: {
        labels: ['white', 'black', 'native american', 'asian', 'nhpi', 'other race', 'two plus races', 'latinx'],
        datasets: [
          {
            backgroundColor: ['#FF595E', '#FF924C', '#FFCA3A', '#8AC926', '#52A675', '#1982C4', '#4267AC', '#6A4C93'],
            data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
          }]
      },
      pieChartOptions: {
        responsive: false,
        maintainAspectRatio: true
      },
      barGraphValues_poverty: {
        labels: [
          'Total',
          'U.S.Average Rate',
          'In Poverty'
        ],
        datasets: [
          {
            label: 'Jurisdiction Population',
            backgroundColor: ['green', 'blue', 'red'],
            data: [100, 11.6, 11.6]
          }
        ]
      },
      barGraphValues_income: {
        labels: [
          'U.S. Average',
          'Jurisdiction',
        ],
        datasets: [
          {
            label: 'Average Household Medium Income ($)',
            backgroundColor: ['blue', 'red'],
            data: [31133, 31133]
          }
        ]
      },
      barGraphOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      mapLink: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA4aLZAnUk_5UQT8zfqi49x6mngV4Ci6BA&q=NEW+YORK+POLICE+DEPARTMENT,NY'
    };
  },
  async mounted() {
    console.log("component mounted PURR") // I'm text inside the component.
    var url = 'https://polar-castle-87290.herokuapp.com/datageo'

    await fetch(url)
      .then((response) => {
        return response.json();
      }).then((result) => {


        var obj = result;
        this.data.data = obj
        this.makeAutoSuggestions(this.data.data)
      }
      )

  },
  methods: {
    makeAutoSuggestions(data) {
      var result = data;
      var headingsList = [];
      if (result.length) {
        for (var i = 0; i < result.length; i++) {
          for (var property in result[i]) {
            if (property === "lea_name") {
              headingsList.push(result[i].lea_name);
            }
          }
        }
      }
      this.data.searchAutoItems = headingsList
    },
    searchAgency() {
      const myAgencyName = document.getElementById('search-input').value

      var myAgencyObject = {}
      var myAgencyArray = []

      const data = this.data.data
      for (var i = 0; i < data.length; i++) {
        if (this.data.data[i].lea_name === myAgencyName) {
          myAgencyObject = this.data.data[i]
          myAgencyArray = Object.keys(myAgencyObject).map((key) => [String(key), myAgencyObject[key]])
          break;
        }
      }
      this.displaySearchResults(myAgencyArray)
      this.displayDemographics(myAgencyObject.lear_id)
      console.log(myAgencyArray)
      this.mapLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA4aLZAnUk_5UQT8zfqi49x6mngV4Ci6BA&q=${myAgencyObject.lea_name}+POLICE+DEPARTMENT,${myAgencyObject.city},${myAgencyObject.state}`
    },
    displaySearchResults(myAgencyArray1) {

      var myAgencyArray = myAgencyArray1
      var headingsArray = ["lea_name", "lear_id", "location_full_street_address_or_intersection", "city", "state", "zip", "samptype"]

      document.getElementById('agency-info-table').innerHTML = ``

      for (var j = 0; j < myAgencyArray.length; j++) {

        for (var k = 0; k < headingsArray.length; k++) {
          if (headingsArray[k] === myAgencyArray[j][0].toString()) {
            console.log(myAgencyArray[k])
            var myHeading = headingsArray[k].toString().replaceAll('_', ' ');
            var myDataItem = myAgencyArray[j][1].toString()

            var text = `<tr>
              <td><b>${myHeading}</b></td>
              <td>${myDataItem}</td>
            </tr>`
            document.getElementById('agency-info-table').insertAdjacentHTML('beforeend', text)
          }

        }
      }
    },
    displayDemographics(id1) {
      var id = id1
      console.log(id)

      var data = []
      var myAgencyArray = []


      var url = 'https://polar-castle-87290.herokuapp.com/dataacs'

      fetch(url)
        .then((response) => {
          return response.json();
        }).then((result) => {
          var obj = result
          data = obj;

          var idFound = false

          for (var i = 0; i < data.length; i++) {
            if (data[i].lear_id === id) {
              var myAgencyObject = data[i]
              myAgencyArray = Object.keys(myAgencyObject).map((key) => [String(key), myAgencyObject[key]])
              idFound = true;
              break;
            }
          }


          console.log(myAgencyArray)

          var headingsArray = ["total_population", "white", "black", "native_american", "asian", "nhpi", "other_race", "two_plus_races", "latinx", "median_income", "total_poverty_denom", "num_below_poverty", "per_capita_income", "non_citizen", "us_citizen_naturalized", "pct_insured"]

          document.getElementById('demographics-info-table').innerHTML = ``

          if (idFound === false) {
            for (var m = 0; m < headingsArray.length; m++) {
              var myHeading2 = headingsArray[m].toString().replaceAll('_', ' ').replaceAll('pct', '%');
              var text2 = `<tr>
                  <td><b>${myHeading2}</b></td>
                  <td> - </td>
                </tr>`
              document.getElementById('demographics-info-table').insertAdjacentHTML('beforeend', text2)
            }
          }
          else {



            for (var j = 0; j < myAgencyArray.length; j++) {
              console.log(myAgencyArray[j][1])
              if (myAgencyArray[j][1] !== null && Object.is(myAgencyArray[j][1], null) === false) {

                for (var k = 0; k < headingsArray.length; k++) {
                  var myHeading = headingsArray[k].toString().replaceAll('_', ' ').replaceAll('pct', '%');
                  if (headingsArray[k] === myAgencyArray[j][0].toString()) {
                    // var myHeading = headingsArray[k].toString().replaceAll('_', ' ').replaceAll('pct', '%');
                    var myDataItem = myAgencyArray[j][1].toString()

                    console.log("DDD", myHeading, myDataItem)

                    var text = `<tr>
                  <td><b>${myHeading}</b></td>
                  <td>${myDataItem}</td>
                </tr>`
                    document.getElementById('demographics-info-table').insertAdjacentHTML('beforeend', text)
                  }

                }
              }
              else {
                for (var l = 0; l < headingsArray.length; l++) {
                  var myHeading1 = headingsArray[l].toString().replaceAll('_', ' ').replaceAll('pct', '%');
                  var text1 = `<tr>
                  <td><b>${myHeading1}</b></td>
                  <td> - </td>
                </tr>`
                  document.getElementById('demographics-info-table').insertAdjacentHTML('beforeend', text1)

                }
                break;
              }

            }

            this.data.myAgency = myAgencyArray
            this.makePieChart()

          }

        })
    },
    makePieChart() {

      var myObject1 = this.data.myAgency

      console.log("making a chart")
      var object = myObject1
      var headingsArray = ["white", "black", "native_american", "asian", "nhpi", "other_race", "two_plus_races", "latinx"]
      var values = []

      for (var i = 0; i < object.length; i++) {
        for (var j = 0; j < headingsArray.length; j++) {
          if (headingsArray[j] === object[i][0].toString()) {
            values.push(object[i][1])
          }
        }
      }

      this.pieChartValues_race.datasets[0].data = values


      console.log(this.pieChartValues_race.datasets[0].data)

      console.log(this.pieKey)

      console.log(object)
      var pop = object[5][1]
      var avgRate = object[5][1] * 0.116
      var povLevel = object[16][1]
      console.log(povLevel)

      this.barGraphValues_poverty.datasets[0].data = [pop, avgRate, povLevel]
      this.pieKey += 1;
      console.log(this.pieKey)

      /*var pop = object[5][1]
      var avgRate = object[5][1] * 0.116*/
      var avgIncome = object[14][1]
      this.barGraphValues_income.datasets[0].data = [31133, avgIncome]

    }

  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
template {
  display: block;
}

.view-about {
  text-align: left;
}

.settings {
  display: block;
  width: 100%;
}

.settings-agency {
  display: block;
}

form {
  display: flex !important;
}

input {
  border-color: #9e9e9e;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  box-shadow: none;
}

.search-btn {
  height: max-content;
  min-height: 1em;
  color: white !important;
  background-color: #122A50 !important;
  min-height: fit-content;
  border-color: #122A50 !important;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: medium !important;
  padding: 0.75em !important;
  display: flex;
}

.search-btn:hover {
  background-color: #1A3D74 !important;
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


.search-btn:hover {
  background-color: #1A3D74 !important;
}

.view {
  display: flex;
  width: 100%;
  height: fit-content;
}

.col-flex-agency {
  display: inline-block;
  align-items: flex-start;
  text-align: start;
  font-size: larger;
  width: 100%;
}

.col-flex p {
  padding-right: 1%;
}

.col-flex {
  display: flex;
  font-size: x-large !important;
  width: 100%;
}

.col-flex p {
  padding-right: 1%;
}

.col-1 {
  padding-left: 2.5%;
  padding-right: 2.5%;
  width: 50% !important;
  text-align: left !important;
  float: left;
  display: block;
}

.col-2 {
  width: 75%;
  float: left;
  display: block;
  height: 100%;
  padding: 0.25%;
  background-color: #EFF4FB;
}

.col-1 table {
  width: 100%;
}

.col-1 table td {
  width: 50%;
}

.info-box {
  width: 100%;
}

.info-box h4 {
  padding: 2%;
  color: white;
  background-color: #1A3D74;
}

.col-2 button {
  color: white;
  background-color: #1A3D74;
  border-color: white;
  font-size: small;
  font-weight: bold;
  border-style: solid;
  padding: 0.75rem;
}

.col-2 button:hover {
  background-color: #122A50;
}

.demographics-row {
  display: flex;
}

.demographics-col {
  display: block;
  float: left;
  margin: 1.5%;
}

.demographics-card {
  display: block;
  width: 100%;
  padding: 1.5%;
  margin: 1.5%;
  border-radius: 5%;
  background-color: white;

}

.info-box table {
  table-layout: fixed !important;
}

.info-box td {
  padding: 0.25rem;
  width: min-content;
  overflow-wrap: break-word;
}


.info-box th .th-head-col {
  float: left;
  padding-top: 0.5rem;
  vertical-align: middle;
}

.info-box th .sorting-buttons-column {
  padding-left: 0.05rem;
}

.info-box th .sorting-buttons-column {
  width: min-content;
  float: right;
  display: inline;
}

.info-box tr:nth-child(2n) {
  background-color: #EFF4FB !important;
}

.info-box tbody:nth-child(2n){
  background-color: #EFF4FB !important;
}

.info-box table tbody tr:nth-child(2n){
  background-color: #EFF4FB;
}
</style>
   <!-- <h4>Jurisdinction Demographics</h4> 
        <input type="radio" id="2" name="ja" value="" checked><label for="2">Jurisdiction</label>
        <input type="radio" id="2" name="ja" value=""><label for="2">Agency&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <button>Race&nbsp;
          <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
        <button>Gender&nbsp;
          <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
        <button>Education&nbsp;
          <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
        <button>Income&nbsp;
          <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>Add "scoped" attribute to limit CSS to this component only -->