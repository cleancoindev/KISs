<template>
  <div class="card-container">
        <div class="card-content">
            <div class="card-box">
                <div class="profile-container">
                    <div class="profile-image" name="profile" :style="'background-image: url(' + profileImage + ');'">
                        <div class="profile-name-container">
                            <label for="profile">{{ name }}, {{ age }} yo</label>
                        </div>
                    </div>
                </div>
                <div class="btnLove-container">
                    <button class="btnLove">
                        <ion-icon class="btnLove-icon" :src="heart"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { heart } from 'ionicons/icons';

export default ({
    name: 'DatingCard',
    components: { IonIcon },
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
            type: String,
            required: true
        }
    },
    data() {
        return {
            heart
        }
    }
})
</script>

<style scoped>
.card-container {
    position: absolute;
    width: 325px;
    height: 540px;
    left: 0;
    right: 0;
    top: 90px;
    margin: auto;
    background: #FDFDFD;
    box-shadow: 0px 4px 18px rgba(111, 131, 139, 0.25);
    border-radius: 40px;
    cursor: grab;
}

.card-container:active {
    cursor: grabbing;
}

.card-box {
    padding: 30px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.card-content {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}

.profile-container {
    width: 100%;
    min-height: 330px;
    border-radius: 25px;
    overflow: hidden;
}

.profile-image {
    width: 100%;
    height: 330px;
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
}

.btnLove, .btnLove-icon {
    transition: 0.3s ease;
}

.btnLove-icon {
    color: #FFFFFF;
}

.btnLove:active {
    transform: scale(0.9);
    /*width: 85px;
    height: 85px;*/
    box-shadow: 0px 4px 8px rgba(255, 104, 178, 0.35);
}

.btnLove-icon {
    width: 55px;
    height: 55px;
    color: #FFFFFF;
}

.btnLove:active .btnLove-icon {
    width: 50px;
    height: 50px;
}
</style>