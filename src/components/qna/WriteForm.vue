<template id="font">
  <div class="regist">
    <h1 class="underline">Qna 글쓰기</h1>
        <div class="regist_form">
      <label for="isbn">번호</label>
      <input v-if="type == 'create'" type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" />
      <input v-else type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" /><br />
      <label for="title">제목</label>
      <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
      <label for="author">글쓴이</label>
      <input type="text" id="author" name="author" v-model="author" ref="author" readonly /><br />
      <label for="writtendate">작성일</label>
      <input type="date" id="writtendate" name="writtendate" v-model="writtendate" ref="writtendate" /><br />
      <label for="content">내용</label><br />
      <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
      <button v-if="type == 'create'" @click="checkValue" class="btn">등록</button>
      <button v-else @click="checkValue" class="btn">수정</button>
      <button @click="moveList" class="btn" >목록</button>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "writeform",
  props: {
    type: { type: String }
  },
  data() {
    return {
      isbn: "",
      title: "",
      author: this.$store.state.user.id,
      writtendate: "",
      content: ""
    };
  },
  created() {
    if (this.type === "modify") {
      http.get(`/post/${this.$route.params.isbn}`).then(({ data }) => {
        this.isbn = data.isbn;
        this.title = data.title;
        this.author = data.author;
        this.writtendate= data.writtendate;
        this.content = data.content;
      });
    }
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBook 호출
    checkValue() {
      // 사용자 입력값 체크하기
      // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.isbn && ((msg = "번호를 입력해주세요"), (err = false), this.$refs.isbn.focus());
      err && !this.title && ((msg = "제목을 입력해주세요"), (err = false), this.$refs.title.focus());
      err && !this.author && ((msg = "로그인을 해주세요"), (err = false), this.$refs.author.focus());
      err && !this.writtendate && ((msg = "작성일을 입력해주세요"), (err = false), this.$refs.writtendate.focus());
      err && !this.content && ((msg = "내용을 입력해주세요"), (err = false), this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBook 호출
      else this.type == "create" ? this.registBook() : this.modifyBook();
    },
    registBook() {
      http
        .post("/post/", {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          writtendate: this.writtendate,
          content: this.content
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    modifyBook() {
      http
        .put(`/post/${this.isbn}`, {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          writtendate: this.writtendate,
          content: this.content
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/qna/qna");
        });
    },
    moveList() {
      this.$router.push("/qna/qna");
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
</style>
