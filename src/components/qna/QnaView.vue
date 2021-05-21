<template>
  <div id="font">
    <view-detail />
    <comment-write :isbn="this.isbn" />
    <comment-write
      v-if="isModifyShow && this.modifyComment != null"
      :modifyComment="this.modifyComment"
      @modify-comment-cancel="onModifyCommentCancel"
    />
    <comment v-for="(comment, index) in comments" :key="index" :comment="comment" @modify-comment="onModifyComment" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewDetail from "@/components/qna/ViewDetail.vue";
import CommentWrite from "@/components/qna/comment/CommentWrite.vue";
import Comment from "@/components/qna/comment/Comment.vue";

export default {
  name: "qnaview",
  data() {
    return{
    isbn: "",
    isModifyShow: false,
    modifyComment: Object
    }
  },
  computed: {
    ...mapGetters(["comments"])
  },
  components : {
    ViewDetail,
    CommentWrite,
    Comment
  },
  created() {
    this.isbn = this.$route.query.isbn;
    this.$store.dispatch("getBook", `/post/${this.isbn}`);
  },
  methods: {
     onModifyComment(comment) {
      this.modifyComment = comment;
      this.isModifyShow = true;
    },
    onModifyCommentCancel(isShow) {
      this.isModifyShow = isShow;
    }
  },
}
</script>

<style>

</style>