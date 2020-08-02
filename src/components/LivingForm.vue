<template>
  <div class="form">
    <form @submit.prevent="submitPrayer">
      <div class="name field">
        <label class="label">Nome Completo</label>
        <div class="control">
          <input class="input" type="text" v-model="livingData.name" />
        </div>
      </div>
      <div class="age field">
        <label class="label">Idade</label>
        <div class="control">
          <input class="input" type="number" v-model="livingData.age" />
        </div>
      </div>
      <div class="adress field">
        <label class="label">Endereço</label>
        <div class="control">
          <input class="input" type="text" v-model="livingData.address" />
        </div>
      </div>
      <div class="email field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" v-model="livingData.email" />
        </div>
      </div>
      <div class="msg field">
        <label class="label">Mensgem</label>
        <div class="control">
          <label>
            <textarea
              class="textarea"
              rows="5"
              v-model="livingData.message"
            ></textarea>
          </label>
        </div>
      </div>
      <div class="expiry field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="livingData.remember" />
            Avise-me quando expirar os 30 dias
          </label>
          <p>
            Selecione este campo e seja avisado por e-mail sobre o fim do
            período de vibração do nome informado.
          </p>
        </div>
      </div>
      <button type="submit" :disabled="!enableSubmit">Adiciona</button>
    </form>
    <Table type="living" :data="living.prayerRepo" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Validation from "../Validations";
import Table from "@/components/Table.vue";
import store from "@/store";

const { isNotEmpty, isValidEmail } = Validation;

type Living = {
  name: string;
  age: number;
  address: string;
  email: string;
  message: string;
  remember: boolean;
};

@Component({
  components: {
    Table
  }
})
export default class LivingForm extends Vue {
  livingData: Living = {
    name: "",
    age: 0,
    address: "",
    email: "",
    message: "",
    remember: false
  };

  private emptyData = () => {
    return {
      name: "",
      age: 0,
      address: "",
      email: "",
      message: "",
      remember: false
    };
  };

  private submitPrayer = () => {
    store.livingArray.insert(this.livingData);
    this.livingData = this.emptyData();
  };

  get living() {
    return store.livingArray.retrieve();
  }

  get enableSubmit(): boolean {
    const { name, email, address } = this.livingData;
    return (
      isNotEmpty(name) &&
      isNotEmpty(address) &&
      (!isNotEmpty(email) || isValidEmail(email))
    );
  }
}
</script>

<style scoped></style>
