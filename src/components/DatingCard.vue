<template>
  <div id="container">
      <div class="card-content">
        <div class="profile-container">
            <div class="profile-image" name="profile" :style="'background-image: url(' + profileImage + ');'">
                <div class="profile-name-container">
                    <label for="profile">{{ name }}, {{ age }} yo</label>
                </div>
            </div>
        </div>
        <div class="btnLove-container">
            <button class="btnLove">
                <ion-icon class="btnLove-icon" :icon="heart"></ion-icon>
            </button>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { heart } from 'ionicons/icons';

export default ({
    name: 'DatingCard',
    props: {
        profileImage: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    setup() {
        return {
            heart
        }
    }

})
</script>

<style scoped>
#container {
    position: absolute;
    width: 350px;
    height: 557px;
    left: 0;
    right: 0;
    top: 90px;
    margin: auto;
    background: #FDFDFD;
    box-shadow: 0px 4px 18px rgba(111, 131, 139, 0.25);
    border-radius: 40px;
}

.card-content {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: 30px;
}

.profile-container {
    width: 290px;
    min-height: 330px;
    border-radius: 25px;
    overflow: hidden;
}

.profile-image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
}

.profile-name-container {
    width: 100%;
    height: 65px;
    background: rgba(0, 0, 0, 0.33);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-name-container label {
    color: #FFFFFF;
    font-family: 'Oswald', sans-serif;
    font-size: 28px;
    height: fit-content;
    font-weight: 400;
}

.btnLove-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnLove {
    width: 90px;
    height: 90px;
    background: var(--ion-color-primary);
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(255, 104, 178, 0.35);
    transition: 0.3s;
}

.btnLove:active {
    width: 85px;
    height: 85px;
    box-shadow: 0px 4px 8px rgba(255, 104, 178, 0.35);
}

.btnLove-icon {
    width: 55px;
    height: 55px;
    color: #FFFFFF;
}
</style>