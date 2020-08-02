<template>
  <section>
    <b-tabs>
      <b-tab-item label="Vibrações">
        <b-table
          :data="dataPicker.retrieve()"
          :columns="colunas[type]"
          :selected.sync="selected"
        />
      </b-tab-item>

      <b-tab-item v-if="!!selected" label="Selecionada">
        <div v-for="(key, i) in Object.keys(selected)" :key="i" class="field">
          <b-field :label="labels[key]">
            <b-numberinput
              min="0"
              v-model="selected[key]"
              v-if="key === 'age'"
            />
            <b-switch
              v-model="selected[key]"
              type="is-success"
              passive-type="is-dark"
              v-else-if="key === 'remember'"
            />
            <b-input
              type="textarea"
              v-model="selected[key]"
              rounded
              v-else-if="key === 'message'"
            />
            <b-input v-model="selected[key]" rounded v-else />
          </b-field>
        </div>
        <div class="actions">
          <b-button @click="updatePrayer" type="is-success">
            Salve
          </b-button>
          <b-button @click="removePrayer" type="is-danger">
            Deletar
          </b-button>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Prayer, { PrayerData } from "@/classes/Prayer";
import store from "@/store";

@Component
export default class Table extends Vue {
  @Prop({ required: true })
  private readonly type!: string;

  private colunas = {
    living: [
      {
        field: "name",
        label: "Nome",
        width: "250"
      },
      {
        field: "age",
        label: "Idade",
        numeric: true
      },
      {
        field: "address",
        label: "Endereço",
        width: "250"
      },
      {
        field: "email",
        label: "E-Mail",
        width: "250"
      },
      {
        field: "message",
        label: "Mensagem",
        width: "300"
      },
      {
        field: "remember",
        label: "Lembrar-me"
      }
    ],
    dead: [
      {
        field: "name",
        label: "Nome",
        width: "80"
      },
      {
        field: "age",
        label: "Idade",
        numeric: true
      },
      {
        field: "deathDay",
        label: "Data Desencarne",
        width: "40"
      },
      {
        field: "email",
        label: "E-Mail",
        width: "40"
      },
      {
        field: "remember",
        label: "Lembrar-me"
      }
    ],
    places: [
      {
        field: "address",
        label: "Endereço"
      },
      {
        field: "email",
        label: "E-Mail",
        width: "40"
      },
      {
        field: "message",
        label: "Mensagem",
        width: "40"
      },
      {
        field: "remember",
        label: "Lembrar-me"
      }
    ]
  };

  private selected: PrayerData | null = null;

  private labels = {
    name: "Nome",
    age: "Idade",
    address: "Endereço",
    email: "E-mail",
    message: "Mensagem",
    remember: "Lembre-me",
    deathDay: "Data Desencarne"
  };

  private updatePrayer() {
    if (!this.selected) return;
    this.dataPicker.modify(this.selected, this.selectedIndex);
    this.selected = null;
  }

  private removePrayer() {
    this.dataPicker.remove(this.selectedIndex);
    this.selected = null;
  }

  get dataPicker(): Prayer {
    if (this.type === "living") return store.livingArray;
    if (this.type === "dead") return store.deadArray;
    return store.placesArray;
  }

  get selectedIndex(): number {
    if (!this.selected) return -1;
    return this.dataPicker
      .retrieve()
      .findIndex((value: PrayerData) => this.selected === value);
  }
}
</script>

<style scoped></style>
