<template>
  <div class="cart">
    <Navbar :updateCart="carts" />
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
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="h2">My <strong>Cart</strong></div>
          <table-responsive class="mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Food</th>
                  <th scope="col">Note</th>
                  <th scope="col">Total</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + cart.products.gambar"
                      class="img-fluid shadow"
                      alt=""
                      width=""
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.nama }}</strong>
                  </td>
                  <td>{{ cart.keterangan ? cart.keterangan : "-" }}</td>
                  <td>{{ cart.jumlah_pemesanan }}</td>
                  <td align="right">Rp. {{ cart.products.harga }}</td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{ cart.products.harga * cart.jumlah_pemesanan }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="deleteCart(cart.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total price:</strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalPrice }} </strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </table-responsive>
        </div>
      </div>

      <!-- Form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Name:</label>
              <input type="text" class="form-control" v-model="order.nama" />
            </div>
            <div class="form-group">
              <label for="noKamar">Room Number:</label>
              <input type="text" class="form-control" v-model="order.noMeja" />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
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
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
      order: [],
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    deleteCart(id) {
      axios
        .delete(
          "https://my-json-server.typicode.com/virginiaritonga/food/keranjangs/" +
            id
        )
        .then(() => {
          this.$toast.error("Food is deleted", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissable: true,
          });

          // Update cart data
          axios
            .get(
              "https://my-json-server.typicode.com/virginiaritonga/food/keranjangs"
            )
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log("Error:", error));
        })
        .catch((error) => console.log("Error:", error));
    },
    checkout() {
      if (this.order.nama && this.order.noMeja) {
        console.log("Order success");
        this.order.carts = this.carts;
        axios
          .post(
            "https://my-json-server.typicode.com/virginiaritonga/food/pesanans",
            this.order
          )
          .then(() => {
            this.$router.push({ path: "/order-success" });
            this.$toast.success("Order success", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissable: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Name and Room Number can't be empty", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/virginiaritonga/food/keranjangs"
      )
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log("Error:", error));
  },
  computed: {
    totalPrice() {
      return this.carts.reduce(function(items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style></style>
