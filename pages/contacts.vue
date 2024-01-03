<template>
  <v-container class="bg">
    <v-row justify="start">
      <v-col cols="5" class="mt-16">
        <v-row justify="center">
          <v-col class="d-flex align-center" cols="8">
            <v-img max-width="50" @click="emailTo" :src="email"> </v-img>

            <a
              class="ml-3 mt-3 text-decoration-none font-weight-bold"
              href="mailto:giulia.fasiello@libero.it"
              >giulia.fasiello@libero.it</a
            >
          </v-col>
          <v-col class="d-flex align-center" cols="8">
            <v-img max-width="50" @click="phoneTo" :src="phone"> </v-img>

            <a
              class="ml-3 mt-3 text-decoration-none font-weight-bold"
              href="tel:+393881993735"
              >+39 388 199 3735</a
            >
          </v-col>
          <v-col class="d-flex align-center mt-2" cols="8">
            <v-img max-width="50" @click="linkTo" :src="linkedin"> </v-img>

            <a
              class="ml-3 mt-3 text-decoration-none font-weight-bold"
              href="http://www.linkedin.com/in/giulia-fasiello-71aba1258"
              target="_blank"
              >Giulia Fasiello</a
            >
          </v-col>
          <v-col class="d-flex align-center mt-3" cols="8">
            <v-img max-width="50" @click="instaTo" :src="insta"> </v-img>
            <p>
              <a
                class="ml-3 mt-3 text-decoration-none font-weight-bold"
                target="_blank"
                href="https://www.instagram.com/giulifasiello?igsh=OGQ5ZDc2ODk2ZA=="
                >@giuliifasiello</a
              >
              <br />

              <a
                class="ml-3 mt-3 text-decoration-none font-weight-bold"
                target="_blank"
                href="https://www.instagram.com/room.dicia7?igsh=YTQwZjQ0NmI0OA=="
                >@room.dicia7</a
              >
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import email from "@/assets/images/icone/email.png";
import phone from "@/assets/images/icone/tell.png";
import linkedin from "@/assets/images/icone/linkedin.png";
import insta from "@/assets/images/icone/insta.png";

export default {
  data() {
    return {
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
.bg {
  background-image: url("../assets/images/bg-desktop.png");
  background-size: 60% !important;
  background-position: center !important;
}
</style>
