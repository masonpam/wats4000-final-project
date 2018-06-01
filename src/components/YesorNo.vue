<template>
  <div class="yes-or-no">
    <p>
  <router-link v-bind:to="{name: 'YesorNo'}">Yes or No </router-link>
  &bull;
  </p>
    <form v-on:submit.prevent="yesno">
      <p>Ask a Yes or No question: <input type="text"> <button type="submit">Submit</button></p>
    </form>
    <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results" class="item">
        <p><strong>{{ item.word }}</strong></p>
        <p>{{ item.score }}</p>
      </li>
    </ul>

    <div v-if="answer" class="answer">
        <p>{{ answer.answer }}, <img :src="answer.image"></p>
    </div>

    <ul v-if="errors.length > 0" class="errors">
      <li v-for="error of errors">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'YesorNo',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      rhyme: ''
    }
  },
  methods: {
    YesorNo: function() {
      axios.get('https://yesno.wtf/api') 
     .then( response => {
        this.prediction = response.data;
      })
      .catch( error => {
        this.errors.push(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yes-or-no {
  font-size: 1.4rem;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>