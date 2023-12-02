
export default {
    props:['msg','cities','state','updatecity'],
    data(){
        return{

        }
    },
    methods:{
        handleClick(){
            this.$emit('updateCityTwo', 'Austin','TX')
        }

    },
    template:
    `<div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <div>
      <br>
      <h2>{{state}} - {{ cities[0] }}</h2>
      <br>
      <button @click="updatecity('Phoenix','AZ')">Update City</button>
      <button @click="$emit('update-city', 'Fargo','ND')">Update City 2</button>
      <button @click="handleClick">Update City 3</button>
    </div>

  </div>

    `
}