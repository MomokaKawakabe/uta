
export default class Base {

  constructor(args) {
    this.errorMessage = null;
  }

  render(obj) {
    // console.log($.extend)
    if (obj) {
      Object.assign(this, obj);
    }
  }


  renderEntity(field, Clazz) {
    let obj = this[field];
    if (!obj) {
      if (Clazz) {
        let EntityClazz = this.constructor;
        obj = (new EntityClazz())[field]
      } else {
        return
      }
    }

  }
}


