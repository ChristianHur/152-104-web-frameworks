<script >
import { def } from '@vue/shared';
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  components:{HelloWorld, TheWelcome},
  data(){
    return{
      cities : ['Kenosha','Boston','Miami','Chicago','Honolulu'],
      state : 'WI'
    }
  },
  methods:{
    updateCity(...args){
      this.cities[0] = args[0];
      this.state = args[1];
      console.log(this.cities)
    }
  }
}


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" 
      :cities="cities" 
      :state="state"
      :updatecity="updateCity" 
      @update-city="updateCity"
      />
     
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
