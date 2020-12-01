<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">Staycation</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/calculator"
                >Calculator</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/item"
                >Item</router-link
              >
            </li>
             <li class="nav-item">
              <router-link class="nav-link" to="/staffs"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin"
                >Admin</router-link
              >
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                Cart
                <b-icon-cart></b-icon-cart>
                <span class="badge badge-success ml-2">{{
                  updateCart ? updateCart.length : orders.length
                }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      orders: [],
    };
  },
  props: ["updateCart"],
  methods: {
    setOrder(data) {
      this.orders = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/virginiaritonga/food/keranjangs"
      )
      .then((response) => this.setOrder(response.data))
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style></style>
