<template>
  <div id="app">
    <Header />
    <div class="columns is-desktop">
      <div class="column">
        <button @click="option = 1">Encarnados</button>
      </div>
      <div class="column">
        <button @click="option = 2">Desencarnados</button>
      </div>
      <div class="column">
        <button @click="option = 3">Lares/Empresas</button>
      </div>
    </div>
    <div class="forms">
      <LivingForm v-if="option === 1" />
      <DeadForm v-show="option === 2" />
      <PlacesForm v-show="option === 3" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import LivingForm from "./components/LivingForm.vue";
import DeadForm from "./components/DeadForm.vue";
import PlacesForm from "./components/PlacesForm.vue";

enum Options {
  Living = 1,
  Dead,
  Places
}

@Component({
  components: {
    Header,
    LivingForm,
    DeadForm,
    PlacesForm
  }
})
export default class App extends Vue {
  private option: Options = Options.Living;
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
}

.columns {
  padding: 25px 0;
  display: flex;
  left: 5%;
  justify-content: space-around;
  .column {
    width: 20%;
    height: 50px;
    border: 3px solid #35681b;
    position: relative;
    button {
      color: #35681b;
      font-size: 30px;
      font-weight: 400;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      border: 0;
      background-color: inherit;
      font-family: inherit;
    }
  }
}
</style>
