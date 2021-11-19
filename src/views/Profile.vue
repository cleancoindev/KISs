<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">      
      <div class="page-box">
        <h1>Profile</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';

export default  {
  name: 'Profile',
  components: { IonHeader, IonContent, IonPage }
}
</script>