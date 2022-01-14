<template>
    <div id="container">
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
</template>

<script>
import { IonLabel, IonInput } from '@ionic/vue';

export default {
  name: 'AuthInput',
  components: { IonLabel, IonInput },
  props: {
    type: String,
    name: String,
    min: Number,
    max: Number
  }
}
</script>

<style scoped>
#container {
  margin: 0 0 7px 0;
}

#container.required {
  margin: 0;
}

ion-label.name {
  font-size: 13px;
  font-weight: 500;
}

ion-input {
  border: solid 2px rgb(155, 155, 155);
  border-radius: 10px;
}

#container.required ion-input {
  border-color: var(--ion-color-primary);
}

ion-label.error {
  color: var(--ion-color-primary);
  font-size: 12px;
  display: none;
}

#container.required > ion-label.error {
  display: block;
}
</style>