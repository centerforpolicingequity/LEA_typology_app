<template>
  <div class="settings">
    <div class="col-flex">
      <p><b>Select Agency:</b></p>
      <form class="example" action="">
        <input type="text" placeholder="Ex: VA Beach" name="search">
        <button type="submit" class="search-btn">
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
          <tbody>
            <tr>
              <td>LEAR ID:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>City, State, ZIP:</td>
              <td>...</td>
            </tr>
            <tr>
              <td># of Officers:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Total Operating Budget:</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Community Demographics</h4>
        <table>
          <tbody>
            <tr>
              <td>Total Population:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Medican Income:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Has Insurance:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Foreign Born:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Below Poverty:</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <h4>Community Landscape:</h4>
        <table>
          <tbody>
            <tr>
              <td>Key LEA Contacts:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>Poverty above/below National Average:</td>
              <td>...</td>
            </tr>
            <tr>
              <td># of Property Crimes:</td>
              <td>...</td>
            </tr>
            <tr>
              <td># of Violent Crimes:</td>
              <td>...</td>
            </tr>
            <tr>
              <td>% Below Poverty:</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-2">
      <div class="graph">
        <h4>Jurisdinction Demographics</h4>
        <input type="radio" id="2" name="ja" value="" checked><label for="2">Jurisdiction</label>
        <input type="radio" id="2" name="ja" value=""><label for="2">Agency&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <button>Race&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
        <button>Gender&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
        <button>Education&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
        <button>Income&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
        <img src="./jurisdictiondemographics.png" alt="agency graph">
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
template {
  display: block;
}

.view {
  display: block;
  width: 100%;
  height: fit-content;
}
.col-flex{
  display: flex;
  align-items: center;
  font-size: larger;
}
.col-flex p{
  padding-right: 1%;
}
.col-1{
  padding-left: 2.5%;
  padding-right: 2.5%;
  width: 40%;
  float: left;
  display: block;
}
.col-2{
  width: 60%;
  float: left;
  display: block;
}
.col-1 table{
  width: 100%;
}
.col-1 table td{
  width: 50%;
}
.info-box{
  width: 100%;
}
.info-box h4{
  padding: 2%;
  color: white;
  background-color: #1A3D74;
}
.col-2 button{
  color: white;
  background-color: #1A3D74;
  border-color: white;
  font-size: small;
  font-weight: bold;
  border-style: solid;
  padding: 0.75rem;
}
.col-2 button:hover{
  background-color: #122A50;
}
</style>
  