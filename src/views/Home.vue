<template>
  <b-container id="mainImage">
    <div id="font">
    <h2 id="top">Happy House</h2>
    <b-img :src="require('@/assets/main_img.jpg')" fluid-grow></b-img>
    </div>
  </b-container>
  
</template>
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

#top {
  margin: 30px;
}
</style>

