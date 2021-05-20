<template>
  <div class="regist" id="font">
    <h1 class="underline">회원 가입</h1>
    <div class="regist_form">
      <label for="id">ID</label>
      <input type="text" id="id" name="id" v-model="id" ref="id" />
      <label for="pwd">비밀번호</label>
      <input type="text" id="pwd" name="pwd" v-model="pwd" ref="pwd" /><br />
      <label for="name">이름</label>
      <input type="text" id="name" name="name" v-model="name" ref="name" /><br />
      <label for="price">Email</label>
      <input type="email" id="email" name="email" v-model="email" ref="email" /><br />
      <label for="phone">Phone</label><br />
      <input type="text" id="phone" name="phone" v-model="phone" ref="phone" /><br />
      <label for="address">주소</label><br />
      <input type="text" id="address" name="address" v-model="address" ref="address" /><br />
      <button @click="checkValue" class="btn">가입</button>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "memberinsert",
  props: {
    type: { type: String }
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
    if (this.type === "modify") {
      http.get(`/member/${this.$route.params.id}`).then(({ data }) => {
        this.id = data.id;
        this.pwd = data.pwd;
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
        this.address = data.address;
      });
    }
  },
  methods: {
    // 입력값 체크 - 체크 성공 시 insertMember 호출
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      !this.id && ((msg = "id를 입력해주세요"), (err = false), this.$refs.id.focus());
      err && !this.pwd && ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.pwd.focus());
      err && !this.name && ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
      err && !this.email && ((msg = "이메일을 입력해주세요"), (err = false), this.$refs.email.focus());
      err && !this.phone && ((msg = "전화번호를 입력해주세요"), (err = false), this.$refs.phone.focus());
      err && !this.address && ((msg = "주소를 입력해주세요"), (err = false), this.$refs.address.focus());
      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 회원 가입
      else this.insertMember();
    },
    insertMember() {
      http
        .post("/member/", {
          id: this.id,
          pwd: this.pwd,
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
        })
        .then(({ data }) => {
          let msg = "회원가입 실패!!";
          if (data === "success") {
            msg = "회원가입 완료";
          }
          alert(msg);
          this.moveHome();
        })
        .catch((error)=>{
          alert("회원 가입 실패");
          console.dir(error);

        });
    },
    modifyMember() {
      http
        .put(`/member/${this.id}`, {
          id: this.id,
          pwd: this.pwd,
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
        })
        .then(({ data }) => {
          let msg = "회원정보 수정 실패";
          if (data === "success") {
            msg = "회원정보 수정 완료";
          }
          alert(msg);
          this.$router.push("/member");
        })
        .catch((error)=>{
          alert("회원 수정 실패");
          console.dir(error);
        });
    },
    moveHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@font-face {
    font-family: 'CookieRunOTF-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
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
</style>
