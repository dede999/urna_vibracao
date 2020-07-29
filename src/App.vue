<template>
  <div id="app">
    <Header />
    <div class="columns is-desktop">
      <div class="column">
        <button @click="option = 1">
          Encarnados
        </button>
      </div>
      <div class="column">
        <button @click="option = 2">
          Desencarnados
        </button>
      </div>
      <div class="column">
        <button @click="option = 3">
          Lares/Empresas
        </button>
      </div>
    </div>
    <div class="forms">
      <LivingForm v-show="option === 1" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import LivingForm from "./components/LivingForm.vue";

enum Options {
  Living = 1,
  Dead,
  Places
}

@Component({
  components: {
    Header,
    LivingForm
  }
})
export default class App extends Vue {
  private option: Options = Options.Living;

  private selector_class = (identifier: Options): string => {
    return identifier === this.option ? "is_active" : "";
  };

  get livingClass(): string {
    return this.selector_class(1);
  }
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
  padding-top: 30px;
  display: flex;
  left: 5%;
  justify-content: space-around;
  .column {
    border: 3px solid #35681b;
    button {
      border: 0;
      background-color: inherit;
      font-family: inherit;
    }
  }
  .is_active {
    background-color: #6fe23e;
    font-weight: 600;
  }
}
</style>
