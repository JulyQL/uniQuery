// 地址解析
var urlFormat = function () {

    var splitTemp = (window.location.href + "").split('?');
    var routerTemp = (splitTemp[0] + "#").split("#")[1].replace(/^\//, '').replace(/\/$/, '').split('/');
    var paramTemp = splitTemp[1] || "";

    var paramResult, paramArray;
    if (paramTemp == "") {
        paramResult = {};
    } else {
        paramArray = paramTemp.split("&"), paramResult = {};
        paramArray.forEach(function (item) {
            var temp = item.split("=");
            paramResult[temp[0]] = temp[1];
        })
    }

    var resultData = {
        router: routerTemp[0] == '' ? [] : routerTemp,
        params: paramResult
    };

    if (resultData.router.length > 3) {
        var router3 = resultData.router[2], index;
        for (index = 3; index < resultData.router.length; index++) {
            router3 += "/" + resultData.router[index];
        }

        resultData.router = [resultData.router[0], resultData.router[1], router3];
    }

    return resultData;
};

// 记录当前路由信息
var routerObj = urlFormat();

