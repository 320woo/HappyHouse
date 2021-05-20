<template>
<div id="font">
  <b-container v-if="apt.아파트" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ apt.아파트 }}</h3></b-col
      >
    </b-row>
    <b-row class="mb-2 mt-1">
      <!--<b-col><img src="@/assets/apt.png" alt=""/></b-col>-->
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">전용면적 : {{ apt.전용면적 }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary">아파트 이름 : {{ apt.아파트 }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ apt.법정동 }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">층수 : {{ apt.층 }}층</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="danger"
          >거래금액 : {{ (apt.거래금액.replace(',', '') * 10000) | price }}원</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AptDetail',
  computed: {
    ...mapState(['apt']),
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>

<style>
@font-face {
    font-family: 'CookieRunOTF-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#font {
  font-family: CookieRunOTF-Bold;
}
</style>
