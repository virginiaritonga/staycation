<template>
  <div class="hero">
    <!-- Desktop View -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>All the services, </strong> <br />
                for your stay
              </h2>
              <p>Order our foods or item and we will bring them right to your room!</p>
              <router-link v-bind:style="styleObject" class="btn btn-lg btn-success" to="/menu">
                <b-icon-arrow-right></b-icon-arrow-right> Order
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/hero.png" width="100%" alt="" />
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" alt="" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Enjoy delicious food, </strong> <br />
                in your room
              </h2>
              <p>Order from our menu and we will send them right to you!</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
