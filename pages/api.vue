<template>
  <view class="container">
    <view class="btn" @click="goto('getLocation')">
      getLocation 获取地理位置
    </view>
    <view class="btn" @click="goto('saveAlbum')">
      saveAlbum 保存图片到相册
    </view>
	<view class="btn" @click="goto('chooseImage')">
	  chooseImage 选择图片
	</view>
  </view>
</template>

<script>
export default {
  methods: {
    goto(pagename) {
      uni.navigateTo({
        url: "/pages/api/" + pagename + "/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
  .btn {
    margin: 20rpx;
    font-weight: 200;
    font-size: 28rpx;
    &::before {
      display: inline-block;
      content: " ";
      border-width: 5px 7px;
      border-color: transparent transparent transparent black;
      border-style: solid;
    }
  }
}
</style>
