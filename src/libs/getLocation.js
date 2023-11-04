export default (callback, locationType = "wgs84") => {
    let authName = "scope.userLocation";

    // #ifdef MP-ALIPAY
    authName = "location";
    // #endif

    uni.getLocation({
        type: locationType,
        success: callback,
        fail: () => {

            // 失败了，判断是否授权
            uni.getSetting({
                success: (res) => {

                    // 用户未授权
                    if (!res.authSetting[authName]) {

                        uni.showModal({
                            title: '温馨提示',
                            content: '请允许授权位置信息,并确保系统设置中已打开位置信息',
                            confirmText: '授权',
                            success: (res) => {
                                if (res.confirm) {

                                    // 调起客户端小程序设置界面
                                    uni.openSetting({
                                        success(res) {

                                            // 如果这次授权了
                                            if (res.authSetting[authName]) {
                                                uni.getLocation({
                                                    type: locationType,
                                                    success: callback
                                                });

                                            } else {
                                                uni.showModal({
                                                    title: '温馨提示',
                                                    content: '用户未授权'
                                                });
                                            }
                                        }
                                    });

                                }
                            }
                        });

                    }

                    //用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位
                    else {
                        uni.showModal({
                            title: '温馨提示',
                            content: '地理位置获取失败，请打开手机定位后再试'
                        });
                    }

                }
            });
        }
    });

};