<template>
  <div class="amenity">
    <Navbar />
    <div class="container">
      <div class="row mt-4 product">
        <div class="col-md-6 product-image">
          <img class="img-fluid" :src="image" />
        </div>

        <div class="col-md-6 product-info">
          <div class="col">
            <h2>{{ product }}</h2>
            <p v-if="inStock">In Stock</p>
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>

            <ul>
              <li v-for="detail in details" v-bind:key="detail">
                {{ detail }}
              </li>
            </ul>
            <p>Color variant:</p>
            <div v-for="variant in variants" :key="variant.variantId">
              <p @mouseover="updateProduct(variant.variantImage)">
                {{ variant.variantColor }}
              </p>
            </div>

            <div
              class="color-box mb-3"
              v-for="variant in variants"
              :key="variant.variantId"
              :style="{ backgroundColor: variant.variantColor }"
              @mouseover="updateProduct(variant.variantImage)"
            ></div>
          </div>

          <div class="col-md-4">
            <p>Size</p>
            <input v-model="size" placeholder="S/M/L/XL" />
            <p></p>
            <button
              v-on:click="buyProduct"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Item",
  components: {
    Navbar,
  },
  data() {
    return {
      product: "Hotel Socks",
      image:
        "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      inStock: false,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        },
      ],
      size: "",
      cart: 0,
    };
  },
  mounted() {
    if (localStorage.size) this.size = localStorage.size;
  },
  watch: {
    size(newSize) {
      localStorage.size = newSize;
    },
  },
  methods: {
    buyProduct() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

button {
  border: none;
  background-color: #4eb883;
  color: white;
}


.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.outOfStock {
  text-decoration: line-through;
}
</style>
