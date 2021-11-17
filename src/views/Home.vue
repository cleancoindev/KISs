<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">  
      <ion-img class="logoTop" :src="logo.src" ></ion-img>
      <div id="dating-card-container">
        <DatingCard class="datingCard" ref="datingCard" profileImage="./assets/example/date-profile.png" name="Andrass" age="63"></DatingCard>
        <DatingCard class="datingCard" ref="datingCard" profileImage="./assets/example/date-profile3.png" name="1n3rn3t Gr4ndm4" age="83"></DatingCard>
        <DatingCard class="datingCard" ref="datingCard" profileImage="./assets/example/date-profile2.png" name="Pappy-plier" age="59"></DatingCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { createGesture, createAnimation, IonPage, IonContent, IonImg } from '@ionic/vue';

import DatingCard from '@/components/DatingCard.vue';


export default {
  name: 'Home',
  components: { DatingCard, IonContent, IonPage, IonImg },
  setup() {
    const logo = {
      'text': 'Logo',
      'src': './assets/icon/icon-transparent.png'
    };
    return {
      logo
    }
  },
  methods: {
  },
  mounted: function mounted () {
    const MAX_TRANSLATE = 800;


    const getCardRef = () => {
      let cardRef: any = null;
      cardRef = document.querySelector(".datingCard")
      cardRef.classList.add("focusedCard")
      console.log(cardRef);
      return cardRef
    }

    function initNewCard(elem: any) {
      if (!elem) {return}
      let started = false;

      const getStep = (ev: any) => {
        // clamp
        return Math.max(0, Math.min(ev.deltaX / MAX_TRANSLATE, 1));
      }

      const cardAnimation = createAnimation()
        .addElement(elem)
        .duration(350)
        .fromTo('transform', 'translate(0, 0) rotate(0deg)', `translate(${MAX_TRANSLATE}px, -200px) rotate(25deg)`)


      const onMove = (ev: any) => {
        if (!started) {
            cardAnimation.progressStart();
            started = true;
        }

        cardAnimation.progressStep(getStep(ev));
      }

      const cardGesture = createGesture({
        el: elem,
        threshold: 0,
        gestureName: 'card-gesture',
        onMove: ev => onMove(ev),
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        onEnd: ev => onEnd(ev)
      });

      const onEnd = (ev: any) => {
          if (!started) { return; }

          cardGesture.enable(false);

          const step = getStep(ev);
          const shouldComplete = step > 0.2;

          cardAnimation
              .progressEnd((shouldComplete) ? 1 : 0, step)
              .onFinish(() =>{
                  cardGesture.enable(true);
                  if (shouldComplete) {
                    if (elem) {
                      elem.remove();
                      initNewCard(getCardRef())
                    }
                  }
              });

          started = false;
      }

      cardGesture.enable(true);
    }
    
    initNewCard(getCardRef());
    
  }
}

</script>

<style scoped>
.logoTop {
  position: absolute;
  width: 108px;
  height: 100px;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto;
}

#dating-card-container {
  display: flex;
  flex-direction: column;
}

.datingCard:nth-child(1) {
  z-index: 3;
}

.datingCard:nth-child(2) {
  z-index: 2;
}

.datingCard:nth-child(3) {
  z-index: 1;
}
</style>