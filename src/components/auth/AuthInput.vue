<template>
    <div id="container">
        <ion-label>{{ name }}</ion-label>
        <ion-input :type="type" :placeholder="name"></ion-input>
    </div>
</template>

<script>
import { IonLabel, IonInput } from '@ionic/vue';

export default {
  name: 'AuthInput',
  components: { IonLabel, IonInput},
  props: {
    type: String,
    name: String
  }
}
</script>

<style scoped>
#container {
  margin: 0 0 10px 0;
}

#container ion-label {
  font-size: 13px;
  font-weight: 500;
}

ion-input {
  border: solid 2px rgb(155, 155, 155);
  border-radius: 10px;
}
</style>