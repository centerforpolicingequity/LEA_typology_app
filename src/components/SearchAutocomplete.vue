<template>
    <div class="autocomplete">
        <input v-model="search" id="search-input" @input="onChange" @keydown.down="onArrowDown" @keydown.up="onArrowUp"
            @keydown.enter="onEnter" type="text" />
        <ul v-show="isOpen" class="autocomplete-results">
            <li v-for="(result, i) in results" :key="i" @click="setResult(result)" class="autocomplete-result"
                :class="{ 'is-active': i === arrowCounter }">
                {{ result }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'SearchAutocomplete',
    props: {
        items: {
            type: Array,
            required: false,
            default: () => [],
        },
    },
    data() {
        return {
            search: '',
            results: [],
            isOpen: false,
            arrowCounter: -1
        };
    },
    methods: {
        filterResults() {
            this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
        },
        onChange() {
            this.filterResults();
            this.isOpen = true;
        }, setResult(result) {
            this.search = result;
            this.isOpen = false;
        }, handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.arrowCounter = -1;
                this.isOpen = false;
            }
        }, onArrowDown() {
            if (this.arrowCounter < this.results.length) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1;
            }
        },
        onEnter() {
            this.search = this.results[this.arrowCounter];
            this.arrowCounter = -1;
            this.isOpen = false;
        }

    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    }, unmounted() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<style scoped>
.autocomplete {
    display: block;
    font-size: medium!important;
}

input {
    cursor: text !important;
    height: 1em;
    width: 20em!important;
    min-width: 20em!important;
    padding: 0.75em;
    font-size: medium!important;
    margin: 0!important;
    display: flex;
}

.autocomplete-results {
    padding: 0;
    margin: 0!important;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 6em;
    overflow-y: scroll;
    overflow-x: hidden;
    display: block;
    min-width: 20em!important;
    max-width: 21em!important;
    
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 0.75em;
    cursor: pointer;
    font-size: medium!important;
    min-width: 20em!important;
    max-width: 21em!important;
}

.autocomplete-result:hover {
    background-color: #CEDEF3;
    color: black;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
    background-color: #CEDEF3;
    color: black;
    border-right: none;
}


</style>