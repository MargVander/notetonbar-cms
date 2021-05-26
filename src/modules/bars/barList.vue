<template>
  <div class="container text-center">
    <h1>Gestion des bars</h1>
    <router-link to="/bars/create" class="btn btn-primary mb-4 mt-2"
      >Ajouter un bar</router-link
    >
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Actif ?</th>
          <th scope="col">Voir info/Editer</th>
          <th scope="col">Supprimer</th>
          <th scope="col">Gestion des images</th>
          <th scope="col">Gestion des Reviews</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bar in bars" :key="bar.id">
          <td>{{ bar.name }}</td>
          <td v-if="bar.isactive">Oui</td>
          <td v-else>Non</td>
          <td>
            <router-link :to="'/bars/edit/' + bar.id">Éditer</router-link>
          </td>
          <td v-if="bar.isactive">
            <button @click="deleteBar(bar.id)" class="btn btn-danger">X</button>
          </td>
          <td v-else />
          <td>
            {{ bar.pictures.length }} image(s)
            <router-link :to="'/bars/pictures/' + bar.id">Gérer</router-link>
          </td>
          <td class="d-flex">
            <p v-if="bar.rating">
              Note moyenne: {{ bar.rating.avg_rating }} &nbsp;
            </p>
            <router-link :to="'/bars/reviews/' + bar.id">Gérer</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="deco">deconnexion</button>
  </div>
</template>

<script>
import BarService from "./services/BarService.ts";
import { store } from "../../store.ts";
import router from "@/router";
export default {
  data() {
    return {
      bars: [],
      bearer: store.state.bearer,
    };
  },
  methods: {
    async fetchBars() {
      await BarService.fetchBars(this.bearer).then((bars) => {
        this.bars = bars;
      });
    },
    async deleteBar(id) {
      if (confirm("Êtes-vous sur ?")) {
        await BarService.deleteBar(id, this.bearer).then(() => {
          const toDelete = this.bars.findIndex((bar) => bar.id === id);
          this.bars.splice(toDelete, 1);
        });
      }
    },
    async deco() {
      store.commit("setToken", "");
      router.push({
        name: "Login",
      });
    },
  },
  created() {
    this.fetchBars();
  },
};
</script>

<style></style>
