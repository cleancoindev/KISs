<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-img class="logoTop" :src="logo.src" ></ion-img>

      <div class="dating-card-container">
        <DatingCard profileImage="./assets/example/date-profile.png" name="Andras" age="63"></DatingCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/vue';

import DatingCard from '@/components/DatingCard.vue'

export default  {
  name: 'Home',
  components: { DatingCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonImg },
  setup() {
    const logo = {
      'text': 'Logo',
      'src': './assets/icon/logo-transparent.png'
    };
    return { logo }
  }
}
</script>

<style scoped>
.logoTop {
  position: absolute;
  width: 108px;
  height: 100px;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto;
}
</style>