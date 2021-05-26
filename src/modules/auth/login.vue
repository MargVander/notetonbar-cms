<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>
        mail
        <input type="text" v-model="state.mail" />
      </label>
      <div v-if="v$.mail.$error" class="center red">
        veuillez remplir ce champ
      </div>
      <label>
        mot de passe
        <input type="text" v-model="state.password" />
      </label>
      <div v-if="v$.password.$error" class="center red">
        veuillez remplir ce champ
      </div>

      <button type="submit">valider</button>
    </form>

    <div v-if="state.error" class="center red">
      {{ state.errorMessage }}
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import loginService from "./services/authService.ts";
import { store } from "../../store.ts";
import router from "@/router";

export default {
  name: "Login",
  setup() {
    const state = reactive({
      mail: "",
      password: "",
      error: false,
      errorMessage: "Identifiants incorrects",
    });

    const rules = {
      mail: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);

    const onSubmit = () => {
      v$.value.$touch();
      if (v$.value.$invalid) return;

      loginService.login(state.mail, state.password).then((data) => {
        if (data.access_token) {
          state.error = false;
          store.commit("setToken", data);

          router.push({
            name: "Bars",
          });
        } else {
          state.error = true;
        }
      });
    };
    return { state, onSubmit, v$ };
  },
};
</script>

<style>
.center {
  text-align: red;
}

.red {
  color: red;
}
</style>
