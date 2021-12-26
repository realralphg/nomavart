<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
/* .mb,
.mt {
  margin: 2rem 0 !important;
} */
.container {
  margin: 0 auto;
  width: 90% !important;
  max-width: 1440px !important;
}
.q-card {
  min-height: 350px;
  /* position: relative; */
}
.hey {
  min-height: 370px !important;
  min-width: 250px;
  /* position: relative; */
}

.wid {
  width: 100%;
}

/* .under::after {
  content: "";
  height: 3px;
  width: 50px;
  color: green;
  background-color: green;
  position: absolute;
  bottom: 0;
} */

.p-width {
  max-width: 1440px !important;
  margin: 0 auto;
  /* text-align: center; */
}

.q-mb-xl {
  margin-bottom: 48px !important;
}

.q-mt-xl {
  margin-top: 48px !important;
}

.q-mt-lg {
  margin-top: 24px !important;
}
.cen {
  display: flex;
  align-items: center;
}
.q-icon {
  /* width: 100%; */
  height: 1em;
}
.ion-md-arrow-round-forward,
.on-right {
  width: 20px !important;
  height: 1em;
}
.for {
  width: 20px !important;
  height: 1em;
  margin-right: 1rem;
}
.q-my-lg {
  /* margin-top: 24px !important; */
  margin-bottom: 24px !important;
}
.footer-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  max-width: 1440px;
  justify-content: space-between;
}
</style>
