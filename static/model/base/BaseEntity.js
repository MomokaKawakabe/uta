import Base from "./Base";

export default class BaseEntity extends Base {

  constructor(args) {
    super(args);
    this.id = null;
    this.createTime = null;
    this.deleted = false;
  }
}
