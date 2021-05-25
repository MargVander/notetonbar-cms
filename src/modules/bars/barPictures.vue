<template>
  <div class="container text-center">
    <h1>Gestion des images</h1>

    <label for="photo" class="pic-label">
      Ajouter une photo
      <br />
      <input @change="selectImage($event)" id="photo" type="file" />
    </label>
    <br />
    <button @click="uploadImage" class="btn btn-primary">Envoyer</button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="picture in pictures" :key="picture.id">
          <td>
            <img v-bind:src="'http://localhost:3000/pictures/' + picture.path" alt />
          </td>
          <td>
            <button @click="deletePicture(picture.id, picture.path)" class="btn btn-danger">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PictureService from "./services/PictureService.ts";
export default {
  data() {
    return {
      barId: this.$route.params.id,
      pictures: [],
      selectPic: null
    };
  },
  methods: {
    async fetchPictures(id) {
      await PictureService.fetchPictures(id).then(pictures => {
        this.pictures = pictures;
      });
    },
    async deletePicture(id, path) {
      await PictureService.deletePicture(id, path).then(() => {
        const toDelete = this.pictures.findIndex(picture => picture.id === id);
        this.pictures.splice(toDelete, 1);
      });
    },
    selectImage(event) {
      this.selectPic = event.target.files[0];
    },
    async uploadImage() {
      await PictureService.uploadPicture(this.barId, this.selectPic).then(
        data => {
          this.pictures.push(data);
        }
      );
    }
  },
  created() {
    this.fetchPictures(this.barId);
  }
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