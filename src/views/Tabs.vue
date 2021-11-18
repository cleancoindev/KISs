<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="bottom-tabsBar">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
        </ion-tab-button>
          
        <ion-tab-button tab="chat" href="/tabs/chat">
          <ion-icon :icon="chatbubbles" />
        </ion-tab-button>
        
        <ion-tab-button tab="matchs" href="/tabs/matchs">
          <ion-icon :icon="heart" />
        </ion-tab-button>
        
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { chatbubbles, person, home, heart } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      chatbubbles, 
      person, 
      home,
      heart,
    }
  }
}
</script>

<style scoped>
.bottom-tabsBar {
  position: absolute;
  width: 100%;
  height: 95px;
  left: 0px;
  bottom: 0px;
  border: none;
  border-radius: 35px 35px 0 0;
  box-shadow: 0px -4px 14px rgba(111, 131, 139, 0.25);
}

ion-tab-button ion-icon {
  font-size: 34px;
}
</style>