<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Our <strong> Team </strong></h2>
          <p>
            The team at Hotel Restaurant Gordon Ramsay bring a wealth of
            knowledge and experience from the hospitality industry worldwide,
            ensuring the ultimate dining experience.
          </p>
          <p>
            Something's wrong? Contact one of our team through email below! We
            will reach out to you as quickly as possible.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <b-dropdown text="Contacts per page" variant="success">
              <b-dropdown-item @click="showPerPage(3)">3</b-dropdown-item>
              <b-dropdown-item @click="showPerPage(5)">5</b-dropdown-item>
              <b-dropdown-item @click="showPerPage(10)">10</b-dropdown-item>
              <b-dropdown-item @click="showPerPage(12)">All</b-dropdown-item>
            </b-dropdown>
          </div>
          <div>
            <b-table
              id="table"
              class="mt-3"
              striped
              hover
              :items="staffs"
              :per-page="perPage"
              :current-page="currentPage"
              :fields="fields"
              responsive=""
            >
              <template #cell()="data">
                {{ data.value }}
              </template>
              <template #cell(avatar)="data">
                <img :src="data.value" width="150px" />
              </template>
            </b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="table"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Staffs",
  components: {
    Navbar,
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: true,
        },
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "avatar",
          sortable: false,
        },
      ],
      staffs: [],
      currentPage: 1,
      total: 1,
      perPage: 3,
    };
  },
  computed: {
    rows() {
      return this.staffs.length;
    },
  },
  methods: {
    setStaffs(data) {
      this.staffs = data;
    },
    showPerPage(number) {
      this.perPage = number;
    },
  },
  created() {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        this.setStaffs(response.data.data);
        this.total = response.data.total;
        this.page = response.data.currentPage;
      })
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style></style>
