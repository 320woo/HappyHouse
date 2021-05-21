import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{},
    id: "",
    pwd: "",
    show: true,
    books: [],
    boards: [],
    board: {},
    book: {},
    comments: [],
    apts: [],
    apt: Object,
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
    books(state) {
      return state.books;
    },
    book(state) {
      return state.book;
    },
    comments(state) {
      return state.comments;
    },
    boards(state) {
      return state.boards;
    },
    board(state) {
      return state.board;
    }

  },
  
  mutations: {
    LOG_IN(state, payload) {
      state.user = payload;
      state.show = false;
    },
    LOG_OUT(state) {
      state.user = {};
      state.show = true;
    },
    setBooks(state, payload) {
      state.books = payload;
    },
    setBook(state, payload) {
      state.book = payload;
    },
    setBoards(state, payload) {
      state.boards = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
    setComments(state, payload) {
      state.comments = payload;
    },

    ////////////////////////////////////////////////////
    GET_APT_LIST(state, apts) {
      // console.log(state, apts);
      state.apts = apts;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },
    
  },



  actions: {
    login(context, { id, pwd}) {

      http
        .post("/member/${this.id}", {
          id: id,
          pwd: pwd,
        })
        .then(({ data }) => {
          
          let msg = "로그인 완료!!";
          if (data.email == null) {
            msg = "로그인 실패";
            context.commit("LOG_OUT");
          }
          else {
            context.commit("LOG_IN", data);
          }
          alert(msg);
        })
        .catch((error)=>{
          alert("로그인 오류");
          console.dir(error);

        });
    },
    logout(context) {
      context.commit("LOG_OUT");
      alert("로그아웃");
    },
    deleteMember({ commit }, member) {
      commit('DELETE_MEMBER', member);
    },



////////////////////////////////////////////////////
    getBooks(context) {
      http
        .get("/post")
        .then(({ data }) => {
          context.commit("setBooks", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getBook(context, payload) {
      http.get(payload).then(({ data }) => {
        context.commit("setBook", data);
      });
    },
    getBoards(context) {
      http
        .get("/board")
        .then(({ data }) => {
          context.commit("setBoards", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getBoard(context, payload) {
      http.get(payload).then(({ data }) => {
        context.commit("setBoard", data);
      });
    },
    getComments(context, payload) {
      http.get(payload).then(({ data }) => {
        context.commit("setComments", data);
      });
    },

////////////////////////////////////////////////



    getAptList({ commit }, dongCode) {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      //const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      const SERVICE_KEY =
        'xGdtmCNopO8oI2dmjJ8Gwzl05jiJvuSHFrJjI1IcoGas%2B0nXrp6oW9bsE%2Bf1t3%2BuK%2FPPA%2FEaFGBQnazfnZ8K8w%3D%3D';
      
      //const SERVICE_URL =
      //  'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';
      const SERVICE_URL = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
      const params = {
        LAWD_CD: dongCode,
        DEAL_YMD: '202010',
        serviceKey: decodeURIComponent(SERVICE_KEY),
      };

      // npm install --save axios
      http
        .get(SERVICE_URL, {
          params,
        })
        .then((response) => {
          console.log(response.data.response.body);
          
          commit('GET_APT_LIST', response.data.response.body.items.item);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    selectApt({ commit }, apt) {
      commit('SELECT_APT', apt);
    },
  },
  plugins:[createPersistedState()],
});
