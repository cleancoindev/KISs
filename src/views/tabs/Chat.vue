<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <h1>Messages</h1>
        <div class="discussions-container">
          <DiscussionCard name='Cthulhu' profileImage='https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg'></DiscussionCard>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import DiscussionCard  from '@/components/DiscussionCard.vue'

export default  {
  name: 'Chat',
  components: { IonHeader, IonContent, IonPage, DiscussionCard }
}
</script>

<style scoped>
.discussions-container {
  padding: 30px 10px;
}

.discussions-container > div {
  margin: 0 0 15px 0;
}
</style>