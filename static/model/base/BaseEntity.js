import Base from "./Base";

export default function BaseEntity() {

	Base.call(this, arguments);
	this.id = null;
	this.createTime = null;
	this.updateTime = null;
	this.deleted = false;
}

BaseEntity.prototype = new Base();
BaseEntity.prototype.constructor = BaseEntity;

BaseEntity.prototype.render = function (obj) {
	Base.prototype.render.call(this, obj);
}
