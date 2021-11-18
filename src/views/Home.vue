<template>
  <ion-page>
    <ion-content :fullscreen="true">  
      <ion-img class="logoTop" :src="logo.src" ></ion-img>
      <div id="dating-card-container">
        <DatingCard v-for="card in cards" :key="card" class="datingCard" ref="datingCard" :profileImage="card.profileImage" :name="card.name" :age="card.age"></DatingCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { createGesture, createAnimation, IonPage, IonContent, IonImg } from '@ionic/vue';

import DatingCard from '@/components/DatingCard.vue';


export default {
  name: 'Home',
  components: { DatingCard, IonContent, IonPage, IonImg },
  data: () => ({
    logo: {
    'text': 'Logo',
    'src': './assets/icon/icon-transparent.png'
    },
    showLess: true,
    cards: [
      {name:'Andras', age:'63', profileImage:'./assets/example/date-profile.png'},
      {name:'1nt3rn3t Gr4ndm4', age:'89', profileImage:'./assets/example/date-profile3.png'},
      {name:'Pappy-plier', age:'59', profileImage:'./assets/example/date-profile2.png'}
    ]
  }),
  methods: {
    addCard() {
      const cards = [
        {name:'Andras', age:'63', profileImage:'./assets/example/date-profile.png'},
        {name:'1nt3rn3t Gr4ndm4', age:'89', profileImage:'./assets/example/date-profile3.png'},
        {name:'Pappy-plier', age:'59', profileImage:'./assets/example/date-profile2.png'},
        {name:'Deus', age: '∞', profileImage: 'https://st4.depositphotos.com/13194036/21478/i/600/depositphotos_214785028-stock-photo-low-angle-view-of-jesus.jpg'},
        {name:'Shrek', age: '143', profileImage: 'https://pics.me.me/faceapp-old-shrek-wildin-61004485.png'},
        {name:'Gerald', age:'98', profileImage:'https://sm.ign.com/t/ign_fr/news/t/the-witche/the-witcher-how-old-is-geralt-when-the-show-begins_c57b.h720.jpg'},
        {name:'Louis XIV', age:'383', profileImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/260px-Louis_XIV_of_France.jpg'},
        {name:'Cthulhu', age:'430M', profileImage:'https://cdnb.artstation.com/p/assets/images/images/035/666/837/large/andree-wallin-1117-2.jpg'}
      ]
      this.cards.push(cards[Math.floor(Math.random()*cards.length)])
    }
  },
  mounted() {
    const MAX_TRANSLATE = 800;
    const vm = this;

    const getCardRef = () => {
      let cardRef = null;
      cardRef = document.querySelector(".datingCard");
      if (cardRef) {return cardRef}
    }

    function initNewCard(elem) {
      if (!elem) {return}
      let started = false;

      const getStep = (ev) => {
        // clamp
        return Math.max(0, Math.min(ev.deltaX / MAX_TRANSLATE, 1));
      }

      const cardAnimation = createAnimation()
        .addElement(elem)
        .duration(350)
        .keyframes([
          { offset: 0, transform: 'translate(0, 0) rotate(0deg)' },
          { offset: 0.2, transform: `translate(${MAX_TRANSLATE/5}px, -${200/5}px) rotate(${25/5}deg)` },
          { offset: 1, transform: `translate(${MAX_TRANSLATE}px, -200px) rotate(25deg)` }
        ])


      const onMove = (ev) => {
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

      const onEnd = (ev) => {
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
                      vm.cards.shift();
                      vm.addCard();
                      initNewCard(getCardRef())
                    }
                  }
              });

          started = false;
      }

      elem.querySelector('.btnLove').addEventListener('click', () => {
        cardAnimation
          .progressEnd(1, 0)
          .onFinish(() =>{
              cardGesture.enable(true);
              if (elem) {
                elem.remove();
                vm.cards.shift();
                vm.addCard();
                initNewCard(getCardRef())
              }
          });
      })

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

.datingCard {
  transition: 0.3s ease-out;
}

.datingCard:nth-child(1) {
  z-index: 3;
}

.datingCard:nth-child(2) {
  z-index: 2;
  transform: scale(0.9) translateY(50px);
}

.datingCard:nth-child(3) {
  z-index: 1;
  transform: scale(0.8) translateY(110px);
}
</style>