<template>
  <NuxtLayout>
    <v-app>
      <!-- <Header app /> -->
      <v-main>
        <NuxtPage />
      </v-main>
      <!-- <Footer /> -->
    </v-app>
  </NuxtLayout>
</template>

<style>
* {
  font-family: "Aaargh" !important;
}
.bg {
  background-image: url("/assets/images/bg-mobile.png");
  background-size: 100% !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  height: 100%;
}
.bg-mobile {
  background-image: url("/assets/images/bg-mobile.png");
  background-size: 100% !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  height: 100%;
}
</style>
