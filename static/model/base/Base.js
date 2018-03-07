
export default function Base() {

  this.errorMessage = null;
	this.loading = false;
  this.fail = false;
}

Base.prototype.render = function (obj) {
  if (obj) {
    Object.assign(this, obj);
  }
}

Base.prototype.renderList = function (field, Clazz) {
	let beans = this[field];
	if (!beans || !Clazz) {
		return;
	}
	this[field] = [];
	for (let i = 0; i < beans.length; i++) {
		let bean = beans[i];
		let clazz = new Clazz();
		clazz.render(bean);
		this[field].push(clazz);
	}
}

