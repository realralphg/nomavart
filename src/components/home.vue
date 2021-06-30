<template>
  <div>
    <header class="custom__header-bg row justify-start items-center q-px-xl">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h1
          class="text-white my-font-poppins-extraBold"
          :class="screenRatioHeading"
        >
          At Nomavart, we are driven by the wealth that our projects bring to
          the local communities and to our clients.
        </h1>
        <h3 class="text-subtitle1 text-primary my-font-poppins-regular gt-sm">
          From project inception we already feel connected to the community and
          the environment in which the project is about to be placed.
        </h3>
        <q-btn
          @click="$router.push('/about')"
          no-caps
          outline
          flat
          rounded
          size="large"
          class="text-primary bg-white my-font-poppins-light"
          icon-right="ion-arrow-round-forward"
          label="Get Started Now"
        />
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="true"
          arrows
          thumbnails
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="/images/header1.jpg" />
          <q-carousel-slide :name="2" img-src="/images/header2.jpg" />
          <q-carousel-slide :name="3" img-src="/images/header3.jpg" />
          <q-carousel-slide :name="4" img-src="/images/header4.jpg" />
        </q-carousel>
        <!-- <q-img height="400px" src="/images/1cow.svg" contain></q-img> -->
      </div>
    </header>
    <section class="bg-secondary">
      <div class="row no-gutters">
        <div class="col-md-4 col-sm-12 col-xs-12 q-pl-lg q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                color="primary"
                name="ion-rocket"
                style="font-size: 4em"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Mission
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Create an effective symbiotic relationship between crop and
                livestock farming within rural communities.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-py-md">
          <q-card class="my-card bg-primary">
            <q-card-section class="text-center">
              <!-- <img src="/images/tractor.svg" height="60" width="60" alt="" /> -->
              <q-icon
                color="secondary"
                name="ion-glasses"
                style="font-size: 4em"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Vision
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                To have a global standard platform for integrated rural farming
                system.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-pr-lg q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="text-left q-pt-xl q-pb-lg">
              <q-icon
                color="primary"
                name="ion-checkmark-circle-outline"
                style="font-size: 4em"
              />
              <!-- <img src="/images/money.svg" height="50" width="50" alt="" /> -->
              <div class="text-body1 text-white my-font-poppins-bold">
                Core Values: (TIE)
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Teamwork <br />
                Integrity <br />
                Excellence
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="bg-secondary">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white">About Nomavart</span>
      </p>
      <p class="text-center q-px-xl">
        <span class="my-font-poppins-light text-white"
          >Established in 1999, Nomavart is a dynamic agricultural company of
          qualified and experienced crop and Livestock Farmers registered under
          the Companies and Allied Matters Decree of 1990 in Nigeria – RC No.
          366346 Nomavart collaborates with local populations, engaging them in
          provincial agricultural operations and projects by creating job
          opportunities during projects while fostering integrated farming
          system in each rural community.
        </span>
      </p>
      <div class="row q-mt-sm q-mx-xl">
        <div class="col q-ma-xl">
          <q-img height="400px" src="/images/ayok.jpg" contain></q-img>
        </div>
        <div class="col q-ma-xl">
          <p class="text-h6 my-font-poppins-light text-primary">
            Getting to know us
          </p>
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-white
            "
          >
            Chairman's Statement
          </p>
          <p class="text-white">
            At Nomavart, we are driven by the wealth that our projects bring to
            the local communities and to our clients. From project inception we
            already feel connected to the community and the environment in which
            the project is about to be placed.
          </p>
          <p class="text-white">
            We feel that besides the business, we are there for the people that
            will benefit from the project, both directly and indirectly,
            starting from our client and its personnel up to the service
            suppliers and the consumers.
          </p>
          <p class="text-white">
            This is why corporate social responsibility is always an unstated
            key deliverable in all our projects.
          </p>
          <p class="text-primary">Dr. Celestine Ayok</p>
        </div>
      </div>
    </section>
    <section class="bg-secondary">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white">Core Team</span>
      </p>
      <p class="text-center q-px-xl">
        <span class="my-font-poppins-light text-white">
          Our team is our most valuable asset. It consists of first-class
          professional managers and consultants. We have a “One Team” attitude
          and approach to work, engaging equally and efficiently to deliver the
          best project to our clients. We care about the relationships we build
          with our clients and members of the community. Just as much as we care
          about getting things done. Together we have a passion for making an
          impact in the agricultural sector through effective and efficient
          management of viable agribusiness projects and product value chain
          using full-time employees and professional consultants on call basis.
        </span>
      </p>
      <div class="row q-mt-sm">
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-xl q-py-md">
          <q-card class="bg-secondary">
            <q-img contain height="200px" src="/images/ayok.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-white text-center my-font-poppins-bold"
              >
                Dr. Ayok Celestine Nache
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-light
                "
              >
                Board Chairman
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-xl q-py-md">
          <q-card class="bg-secondary">
            <q-img contain height="200px" src="/images/bargo.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-white text-center my-font-poppins-bold"
              >
                Engr. Iliya Bagro Duniya
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-light
                "
              >
                Chief Executive Officer
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-px-xl q-py-md">
          <q-card class="bg-secondary">
            <q-img contain height="200px" src="/images/buba.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-white text-center my-font-poppins-bold"
              >
                Mr. Yusuf Buba
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-light
                "
              >
                Chief Finance Officer
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="bg-secondary">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white">Core Services</span>
      </p>
      <p class="text-center q-px-xl">
        <span class="my-font-poppins-light text-white">
          Our core competence is in livestock value chain and our team of
          professionals with over 15-25 years’ experience are fully involved in
          the entire livestock value chain having served as consultants to farms
          like Jamil Dairy Farms Kaduna, Majestik Dairy Farm Jigawa, Maizube
          Dairy Farm Minna, L&Z Dairy Farm Kano, Integrated Dairy Farm (Farm
          Fresh) Vom Jos, Obudu Cattle Ranch etc.
        </span>
      </p>
      <div class="row q-mt-sm q-mx-xl">
        <div class="col q-ma-xl">
          <q-img height="400px" src="/images/header4.jpg" contain></q-img>
        </div>
        <div class="col q-ma-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-white
            "
          >
            Our Expertise
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Turnkey dairy and feedlot farms dairy processing and equipment.
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Pasture establishment, hay and silage making.
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Capacity building in livestock management Nutrition, health and
            reproduction.
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Agricultural project management Feeds & feeding.
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Crop waste utilization & Hydroponic fodder solutions.
          </p>
        </div>
      </div>
      <div class="row q-mt-sm">
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="q-py-xl text-center">
              <q-icon color="primary" name="ion-cog" style="font-size: 3em" />
              <div class="text-body1 text-white my-font-poppins-bold">
                Operations & Management of Agriculture Farms
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                We use our wealth of knowledge and experience to produce and
                sell to the local and international markets.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="q-py-xl text-center">
              <q-icon color="primary" name="ion-apps" style="font-size: 3em" />
              <div class="text-body1 text-white my-font-poppins-bold">
                Industrial Facilities and Logistic Centers
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Food processing technologies, advanced dairy and meat
                production, automated hatcheries, slaughterhouses, flour mills,
                feed plants and packing houses are part of our agro-industrial
                capabilities.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                color="primary"
                name="ion-locate"
                style="font-size: 3em"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Agriculture Guidance and Training
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Conducting professional training seminars (agronomy and
                livestock) for local farmers and creating a training concept to
                secure long-term steady increase in agricultural product.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card bg-secondary">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                color="primary"
                name="ion-school"
                style="font-size: 3em"
              />
              <div class="text-body1 text-white my-font-poppins-bold">
                Agriculture R&D
              </div>
              <div class="text-subtitle2 text-white my-font-poppins-light">
                Using our in-house technology and know-how to create innovative
                agro-farming and livestock research stations and laboratories to
                forecast the future of agriculture.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="bg-secondary">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white">Range of Products</span>
      </p>
      <p class="text-center q-px-xl">
        <span class="my-font-poppins-light text-white">
          Nomavart interests range from crop to Livestock farming. In line with
          its vision, the integration of both farming systems in rural
          communities will dramatically increase overall benefits to all players
          in any of the products value chain.
        </span>
      </p>
      <div class="row q-mt-sm q-mx-xl">
        <div class="col q-ma-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-white
            "
          >
            Livestock farming
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Cattle/ Dairy Cow (Products Includes Milk and Meat).
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Goat (Products Includes Milk and Meat).
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Chicken (Products Includes Eggs and Chicken Meat).
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Pig Meat.
          </p>
        </div>
        <div class="col q-ma-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-white
            "
          >
            Crops farming
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Forage (Hybrid Napier grass).
          </p>
          <p class="text-white">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Maize (Corn).
          </p>
        </div>
      </div>
    </section>

    <!--Footer Section-->
    <section class="bg-secondary">
      <q-separator class="bg-grey-9 q-px-xl" />
      <div class="q-pa-xl text-white my-font-poppins-regular">
        <p class="text-h6 text-center my-font-poppins-bold">
          The Goal is Simple: to have a global standard platform for integrated
          rural farming system.
        </p>
        <div class="row justify-center q-mb-md">
          <q-btn
            @click="$router.push('/')"
            no-caps
            outline
            flat
            class="text-white bg-primary q-mr-md q-ma-sm"
            icon-right="arrow_right"
            label="Get Started"
          />
          <q-btn
            @click="$router.push('/')"
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
            <!-- <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/about')"
            >
              About Us
            </div> -->
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 text-bold">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/')"
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
              Head Office: No.1, Shehu Laminu Road Unguwar Rimi GRA, Kaduna,
              Nigeria
            </div>
            <div class="text-body2 q-mt-md">contact@nomavart.com</div>
            <div class="text-body2 q-mt-md">Tel: 08078372110</div>
            <div class="text-body2 q-mt-md">Tel: 08037861576</div>
          </div>
        </div>
        <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
        <div class="text-caption text-grey-6">
          © 2021 NOMAVART. All rights reserved.
        </div>
        <div class="text-caption text-grey-6">By Greysoft© Technologies.</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 1,
    showAnimationFor: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
    },
  }),
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    },
  },
  computed: {
    screenRatioHeading() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "text-h4";
      } else return "text-h5";
    },
  },
};
</script>

<style lang="scss">
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.custom__header-bg {
  background: linear-gradient(
      to right,
      rgba(24, 28, 39, 0.9),
      rgba(24, 28, 39, 0.6)
    ),
    url("/images/header1.jpg");
  // background: url("/images/greenplantdark.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  height: calc(100vh - 66px);
  width: 100%;
}
.custom__card-pointer:hover {
  cursor: pointer;
  color: white !important;
  background-color: #52af50 !important;
}
.custom__heading-green::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: rgb(139, 195, 74);
  content: " ";
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
