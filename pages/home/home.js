import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'


// pages/home/home.js
Page({
  onLoad:function(options){
    //生命周期函数--监听页面加载
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['numA','numB','sum'],
      actions:['updateNum1']
    })
  },
  btnHandler1(e){
  this.updateNum1(e.target.dataset.step)
  },
  onUnLoad:function (){
    //生命周期函数--监听页面卸载
    this.storeBindings.destroyStoreBindings()
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  async getInfo() {
    const{data:res} =await wx.p.request({
      methods:'GET',
      url:'',
      data:{name:'zs',age:20}
    })
    console.log(res)
  }
})