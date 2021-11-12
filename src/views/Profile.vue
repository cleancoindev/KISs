<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <CommingSoon name="Profile page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CommingSoon from '@/components/CommingSoon.vue';

export default  {
  name: 'Profile',
  components: { CommingSoon, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>