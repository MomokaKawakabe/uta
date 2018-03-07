import BaseEntity from "./base/BaseEntity";

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
Article.prototype.add = function (article) {
  article.no ++;
}

Article.prototype.getNo = function (article) {
  return article.no;
}
