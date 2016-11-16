Page({
  data: {
    checkbox1: false,
    checkbox2: false,
    radio1: false,
    radio2: false
  },
  onLoad() {
      
  },
  changeBox1() {
    var checkbox1 = this.data.checkbox1
    this.setData({checkbox1: !checkbox1})
  },
  changeBox2() {
    var checkbox2 = this.data.checkbox2
    this.setData({checkbox2: !checkbox2})
  },
  changeRadio1() {
    this.setData({radio1: true, radio2: false})
  },
  changeRadio2() {
    this.setData({radio1: false, radio2: true})
  }
})