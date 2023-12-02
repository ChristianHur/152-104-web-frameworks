<script setup>

const props = defineProps({
  msg:String,
  state:String,
  cities:String,
  updatecity:Function
})

let text = props.msg;

</script>

<template>
  <div class="greetings">
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
    </div>

  </div>
</template>






















<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
