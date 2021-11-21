<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <h1>Matchs</h1>
        <div class="loved-container">
          <MatchCard name='1nt3rn3t Gr4ndm4' profileImage='./assets/example/date-profile3.png'></MatchCard>
          <MatchCard name='Cthulhu' profileImage='https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg'></MatchCard>
          <MatchCard name='Andras' profileImage='./assets/example/date-profile.png'></MatchCard>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import MatchCard from '@/components/MatchCard.vue';

export default  {
  name: 'Maths',
  components: { MatchCard, IonHeader, IonContent, IonPage }
}
</script>

<style scoped>
.loved-container {
  padding: 30px;
}

.loved-container > div {
  margin: 0 0 15px 0;
}
</style>