<template>
  <div>
    <Hero />
    <section class="q-pt-lg bg-white">
      <p
        style="font-size:2.5rem"
        class="text-center q-pt-xl q-pb-sm"
        :class="screenRatioHeading"
      >
        <span class="my-font-poppins-bold text-primary">About Nomavart</span>
      </p>
      <p class="text-center q-px-sm p-width">
        <span
          style="font-size:1.2rem"
          class="my-font-poppins-light  text-black p-width"
          >Established in 1999, Nomavart is a dynamic agricultural company of
          qualified and experienced crop and Livestock Farmers registered under
          the Companies and Allied Matters Decree of 1990 in Nigeria – RC No.
          366346 Nomavart collaborates with local populations, engaging them in
          provincial agricultural operations and projects by creating job
          opportunities during projects while fostering integrated farming
          system in each rural community.
        </span>
      </p>
      <!-- <div class="row q-mt-sm container cen">
        <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xl">
          <q-img height="400px" src="/images/ayok.jpg" contain></q-img>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl">
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
      </div> -->

      <section class="  statement">
        <!-- <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white under"
          >About Nomavart</span
        >
      </p>
      <p class="text-center container q-px-xl">
        <span class="my-font-poppins-light text-white"
          >Established in 1999, Nomavart is a dynamic agricultural company of
          qualified and experienced crop and Livestock Farmers registered under
          the Companies and Allied Matters Decree of 1990 in Nigeria – RC No.
          366346 Nomavart collaborates with local populations, engaging them in
          provincial agricultural operations and projects by creating job
          opportunities during projects while fostering integrated farming
          system in each rural community.
        </span>
      </p> -->
        <div class="row cen container q-mt-sm">
          <div class="col-md-6 col-sm-12 col-xs-12 pad q-pt-xl date q-px-xl">
            <q-img class="" src="/images/ayok.jpg" cover></q-img>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12 pad q-px-xl q-mt-lg date q-mb-xl">
            <!-- <p class="text-h6 my-font-poppins-light text-primary">
            Getting to know us
          </p> -->
            <div
              style="font-size: 2.5em"
              class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-white
            "
            >
              Chairman's Statement
            </div>
            <p style="font-size: 1.2em" class="text-white">
              At Nomavart, we are driven by the wealth that our projects bring
              to the local communities and to our clients. From project
              inception we already feel connected to the community and the
              environment in which the project is about to be placed.
            </p>
            <p style="font-size: 1.2em" class="text-white">
              We feel that besides the business, we are there for the people
              that will benefit from the project, both directly and indirectly,
              starting from our client and its personnel up to the service
              suppliers and the consumers.
            </p>
            <p style="font-size: 1.2em" class="text-white">
              This is why corporate social responsibility is always an unstated
              key deliverable in all our projects.
            </p>
            <p style="font-size: 1.2em" class="text-white">
              Dr. Celestine Ayok
            </p>
          </div>
        </div>
      </section>
    </section>
    <section class="q-py-xl bgg">
      <div
        class="row container
      "
      >
        <div class="col-md-4 col-sm-12 col-xs-12 date q-px-xl q-my-lg q-py-lg">
          <q-card class="my-card bg-white">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid text-center q-mb-xl"
                color="primary"
                name="ion-glasses"
                style="font-size: 5em"
              />
              <div
                style="font-size: 2em"
                class="text-body1 q-my-md text-center text-primary my-font-poppins-bold"
              >
                Vision
              </div>
              <div
                style="font-size: 1.2em"
                class="text-subtitle2 text-center text- black my-font-poppins-light"
              >
                To have a global standard platform for integrated rural farming
                system.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 date q-my-lg q-px-xl q-py-lg">
          <q-card class="my-card bg-white">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid text-center q-mb-xl"
                color="primary"
                name="ion-rocket"
                style="font-size: 5em"
              />
              <div
                style="font-size: 2em"
                class="text-body1 text-center q-my-md text-primary my-font-poppins-bold"
              >
                Mission
              </div>
              <div
                style="font-size: 1.2em"
                class="text-subtitle2 text-center text-black my-font-poppins-light"
              >
                Create an effective symbiotic relationship between crop and
                livestock farming within rural communities.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-4 col-sm-12 date col-xs-12 q-my-lg q-px-xl q-py-lg">
          <q-card class="my-card bg-white">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid text-center q-mb-xl"
                color="primary"
                name="ion-checkmark-circle-outline"
                style="font-size: 5em"
              />
              <div
                style="font-size: 2em"
                class="text-body1 text-center text-primary my-font-poppins-bold"
              >
                Core Values: (TIE)
              </div>
              <div
                class="text-subtitle2 q-my-md text-black my-font-poppins-light"
              >
                <div
                  style="font-size: 1.2em"
                  class="text-subtitle2 text-center text-black my-font-poppins-light"
                >
                  Teamwork, <br />
                  Integrity &
                  <br />
                  Excellence
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="heuu">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white"
          >Board Members and Consultants</span
        >
      </p>
      <p class="text-center p-width  q-px-sm">
        <span class="my-font-poppins-light p-width text-white">
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
      <div class="row q-mt-lg q-py-xl container">
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-xl date q-py-md">
          <q-card class="bg-white q-pa-md hey">
            <q-img class="board-img" cover src="/images/ayok.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-positive text-center my-font-poppins-light"
              >
                Dr. Celestine Ayok
              </div>
              <div
                class="
                  text-caption text-primary q-my-sm text-center
                  my-font-poppins-bold
                "
              >
                Board Chairman with over 28 years in Livestock management
                nutrition and management.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-my-lg date q-px-xl">
          <q-card class="bg-white q-pa-md hey">
            <q-img class="board-img" cover src="/images/bargo.jpg" />
            <q-card-section>
              <div
                class="text-body2 q-my-sm text-positve text-center my-font-poppins-light"
              >
                Engr. Iliya Duniya
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-bold
                "
              >
                Chief Executive Officer with over 39 years’ experience in Food,
                Petroleum, Chemical & Agricultural Industries.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-my-lg date q-px-xl q-py-md">
          <q-card class="bg-white q-pa-md hey">
            <q-img class="board-img" cover src="/images/AliAngo.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-positive q-my-sm text-center my-font-poppins-light"
              >
                Mr. Ali S. Ango
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-bold
                "
              >
                Director, Season accountant and Banker with vast experience in
                Finance Management
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 date q-my-lg q-px-xl q-py-md">
          <q-card class="bg-white q-pa-md hey">
            <q-img class="board-img" cover src="/images/Natsa.jpg" />
            <q-card-section>
              <div
                class="text-body2 text-positive q-my-sm text-center my-font-poppins-light"
              >
                Mr. Natsa Ishaya
              </div>
              <div
                class="
                  text-caption text-primary text-center
                  my-font-poppins-bold
                "
              >
                Accountant with over 7 years of working experience in the
                industry and private practice. These experiences have been in
                accounting, taxation, auditing and consultancy.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="bg-white pas q-pb-xl">
      <div class="row container flexx cen q-pt-lg q-mb-xl">
        <div class="col-md-6 col-sm-12 date col-xs-12 q-px-xl">
          <q-img width="100%" height="100%" src="/images/chicken.jpg" cover></q-img>
        </div>
        <div class="col-md-6 col-sm-12 date col-xs-12 q-px-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-primary
            "
          >
            Projects
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            GEMS 1 DFID (UKAID) 2013 -2015 FEED FINISHING CONSULTANT.
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            COMMERCIAL AGRIC. DEVELOPMENT PROGRMME WORLD BANK ASST. (2013 -
            2014).
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            SHEEP & GOAT VALUE CHAIN AGRIC. TRANSFORMATION AGENDA FEDERAL
            MINISTRY OF AGRICULTURE AND NATURAL RESOURCES ABUJA (2013 – 2015).
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            IFDC ON SMALL HOLDER PERI URBAN DAIRY CATTLE PRODUCTION TRAINING
            (2013).
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            PRESIDENTIAL INITIATAITE OF THE FEDERAL GOV. AGRIC SCHOOL PROJECT ON
            SHEEP & GOAT FATTENING PROGRAMME IN KANO, GOMBE, BAUCHI JOS AND
            AKWA-IBOM (2014).
          </p>
        </div>
      </div>
      <div class="row q-mb-xl q-mt-xl cen container">
        <div class="col-md-6 col-sm-12 date col-xs-12 q-px-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-primary
            "
          >
            Projects
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            DFID (UKAID) DAIRY VALUE CHAIN BUSINESS INNOVATION FACILITY(BIF)
            (AUG 2015- DATE)
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            LIVESTOCK PRODUCTION INTERVENTIONS AT PROPCOM MAIKARFI – PALLADIUM
            GROUP (DFID FUNDED) – SEPTEMBER, 2015 – JUNE 2018
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            MEAT AND LEATHER INTERVENTION – PALLADIUM GROUP (GRM-GEMS1 – DFID
            FUNDED) – JANUARY 2011 – AUGUST 2015
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            BUSINESS DEVELOPMENT SERVICES IN MSMES & INTEGRATED SOIL FERTILITY
            MANAGEMENT (ISFM) INTERVENTION – INTERNATIONAL FERTILIZER
            DEVELOPMENT COMPANY (IFDC 1000S+ - USAID FUNDED) NIGERIA - NOVEMBER
            2006 – DECEMBER 2010
          </p>
        </div>
        <div class="col-md-6 col-sm-12 date col-xs-12 q-px-xl">
          <q-img width="100%" height="100%" src="/images/goat.jpg" cover></q-img>
        </div>
      </div>
      <div class="row flexx  cen q-mt-sm container">
        <div class="col-md-6 col-sm-12 col-xs-12 date q-px-xl">
          <q-img width="100%" height="100%" src="/images/cow.jpg" cover></q-img>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 date q-px-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-primary
            "
          >
            Projects
          </p>

          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            KADUNA STATE GOVERNMENT ON LIVESTOCK ACTIVITIES & GRAZING RESERVES
            IMPLEMENTATION (JUNE 2016 - DATE).
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            NIRSAL PLC (CENTRAL BANK SUBSIDIARY) ON LIVESTOCK (2017 TO DATE).
          </p>
          <p
            class="
              text-h6
              my-font-poppins-bold
              custom__heading-green
              text-black
            "
          >
            Other Experiences
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Consultancy in Livestock development and general Agriculture.
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Exotic Pig breeding and production.
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Participation in ILRI’s design workshop in Ethiopia. Our
            contribution covered the meat, poultry, piggery and dairy value
            chains.
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Participation as critical stakeholder to review the World Bank
            sponsored Livestock project by the Nigerian Federal Ministry of
            Agriculture and Rural Development (FMARD).
          </p>
          <p class="text-black">
            <q-icon
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Anchored ruminant fattening and pig production as an economic
            empowerment enterprise for Zango Kataf Local Government, Kaduna.
          </p>

          <q-btn
            @click="$router.push('/project')"
            no-caps
            outline
            flat
            class="text-white bg-primary q-mb-lg q-mr-md"
            icon-right="arrow_right"
            label="Read More"
          />
        </div>
      </div>
    </section>
    <!--Footer Section-->
    <section class="bg-warning">
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
        </div>
        <div class="row footer-row">
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <q-img class="imggs" src="/images/logog.png" cover></q-img>
            <!-- <div class="text-body1 text-bold">About</div>
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
            </div> -->
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-lg my-font-nav">
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
              @click="$router.push('/team')"
            >
              Team
            </div>
            <div
              class="text-body2 q-mt-md cursor-pointer"
              @click="$router.push('/project')"
            >
              Projects
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-lg my-font-nav">
            <div class="text-body1 text-bold my-font">Social Media</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="for"
                name="ion-logo-facebook"
                style="font-size: 2em"
              />
              <a
                style="text-decoration: none"
                class="text-white"
                href="https://www.facebook.com/nomavart/"
                ><span class="q-ml-sm">Facebook</span></a
              >
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="for"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              />
              <a
                style="text-decoration: none"
                class="text-white"
                href="http://www.linkedin.com/in/nomavart"
                ><span class="q-ml-sm">Linkedin</span></a
              >
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-lg my-font-nav">
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
        <div class="text-caption text-center text-white">
          © 2021 NOMAVART. All rights reserved.
        </div>
        <div class="text-caption text-center text-white">
          By Greysoft© Technologies.
        </div>
        <div class="text-caption text-center text-white">
          <q-btn
            class="q-mt-sm text-primary"
            no-caps
            small
            outline
            icon="mail"
            type="a"
            href="https://www.nomavart.com:2096/"
            target="_blank"
          >
            <span class="q-pl-sm text-white">Check Mail</span>
          </q-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
export default {
  components: {
    Hero
  },
  data: () => ({
    slide: 1,
    slide1: "style",
    showAnimationFor: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false
    }
  }),
  methods: {
    isViewableNow(isVisible, entry, section) {
      this.showAnimationFor[section] = isVisible;
    }
  },
  computed: {
    screenRatioHeading() {
      let size = this.$q.screen.name;
      if (size == "md" || size == "lg" || size == "xl") {
        return "text-h4";
      } else return "text-h5";
    }
  }
};
</script>

<style lang="scss">
.statement {
  background: linear-gradient(180deg, #07a007 0%, #006633 71.84%);
  padding-top: 1rem;
  margin-top: 4rem;
}
.pas{
  padding-bottom: 48px  !important;
}
.bgg {
  background: linear-gradient(180deg, #0a1129 0%, #19213c 100%) !important;
  opacity: 0.95 !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  background-blend-mode: overlay;
  width: 100%;
}
.heuu {
  background: url("/images/bg-ilu.png"),
    linear-gradient(180deg, #0a1129 0%, #19213c 100%) !important;
  opacity: 0.95 !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  background-blend-mode: overlay;
  width: 100%;
}
.custom__header-bg-v1 {
  //   background-size: cover;
  //   background-attachment: fixed;
  height: 120px;
  background-size: cover;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/about1.jpg");
  background-size: contain;
  background-attachment: fixed;
  // background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M516.56 530.95L581.51 568.45L581.51 643.45L516.56 680.95L451.6 643.45L451.6 568.45zM841.32 418.45L906.28 455.95L906.28 530.95L841.32 568.45L776.37 530.95L776.37 455.95zM1166.09 80.95L1231.05 118.45L1231.05 193.45L1166.09 230.95L1101.14 193.45L1101.14 118.45zM1296 530.95L1360.95 568.45L1360.95 643.45L1296 680.95L1231.05 643.45L1231.05 568.45zM1425.91 80.95L1490.86 118.45L1490.86 193.45L1425.91 230.95L1360.96 193.45L1360.96 118.45zM1360.96 193.45L1425.91 230.95L1425.91 305.95L1360.96 343.45L1296 305.95L1296 230.95zM1425.91 530.95L1490.86 568.45L1490.86 643.45L1425.91 680.95L1360.96 643.45L1360.96 568.45zM1555.82 80.95L1620.77 118.45L1620.77 193.45L1555.82 230.95L1490.86 193.45L1490.86 118.45z' stroke='rgba(82%2c 175%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M509.06 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM574.01 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM574.01 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM509.06 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM444.1 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM444.1 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM833.82 418.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM898.78 455.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM898.78 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM833.82 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM768.87 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM768.87 455.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1158.59 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1158.59 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1093.64 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1093.64 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.45 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.45 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1223.55 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 305.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 343.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 305.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1288.5 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 530.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1483.36 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1418.41 680.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 643.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1353.46 568.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1548.32 80.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1613.27 118.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1613.27 193.45 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0zM1548.32 230.95 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' fill='rgba(82%2c 175%2c 80%2c 1)'%3e%3c/path%3e%3cpath d='M76.83 513.06L120.14 538.06L120.14 588.06L76.83 613.06L33.53 588.06L33.53 538.06zM423.25 213.06L466.56 238.06L466.56 288.06L423.25 313.06L379.95 288.06L379.95 238.06zM509.86 63.06L553.16 88.06L553.16 138.06L509.86 163.06L466.56 138.06L466.56 88.06zM596.46 213.06L639.76 238.06L639.76 288.06L596.46 313.06L553.16 288.06L553.16 238.06zM639.76 288.06L683.07 313.06L683.07 363.06L639.76 388.06L596.46 363.06L596.46 313.06zM639.76 438.06L683.07 463.06L683.07 513.06L639.76 538.06L596.46 513.06L596.46 463.06zM726.37 -11.94L769.67 13.06L769.67 63.06L726.37 88.06L683.07 63.06L683.07 13.06zM769.67 213.06L812.98 238.06L812.98 288.06L769.67 313.06L726.37 288.06L726.37 238.06zM899.58 -11.94L942.88 13.06L942.88 63.06L899.58 88.06L856.28 63.06L856.28 13.06zM942.88 63.06L986.19 88.06L986.19 138.06L942.88 163.06L899.58 138.06L899.58 88.06zM942.88 363.06L986.19 388.06L986.19 438.06L942.88 463.06L899.58 438.06L899.58 388.06zM986.19 288.06L1029.49 313.06L1029.49 363.06L986.19 388.06L942.88 363.06L942.88 313.06zM1029.49 513.06L1072.79 538.06L1072.79 588.06L1029.49 613.06L986.19 588.06L986.19 538.06zM1116.09 63.06L1159.39 88.06L1159.39 138.06L1116.09 163.06L1072.79 138.06L1072.79 88.06zM1072.79 138.06L1116.09 163.06L1116.09 213.06L1072.79 238.06L1029.49 213.06L1029.49 163.06zM1246 138.06L1289.3 163.06L1289.3 213.06L1246 238.06L1202.7 213.06L1202.7 163.06zM1419.21 438.06L1462.51 463.06L1462.51 513.06L1419.21 538.06L1375.91 513.06L1375.91 463.06z' stroke='rgba(82%2c 175%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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

.imggs {
  animation: zoom 2s infinite;
  animation-delay: 2s;
}

.board-img{
  height: 250px !important;
}

@keyframes zoom {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.55;
    /* transform: scale(1); */
  }
  100% {
    transform: scale(1);
    opacity: 1;
    /* transform: scale(1); */
  }
}

@media(max-width:800px){
  .date{
    padding: 0 !important;
  }

  .flexx{
    display: flex;
    flex-direction: column-reverse;
  }

  .hey{
    min-height: 300px !important;
  }
}
</style>
