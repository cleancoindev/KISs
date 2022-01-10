<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <h1>Sign Up</h1>
        <div class="logger-container">
          <div id="inputs-container">
            <AuthInput name="Username" type="text"></AuthInput>
            <AuthInput name="Email" type="text"></AuthInput>
            <AuthInput name="Password" type="password"></AuthInput>
            <ion-button expand="block">Sign Up</ion-button>
            <div class="link-to-other">
                <ion-label>
                    Already have an account ?
                    <a href="/auth/login">Log In</a>
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

import '@/style/auth.css';

export default ({
  name: 'Signup',
  components: { IonHeader, IonContent, IonPage, IonLabel, IonButton, AuthInput }
})
</script>