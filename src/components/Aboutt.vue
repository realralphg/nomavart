<template>
  <section class="about q-my-xl section" id="about">

    <div class="about__container container grid">
      <div class="about__data">
        <h3
          class="
            section__title
            text-weight-bold
            text-positive
            about__title
          "
        >
          About Us
          <!-- More Information <br />
              About Us -->
        </h3>
        <!-- <h4 class="q-mb-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          dolorem.
        </h4> -->
        <p style="font-size: 1.2em" class="text-subtitle2 about__description my-font-poppins-light q-mb-md">
          Established in 1999, Nomavart is a dynamic agricultural 
          company of qualified and experienced crop and Livestock 
          Farmers registered under the Companies and Allied 
          Matters Decree of 1990 in Nigeria.
        </p>
        <q-btn class="bg-p q-px-lg q-py-sm  text-white button"
          >More About Us</q-btn
        >
      </div>
      <div class="img">
        <img src="/images/slide2.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 2rem;
}

.bg-p{
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
}

.about__container p {
  font-size: 20px;
}

.img {
  position: relative;
}
.img img {
  position: relative;
  left: 10%;
  width: 70%;
  height: 100%;

  /* transform: translateX(-25%); */
}
.img::before {
  content: "";
  position: absolute;
  width: 70%;
  height: 100%;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 5%;
  
}

.about__data h3{
  line-height: .1rem;
}

@media(max-width:500px){
  .about__container {

  grid-template-columns: 1fr;
}

.img img {
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;

  /* transform: translateX(-25%); */
}
.img::before {
  content: "";
  position: absolute;
  width: 70%;
  height: 100%;
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 10%;
  
}
}
</style>
