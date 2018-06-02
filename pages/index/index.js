//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        isShow: false,//控制显示日历
        active:3
    },
    //事件处理函数
    bindViewTap: function () {

    },
    onLoad: function () {

    },
    //选择旅游类型
    chooseType(e) {
        let id = e.currentTarget.dataset.id;
        console.log(id);
        switch (id) {
            case "1":
                console.log(123);
                this.setData({
                    active:1
                })

                break;
            case "2":
                this.setData({
                    active:2
                })

                break;
            case "3":
                this.setData({
                    active:3
                })

                break;
            case "4":
                this.setData({
                    active:4
                })
                break;
        }
    }
})
