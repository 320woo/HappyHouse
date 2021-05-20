import Vue from "vue";
import VueRouter from "vue-router";
import Member from "../views/Member.vue";
import HouseInfo from "../views/HouseInfo.vue";
import Home from "../views/Home.vue";
import Qna from "../views/qna.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qna",
    name: "qna",
    component: Qna,
    children: [
        {
          path: "/qna/qna",
          name: "Qna",
          component: () => import("@/components/qna/Qna.vue")
        },
        {
          path: "/qna/create",
          name: "Qna-create",
          component: () => import("@/components/qna/QnaCreate.vue")
        },
        {
          path: "/qna/view",
          name: "Qna-view",
          component: () => import("@/components/qna/QnaView.vue")
        },
        {
          path: "/qna/modify/:isbn",
          name: "Qna-modify",
          component: () => import("@/components/qna/QnaModify.vue")
        }
    ]
  },
  {
    path: "/member",
    name: "member",
    component: Member,
    children: [
      {
        path: "/member/insert",
        name: "member-insert",
        component: () => import("@/components/member/MemberInsert.vue")
      },
      {
        path: "/member/login",
        name: "member-login",
        component: () => import("@/components/member/MemberLogin.vue")
      },
      {
        path: "/member/logout",
        name: "member-logout",
        component: Home,
      }
    ,
    ],
    redirect: () => {
      return "/member";
    }
  },
  {
    path: "/house/houseinfo",
    name: "houseinfo",
    component: HouseInfo,



  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
