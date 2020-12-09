<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Search Page</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Search Page</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
          <h1>Seach Page</h1>
        <input type="text" style="color:black;" v-model="query" placeholder="search page search" >
        <ion-button color="primary" @click="go">
            search
        </ion-button>
        <ion-button color="primary" @click="goHome">
            home
        </ion-button>
        <ion-button color="primary" @click="goAbout">
            about
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonButton
  },
  setup() {
      const router = useRouter();
      const query = ref('');
      return { router, query }
  },
  methods: {
      go() {
          this.router.push({ name: 'search', params: { term: this.query }})
      },
      goHome() {
          this.router.push({ name: 'home'})
      },
      goAbout() {
          this.router.push({ name: 'about'})
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