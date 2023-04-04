<template>
  <div class="view-about">
   <h2>State</h2>
  <p>View state police agency information.</p>
</div>
  <div class="settings settings-agency">
    <div class="col-flex-agency">
      <p><b>Select State Agency:</b></p>
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
        <h4>State Agency Information</h4>
        <table>
          <tbody id="agency-info-table1">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>State Agency Demographics</h4>
        <table>
          <tbody id="agency-info-table2">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Training and Expenditure</h4>
        <table>
          <tbody id="agency-info-table3">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Labor Types</h4>
        <table>
          <tbody id="agency-info-table4">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Partnerships</h4>
        <table>
          <tbody id="agency-info-table5">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Patrol Strateges and Tools</h4>
        <table>
          <tbody id="agency-info-table6">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Policies</h4>
        <table>
          <tbody id="agency-info-table7">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Crime Rates</h4>
        <table>
          <tbody id="agency-info-table8">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Community Demographics</h4>
        <table>
          <tbody id="agency-info-table9">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Additional</h4>
        <table>
          <tbody id="agency-info-table10">
            <tr>
              <td><b>...</b></td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-2" id="graph" :key="this.pieKey">
      <div class="demographics-row">
        <div class="demographics-card">
          <h4>State Agency Location</h4>
          <iframe width="100%" height="200" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"
            :src="mapLink" allowfullscreen>
          </iframe>
        </div>
      </div>
      <div class="demographics-col">
        <div class="demographics-card">
          <h4>Agency Racial Demographics</h4>
          <template class="chart">
            <Pie :data="this.pieChartValues_race" :options="this.pieChartOptions" />
          </template>
        </div>
      </div>
      <div class="demographics-col">
        <div class="demographics-card">
          <h4>State Population in Poverty</h4>
          <template class="chart">
            <Bar :data="this.barGraphValues_poverty" :options="this.barGraphOptions" />
          </template>
        </div>
        <div class="demographics-card">
          <h4>State Crime Rate</h4>
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
  name: 'StateView',
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
      searchAutoItems: [],
      stateAbbreviations: [],
      tags: [""],
      queryTags: [""],
      myAgency: {},
      pieKey: 1,
      pieChartValues_race: {
        labels: ['white', 'black', 'latinx', 'other'],
        datasets: [
          {
            backgroundColor: ['#FF595E','#FFCA3A','#52A675','#4267AC'],
            data: [25,25,25,25]
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
            label: 'State Population',
            backgroundColor: ['green', 'blue', 'red'],
            data: [100, 11.6, 11.6]
          }
        ]
      },
      barGraphValues_income: {
        labels: [
          'U.S. Average',
          'State',
        ],
        datasets: [
          {
            label: 'Crime Rate per Capita',
            backgroundColor: ['blue', 'red'],
            data: [0.0165, 0.0165]
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

    this.data.searchAutoItems =
      ['Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming']

    this.data.stateAbbreviations =
      ['AL',
        'AK',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VA',
        'VT',
        'WA',
        'WV',
        'WI',
        'WY']

    var url = 'https://polar-castle-87290.herokuapp.com/datastateagencies'

    await fetch(url)
      .then((response) => {
        return response.json();
      }).then((result) => {


        var obj = result;
        this.data.data = obj

      }
      )
  },
  methods: {
    makeAutoSuggestions() {
      /* console.log("ew")
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
       }*/
      // this.data.searchAutoItems = headingsList
    },
    searchAgency() {
      var myAgencyName = document.getElementById('search-input').value

      var myAgencyObject = {}
      var myAgencyArray = []

      var stateIndexNum = parseInt(this.data.searchAutoItems.indexOf(myAgencyName))
      myAgencyName = this.data.stateAbbreviations[stateIndexNum]

      const data = this.data.data
      for (var i = 0; i < data.length; i++) {
        if (this.data.data[i].STATE === myAgencyName) {
          myAgencyObject = this.data.data[i]
          myAgencyArray = Object.keys(myAgencyObject).map((key) => [String(key), myAgencyObject[key]])
          break;
        }
      }

      this.displaySearchResults(myAgencyArray)
      this.displayDemographics(myAgencyObject)
      console.log("HHUHUHU" + myAgencyArray)

      var agencyName = myAgencyObject.NAME
      var agencyState = myAgencyObject.STATE
      console.log(agencyName)
      this.mapLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA4aLZAnUk_5UQT8zfqi49x6mngV4Ci6BA&q=${agencyName}+POLICE+DEPARTMENT,${agencyState}}`
    },
    displaySearchResults(myAgencyArray1) {

      var myAgencyArray = myAgencyArray1
      // var headingsArray = ["lea_name", "lear_id", "location_full_street_address_or_intersection", "city", "state", "zip", "samptype"]

      var myHeading = ''
      var myDataItem = '...'

      document.getElementById('agency-info-table1').innerHTML = ``
      document.getElementById('agency-info-table2').innerHTML = ``
      document.getElementById('agency-info-table3').innerHTML = ``
      document.getElementById('agency-info-table4').innerHTML = ``
      document.getElementById('agency-info-table5').innerHTML = ``
      document.getElementById('agency-info-table6').innerHTML = ``
      document.getElementById('agency-info-table7').innerHTML = ``
      document.getElementById('agency-info-table8').innerHTML = ``
      document.getElementById('agency-info-table9').innerHTML = ``
      document.getElementById('agency-info-table10').innerHTML = ``

      for (var j = 0; j < 6; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        var text = `<tr>
            <td><b>${myHeading}</b></td>
              <td>${myDataItem}</td>
            </tr>`

        document.getElementById('agency-info-table1').insertAdjacentHTML('beforeend', text)
      }

      for (j = 7; j < 13; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
              <td><b>${myHeading}</b></td>
              <td>${myDataItem}</td>
            </tr>`

        document.getElementById('agency-info-table2').insertAdjacentHTML('beforeend', text)
      }

      for (j = 13; j < 22; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
        <td><b>${myHeading}</b></td>
        <td>${myDataItem}</td>
      </tr>`

        document.getElementById('agency-info-table3').insertAdjacentHTML('beforeend', text)
      }

      for (j = 22; j < 27; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
        <td><b>${myHeading}</b></td>
        <td>${myDataItem}</td>
      </tr>`

        document.getElementById('agency-info-table4').insertAdjacentHTML('beforeend', text)
      }


      for (j = 27; j < 35; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
          <td><b>${myHeading}</b></td>
          <td>${myDataItem}</td>
        </tr>`

        document.getElementById('agency-info-table5').insertAdjacentHTML('beforeend', text)
      }

      for (j = 35; j < 59; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
              <td><b>${myHeading}</b></td>
              <td>${myDataItem}</td>
            </tr>`

        document.getElementById('agency-info-table6').insertAdjacentHTML('beforeend', text)
      }

      for (j = 59; j < 71; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
                <td><b>${myHeading}</b></td>
                <td>${myDataItem}</td>
              </tr>`

        document.getElementById('agency-info-table7').insertAdjacentHTML('beforeend', text)
      }

      for (j = 71; j < 81; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
            <td><b>${myHeading}</b></td>
            <td>${myDataItem}</td>
          </tr>`

        document.getElementById('agency-info-table8').insertAdjacentHTML('beforeend', text)
      }

      for (j = 81; j < 98; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
              <td><b>${myHeading}</b></td>
              <td>${myDataItem}</td>
            </tr>`

        document.getElementById('agency-info-table9').insertAdjacentHTML('beforeend', text)
      }

      for (j = 98; j < myAgencyArray.length; j++) {
        myHeading = myAgencyArray[j][0].toString().replaceAll('_', ' ')
        myDataItem = "..."

        if (myAgencyArray[j][1]) {
          myDataItem = myAgencyArray[j][1].toString()
        }

        text = `<tr>
          <td><b>${myHeading}</b></td>
          <td>${myDataItem}</td>
        </tr>`

        document.getElementById('agency-info-table10').insertAdjacentHTML('beforeend', text)
      }


      /*  for (var j = 0; j < myAgencyArray.length; j++) {
  
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
        }*/
    },
    displayDemographics(myAgencyObject) {

       this.makePieChart(myAgencyObject)
    },
    makePieChart(myAgencyObject) {

      var object = myAgencyObject
     
     // var headingsArray = ["white", "black", "native_american", "asian", "nhpi", "other_race", "two_plus_races", "latinx"]
      var values = []

      var race1 = (object.BLACK)*100
      var race2= (object.LATINX)*100
      var race3 = (1-object.NONWHITE)*100
      var race_other= (object.NONWHITE-object.BLACK-object.LATINX)*100
       values = [race3,race1,race2,race_other]
       console.log(values)

       this.pieChartValues_race.datasets[0].data = values


       var population = object.POPULATION
       var avgRate = population * 0.116
       var povertyPop = population * object.POVERTY

       this.barGraphValues_poverty.datasets[0].data = [population, avgRate, povertyPop]


       var num1 = 0.0165
       var num2 = object.INCIDENTS_PER_CAPITA

       this.barGraphValues_income.datasets[0].data = [num1, num2]

       
       this.pieKey += 1;





      /*for (var i = 0; i < object.length; i++) {
        for (var j = 0; j < headingsArray.length; j++) {
          if (headingsArray[j] === object[i][0].toString()) {
            values.push(object[i][1])
          }
        }
      }*/

      /*BLACK	0.211583059
LATINX	0.095279808
NONWHITE	0.387810925*/


     // console.log(this.pieChartValues_race.datasets[0].data)
/*
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
      var avgRate = object[5][1] * 0.116*//*
      var avgIncome = object[14][1]
      this.barGraphValues_income.datasets[0].data = [31133, avgIncome]*/

    }

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
  display: block;
  width: 100%;
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
  height: max-content;
  min-height: 1em;
  color: white !important;
  background-color: #122A50 !important;
  min-height: fit-content;
  border-color: #122A50 !important;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-size: medium!important;
  padding: 0.75em!important;
  display: flex;
}

.search-btn:hover {
  background-color: #1A3D74 !important;
}
.search-btn:hover {
  background-color: #1A3D74 !important;
}


.view {
  display: flex;
  width: 100%;
  height: fit-content;
}

.col-flex {
  display: flex;
  font-size: x-large !important;
  width: 100%;
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

.col-1 {
  padding-left: 2.5%;
  padding-right: 2.5%;
  width: 25%;
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
  background-color: white;
  border-radius: 5%;
}

table{
  table-layout: fixed!important;
}

td{
  padding: 0.25rem;
  width: min-content;
  overflow-wrap: break-word;
}

tr:nth-child(2n) {
  background-color: #EFF4FB!important;
}

th .th-head-col {
  float: left;
  padding-top: 0.5rem;
  vertical-align: middle;
}

th .sorting-buttons-column {
  padding-left: 0.05rem;
}

th .sorting-buttons-column {
  width: min-content;
  float: right;
  display: inline;
}

tr:nth-child(2n) {
  background-color: #EFF4FB!important;
}
</style>
  