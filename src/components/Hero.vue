<template>
  <div class="hero">
    <div class="det">
      <h1 class="text-weight-bold text-h2 text-white">About Us</h1>
      <p style="font-size:1.2rem" class="text-center text-white q-pa-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        quos labore tempora praesentium eveniet deleniti!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background: url("/images/hero.png"), center center/cover no-repeat;
  /* background-attachment: fixed; */
  position: relative;
  height: 80vh;
  width: 100%;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 80vh;
  background: #000;
  opacity: 0.65;
  /* background: linear-gradient(
    173.89deg,
    #310026,
    rgba(0, 0, 0, 0)
  ); */
}

.hero .det {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
}

.hero .det h1 {
  /* font-size: 3rem; */
  margin-bottom: 0rem;
}
</style>
