<template>
  <div class='tag-input'>
    <div v-for='(tag, index) in tags' :key='tag' class='tag-input__tag2'>
      {{ tag }}
      <span @click='removeTag(index)'>x</span>
    </div>
    <input type='text' placeholder="Enter a Tag" class='tag-input__text' @keydown.enter='addTag'
      @keydown.delete='removeLastTag' />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    getTags(){
      return this.data.tags
    },
    addTag(event) {
      event.preventDefault()
      let val = event.target.value.trim()
      if (val.length > 0) {
        if (this.tags.length >= 1) {
          for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i] === val) {
              return false
            }
          }
        }
        this.tags.push(val)
        event.target.value = ''
        console.log(this.tags)
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1)
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tags.length - 1)
      }
    }
  }
}
</script>

  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap');

.container {
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: max-content;
  height: 100vh;
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(102, 126, 234, 1) 50%, rgba(69, 252, 250, 1) 100%);
}

a {
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-weight: bold;
  text-decoration: none;
  color: #00003a;
  font-size: 20px;
}


/*tag input style*/

.tag-input {
  width: 100%;
  border: 1px solid #758BA9;
  background: #fff;
  border-radius: 4px;
  font-size: 0.9em;
  min-height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
  font-family: "Roboto";
  margin-bottom: 10px;
}

.tag-input__tag2 {
  height: 24px;
  color: white;
  float: left;
  font-size: 14px;
  margin-right: 10px;
  background-color: #3773d2;
  border-radius: 15px;
  margin-top: 10px;
  line-height: 24px;
  padding: 0 8px;
  font-family: "Roboto";
}

input {
  cursor: text !important;
}

.tag-input__tag2>span {
  cursor: pointer;
  opacity: 0.75;
  display: inline-block;
  margin-left: 8px;
}

.tag-input__text {
  border: none;
  outline: none;
  font-size: 1em;
  line-height: 40px;
  background: none;
}
</style>
