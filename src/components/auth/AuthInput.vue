<template>
    <div id="container" :name="name.toLowerCase()">
        <ion-label class="name">{{ name }}</ion-label>
        <ion-input :name="name.toLowerCase()" :type="type" :placeholder="name" :min="min" :max="max" required></ion-input>
        <ion-label class="error">Error Message</ion-label>
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