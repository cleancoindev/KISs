<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Storage } from "@ionic/storage";

import { getUser } from './lib/fauna';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    const localStorage = new Storage()
    localStorage.create()
    localStorage.get("userRef")
    .then((dataRef) => {
      getUser(dataRef.instance.value.id)
      .then((data) => {
        localStorage.set("user", data)
      })
      
    })
  }
});
</script>