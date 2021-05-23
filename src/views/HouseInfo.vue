<template>
<div id="font" style="margin-top : 10px;">
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2" align="left">
        <house-search-left />
      </b-col>
      <b-col cols="7">
        <house-search-middle />
      </b-col>
      <b-col cols="3" align="right">
        <house-search-right />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
//import DongSearchBar from '@/components/house/DongSearchBar.vue';
//import AptSearchBar from '@/components/house/AptSearchBar.vue';
//import HouseList from '@/components/house/AptList.vue';
//import HouseDetail from '@/components/house/AptDetail.vue';
import HouseSearchLeft from '@/components/house/HouseSearchLeft.vue';
import HouseSearchMiddle from '../components/house/HouseSearchMiddle.vue';
import HouseSearchRight from '../components/house/HouseSearchRight.vue';

export default {
  name: 'Apt',
  components: {
    HouseSearchLeft,
    HouseSearchMiddle,
    HouseSearchRight
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
