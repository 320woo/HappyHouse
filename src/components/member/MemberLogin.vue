<template>
  <div class="login" id="font">
    <b-img style="margin: 10px;" :src="require('@/assets/logo1.png')" fluid></b-img>
    <div class="login_form">
      <label for="id">ID</label><br>
      <input type="text" id="id" name="id" v-model="id" ref="id" /><br>
      <label for="pwd">비밀번호</label><br>
      <input type="password" id="pwd" name="pwd" v-model="pwd" ref="pwd" /><br>
      <button class="btn" @click="checkValue">로그인</button>
      <button class="btn">아이디 찾기</button>
      <button class="btn">비밀번호 찾기</button>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "login",
  data() {
    return{
      id:"",
      pwd:"",
    }
  },



  methods: {
    // 입력값 체크 - 체크 성공 시 vuex로 login시도
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      !this.id && ((msg = "id를 입력해주세요"), (err = false), this.$refs.id.focus());
      err && !this.pwd && ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.pwd.focus());
      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 로그인
      //else this.login();
      else this.$store.dispatch("login",{id:this.id, pwd:this.pwd});

      if(this.$store.state.user.email !== null){
        console.log(this.$store.state.user.id + " " + "로그인성공");
        this.$router.push({ name: "Home" });
      }
      else{
        console.log("bye");
      }
    },

    moveHome() {
      this.$router.push("/");
    },
    login() {
      //console.log(this.id);
      //console.log(this.pwd);


      http
        .post("/member/${this.id}",{
          id:this.id,
          pwd:this.pwd
          
        })
        .then(({ data }) => {
          let msg = "로그인 실패!!";
          if (data === "success") {
            msg = "로그인 완료";
          }
          alert(msg);
          this.moveHome();
        })
        .catch((error) => {
          alert("로그인 오류");
          console.dir(error);

        });
    },
  }
};
</script>

<style>
@font-face {
    font-family: 'CookieRunOTF-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

button {
  margin : 5px;
  background-color: skyblue;
}

#font {
  font-family: CookieRunOTF-Bold;
}

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
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>