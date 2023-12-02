import HelloWorld from './hello-world.js';
const {ref} = Vue;

// Options API
export default {
    components:{
        HelloWorld
    },
    // Composition API
    setup(){

        const cities = ref(['Kenosha','Boston','Miami','Chicago','Honolulu']);
        let state = ref('WI');

        function updateCity(...args){
            cities.value[0] = args[0];
            state.value = args[1];
            console.log(cities.value)
          }

        return {
            cities, state, updateCity
        }
    },
    

    template: 
        `<header>
            <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

            <div class="wrapper">
            <HelloWorld msg="You did it!" 
            :cities="cities" 
            :state="state"
            :updatecity="updateCity" 
            @update-city="updateCity"
            @update-city-two="updateCity"
            />
            
            </div>
        </header>

        <main>
            <!-- <TheWelcome /> -->
        </main>
    `
}