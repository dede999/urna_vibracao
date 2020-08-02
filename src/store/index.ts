import Vue from "vue";
import Prayer, { PrayerData } from "@/classes/Prayer";

interface DataStore {
  livingArray: Prayer;
  deadArray: Prayer;
  placesArray: Prayer;
  livingSelect: PrayerData | null;
  deadSelect: PrayerData | null;
  placesSelect: PrayerData | null;
}

const store: DataStore = Vue.observable({
  livingArray: new Prayer("living"),
  deadArray: new Prayer("dead"),
  placesArray: new Prayer("places"),
  livingSelect: null,
  deadSelect: null,
  placesSelect: null
});

export const actions = {
  cleanLiving() {
    store.livingSelect = null;
  },
  cleanDead() {
    store.deadSelect = null;
  },
  cleanPlaces() {
    store.placesSelect = null;
  }
};

export default store;
