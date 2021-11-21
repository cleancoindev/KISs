<template>
  <ion-page>
    <ion-header>
      <a href="/tabs/chat" class="goBack">
        <ion-icon size="large" :src="icons.backArrow" class="goBack-icon"></ion-icon>
      </a>
      <ion-item>
        <ion-avatar>
          <img :src="user.profilePic">
        </ion-avatar>
      </ion-item>
      <ion-title>{{ user.name }}</ion-title>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="page-box">
        <div class="msg-container">
          <ChatBubble name="Cthulhu" content="Hey ^^" dateTime="10:10" />
          <SelfChatBubble content="Hiii 😍" dateTime="10:10" />
          <SelfChatBubble content="It-" dateTime="10:10" />
          <SelfChatBubble content="It's realy you ?" dateTime="10:10" />
          <ChatBubble name="Cthulhu" content="Yes" dateTime="10:10" />
          <ChatBubble name="Cthulhu" content="Are you a cultist ?" dateTime="10:10" />
          <SelfChatBubble content="Since ever !" dateTime="10:10" />
          <SelfChatBubble content="Where are u?" dateTime="10:10" />
          <ChatBubble name="Cthulhu" content="At R'lyeh!" dateTime="10:10" />
          <SelfChatBubble content="Wow! Awesome" dateTime="10:10" />
        </div>
        <ion-item class="input-container">
          <div class="msgInput-outline">
            <ion-input autocomplete="none" class="msgInput" clearInput placeholder="Write a message"></ion-input>
          </div>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonTitle, IonInput } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { useRoute } from 'vue-router';

import ChatBubble from '@/components/ChatBubble.vue';
import SelfChatBubble from '@/components/SelfChatBubble.vue';

export default ({
  name: 'Conversation',
  components: { IonHeader, IonContent, IonPage, IonTitle, IonInput, ChatBubble, SelfChatBubble },
  route: useRoute(),
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return {
      user: {
        name: 'Cthulhu',
        profilePic: 'https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg',
        id: id
      },
      icons: {
        backArrow: chevronBack
      }
    }
  }
})
</script>

<style scoped>
ion-header {
  display: flex;
  flex-flow: row nowrap;
}

.page-box {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0;
}

.msg-container {
  padding: 0 20px;
  z-index: -1;
}

ion-title {
  padding: 0;
}

.goBack {
  min-width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}

.input-container {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 15px 15px 25px 15px;
  box-shadow: 0px -4px 18px rgba(111, 131, 139, 0.25);
  border-radius: 20px 20px 0 0;
  --border-style: none;
  --highlight-color-focused: #fff;
  z-index: 2;
  background: #fff;
}

.msgInput-outline {
  border: solid 1px rgb(172, 172, 172);
  padding: 0 10px;
  width: 100%;
  border-radius: 10px;
}

.msgInput {
  border: none;
}
</style>