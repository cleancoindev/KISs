<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <h1>Log In</h1>
        <div class="logger-container">
          <div id="inputs-container" class="login">
            <AuthInput name="Email" type="text"></AuthInput>
            <AuthInput name="Password" type="password"></AuthInput>
            <ion-button @click="login()" expand="block">Log In</ion-button>
            <div class="link-to-other">
              <ion-label>
                  Don't have account ?
                    <router-link to="/auth/signup">
                      <ion-label> Sign Up </ion-label>
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
import { login } from '../../lib/fauna';

export default ({
  name: 'Login',
  components: { IonHeader, IonContent, IonPage, IonLabel, IonButton, AuthInput },
  methods: {
    login() {
      const inputs = document.querySelector('#inputs-container.login');

      const email = inputs.querySelector("input[name='email']").value;
      const password = inputs.querySelector("input[name='password']").value;

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

      login(email, password)
      .then((user) => {
        console.log(user)
      })
      .catch((reason) => {
        if (reason.message == 'authentication failed')
          console.log("Invalid email or password");
      })
    }
  }
})
</script>