<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Chat</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <CommingSoon name="Chat page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CommingSoon from '@/components/CommingSoon.vue';

export default  {
  name: 'Chat',
  components: { CommingSoon, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>