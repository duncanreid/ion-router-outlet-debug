<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        
        <h1 style="color:#fff;">About Page</h1>
        <ion-button color="primary" @click="goHome">
            home
        </ion-button>
        <ion-button color="primary" @click="goSearch">
            search
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  setup() {
      const router = useRouter();
      const query = ref('');
      return { router, query }
  },
  methods: {
      goSearch() {
          this.router.push({ name: 'search', params: { term: 'about' }})
      },
      goHome() {
          this.router.push({ name: 'home'})
      }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>