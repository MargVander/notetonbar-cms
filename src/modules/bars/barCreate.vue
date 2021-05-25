<template>
  <div class="bar-create container">
    <h1>Ajouter un bar</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group mb-4">
        <label for="name">Nom</label>
        <input v-model="form.name" type="text" class="form-control" id="name" />
      </div>
      <div class="form-group mb-4">
        <label for="description">Description</label>
        <textarea v-model="form.description" class="form-control" id="description" />
      </div>
      <div class="form-group mb-4">
        <label for="address">Adresse</label>
        <input v-model="form.address" type="text" class="form-control" id="address" />
      </div>
      <div class="form-group mb-4">
        <label for="zipcode">Code postal</label>
        <input v-model="form.zip_code" type="number" class="form-control" id="zipcode" />
      </div>
      <div class="form-group mb-4">
        <label for="city">Ville</label>
        <input v-model="form.city" type="text" class="form-control" id="city" />
      </div>
      <div class="form-check mb-4">
        <input v-model="form.terrace" type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Terrasse ?</label>
      </div>
      <div class="form-group mb-4">
        <label for="link">Lien du site</label>
        <input v-model="form.website_link" type="text" class="form-control" id="link" />
      </div>
      <div class="form-group mb-4">
        <label for="happyhour">Happy Hour</label>
        <input v-model="form.happy_hour" type="time" class="form-control" id="happyhour" />
      </div>
      <div class="form-group mb-4">
        <label for="hours">Horaires</label>
        <div class="d-flex dayhours">
          <p class="day">Lundi :</p>
          <input v-model="form.hours.mon[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.mon[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Mardi :</p>
          <input v-model="form.hours.tue[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.tue[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Mercredi :</p>
          <input v-model="form.hours.wed[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.wed[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Jeudi :</p>
          <input v-model="form.hours.thu[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.thu[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Vendredi :</p>
          <input v-model="form.hours.fri[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.fri[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Samedi :</p>
          <input v-model="form.hours.sat[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.sat[1]" type="time" class="form-control hours" id="link" />
        </div>
        <div class="d-flex dayhours">
          <p class="day">Dimanche :</p>
          <input v-model="form.hours.sun[0]" type="time" class="form-control hours" id="link" />
          <input v-model="form.hours.sun[1]" type="time" class="form-control hours" id="link" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import BarService from "./services/BarService.ts";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        address: "",
        city: "",
        zip_code: "",
        terrace: false,
        website_link: "",
        happy_hour: null,
        hours: {
          mon: [null, null],
          tue: [null, null],
          wed: [null, null],
          thu: [null, null],
          fri: [null, null],
          sat: [null, null],
          sun: [null, null]
        }
      }
    };
  },
  methods: {
      async onSubmit() {
          await BarService.createBar(this.form)
          .then(() => {
              this.$router.push('/bars')
          })
      }
  }
};
</script>

<style>
.dayhours {
  align-items: center;
}
.day {
  width: 100px;
}
.hours {
  width: unset;
  margin: 10px;
}
.dayhours p {
  margin: 0;
  padding: 0;
}
</style>