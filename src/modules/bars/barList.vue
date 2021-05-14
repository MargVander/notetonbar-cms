<template>
  <div class="container">
    <h1>Gestion des bars</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Actif ?</th>
          <th scope="col">Voir info/Editer</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bar in bars" :key="bar.id">
          <td>{{bar.name}}</td>
          <td v-if="bar.isactive">Oui</td>
          <td v-else>Non</td>
          <td></td>
          <td v-if="bar.isactive">
            <button @click="deleteBar(bar.id)" class="btn btn-danger">X</button>
          </td>
          <td v-else />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BarService from "./services/BarService.ts";
export default {
  data() {
    return {
      bars: []
    };
  },
  methods: {
    async fetchBars() {
      await BarService.fetchBars().then(bars => {
        this.bars = bars;
      });
    },
    async deleteBar(id) {
      if (confirm("Êtes-vous sur ?")) {
        await BarService.deleteBar(id).then(
          (this.bars.find(el => el.id === id).isactive = false)
        );
      }
    }
  },
  created() {
    this.fetchBars();
  }
};
</script>

<style>
</style>