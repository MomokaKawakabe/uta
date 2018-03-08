import BaseEntity from "./base/BaseEntity";
import Base from "./base/Base";

export default function Article() {
  this.no = 1;
  this.subtitle = null;
  this.hit = null;
  this.lastEditTime = new Date();
  this.tags = [];
  this.poster = null;
  this.content = null;
}

Article.prototype.TAG = "SGASGAS";
Article.prototype.add = function () {
  this.no ++;
}

Article.prototype.getNo = function () {
  return this.no;
}


Article.prototype.render = function (obj) {
  if (obj) {
    Object.assign(this, obj);
  }
}
