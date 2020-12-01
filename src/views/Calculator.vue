<template>
  <div class="calculator">
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <div class="row">
            <div class="col">
              <h2>Simple calculator</h2>
              <p>If you want to count something...</p>
              <p>Here is a simple calculator for multiplication operation!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <form action="">
                <div class="form-group">
                  <label for="first_number">First Number:</label>
                  <input
                    :value="form.first_number"
                    @change="updateFirstNumber"
                    type="number"
                    class="form-control"
                    name="first_number"
                    id="first_number"
                    placeholder="1"
                  />
                </div>
                <div class="form-group">
                  <label for="second_number">Second Number:</label>
                  <input
                    :value="form.second_number"
                    @change="updateSecondNumber"
                    type="number"
                    step="any"
                    class="form-control"
                    name="second_number"
                    id="second_number"
                    placeholder="2"
                  />
                </div>
                <p class="mt-3">
                  Result of {{ form.first_number }} x
                  {{ form.second_number }}:<br />{{ form.total }}
                </p>
              </form>
            </div>
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
  name: "Calculator",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        first_number: "",
        second_number: "",
        total: "",
      },
    };
  },
  methods: {
    updateFirstNumber(event) {
      this.form.first_number = event.target.value;
      this.form.total = this.form.first_number * this.form.second_number;
    },
    updateSecondNumber(event) {
      this.form.second_number = event.target.value;
      this.form.total = this.form.first_number * this.form.second_number;
    },
  },
};
</script>

<style></style>
