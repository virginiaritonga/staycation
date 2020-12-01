import Vue from "vue";
import Vuex from "vuex"
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Cart from "../views/Cart.vue";
import FoodDetail from "../views/FoodDetail.vue";
import OrderSuccess from "../views/OrderSuccess.vue";
import Staffs from "../views/Staffs.vue";
import Calculator from "../views/Calculator.vue";
import Item from "../views/Item.vue";
import Admin from "../views/Admin.vue";
import Login from "../views/Login.vue";

Vue.use(Vuex);

Vue.use(VueRouter);

const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
      }
  }
);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/menu/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/order-success",
    name: "OrderSuccess",
    component: OrderSuccess,
  },
  {
    path: "/staffs",
    name: "Staffs",
    component: Staffs,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/item",
    name: "Item",
    component: Item,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
