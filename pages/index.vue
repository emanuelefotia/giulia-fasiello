<template>
  <v-container class="bg">
    <v-row justify="start">
      <v-col cols="7">
        <v-row justify="start">
          <v-col cols="6" align="center">
            <a
              href="portfolio_personale.pdf"
              class="text-decoration-none"
              target="_blank"
            >
              <v-img max-width="90" :src="cartella" class="mt-16"></v-img>
              <p class="text-caption font-weight-bold mt-2">
                portfolio <br />
                personale
              </p>
            </a>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="6" align="center">
            <a
              href="personal_portfolio.pdf"
              class="text-decoration-none"
              target="_blank"
            >
              <v-img max-width="90" class="mt-2" :src="cartella"></v-img>
              <p class="text-caption font-weight-bold mt-2">
                personal <br />
                portfolio
              </p>
            </a>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="12" align="center">
            <nuxt-link to="/contacts" class="text-decoration-none">
              <v-img
                max-width="90"
                style="margin-top: 4rem"
                :src="cartella"
              ></v-img>
              <p class="text-caption font-weight-bold mt-2">contacts</p>
            </nuxt-link>
          </v-col>
        </v-row></v-col
      >
      <v-col cols="5">
        <v-row justify="start">
          <v-col
            cols="12"
            align="center"
            style="margin-top: 12rem"
            class="ml-16"
          >
            <a href="CV_ITA.pdf" class="text-decoration-none" target="_blank">
              <v-img max-width="90" :src="cartella" class="mt-16"></v-img>
              <p class="text-caption font-weight-bold mt-2">cv ita</p>
            </a>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="12" align="center">
            <a href="CV_ENG.pdf" class="text-decoration-none" target="_blank">
              <v-img max-width="90" :src="cartella" class="mt-n2"></v-img>
              <p class="text-caption font-weight-bold mt-2">cv eng</p>
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import bgDesktop from "@/assets/images/bg-desktop.png";
import cartella from "@/assets/images/icone/cartella.png";

export default {
  data() {
    return {
      bgDesktop,
      cartella,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Aaargh" !important;
  color: black !important;
}
.bg {
  background-image: url("../assets/images/bg-desktop.png");
  background-size: 60% !important;
  background-position: center !important;
}
</style>
