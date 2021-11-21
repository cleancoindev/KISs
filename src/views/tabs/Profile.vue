<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">      
      <div class="page-box">
        <h1>Profile</h1>
        <div class="profile-content">
          <div class="pp-container">
            <div class="profile-pic" :style="'background-image: url(' + profileImage + ');'"></div>
            <button class="btnEdit">
              <ion-icon class="edit-icon" :src="brush"></ion-icon>
            </button>
          </div>
          <h2>{{ name }}</h2>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/vue';
import { brush } from 'ionicons/icons';

export default  {
  name: 'Profile',
  components: { IonHeader, IonContent, IonPage, IonIcon },
  data: () => ({
    name: "Carl",
    profileImage: "http://images4.fanpop.com/image/polls/664000/664497_1300312081691_full.jpg",
    description: "I'm an old DnD player. I've 2 sons and 3 grandsons. I am an aviation enthusiast and drink a lot of detox water for my old kidneys.",
    brush
  })
}
</script>

<style scoped>
.profile-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 20px;
}

.profile-banner {
  width: 100%;
  height: 230px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.pp-container {
  position: relative;
}

.profile-pic {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin: 50px 0 0 0;
}
.btnEdit {
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-left: -35px;
  border-radius: 50%;
  background: var(--ion-color-primary);
}

.edit-icon {
  color: #fff;
}
</style>