<template>
  <h1>State View</h1>
  <div class="view">
    <div class="col-1">
      <p>Statewide Demographics</p>
      <form>
        <div><input type="radio" name="demo" value="">Insurance</div>
        <div><input type="radio" name="demo" value="">Race</div>
        <div><input type="radio" name="demo" value="">Income</div>
        <div><input type="radio" name="demo" value="">Population</div>
        <div><input type="radio" name="demo" value="">Deadly Force</div>
        <div><input type="radio" name="demo" value="">Crime</div>
        <div><input type="radio" name="demo" value="">Social Mobility</div>
      </form>
      <div class="state-graph">
        <img src="./stategraph.png" alt="state graph">
      </div>
    </div>
    <div class="col-2">
      <div class="info-box">
        <h4>Demographics General (2019, State Level)</h4>
        <p>Total Population:</p>
        <p>Population per Square Mile:</p>
        <p>Foreign Born:</p>
        <p>Percent White:</p>
        <p>Percent Non-White:</p>
        <p>Average # of Officer Involved Deaths Per Year:</p>
      </div>
      <div class="info-box">
        <h4>State Police VIRGINIA STATE POLICE</h4>
        <p>Special Dispersion:</p>
        <p>Civilization:</p>
        <p>Minimum Education:</p>
        <p>Victim Support Model Referral Services:</p>
        <p>Community Partnership Score:</p>
        <p>Technologies Used:</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'StateView',
  props: {
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.view {
  display: flex;
}

.col-1 {
  flex: 50%;
  height: 100%;
  display: block;
}

form div {
  float: left;
}
.state-graph{
  float: left;
  width: 100%;
}
.col-2 {
  flex: 50%;
  height: 100%;
  float: left;

}

.info-box {
  display: block;
  float: left;
}
</style>
  