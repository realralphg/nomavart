<template>
  <div class="container" id="app">
    <vue-glide :options="options">
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>
      <vue-glide-slide>
          <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" />
          <!-- <q-img class="rounded-borders col-6 full-height" src="/images/Habibu.jpg" /> -->
      </vue-glide-slide>

      <!-- <template slot="control">
      <button data-glide-dir="<">prev</button>
      <button data-glide-dir=">">next</button>
      </template> -->

      <!-- <template slot="controls">
        <button id="slideBack" class="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
        <button id="slideForward" class="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
      </template> -->

      <div data-glide-el="controls[nav]" class="text-center glide__bullets" slot="control">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            <!-- <button class="glide__bullet" data-glide-dir="=4"></button> -->
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
       
        gap: 20,
      
      },
    };
  },
}
</script>

<style scoped>
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
    width: 15px;
    height: 15px;
    margin: 0 1rem;
}
</style>