<template>
  <div class="container text-center">
    <h1>Gestion des reviews</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Review</th>
          <th scope="col">Note</th>
          <th scope="col">Auteur</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="review in reviews" :key="review.id">
          <td>{{ review.content }}</td>
          <td>{{ review.rating }}</td>
          <td>{{ review.user.pseudo }}</td>
          <td>
            <button @click="deleteReview(review.id)" class="btn btn-danger">
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BarService from "./services/BarService.ts";
import { store } from "../../store.ts";
export default {
  data() {
    return {
      bearer: store.state.bearer,
      barId: this.$route.params.id,
      reviews: [],
    };
  },
  methods: {
    async fetchReviews(id) {
      BarService.fetchReviews(id, this.bearer).then((reviews) => {
        this.reviews = reviews;
      });
    },
    async deleteReview(id) {
      if (confirm("Êtes-vous sur ?")) {
        await BarService.deleteReview(id, this.bearer).then(() => {
          const toDelete = this.reviews.findIndex((review) => review.id === id);
          this.reviews.splice(toDelete, 1);
        });
      }
    },
  },
  created() {
    this.fetchReviews(this.barId);
  },
};
</script>

<style>
td img {
  width: 200px;
}

.pic-label {
  font-weight: bold;
  margin-bottom: 20px;
}

.pic-label input {
  margin-top: 10px;
}
</style>
