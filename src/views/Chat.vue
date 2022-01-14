<template>
  <ion-page>
    <ion-header>
      <router-link to="/tabs/chat" routerDirection="back" class="goBack">
        <ion-icon size="large" :src="icons.backArrow" class="goBack-icon"></ion-icon>
      </router-link>
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
          <ChatBubble v-for="msg in messages" :key="msg" :self="msg.self" :name="user.name" :content="msg.content" :dateTime="msg.dateTime"></ChatBubble>
        </div>
        <ion-item class="input-container">
          <form @submit="sendMessage()" action="javascript:void(0);" name="messageForm" class="messageForm">
            <ion-input type="text" name="message" autocomplete="off" id="msgInput" placeholder="Write a message"></ion-input>
            <button>
              <ion-icon :src="icons.send"></ion-icon>
            </button>
          </form>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonTitle, IonInput, IonIcon, IonItem, IonAvatar } from '@ionic/vue';
import { chevronBack, send } from 'ionicons/icons';
import { useRoute } from 'vue-router';

import ChatBubble from '@/components/ChatBubble.vue';

export default ({
  name: 'Conversation',
  components: { IonHeader, IonContent, IonPage, IonTitle, IonInput, IonIcon, IonItem, IonAvatar, ChatBubble },
  route: useRoute(),
  data() {
    const route = useRoute();
    const { id } = route.params.id;
    return {
      user: {
        name: 'Cthulhu',
        profilePic: 'https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg',
        id: id
      },
      messages: [
        {self:false, content:"Hey ^^", dateTime:"10:10"},
        {self:true, content:"Hiii 😍", dateTime:"10:10"},
        {self:true, content:"It-", dateTime:"10:10"},
        {self:true, content:"It's really you", dateTime:"10:10"},
        {self:false, content:"Yes", dateTime:"10:10"},
        {self:false, content:"Are you a cultist ?", dateTime:"10:10"},
        {self:true, content:"Since ever !", dateTime:"10:10"},
        {self:true, content:"Where are u?", dateTime:"10:10"},
        {self:false, content:"At R'lyeh!", dateTime:"10:10"},
        {self:true, content:"Wow! Awesome", dateTime:"10:10"},
      ],
      icons: {
        backArrow: chevronBack,
        send: send
      }
    }
  },
  methods: {
    sendMessage() {
      const inputVal = document.getElementById('msgInput').children[0].value
      if (inputVal != "") {
        document.getElementById('msgInput').children[0].value = ""
        this.messages.push({self:true, content:inputVal, dateTime:"10:10"})
        setTimeout(() => {
          const msgCont = document.querySelector(".msg-container");
          msgCont.scrollTop = msgCont.scrollHeight;
        }, 10)
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

ion-item {
  --border-style: none;
  --highlight-color-focused: #fff;
}

.page-box {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: flex-end;
  padding: 0;
  overflow: hidden;
}

.msg-container {
  padding: 0 20px;
  margin: auto 0 100px 0;
  overflow: auto;
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
  right: 0;
  left: 0;
  padding: 15px 15px 25px 15px;
  box-shadow: 0px -4px 18px rgba(111, 131, 139, 0.25);
  border-radius: 20px 20px 0 0;
  z-index: 2;
  background: #fff;
}

.messageForm {
  border: solid 1px rgb(172, 172, 172);
  padding: 0 10px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
}

#msgInput {
  border: none;
}

.messageForm > button {
  background: none;
}
</style>