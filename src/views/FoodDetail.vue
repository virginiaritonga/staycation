<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail -->
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Price: <strong> Rp. {{ product.harga }} </strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="total_quantity">Order quantity</label>
              <input
                type="number"
                class="form-control"
                v-model="order.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="note">Note</label>
              <textarea
                v-model="order.keterangan"
                class="form-control"
                placeholder="Not spicy"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="submit">
              <b-icon-cart></b-icon-cart> Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    submit() {
      this.order.products = this.product;
      if (this.order.jumlah_pemesanan) {
        this.order.products = this.product;
        axios
          .post(
            "https://my-json-server.typicode.com/virginiaritonga/food/keranjangs",
            this.order
          )
          .then(() => {
            this.$router.push({path: "/cart"})
            this.$toast.success("Order placed", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissable: true,
            });
            console.log("Success");
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Order is empty", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
        console.log("Error");
      }
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/virginiaritonga/food/products/" +
          this.$route.params.id
      )
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style></style>
