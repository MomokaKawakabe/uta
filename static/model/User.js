import BaseEntity from "./base/BaseEntity";

export default class User extends BaseEntity {


  constructor(args) {
    super(args);
    this.name = "周宇";
    this.sex = "男";
  }

}
