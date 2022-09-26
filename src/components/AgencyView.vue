<template>
    <h1>Agency View</h1>
    <div class="view">
        <div class="col-1">
          <div class="info-box">
        <h4>Agency Information</h4>
        <p>LEAR ID:</p>
        <p>Name:</p>
        <p>Address:</p>
        <p>City, State, ZIP:</p>
        <p># of Officers:</p>
        <p>Total Operating Budget:</p>
      </div>
      <div class="info-box">
        <h4>Community Demographics</h4>
        <p>Total Population:</p>
        <p>Medican Income:</p>
        <p>% Has Insurance:</p>
        <p>% Foreign Born:</p>
        <p>% Below Poverty:</p>
      </div>
      <div class="info-box">
        <h4>Community Landscape</h4>
        <p>Key LEA Contacts:</p>
        <p>Poverty above/below National Average:</p>
        <p># of Property Crimes:</p>
        <p># of Violent Crimes:</p>
      </div>
        </div>
        <div class="col-2">
          <p>State:</p>
          <p>Agency Type:</p>
          <div class="graph">
            <h4>Jurisdiction Demographics</h4>
            <button>Jurisdiction</button>
            <button>Agency</button>
            <img src="./jurisdictiondemographics.png" alt="agency graph">
            <button>Race</button>
            <button>Gender</button>
            <button>Education</button>
            <button>Income</button>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AgencyView',
    props: {
    } 
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
    .view{
      display: flex;
      text-align: left;
    }
    .col-1{
      flex: 50%;
      float: left;
    }
    .info-box{
      display: block!important;
    }
    .col-2{
      flex: 50%;
      float: left;
    }


  </style>
  