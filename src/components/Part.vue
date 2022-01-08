<template>
  <div class="container q-py-xl" id="app">
      <p
            class="
              text-h4
              my-font-poppins-bold
              custom__heading-green
              text-positive
              text-center
            "
          >
            Our Partners
        </p>
    <vue-glide :options="options">
      <vue-glide-slide>
          <div class="carrd">
            <q-img class="rounded-borders carrd-im col-6 full-height" src="/images/nom1.jpg" />
            <!-- <h3>Lorem ipsum dolor sit amet.</h3> -->
            <p style="font-size:1.05rem" class="q-py-md">The Nigerian delegation comprising the poultry association, Nigerian army farms and ranches visited Alphavet which is a leading vetinerary pharmaceuticals manufacturing company.

            - <strong>Székesfehérvár, Homoksor, Hungary.</strong> </p>

          </div>
          
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <div class="carrd">
            <q-img class="rounded-borders carrd-im col-6 full-height" src="/images/nom4.jpg" />
            <!-- <h3>Lorem ipsum dolor sit amet.</h3> -->
            <p style="font-size:1.05rem" class="q-py-md">STE.Tech Bacteria cocktail boosts the imune systems of animals including humans, plants and revitalizes soil health. (Integrated soil fertility)

            - <strong>Kiskunmajsa, Hungary.</strong> 
            </p>

          </div>
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <div class="carrd">
            <q-img class="rounded-borders col-6 carrd-im full-height" src="/images/nom8.jpg" />
            <!-- <h3>Lorem ipsum dolor sit amet.</h3> -->
            <p style="font-size:1.05rem" class="q-py-md">Babolna holds the premium genetic material in poultry across Europe.

            They are one of only four (4) companies that own a genetic center globally

            - <strong>Babolna, Hungary.</strong> 
            </p>

          </div>
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <div class="carrd">
            <q-img class="rounded-borders col-6 carrd-im full-height" src="/images/nom9.jpg" />
            <!-- <h3>Lorem ipsum dolor sit amet.</h3> -->
            <p style="font-size:1.05rem" class="q-py-md">Agrofeed is a global player in the feed industry and they produce feeds for a wide range of livestock

            visited their labs, production facility... they also produce feed ingredients 

            - <strong>Gyor, Hungary.</strong> </p>

          </div>
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      
      

      <!-- <div  slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </div> -->

      <!-- <div class="glide__bullets" slot="control" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div> -->

      <!-- <template slot="controls">
        <button id="slideBack" class="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
        <button id="slideForward" class="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
      </template> -->

      <div data-glide-el="controls[nav]" class="text-center glide__bullets" slot="control">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            <!-- <button class="glide__bullet" data-glide-dir="=4"></button>
            <button class="glide__bullet" data-glide-dir="=5"></button> -->

      </div>
    </vue-glide>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },

  data() {
    return {
      options: {
       
        gap: 30,
        breakpoints:{
            1190: {
            perView: 2
        },
        500: {
            perView: 1
        },
}
      
      },
    };
  },
}
</script>

<style scoped>

.carrd{
    background: #e4e4e4;
    border-radius: 8px;
    /* box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1); */
    padding: 1rem;
    width: 100%;
    min-height: 530px !important;
}

@media(max-width:800px){
   .carrd{
    min-height: 620px !important;
}
}

.carrd-im{
    width: 100%;
    height: 300px !important;
    object-fit: contain;
}
.carrd h3{
    font-size: 1.2rem;
    font-weight: bold;
    margin: .55rem 0;
}
.glide__bullets{
    width: 100%;
    margin: 0 auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    padding: 1rem;
}
.glide__bullet{
    border-radius: 50%;
    border: 1px solid #33cc33;
    background: #006633;
    width: 15px;
    height: 15px;
    margin: 0 1rem;
    cursor: pointer;
}
</style>