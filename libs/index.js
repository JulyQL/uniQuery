import getLocation from "./getLocation";

// API
uni.$uniQuery = {
    getLocation
};

// 内置方法
let methods = {

};

export default {
    install(Vue) {
        if (Vue.prototype) {
            for (let key in methods) {
                Vue.prototype[key] = methods[key];
            }
        } else {
            Vue.mixin({
                methods
            });
        }
    }
};