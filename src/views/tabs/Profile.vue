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
          <h2>{{ username }}</h2>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/vue';
import { brush } from 'ionicons/icons';
import { Storage } from "@ionic/storage";

import { getUser } from '../../lib/fauna';

export default  {
  name: 'Profile',
  components: { IonHeader, IonContent, IonPage, IonIcon },
  data() {
    this.setInfos()
    return {
      username: "Username",
      profileImage: "https://pbs.twimg.com/profile_images/1490434541/UP_CarlRelaxingInChair_fullsize.jpg",
      description: "No description.",
      brush
    }
  },
  methods: {
    setInfos() {
      const localStorage = new Storage()
      localStorage.create()
      
      localStorage.get("user")
      .then((user) => {
        if (!user) {
          localStorage.get("userRef")
          .then((dataRef) => {
            getUser(dataRef.instance.value.id)
            .then((data) => {
              localStorage.set("user", data)
              this.setInfos()
            })
          })
        }
        this.username = user.data.username
        this.description = user.data.description
      })
    }
  }
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