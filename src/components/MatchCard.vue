<template>
  <div id="container">
      <div class="left-container">
        <div class="profile-pic" name="profile" :style="'background-image: url(' + profileImage + ');'"></div>
        <div class="notif-content">
            <h4 class="user-name">{{ name }}</h4>
            <span class="notif-infos">Love you too !</span>
        </div>
      </div>
      <button class="btn-talk">Talk</button>
  </div>
</template>

<script lang="ts">

export default {
  name: 'CommingSoon',
  props: {
    profileImage: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

  }
}
</script>

<style scoped>
#container {
    width: 100%;
    min-height: 20px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.left-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    margin: 0 7px 0 0;
}

.user-name {
    margin: 0;
}

.notif-content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
}

.notif-infos {
    font-size: 14px;
    color: #353535;
}

.btn-talk {
    background: var(--ion-color-primary);
    color: #FFFFFF;
    padding: 7px 18px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-talk:active {
    transform: scale(0.95);
}
</style>