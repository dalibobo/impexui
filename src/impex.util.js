/**
 * 获取impex的最顶端组件模型
 */
impex.$top = function() {
	if (!this.__topModel) {
		var coms = impex.findAll("*");
		for (var i = coms.length; i--;) {
			if ("C_0" === coms[i].$__id) {
				this.__topModel = coms[i];
			}
		}
	}
	return this.__topModel;
}

/**
 * 验证
 */
impex.validate = {
	// 自定义验证
	directive: function(name, validateFn) {
		impex.directive(name, {
			onCreate: function() {
				_setupValidate(this);
			},
			validate: function() {
				validateFn(this);
			}
		});
	}
}

/**
 * 查找组件实例，并返回符合条件的所有实例
 * @param  {string} name       组件名，可以使用通配符*
 * @param  {Object} conditions 查询条件，JSON对象
 * @return {Array}  
 */
impex.findAll = function(name, conditions) {
	name = name.toLowerCase();
	var rs = [];
	var ks = Object.keys(this.__components);
	for(var i=ks.length;i--;){
		var comp = this.__components[ks[i]];
		if(name != '*' && comp.$name != name)continue;

		var matchAll = true;
		if(conditions)
			for(var k in conditions){
				if(comp[k] != conditions[k]){
					matchAll = false;
					break;
				}
			}
		if(matchAll){
			rs.push(comp);
		}
		
	}
	return rs;
}

/**
 * 根据id查找组件实例
 * @param  {string} id 组件id
 * @return 组件实例
 */
impex.cget = function(id) {
	var all = this.findAll("*", {id: id});
	if (all.length > 0) return all[0];
	return null;
}

/**
 * 获取指定组件的子组件,找不到则创建
 * @param  {string || Object} com 组件id或组件实例
 */
impex.child = function(com) {
	var args = [];
	if (arguments.length > 2) {
		for (var i = 2; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
	}
	var gt = Object.prototype.toString;
	var comp;
	if (gt.call(com) === "[object String]") {
		comp = this.cget(com);
	}
	if (!comp) return;

	var subComs = comp.find("*");
	if (subComs.length > 0) {
		return subComs[0];
	}

	return comp.createSubComponent({});
}

/**
 * 获取表单元素所在的form对象，dom对象
 * @param  {Object} el 表单form对象
 */
function getForm(el) {
	var a = el;
	var parent = a.parentNode; 
	while (null != parent && parent.tagName !== "FORM") {
		parent = parent.parentNode;
	}
	return parent;
}

/**
 * 获取含有for属性的父类元素
 * @param  {Object} el 表单form对象
 */
function getForElement(el) {
	var a = el;
	var parent = a.parentNode; 
	while (parent != null && !parent.getAttribute("for")) {
		parent = parent.parentNode;
	}
	return parent;
}

/**
 * 根据路径获取对象
 * @param  {Object} obj 对象
 * @param  {String} path 查询路径
 */
function getObjByPath(obj, path) {
	var ps = path.split(".");
	var sobj = obj;
	for (var i = 0; i < ps.length; i++) {
		sobj = sobj[ps[i]];
		if (!sobj) return null;
	}
	return sobj;
}

/**
 * 查找具有valid属性的对象
 * @param  {Object} obj 对象
 */
function getObjectHasValid(obj, rsAry) {
	if (!is.object(obj)) return;
	for (var k in obj) {
		if (k.indexOf("_") == 0 || k.indexOf("$") == 0 || !k || k.indexOf(".") != -1) continue;
		if (is.object(obj[k])) {
			if (obj[k].hasOwnProperty("valid")) {
				rsAry.push(obj);
			}else{
				getObjectHasValid(obj[k], rsAry);
			}
		}
	}
}

/**
 * 给dom绑定事件
 * @param  {Object} obj dom对象
 * @param  {String} type 事件类型
 * @param  {handle} handle 事件处理函数
 */
function addEvent(obj,type,handle){
    try {  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}

/**
 * 给dom元素添加样式
 * @param  {Object} obj dom对象
 * @param  {String} className 样式
 */
function addClass(obj, className) {
	var cname = obj.className;
	var cs;
	if (_.isEmpty(cname)) {
		cs = [];
	}else{
		cs = cname.split(" ");
	}
	var addCss = className.split(" ");
	for (var i = 0; i < addCss.length; i++) {
		cs.push(addCss[i]);
	}
	obj.className = _.uniq(cs).join(" ");
}

/**
 * 移除dom元素样式
 * @param  {Object} obj dom对象
 * @param  {String} className 样式
 */
function removeClass(obj, className) {
	var cname = obj.className;
	var cs;
	if (_.isEmpty(cname)) {
		cs = [];
	}else{
		cs = cname.split(" ");
	}
	var addCss = className.split(" ");
	for (var i = 0; i < addCss.length; i++) {
		for (var j = cs.length; j--;) {
			if (addCss[i] == cs[j]) {
				cs.splice(j, 1);
				break;
			}
		}
	}
	obj.className = cs.join(" ");
}

/**
 * 根据指令名称查找指令模型
 * @param  {Object} name 指令名称
 * @param  {String} view 匹配模型
 */
impex.findByName = function(name, view) {
	var top = impex.$top();
	var qs = top.find(name);
	if (!view) return qs;
	for (var i = qs.length; i--;) {
		if (qs[i].$view === view) {
			return qs[i];
		}
	}
	return null;
}