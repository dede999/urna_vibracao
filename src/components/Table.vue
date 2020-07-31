<template>
  <section>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :columns="colunas[type]"
          :selected.sync="selected"
        />
      </b-tab-item>

      <b-tab-item :visible="!!selected" label="Selected">
        <pre>{{ selected }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Prayer, { PrayerData } from "@/classes/Prayer";

@Component
export default class Table extends Vue {
  @Prop({ required: true })
  private readonly type!: string;

  @Prop({ required: true })
  private readonly data!: PrayerData[];

  private colunas = {
    living: [
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
}
</script>

<style scoped></style>
