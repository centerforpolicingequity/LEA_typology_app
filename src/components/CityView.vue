<template>
    <div class="settings">
    <div class="col-flex">
      <p><b>Select City:</b></p>
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
        <h4>Demographics General</h4>
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
        <button>City Infrastructure&nbsp;<font-awesome-icon class="icon" icon="fa-solid fa-caret-down" /></button>
        <button>Community Landscape&nbsp;<font-awesome-icon class="icon" icon="fa-solid fa-caret-down" /></button>
        <button>Political Landscape&nbsp;<font-awesome-icon class="icon" icon="fa-solid fa-caret-down" /></button>
        <button>Other Community Information&nbsp;<font-awesome-icon class="icon" icon="fa-solid fa-caret-down" /></button>
      </div>
        </div>
      </div>
      <div class="col-2">
          <img src="./citymap.png" alt="city map">
          <button>Insurance&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
          <button>Racial Demographics&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
          <button>Income&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
          <button>Population&nbsp;<font-awesome-icon icon="fa-solid fa-caret-down" /></button>
          <img src="./citygraph.png" alt="city graph">
      </div>
  </div>
</template>

<script>
export default {
  name: 'CityView',
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
  .col-2 img{
    width: 100%;
  }
.expandmenu{
  display: block;
}
.expandmenu button{
  width: 100%;
  display: block;
  text-align: left;
  font-size: medium;
  background-color: white;
  border: none;
}
.expandmenu button:nth-child(2n){
  background-color: #EFF4FB;
}
.expandmenu .icon{
  float: right;
}
</style>
