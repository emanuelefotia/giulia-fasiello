<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="12" class="d-flex justify-start pb-0">
        <a
          href="portfolio_personale.pdf"
          class="text-decoration-none ma-10"
          target="_blank"
        >
          <v-img width="90" :src="cartella"></v-img>
          <p class="text-caption font-weight-bold mt-2">
            portfolio <br />
            personale
          </p>
        </a>
        <a
          href="personal_portfolio.pdf"
          class="text-decoration-none ma-10"
          target="_blank"
        >
          <v-img width="90" :src="cartella"></v-img>
          <p class="text-caption font-weight-bold mt-2">
            personal <br />
            portfolio
          </p>
        </a>
      </v-col>
      <v-col cols="12" class="d-flex justify-start pt-0">
        <a
          href="CV_ITA.pdf"
          class="text-decoration-none ma-10 mt-3"
          target="_blank"
        >
          <v-img width="90" :src="cartella"></v-img>
          <p class="text-caption font-weight-bold mt-2">cv ita</p>
        </a>
        <a
          href="CV_ENG.pdf"
          class="text-decoration-none ma-10 mt-3"
          target="_blank"
        >
          <v-img width="90" :src="cartella"></v-img>
          <p class="text-caption font-weight-bold mt-2">cv eng</p>
        </a>
      </v-col>
    </v-row>
    <v-row justify="start" style="position: absolute; bottom: 4%; width: 100%">
      <v-col class="align-center ml-15 pl-0" cols="2">
        <div class="d-flex justify-start mb-3 align-center">
          <v-img max-width="25" @click="emailTo" :src="email"> </v-img>

          <a
            class="text-decoration-none font-weight-bold ml-3 "
            href="mailto:giulia.fasiello@libero.it"
            >giulia.fasiello@libero.it</a
          >
        </div>
        <div class="d-flex justify-start align-center">
          <v-img max-width="25" @click="linkTo" :src="linkedin"> </v-img>

          <a
            class="text-decoration-none font-weight-bold ml-3"
            href="http://www.linkedin.com/in/giulia-fasiello-71aba1258"
            target="_blank"
            >Giulia Fasiello</a
          >
        </div>
      </v-col>
      <v-col class="align-center mt-2" cols="3">
        <div class="d-flex justify-start mb-3 align-center">
          <v-img max-width="25" @click="instaTo" :src="insta"> </v-img>
          <p>
            <a
              class="text-decoration-none font-weight-bold ml-3"
              target="_blank"
              href="https://www.instagram.com/room.dicia7?igsh=YTQwZjQ0NmI0OA=="
              >@room.dicia7</a
            >
          </p>
        </div>
        <div class="d-flex justify-start align-center">
          <v-img max-width="25" @click="phoneTo" :src="phone"> </v-img>

          <a
            class="text-decoration-none font-weight-bold ml-3"
            href="tel:+393881993735"
            >+39 388 199 3735</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cartella from "@/assets/images/icone/cartella.png";
import email from "@/assets/images/icone/email.png";
import phone from "@/assets/images/icone/tell.png";
import linkedin from "@/assets/images/icone/linkedin.png";
import insta from "@/assets/images/icone/insta.png";
export default {
  data() {
    return {
      cartella,
      email,
      phone,
      linkedin,
      insta,
    };
  },
  methods: {
    emailTo() {
      window.location.href = "mailto:giulia.fasiello@libero.it";
    },
    phoneTo() {
      window.location.href = "tel:+393881993735";
    },
    linkTo() {
      window.open(
        "http://www.linkedin.com/in/giulia-fasiello-71aba1258",
        "_blank"
      );
    },
    instaTo() {
      window.open(
        "https://www.instagram.com/room.dicia7?igsh=YTQwZjQ0NmI0OA==",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Aaargh" !important;
  color: black !important;
}
</style>
