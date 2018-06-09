<template>
  <div class="yes-or-no">
    <p>
  <router-link v-bind:to="{name: 'YesorNo'}">Yes or No.  Get the answers!</router-link>
  &bull;
  </p>
    <form v-on:submit.prevent="YesorNo">
      <p>Ask a Yes or No question: <input type="text"> <button type="submit">Submit</button></p>
    </form>
    
    <div v-if="prediction" class="prediction">
        <p>{{ prediction.answer }}, <img :src="prediction.image"></p>
    </div>
    <ul v-if="results && results.length > 0" class="results">
       <div>
        <spinner v-if="showSpinner"></spinner>
      </div>
    </ul>
    <ul v-if="errors.length > 0" class="errors">
      <li v-for="error of errors">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Cubespinner from '@/components/CubeSpinner';

export default {
  name: 'YesorNo',
  components: {
    spinner: Cubespinner
  },
  data () {
    return {
      prediction: null,
      errors: [],
      showSpinner: false,
    }
  },
  methods: {
    YesorNo: function() {
      this.showSpinner = true;
      this.results = null;
      axios.get('https://yesno.wtf/api') 
     .then( response => {
        this.showSpinner = false;
        this.prediction = response.data;
      })
      .catch( error => {
        this.showSpinner = false;
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
  background: #003300;
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