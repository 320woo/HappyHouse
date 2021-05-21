import Vue from "vue";
import VueRouter from "vue-router";
import Member from "../views/Member.vue";
import HouseInfo from "../views/HouseInfo.vue";
import Home from "../views/Home.vue";
import Qna from "../views/qna.vue";
import Board from "../views/board.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board",
    name: "board",
    component: Board,
    children: [
        {
          path: "/board",
          name: "Board",
          component: () => import("@/components/board/Board.vue")
        },
        {
          path: "/board/create",
          name: "Board-create",
          component: () => import("@/components/board/BoardCreate.vue")
        },
        {
          path: "/board/view",
          name: "Board-view",
          component: () => import("@/components/board/BoardView.vue")
        },
        {
          path: "/board/modify/:isbn",
          name: "Board-modify",
          component: () => import("@/components/board/BoardModify.vue")
        }
    ]
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
      {
        path: "/member/info",
        name: "member-info",
        component: () => import("@/components/member/MemberInfo.vue")
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
