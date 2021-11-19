<template>
  <div id="container">
      <div class="discussion-box">
        <div class="left-container">
            <div class="profile-pic" name="profile" :style="'background-image: url(' + profileImage + ');'"></div>
            <div class="discussion-content">
                <h4 class="user-name">{{ name }}</h4>
                <span class="discussion-infos">Online 14 minutes ago</span>
            </div>
        </div>
      </div>
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
    cursor: pointer
}

.discussion-box {
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    transition: 0.2s ease;
}

.discussion-box:hover {
    background: #f5f5f5;
}

.discussion-box:active {
    background: #e4e4e4;
}

.left-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.profile-pic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    margin: 0 14px 0 0;
}

.user-name {
    margin: 0;
}

h4 {
    font-size: 19px;
}

.discussion-content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
}

.discussion-infos {
    font-size: 15px;
    color: #353535;
}
</style>