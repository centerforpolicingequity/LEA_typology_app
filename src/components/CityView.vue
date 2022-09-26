<template>
  <h1>City View</h1>
  <div class="view">
      <div class="col-1">
        <div class="info-box">
      <h4>Demographics General</h4>
      <p>Total Population:</p>
      <p>Median Income:</p>
      <p>Foreign Born:</p>
      <p>% White:</p>
      <p>% Non-White:</p>
      <p>% Insured</p>
    </div>
    <div class="info-box">
      <h4>Agency Information</h4>
      <p>Agency Name:</p>
      <p>Address:</p>
      <p>Total Operating Budget:</p>
      <p>Total Full Time Sworn Officers:</p>
    </div>
    <div class="info-box">
      <h4>Other Information</h4>
      <form>
        <div><input type="radio" name="demo" value="">City Infrastructure</div>
        <div><input type="radio" name="demo" value="">Community Landscape</div>
        <div><input type="radio" name="demo" value="">Political Landscape</div>
        <div><input type="radio" name="demo" value="">Other Community Info</div>
      </form>
    </div>
      </div>
      <div class="col-2">
        <p>State:</p>
        <p>City Search:</p>
          <img src="./citymap.png" alt="city map">
          <img src="./citygraph.png" alt="city graph">
          <button>Insurance</button>
          <button>Racial Demographics</button>
          <button>Income</button>
          <button>Population</button>
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


</style>
