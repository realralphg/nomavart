<template>
  <section class="about q-my-xl q-py-xl section" id="about">

    <div class="about__container bg-p q-px-lg container grid">
      <div class="about__data">
        <h2 style="font-size: 2em" class="text-white text-weight-bold"> The Goal is Simple</h2>
        <p class="about__description text-white q-mb-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut optio
          iste dignissimos eos ab a! Reiciendis, veniam. Veritatis, laudantium
          rerum.
        </p>

        <q-btn class="q-px-xl q-my-md bg-white text-primary">Subscribe</q-btn>
      </div>
      <div class="img">
        <img src="/images/man.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

.about{
    padding: 5rem 0;
}
.about__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 2rem;
  position: relative;
}

.bg-p{
  background: linear-gradient(180deg, #33CC33 0%, #006633 100%);
   box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
}

.about__container p {
  font-size: 20px;
}


.img img {
  position: absolute;
  /* left: 10%; */
  
  right: -10%;
  top: -25%;
  right: 0;

  /* transform: translateY(25%); */
}

.about__data h3{
  line-height: .1rem;
}


@media(max-width:1250px){
   
.about__container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);

}
    .img img {
  position: relative;
  /* left: 10%; */
  width: 90%;
  
  
  right: 0;
  padding-bottom: 1rem;

  /* transform: translateY(25%); */
}}


@media(max-width:500px){
    .about__data h2{
        margin-bottom: .5rem;
    }

   
 
.about__container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);

}
}
</style>
