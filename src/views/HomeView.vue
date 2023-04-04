<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DataView/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataView from '@/views/DataView.vue'

export default {
  name: 'DataView',
  components: {
    DataView
  }
}
</script>
