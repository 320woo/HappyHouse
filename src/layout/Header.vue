<template>
  <div id="font">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">공지사항</b-nav-item>
          <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>오늘의 뉴스</em>
            </template>
            <b-dropdown-item>네이버뉴스</b-dropdown-item>
            <b-dropdown-item>다음뉴스</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
          <b-nav-item href="#">주변 탐방</b-nav-item>
          <b-nav-item href="/house/houseinfo">거래 정보 검색</b-nav-item>
          <b-nav-item href="/qna/qna">QnA게시판</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-if="$store.state.show">User</em>
              <em v-else v-text=$store.state.user.name></em>
            </template>
            <b-dropdown-item v-if="$store.state.show" href="/member/login">Login</b-dropdown-item>
            <b-dropdown-item v-else href="" v-on:click.prevent="onClickLogout()">Logout</b-dropdown-item>
            <b-dropdown-item v-if="$store.state.show" href="/member/insert" type="insert">Sign Up</b-dropdown-item>
            <b-dropdown-item v-else href="/member/info">회원정보</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {


    methods:{
      onClickLogout() {
        this.$store.dispatch("logout")
      },
    }


  

};
</script>


