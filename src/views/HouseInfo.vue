<template>
<div id="font" style="margin-top : 10px;">
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
    </b-row>
    <!-- <apt-search-bar /> -->
    <dong-search-bar />
    <b-row>
      <b-col cols="6" align="left">
        <house-list />
      </b-col>
      <b-col cols="6">
        <house-detail />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import DongSearchBar from '@/components/house/DongSearchBar.vue';
//import AptSearchBar from '@/components/house/AptSearchBar.vue';
import HouseList from '@/components/house/AptList.vue';
import HouseDetail from '@/components/house/AptDetail.vue';

export default {
  name: 'Apt',
  components: {
    DongSearchBar,
    //AptSearchBar,
    HouseList,
    HouseDetail,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
