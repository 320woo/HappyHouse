<template>
  <div id="font">
    <view-detail />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewDetail from "@/components/qna/ViewDetail.vue";


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
    ViewDetail
  },
  created() {
    this.isbn = this.$route.query.isbn;
    this.$store.dispatch("getBook", `/post/${this.isbn}`);
  },
  methods: {
     onModifyCommentCancel(isShow) {
       this.isModifyShow = isShow;
     }
  },
}
</script>

<style>

</style>