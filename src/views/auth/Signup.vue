<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <h1>Sign Up</h1>
        <div class="logger-container">
          <div id="inputs-container" class="signup">
            <AuthInput name="Username" type="text"></AuthInput>
            <AuthInput name="Email" type="text"></AuthInput>
            <AuthInput name="Password" type="password"></AuthInput>
            <ion-button @click="signup()" expand="block">Sign Up</ion-button>
            <div class="link-to-other">
                <ion-label>
                    Already have an account ?
                    <router-link to="/auth/login">
                      <ion-label> Log In </ion-label>
                    </router-link>
                </ion-label>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonLabel, IonButton } from '@ionic/vue';
import AuthInput from '@/components/auth/AuthInput.vue';

import validator from 'validator';

import '@/style/auth.css';
import { createUser } from "../../lib/fauna";

export default ({
  name: 'Signup',
  components: { IonHeader, IonContent, IonPage, IonLabel, IonButton, AuthInput },
  methods: {
    signup() {
      const inputs = document.querySelector('#inputs-container.signup');

      const username = inputs.querySelector("input[name='username']").value;
      const email = inputs.querySelector("input[name='email']").value;
      const password = inputs.querySelector("input[name='password']").value;
      console.log(username);
      console.log(email);
      console.log(password);

      if (!validator.isLength(username, { min: 5, max: 16 })) {
        inputs.querySelector("div[name='username']").classList.add("required");
        inputs.querySelector("div[name='username'] > .error").innerHTML = "The username must be between 5 and 16 characters long.";
        return
      } else {
        inputs.querySelector("div[name='username']").classList.remove("required");
      }

      if (!validator.isEmail(email)) {
        inputs.querySelector("div[name='email']").classList.add("required");
        inputs.querySelector("div[name='email'] > .error").innerHTML = "Please enter a valid email.";
        return
      } else {
        inputs.querySelector("div[name='email']").classList.remove("required");
      }
      
      if (!validator.isLength(password, { min: 5, max: 32 })) {
        inputs.querySelector("div[name='password']").classList.add("required");
        inputs.querySelector("div[name='password'] > .error").innerHTML = "The username must be between 5 and 32 characters long.";
        return
      } else {
        inputs.querySelector("div[name='password']").classList.remove("required");
      }

      createUser(username, email, password)
    }
  }
})
</script>