<template>
  <div>
    <header class="custom__header-bg ">
      <div class="wrapper container custom__header-bg  row justify-start  items-center q-px-xl">
        <div class="col-md-6 col-sm-12 col-xs-12 ">
        <h1
          class="text-white head text-h1 my-font-poppins-extraBold"
          :class="screenRatioHeading"
        >
          At <span class="text-warning">Nomavart</span> , we are driven by
          the wealth that our projects bring to the local <br />
          communities and to our clients.
        </h1>
        <h3 class="text-subtitle1 text-h3 head-h3 text-white my-font-poppins-regular gt-sm">
          From project inception we already feel connected <br />
          to the community and the environment <br />
          in which the project is about to be placed.
        </h3>
        <q-btn
          @click="$router.push('/about')"
          no-caps
          outline
          flat
          
          size="large"
          class="text-primary bt bg-white q-i my-font-poppins-light"
          icon-right="ion-arrow-round-forward"
          label="Get Started Now"
        />
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-carousel
          animated
          v-model="slide"
          infinite
          
          arrows
          thumbnails
          transition-prev="slide-right"
          transition-next="slide-left"
          
        >
          <q-carousel-slide :name="1" img-src="/images/slide1.jpg" />
          <q-carousel-slide :name="2" img-src="/images/slide2.jpg" />
          <q-carousel-slide :name="3" img-src="/images/slide3.jpg" />
          <!-- <q-carousel-slide :name="4" img-src="/images/slide4.jpg" /> -->
        </q-carousel>
        <!-- <q-img height="400px" src="/images/1cow.svg" contain></q-img> -->
      </div>

      </div>
      
    </header>
    <Aboutt />
    <section class="bg-white q-py-xl">
      <div class="row container">
        <div class="col-md-4 pad col-sm-12 col-xs-12 q-px-xl q-py-md">
          <q-card class="my-card car q-my-md bg-white">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid i text-center q-mb-xl"
                color="info "
                name="ion-glasses"
                style="font-size: 6em"
              />
              <div style="font-size: 2em"
                class="text-body1 text-center heyy q-my-md text-info my-font-poppins-bold"
              >
                Vision
              </div>
              <div style="font-size: 1.2em"
                class="text-subtitle2 hello text-center text-black my-font-poppins-light"
              >
                To have a global standard platform for integrated rural farming
                system.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 pad q-px-xl q-py-md">
          <q-card class="my-card q-my-md bg-white car">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid i text-center q-mb-xl"
                color="info "
                name="ion-rocket"
                style="font-size: 6em"
              />
              <div style="font-size: 2em"
                class="text-body1 text-center heyy q-my-md text-info my-font-poppins-bold"
              >
                Mission
              </div>
              <div style="font-size: 1.2em"
                class="text-subtitle2 hello text-center text-black my-font-poppins-light"
              >
                Create an effective symbiotic relationship between crop and
                livestock farming within rural communities.
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12 pad q-px-xl q-py-md">
          <q-card class="my-card q-my-md bg-white car">
            <q-card-section class="q-py-xl text-left">
              <q-icon
                class="wid i text-center q-mb-xl"
                color="info "
                name="ion-checkmark-circle-outline"
                style="font-size: 6em"
              />
              <div style="font-size: 2em"
                class="text-body1 text-center heyy q-my-md text-info my-font-poppins-bold"
              >
                Core Values: (TIE)
              </div>
              <div class="text-subtitle2 text-black my-font-poppins-light">
                <div style="font-size: 1.2em"
                  class="text-subtitle2 hello text-center text-black my-font-poppins-light"
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
    <section class="statement">
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
        <div class="col-md-6 col-sm-12 col-xs-12 pad q-pt-xl q-px-xl">
          <q-img class="q-mb-lg" src="/images/ayok.jpg" cover></q-img>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 pad q-px-xl q-mb-xl">
          <!-- <p class="text-h6 my-font-poppins-light text-primary">
            Getting to know us
          </p> -->
          <div style="font-size: 2.5em"
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
            At Nomavart, we are driven by the wealth that our projects bring to
            the local communities and to our clients. From project inception we
            already feel connected to the community and the environment in which
            the project is about to be placed.
          </p>
          <p style="font-size: 1.2em" class="text-white">
            We feel that besides the business, we are there for the people that
            will benefit from the project, both directly and indirectly,
            starting from our client and its personnel up to the service
            suppliers and the consumers.
          </p>
          <p style="font-size: 1.2em" class="text-white">
            This is why corporate social responsibility is always an unstated
            key deliverable in all our projects.
          </p>
          <p style="font-size: 1.2em" class="text-white">Dr. Celestine Ayok</p>
        </div>
      </div>
    </section>
    <section class="q-py-xl cert">
      <div style="font-size: 2.5em" class="text-center text-h4 q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span class="my-font-poppins-bold text-white ">Core Team</span>
      </div>
      <p class="text-center q-mt-lg q-px-xl pad container">
        <span class="my-font-poppins-light q-my-lg text-white" style="font-size: 1.2em">
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
      <div class="row container q-mt-xl">
        <div class="col-md-4 col-sm-12 pad q-my-lg col-xs-12 q-px-xl q-py-md">
          <q-card class="bg-white cer q-pa-md" >
            <q-img class="core-img" cover height="" src="/images/ayok.jpg" />
            <q-card-section>
              <div style="font-size: 1.5em"
                class="text-body2 text-positive heyy q-mb-sm text-left my-font-poppins-light"
              >
                Dr. Ayok Celestine Nache
              </div>
              <div style="font-size: 1.2em"
                class=" text-weight-bold
                  text-caption text-positive hello text-left
                  my-font-poppins-bold
                "
              >
                Board Chairman
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 q-my-lg col-xs-12 pad q-px-xl q-py-md">
          <q-card class="bg-white cer q-pa-md">
            <q-img class="core-img" cover height="" src="/images/bargo.jpg" />
            <q-card-section>
              <div style="font-size: 1.5em"
                class="text-body2 text-positive heyy q-mb-sm text-left my-font-poppins-light"
              >
                Engr. Iliya Bagro Duniya
              </div>
              <div style="font-size: 1.2em"
                class="
                  text-caption text-weight-bold hello text-positive text-left
                  my-font-poppins-bold
                "
              >
                Chief Executive Officer
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-sm-12 q-my-lg col-xs-12 pad q-px-xl q-py-md">
          <q-card class="bg-white cer q-pa-md" >
            <q-img class="core-img" cover height="" src="/images/buba.jpg" />
            <q-card-section>
              <div style="font-size: 1.5em"
                class="text-body2 text-positive heyy q-mb-sm text-left my-font-poppins-light"
              >
                Mr. Yusuf Buba
              </div>
              <div style="font-size: 1.2em"
                class="
                  text-caption text-positive hello text-left text-weight-bold
                  my-font-poppins-bold
                "
              >
                Finance Manager
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="btnn text-center q-pa-md">
        <q-btn class="q-px-xl q-py-sm btnnn bg-primary text-white">View More</q-btn>

      </div>
      
    </section>
    <section class="bg-accent q-py-xl">
      <p  class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span style="font-size: 1.5em" class="my-font-poppins-bold text-positive under">Core Services</span>
      </p>
      <p class="text-center container p-width q-my-lg q-pb-xl pad q-px-xl">
        <span style="font-size: 1.2em" class="my-font-poppins-light text-black">
          Our core competence is in livestock value chain and our team of
          professionals with over 15-25 years’ experience are fully involved in
          the entire livestock value chain having served as consultants to farms
          like Jamil Dairy Farms Kaduna, Majestik Dairy Farm Jigawa, Maizube
          Dairy Farm Minna, L&Z Dairy Farm Kano, Integrated Dairy Farm (Farm
          Fresh) Vom Jos, Obudu Cattle Ranch etc.
        </span>
      </p>
      <div class="row container q-mt-xl q-pb-xl">
        
        <div class="col-md-6 q-mb-xl col-sm-12 pad col-xs-12 q-px-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-positive
            "
          >
            Our Expertise
          </p>
          <p style="font-size: 1.2em" class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2.5em"
            />
            Turnkey dairy and feedlot farms dairy processing and equipment.
          </p>
          <p style="font-size: 1.2em" class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2.5em"
            />
            Pasture establishment, hay and silage making.
          </p>
          <p style="font-size: 1.2em" class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2.5em"
            />
            Capacity building in livestock management Nutrition, health and
            reproduction.
          </p>
          <p style="font-size: 1.2em" class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2.5em"
            />
            Agricultural project management Feeds & feeding.
          </p>
          <p style="font-size: 1.2em" class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2.5em"
            />
            Crop waste utilization & Hydroponic fodder solutions.
          </p>
        </div>

        <div class="col-md-6 images col-sm-12 coo col-xs-12 q-px-xl">
          <q-img class="imgg" src="/images/goat.jpg" cover></q-img>
          <q-img class="imgg" src="/images/goa.png" cover></q-img>
          <q-img class="imgg" src="/images/goa2.png" cover></q-img>
        </div>
      </div>
      <div class="row container q-py-lg q-mt-xl">
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-cardd cer hey bg-white">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                class="q-mb-lg i"
                color="primary"
                name="ion-cog"
                style="font-size: 3em"
              />
              <div style="font-size: 1.5em" class="text-body1 heyy q-my-lg text-black my-font-poppins-bold">
                Operations & Management of Agriculture Farms
              </div>
              <div style="font-size: 1em" class="text-subtitle2 hello text-black my-font-poppins-light">
                We use our wealth of knowledge and experience to produce and
                sell to the local and international markets.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card cer hey bg-white">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                class="q-mb-lg i"
                color="primary"
                name="ion-apps"
                style="font-size: 3em"
              />
              <div style="font-size: 1.5em" class="text-body1 heyy text-black q-my-lg my-font-poppins-bold">
                Industrial Facilities and Logistic Centers
              </div>
              <div style="font-size: 1em" class="text-subtitle2 hello text-black my-font-poppins-light">
                Food processing technologies, advanced dairy and meat
                production, automated hatcheries, slaughterhouses, flour mills,
                feed plants and packing houses are part of our agro-industrial
                capabilities.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card hey cer bg-white">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                class="q-mb-lg i"
                color="primary"
                name="ion-locate"
                style="font-size: 3em"
              />
              <div style="font-size: 1.5em" class="text-body1 heyy text-black q-my-lg my-font-poppins-bold">
                Agriculture Guidance and Training
              </div>
              <div style="font-size: 1em" class="text-subtitle2 hello text-dark my-font-poppins-light">
                Conducting professional training seminars (agronomy and
                livestock) for local farmers and creating a training concept to
                secure long-term steady increase in agricultural product.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 q-px-md q-py-md">
          <q-card class="my-card cer hey bg-white">
            <q-card-section class="q-py-xl text-center">
              <q-icon
                class="q-mb-lg i"
                color="primary"
                name="ion-school"
                style="font-size: 3em"
              />
              <div style="font-size: 1.5em" class="text-body1 heyy q-my-lg text-black my-font-poppins-bold">
                Agriculture R&D
              </div>
              <div style="font-size: 1em" class="text-subtitle2 hello text-black my-font-poppins-light">
                Using our in-house technology and know-how to create innovative
                agro-farming and livestock research stations and laboratories to
                forecast the future of agriculture.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="ranger q-py-xl">
      <p class="text-center q-pt-xl q-pb-sm" :class="screenRatioHeading">
        <span style="font-size: 1.2em" class="my-font-poppins-bold text-white under"
          >Range of Products</span
        > 
      </p>
      <p class="text-center padd q-px-xl">
        <span style="font-size: 1.2em" class="my-font-poppins-light text-white">
          Nomavart interests range from crop to Livestock farming. In line with
          its vision, the integration of both farming systems in rural
          communities <br> will dramatically increase overall benefits to all players
          in any of the products value chain.
        </span>
      </p>
      <div class="row container range q-py-xl q-mt-xl">
        <div class="col-md-6 range-left  col-sm-12 col-xs-12 padd q-pa-xl">
          <div class="hold q-py-xl">
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
            <p class="text-white par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Cattle (Products Include Milk and Meat).
            </p>
            <p class="text-white par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Goat (Products Include Milk and Meat).
            </p>
            <p class="text-white par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Chicken (Products Include Eggs and Chicken Meat).
            </p>
            <p class="text-white par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Piggery (Products Include Pork and Sausage).
            </p>
          </div>

        
        </div>
        <div class="col-md-6 range-right col-sm-12 col-xs-12 q-pa-xl">
          <div class="ima">
            <img src="/images/goa.png" alt="">
            <img src="/images/goa.png" alt="">
            <img src="/images/goa.png" alt="">
            <img src="/images/goa.png" alt="">
            <img src="/images/goa.png" alt="">
            <img src="/images/goa.png" alt="">
            <!-- <q-img class="imgg" src="/images/goa2.png" cover></q-img> -->
          </div>
          <!-- <p
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
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Forage (Hybrid Napier grass).
          </p>
          <p class="text-white">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Maize (Corn).
          </p>
          <p class="text-white">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Soybeans.
          </p> -->
        </div>
      </div>
    </section>

    <section class="section-crop q-mt-xl q-py-xl">
      <div class="row container cen q-mt-sm q-pb-xl">
        <div class="col-md-6 imagess col-sm-12 col-xs-12 pad q-px-xl">
          <q-img class="imggs" src="/images/crop.png" cover></q-img>
          <q-img class="imggs" src="/images/rice.png" cover></q-img>
          <q-img class="imggs" src="/images/corn.png" cover></q-img>
        </div>
        
        <div class="col-md-6 col-sm-12 col-xs-12 pad q-px-xl">
          <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-positive
            "
          >
            Crops farming
          </p>
          <p class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Forage (Hybrid Napier grass).
          </p>
          <p class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Maize (Corn).
          </p>
          <p class="text-black par">
            <q-icon
              class="for"
              color="primary"
              name="ion-checkmark-circle-outline"
              style="font-size: 2em"
            />
            Soybeans.
          </p>
        </div>

        
      </div>
    </section>

    <Newsletter/>
    <Goal/>
    <Touch/>

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
            <span class="q-pl-sm text-white" >Check Mail</span>
          </q-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useMeta } from "quasar";
import Aboutt from './Aboutt.vue'
import Newsletter from './Newsletter.vue'
import Goal from './Goal.vue'
import Touch from "./Touch.vue";

const metaData = {
  // sets document title
  title: "Index Page",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - Nomavart`,

  // meta tags
  meta: {
    description: {
      name: "description",
      content:
        "Nomavart is a dynamic agricultural company of qualified and experienced crop and Livestock Farmers that collaborates with local populations, engaging them in provincial agricultural operations and projects to create job opportunities during projects while fostering integrated farming system in each rural community. "
    },
    keywords: {
      name: "keywords",
      content:
        "Nomavart, Iiliya Duniya, Ayok Celestine,  Livestock Nigeria, Agriculture, Agribusiness Nigeria"
    },
    equiv: { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" }
  }
};
export default {
  components:{
    Aboutt, Newsletter, Goal, Touch
  },
  data: () => ({
    slide: 1,
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

<style scoped lang="scss">
.visible {
  visibility: visible;
}

.btnnn{
  background: linear-gradient(243.58deg, #33CC33 -17.03%, #006633 106.08%) !important;

}

.cert{
background: url("/images/ilu.png"),linear-gradient(180deg, #0A1129 0%, #19213C 100%) !important;
opacity: 0.95 !important;
background-repeat: no-repeat !important;
background-size: cover !important;
background-position: center !important;
background-blend-mode: overlay;
width: 100%;
}

.statement{
background: linear-gradient(180deg, #07A007 0%, #006633 71.84%);
padding-top: 1rem;
 
}
.cer{
  min-height: 350px !important;
}

.cer .core-img{
height: 320px !important;
}

.cer:hover{
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%) !important; 
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1) !important;
   transition:  all .5s ease-in-out !important;
}

.car:hover{
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%) !important; 
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1) !important;
   transition:  all .5s ease-in-out !important;
 

}

.cer:hover .heyy, .cer:hover .hello, .cer:hover .i{
  color: #fff !important;
}
.car{
 transition:  all .5s ease-in-out;
}

.car:hover .heyy, .car:hover .hello, .car:hover .i{
  color: #fff !important;
}
.invisible {
  visibility: hidden;
}
.custom__header-bg {
  
  background: linear-gradient(
      to right,
      rgba(0, 102, 51, .55),
      rgba(24, 28, 39, 0.6)
    ),
    url("/images/header1.jpg"), no-repeat;
  // background: url("/images/greenplantdark.jpg");
  background-size: cover;
  // background-repeat: no-repeat;
  background-attachment: fixed;
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

.images{
  position: relative;
  // height: 100%;
}

.images .imgg{
  object-fit: contain !important;
}

.images .imgg:nth-child(1){
  width: 50%;
  height: 70%;
  position: none;
  left: -10%;
  top: 10%;
}
.images .imgg:nth-child(2){
  width: 50%;
  height: 60%;
  position: absolute;
  right: 2%;
  top: -10%;
}
.images .imgg:nth-child(3){
  width: 50%;
  height: 60%;
  position: absolute;
  right: 2%;
  bottom: -15%;
}

.images::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 400px;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  // top: 5%;
}

.imagess{
  position: relative;
  margin-top: 2rem;
  margin-bottom: 4rem;
  // height: 100%;
}

.imagess .imggs{
  object-fit: contain !important;
}


.imagess .imggs:nth-child(1):hover{
  
  position: relative;
  z-index: 4;
  
}

.imagess .imggs:nth-child(1){
  width: 80%;
 
}
.imagess .imggs:nth-child(2){
  width: 50%;
  height: 40%;
  position: absolute;
  right: 2%;
  top: -10%;
  object-fit: contain;
  border-radius: 8px;
}
.imagess .imggs:nth-child(3){
  width: 50%;
  height: 40%;
  position: absolute;
  right: 2%;
  bottom: -15%;
  border-radius: 8px;
}

.my-cardd{
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%) !important;
box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1) !important;
color: #fff !important;
}
.my-cardd .heyy,.my-cardd .hello, .my-cardd .i{
color: #fff !important;
}

.ima {
  // background-color: #fff;
  position: relative;
  left: -20%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: .25rem;
  width: 100%;
}

.ima img{
  width: 200px;
  height: 200px;
  border-radius: 8px;
}

.range-left{
   background: linear-gradient(180deg, #33CC33 0%, #006633 100%) !important;
box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1) !important;
}

.range{
  position: relative;

}

.ranger{
  background: url("/images/bg-ilu.png"),linear-gradient(180deg, #0A1129 0%, #19213C 100%) !important;
opacity: 0.95 !important;
background-repeat: no-repeat !important;
background-size: cover !important;
background-position: center !important;
background-blend-mode: overlay;
width: 100%;
}


@media(max-width:1200px){
  .q-carousel {
    background-color: #fff;
    height: 320px !important;
}


.images::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  // top: 5%;
}
}
@media(max-width:900px){
  .q-carousel {
    background-color: #fff;
    height: 320px !important;
}

.images::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  // top: 5%;
}


}

@media(max-width:350px){
  .q-carousel {
    background-color: #fff;
    height: 250px !important;
}




}

@media(max-width:700px){

.q-carousel {
    background-color: #fff;
    height: 320px !important;
}

.head{
  font-size: 1.3rem;
}
.bt{
  font-size: small !important;
}

.pad{
  padding: 0 !important;
}

.padd{
  padding: 0 1rem !important;
}

.wrapper{
  padding: 0 !important;
}

.par{
  display: flex;
}

.coo{
  margin-top: 50px;
}

.images::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  // top: 5%;
}

.images .imgg:nth-child(1){
  width: 100%;
  height: 50%;
  position: relative;
  top: -15%;
  left: 0 !important;
  object-fit: contain;
}
.images .imgg:nth-child(2){
  width: 50%;
  height: 50%;
  position: relative;
  bottom: 0;
  left: -10%;
}
.images .imgg:nth-child(3){
  width: 50%;
  height: 60%;
  position: relative;
  right: -10%;
  bottom: 10%;
}
.ima {
  // background-color: #fff;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  left: 0%;
}
.ima img{
  width: 100%;
  height: 200px;
  border-radius: 8px;
}
}


@media(max-width:400px){
 .ima {
  // background-color: #fff;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  left: 0%;
}

.ranger{
  background: url("/images/ilu.png"),linear-gradient(180deg, #0A1129 0%, #19213C 100%) !important;

}
}

@media(max-width:350px){
  .q-carousel {
    background-color: #fff;
    height: 250px !important;
}




}

</style>
