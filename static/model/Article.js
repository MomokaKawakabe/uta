import BaseEntity from "./base/BaseEntity";
import User from "./User";

export default class Article extends BaseEntity {

  constructor(args) {
    super(args);
    this.hit = 0;
    this.title = "文章1";
    this.creator = new User();
  }

  praise() {
    this.hit ++;
  }

  render(obj) {
    super.render(obj);


  }
}
