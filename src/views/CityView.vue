<template>
  <div class="settings settings-agency">
    <div class="col-flex-agency">
      <p><b>Select City:</b></p>
      <form class="example" action="">
        <SearchAutocomplete type="text" placeholder="Ex: VA Beach" name="search" :items="this.data.searchAutoItems" />
        <button  type='button' class="search-btn" @click="this.searchAgency()">
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
        <h4>City Information</h4>
        <table>
          <tbody id="city-info-table">
            <tr>
              <td>Total Population:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Medican Income:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Foreign Born:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% White:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Non-White:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Insured</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Agency Information</h4>
        <table>
          <tbody>
            <tr>
              <td>Agency Name:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Total Operating Budget:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Total Full Time Sworn Officers:</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Additional Information</h4>
        <div class="expandmenu">
          <button>City Infrastructure&nbsp;
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-down" />
          </button>
          <button>Community Landscape&nbsp;
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-down" />
          </button>
          <button>Political Landscape&nbsp;
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-down" />
          </button>
          <button>Other Community Information&nbsp;
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-down" />
          </button>
        </div>
      </div>
    </div>
    <div class="col-2">
      <img src="./citymap.png" alt="city map">
      <button>Insurance&nbsp;
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>
      <button>Racial Demographics&nbsp;
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>
      <button>Income&nbsp;
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>
      <button>Population&nbsp;
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>
      <img src="./citygraph.png" alt="city graph">
    </div>
  </div>
</template>

<script>
import SearchAutocomplete from './SearchAutocomplete.vue'

export default {
  name: 'CityView',
  props: {
  },
  components: {
    SearchAutocomplete
  }, data() {
    return {
      data: [],
      searchAutoItems: [""],
      tags: [""],
      queryTags: [""]
    };
  },async mounted() {

console.log("component mounted PURR") // I'm text inside the component.
var url = 'https://polar-castle-87290.herokuapp.com/data'

await fetch(url)
  .then((response) => {
    return response.json();
  }).then((result) => {

    //var obj = result.data
    //console.log(obj);

    //this.data.data = obj

    var obj = result;
    this.data.data = this.findResultsArray(obj)
    //console.log(this.data.data)
    this.data.searchAutoItems = this.makeAutoSuggestions(this.data.data)
    // console.log(this.data.searchAutoItems)
  }
  )

},
methods: {
findResultsArray(myObject) {
  var bigObject = myObject;
  //Two scenarios for a JSON response returned:
  //Scenario 1: response returned is already an array so we will use it
  if (Array.isArray(bigObject) === true) {
    return bigObject;
  }
  //Scenario 2: response returned is an object containing keys and values
  else if (typeof bigObject === 'object') {
    /* Now the response can either contain A) the results as keys and values of the object itself, or B) the results stored in an array of one of the values. 
    Assuming the result items are the the longest we can find the results the following way: 
  1) Count the number of properties the object has.
  2) Count the number of the longest array items the object has.
  3) Properties > array items, then the results are properties. If otherwise, the results is the longest array. */
    var propCount = bigObject.length;
    var biggestArrayLength = 0;
    var biggestArray1 = [];
    for (var property1 in bigObject) {
      var thisArray1 = [];
      if (Array.isArray(bigObject[property1]) === true) {
        thisArray1 = bigObject[property1];
        if (thisArray1.length > biggestArray1.length) {
          biggestArray1 = thisArray1;
        }
      }
    }
    biggestArrayLength = biggestArray1.length;
    if (propCount > biggestArrayLength) {
      var myArray1 = [];
      myArray1[0] = bigObject;
      return myArray1;
    } else {
      var thisArray = [];
      var biggestArray = [];
      //if the thing is an object with keys convert it to array
      for (var property2 in bigObject) {
        if (Array.isArray(bigObject[property2]) === true) {
          thisArray = bigObject[property2];
          if (thisArray.length > biggestArray.length) {
            biggestArray = thisArray;
          }
        }
      }
      console.log(biggestArray)
      return biggestArray;
    }
  }
}
,
makeAutoSuggestions(myArray) {
  var result = myArray;
  var headingsList = [];
  if (result.length) {
    for (var i = 0; i < result.length; i++) {
      for (var property in result[i]) {
        if (property === "CITY") {
          // console.log(result[i].NAME)
          headingsList.push(result[i].CITY);
        }
      }
    }
  }
  return headingsList;
},
searchAgency() {
  console.log("hii")
  //console.log(document.getElementById('search-input').value)

  const agencyInfo = ["LEAR_ID", "NAME", "CITY", "ZIP", "STATE", "COUNTY"]
  //const communityDemographics = []
  //const communityLandscape = []

  const myAgencyName = document.getElementById('search-input').value

  var myAgencyObject = {}
  var myAgencyArray = []

  const data = this.data.data
  for (var i = 0; i < data.length; i++) {
    if (this.data.data[i].CITY === myAgencyName) {
      myAgencyObject = this.data.data[i]
      console.log(myAgencyObject)
      myAgencyArray = Object.keys(myAgencyObject).map((key) => [String(key), myAgencyObject[key]])
      break;
    }
  }

  //console.log(myAgencyArray)

  /*

console.log(myAgencyArray)

  for(var j = 0; j < agencyInfo.length; j++){
    if(agencyInfo[j] === myAgencyArray[j][0]){
      console.log(myAgencyArray[j][0])
    }
  }*/

  this.displaySearchResults(myAgencyArray, agencyInfo)




},
displaySearchResults(myAgencyArray1, headingsArray1) {

  console.log(myAgencyArray1)

  var myAgencyArray = myAgencyArray1
  var headingsArray = headingsArray1

  document.getElementById('city-info-table').innerHTML = ``

  for (var j = 0; j < myAgencyArray.length; j++) {

    for (var k = 0; k < headingsArray.length; k++) {
      if (headingsArray[k] === myAgencyArray[j][0].toString()) {
        console.log(myAgencyArray[k])
        var myHeading = headingsArray[k].toString()
        var myDataItem = myAgencyArray[j][1].toString()

       // var myHeadingFormatted = myHeading.charAt(0) + myHeading.substring(1).toLowerCase()
       // var myDataItemFormatted = myDataItem.charAt(0) + myDataItem.substring(1).toLowerCase()

        var text = `<tr>
          <td><b>${myHeading}</b></td>
          <td>${myDataItem}</td>
        </tr>`
        document.getElementById('city-info-table').insertAdjacentHTML('beforeend', text)
      }

    }
  }
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.view {
  display: flex;
  text-align: left;
}

.col-1 {
  flex: 50%;
  float: left;
}

.info-box {
  display: block !important;
}

.col-2 {
  flex: 50%;
  float: left;
}

.col-2 img {
  width: 100%;
}

.expandmenu {
  display: block;
}

.expandmenu button {
  width: 100%;
  display: block;
  text-align: left;
  font-size: medium;
  background-color: white;
  border: none;
}

.expandmenu button:nth-child(2n) {
  background-color: #EFF4FB;
}

.expandmenu .icon {
  float: right;
}
</style>
