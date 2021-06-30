<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-py-sm bg-white" :class="sizes">
      <q-toolbar class="text-primary">
        <img
          src="/images/logo1.png"
          class="cursor-pointer q-mr-sm"
          height="50"
          width="75"
        />
        <q-space />
        <q-tabs>
          <q-route-tab
            label="Home"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/"
            exact
          />
          <q-route-tab
            label="About Us"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/about"
            exact
          />
          <q-route-tab
            label="Team"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/team"
            exact
          />
          <!-- <q-route-tab
            label="Contact Us"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-poppins-light"
            to="/contact"
            exact
          /> -->
        </q-tabs>
        <div class="q-pa-sm lt-md">
          <q-btn flat round dense icon="menu" class="q-mr-sm">
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Home"
                        to="/"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="About Us"
                        to="/about"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Team"
                        to="/team"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Contact Us"
                        to="/contact"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-poppins-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    sizes() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "q-px-xl ";
      } else return "";
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: poppins-black;
  src: url("/fonts/poppins/Poppins-Black.ttf");
}

@font-face {
  font-family: poppins-extraBold;
  src: url("/fonts/poppins/Poppins-ExtraBold.ttf");
}

@font-face {
  font-family: poppins-bold;
  src: url("/fonts/poppins/Poppins-Bold.ttf");
}

@font-face {
  font-family: poppins-regular;
  src: url("/fonts/poppins/Poppins-Regular.ttf");
}

@font-face {
  font-family: poppins-italic;
  src: url("/fonts/poppins/Poppins-Italic.ttf");
}

@font-face {
  font-family: poppins-boldItalic;
  src: url("/fonts/poppins/Poppins-BoldItalic.ttf");
}

@font-face {
  font-family: poppins-light;
  src: url("/fonts/poppins/Poppins-Light.ttf");
}

@font-face {
  font-family: poppins-thin;
  src: url("/fonts/poppins/Poppins-Thin.ttf");
}

.my-font-poppins-black {
  font-family: "poppins-black";
}

.my-font-poppins-extraBold {
  font-family: "poppins-extraBold";
}

.my-font-poppins-bold {
  font-family: "poppins-bold";
}

.my-font-poppins-regular {
  font-family: "poppins-regular";
}

.my-font-poppins-italic {
  font-family: "poppins-italic";
}

.my-font-poppins-boldItalic {
  font-family: "poppins-boldItalic";
}

.my-font-poppins-light {
  font-family: "poppins-light";
}

.my-font-poppins-thin {
  font-family: "poppins-thin";
}
</style>
