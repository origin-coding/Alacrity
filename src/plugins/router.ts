import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const mainRouteName: string = "Main";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: mainRouteName,
    component: () => import("@/views/MainView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  // Routes get lost when refreshing page, so we goto the path.
  if (to.matched.length === 0) {
    next({ path: to.path });
  } else {
    next();
  }
});

export default router;
