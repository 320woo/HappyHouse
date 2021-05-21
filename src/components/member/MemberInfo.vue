<template>
  <div class="regist" id="font">
    <h1 class="underline">회원 정보</h1>
    <div class="regist_form">
      <label for="id">ID</label>
      <div class="view">{{ id }}</div>
      <label for="pwd">비밀번호</label>
      <div class="view">{{ pwd }}</div>
      <label for="name">이름</label>
      <div class="view">{{ name }}</div>
      <label for="email">Email</label>
      <div class="view">{{ email }}</div>
      <label for="phone">Phone</label>
      <div class="view">{{ phone }}</div>
      <label for="">주소</label>
      <div class="view">{{ address }}</div>
      <div style="padding-top: 15px">
        <!-- <router-link :to="`/qna/modify/${book.isbn}`" class="btn"><button id="btn_group" class="btn">수정</button></router-link> -->
        <router-link :to="``" class="btn"><button id="btn_group" class="btn">수정</button></router-link>
        <a href="#" class="btn"><button id="btn_group" class="btn">삭제</button></a>
        <router-link to="/qna/qna" class="btn"><button id="btn_group" class="btn">목록</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "viewdetial",
  computed: {
      ...mapGetters(["user"])
  },

  data() {
    return {
      id: "",
      pwd: "",
      name: "",
      email:"",
      phone: "",
      address: ""
    };
  },
  created() {
        this.id = this.$store.state.user.id;
        this.pwd = this.$store.state.user.pwd;
        this.name = this.$store.state.user.name;
        this.email = this.$store.state.user.email;
        this.phone = this.$store.state.user.phone;
        this.address = this.$store.state.user.address;
  },
  methods: {
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  }
};
</script>
<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
#btn_group { 
  border: 1px solid skyblue; 
  background-color: rgba(0,0,0,0); 
  color: skyblue; padding: 5px; 
  width: 150px;
}

#btn_group:hover { 
  color : white;
  background-color: skyblue;
}


</style>
