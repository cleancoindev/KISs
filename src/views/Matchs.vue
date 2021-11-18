<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="loved-box">
        <h1>Matchs</h1>
        <div class="loved-container">
          <LovedCard name='1nt3rn3t Gr4ndm4' profileImage='./assets/example/date-profile3.png'></LovedCard>
          <LovedCard name='Cthulhu' profileImage='https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg'></LovedCard>
          <LovedCard name='Andras' profileImage='./assets/example/date-profile.png'></LovedCard>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import LovedCard from '@/components/LovedCard.vue';

export default  {
  name: 'Maths',
  components: { LovedCard, IonHeader, IonContent, IonPage }
}
</script>

<style scoped>
#loved-box {
  height: 100%;
  max-width: 700px;
  height: 100%;
  margin: auto;
  padding: 10px;
}

h1 {
  margin: 0;
}

.loved-container {
  padding: 30px;
}

.loved-container > div {
  margin: 0 0 15px 0;
}
</style>