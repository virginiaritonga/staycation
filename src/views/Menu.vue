<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2><strong>Food</strong> list</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search food"
              aria-label="Username"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Menu",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get(
          "https://my-json-server.typicode.com/virginiaritonga/food/products?q=" +
            this.search
        )
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log("Error:", error));
    },
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/virginiaritonga/food/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style></style>
