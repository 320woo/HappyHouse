<template> 
  <div id=font>
    <h1 class="underline margin-10">공지사항</h1>
    <div style="text-align: right">
      <button @click="movePage" class="margin-10 btn">글쓰기</button>
    </div>
    <div>
      <table id="book-list">
        <colgroup>
          <col style="width: 15%" />
          <col style="width: 30%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
          <col style="width: 20%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <list-row
            v-for="(board, index) in boards"
            :key="index"
            :isbn="board.isbn"
            :title="board.title"
            :author="board.author"
            :writtendate="board.writtendate"
            :content="board.content"
            :hit="board.hit"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/board/ListRow.vue";

export default {
  name: "boardlist",
  components: {
    ListRow
  },
  computed: {
    ...mapGetters(["boards"])
  },
  created() {
    this.$store.dispatch("getBoards");
  },
  methods: {
    movePage() {
      this.$router.push({ name: "Board-create" });
    }
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
.margin-10 {
  margin: 10px;
}

#font {
  font-family: CookieRunOTF-Bold;
}

#book-list {
  border-collapse: collapse;
  width: 100%;
}

#book-list thead {
  background-color: skyblue;
  font-weight: bold;
  color: white;
}

#book-list td,
#book-list th {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>