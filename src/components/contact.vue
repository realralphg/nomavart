<template>
  <div>
    <header>
      <q-card flat square class="custom__header-bg-v4 row items-center">
        <q-card-section class="text-h3 text-grey-1 my-font-poppins-extraBold">
          Contact Us
          <div class="text-h5 text-grey-1 my-font-poppins-thin">
            Nigeria Agribusiness Group
          </div>
        </q-card-section>
      </q-card>
    </header>
    <section>
      <div class="custom__map pa-2 white">
        <v-map :zoom="12" :center="initialLocation">
          <v-icondefault
            :image-path="'/statics/leafletImages/'"
          ></v-icondefault>
          <v-tilelayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></v-tilelayer>
          <v-marker
            v-for="(l, index) in markers"
            :key="index"
            :lat-lng="l.latlng"
          >
            <v-tooltip :options="{ permanent: true }">
              <div>
                {{ l.text }}
              </div>
            </v-tooltip>
          </v-marker>
        </v-map>
      </div>
    </section>

    <div class="q-px-md">
      <h3 class="text-h4 my-font-poppins-boldItalic custom__heading-green">
        You can contact us anytime
      </h3>
    </div>

    <section>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
          <q-img
            contain
            src="/images/contact1.svg"
            :ratio="16 / 9"
            spinner-color="green"
          />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
          <!-- <q-input
            color="green"
            square
            outlined
            type="text"
            label="Full Name"
          />
          <q-input
            color="green"
            class="q-mt-md"
            square
            outlined
            type="email"
            label="Email"
          /> -->
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              type="text"
              color="green"
              square
              outlined
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <q-input
              type="email"
              color="green"
              square
              outlined
              v-model="email"
              label="Your Email *"
              hint="E.g johndoe@gmail.com"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <q-input
              type="textarea"
              color="green"
              square
              outlined
              v-model="message"
              label="Your Message *"
              hint="Message to us"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Field cannot be empty',
              ]"
            />

            <div>
              <q-btn label="Submit" type="submit" color="green" />
            </div>
          </q-form>
        </div>
      </div>
    </section>

    <!--Footer Section-->
    <section>
      <div
        class="q-pa-xl bg-grey-10 text-white q-mt-xl my-font-poppins-regular"
      >
        <p class="text-h4 text-center my-font-poppins-light">
          Let's Change the World of Agriculture
        </p>
        <div class="row justify-center q-mb-md">
          <q-btn
            @click="$router.push('/membership')"
            no-caps
            outline
            flat
            style="border: 3px solid #52af50"
            class="text-white bg-green q-mr-md q-ma-sm"
            icon-right="arrow_right"
            label="Get Started"
          />
          <q-btn
            @click="$router.push('/contact')"
            no-caps
            flat
            style="border: 3px solid white"
            class="text-white bg-transparent q-ma-sm"
            icon-right="arrow_right"
            label="Contact Us"
          />
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold">About</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/')"
            >
              Home
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/about')"
            >
              About Us
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/membership')"
            >
              Membership
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/leadership')"
            >
              Leadership
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/partner')"
            >
              Partners
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/news')"
            >
              News
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/contact')"
            >
              Contact Us
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold my-font">Social Media</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-facebook" style="font-size: 2em" />
              <span class="q-ml-sm">Facebook</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-twitter" style="font-size: 2em" />
              <span class="q-ml-sm">Twitter</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-instagram" style="font-size: 2em" />
              <span class="q-ml-sm">Instagram</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon name="ion-logo-linkedin" style="font-size: 2em" />
              <span class="q-ml-sm">Linkedin</span>
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 typo1 text-bold my-font">Contact Info</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 typo1 q-mt-md">
              Head Office: No 26 Lake Chad Crescent Maitama, Abuja Nigeria.
            </div>
            <div class="text-body2 q-mt-md">support@nabg.org</div>
            <div class="text-body2 q-mt-md">+234 807 777 7777</div>
          </div>
        </div>
        <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
        <div class="text-caption text-grey-6">
          © 2021 NABG. All rights reserved.
        </div>
        <div class="text-caption text-grey-6">By Greysoft© Technologies.</div>
      </div>
    </section>
  </div>
</template>

<script>
// Code to fix markers not working -- don't remove
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

import * as Vue2Leaflet from "vue2-leaflet";
import { latLng } from "leaflet";

export default {
  components: {
    "v-map": Vue2Leaflet.LMap,
    "v-tilelayer": Vue2Leaflet.LTileLayer,
    "v-icondefault": Vue2Leaflet.LIconDefault,
    "v-marker": Vue2Leaflet.LMarker,
    "v-popup": Vue2Leaflet.LPopup,
    "v-tooltip": Vue2Leaflet.LTooltip,
  },
  props: ["id"],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      slide: 1,
      slide1: "style",
      markers: [
        {
          id: 1,
          latlng: [9.0907048, 7.5028756],
          text: "Head office: 26 Lake Chad Crescent Maitama, Abuja Nigeria",
        },
        {
          id: 1,
          latlng: [6.4493069, 3.4042875],
          text:
            "Liaison office: 126 Lewis Street Lafiaji, Obalende, Lagos Nigeria",
        },
      ],
      // icon: customicon,
      clusterOptions: {},
      initialLocation: latLng(9.0907048, 7.5028756),
      showMap: true,
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });
    },
  },
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";

.custom__map {
  height: 300px;
  width: 100%;
}
.custom__header-bg-v4 {
  height: 120px;
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/leadership1.jpg");
  background-size: contain;
  background-repeat: none;
  background-attachment: fixed;
}
.custom__heading-green::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #52af50;
  content: " ";
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
