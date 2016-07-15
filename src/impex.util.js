var __ID = 100;
// 获取一个唯一的标识码
function getId() {
	return __ID += 1;
}

/**
 * 获取impex的最顶端组件模型
 */
impex.$top = function() {
	if (!this.__topModel) {
		var coms = impex.findAll("*");
		for (var i = coms.length; i--;) {
			if ("C_0" === coms[i].__id) {
				this.__topModel = coms[i];
			}
		}
	}
	return this.__topModel;
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
	var ks = Object.keys(this._cs);
	for(var i=ks.length;i--;){
		var comp = this._cs[ks[i]];
		if(name != '*' && comp.name != name)continue;
		var matchAll = true;
		if(conditions) {
			for(var k in conditions){
				if(comp.data[k] != conditions[k]){
					matchAll = false;
					break;
				}
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
	
	var comp;
	if (_.isString(com)) {
		comp = this.cget(com);
		if (!comp) return;
	}else{
		comp = com;
	}

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
 * @param  {Int} type 查询类型 1:对象，2：函数
 */
function getObjByPath(obj, path, type) {
	var ps = path.split(".");
	var sobj = obj;
	for (var i = 0; i < ps.length; i++) {
		if (i > 0) {
			sobj = sobj[ps[i]];
		}else{
			sobj = type == 1 ? sobj.data[ps[i]] : sobj["$" + ps[i]];
		}
		if (!sobj) return null;
	}
	return sobj;
}

/**
 * 遮罩层
 */
var MaskLayer = {
	show: function(forId) {
		var body = document.body;
		
		// 创建遮罩层
		var createLayer = function(zIndex) {
			var div = document.createElement("div");
			div.className = "impex-mask-layer";
			div.style.zIndex = zIndex;
			if (_.isString(forId)) {
				div.id = forId + "_layer";
				div.setAttribute("for", forId);
				var forEl = document.getElementById(forId);
				if (null != forEl) forEl.style.zIndex = zIndex + 1;
			}
			body.appendChild(div);
		}
		
		var maxZIndex = 1000;
		var existsLayer = null;
		var ls = body.querySelectorAll(".impex-mask-layer");
		if (ls.length != 0) {
			for (var i = ls.length; i--;) {
				if (_.isString(forId) && ls[i].getAttribute("for") == forId) {
					existsLayer = ls[i];
					continue;
				}
				if (maxZIndex <= ls[i].style.zIndex) maxZIndex = parseInt(ls[i].style.zIndex) + 2;
			}
		}
		if (null != existsLayer) body.removeChild(existsLayer);
		createLayer(maxZIndex);
		body.style.overflow = "hidden";
	},
	hide: function(forId) {
		var body = document.body;
		if (_.isString(forId)) {
			var id = forId + "_layer";
			document.body.removeChild(document.getElementById(id));
			var ls = body.querySelectorAll(".impex-mask-layer");
			if (ls.length == 0) body.style.overflow = "";
		}else{
			var ls = body.querySelectorAll(".impex-mask-layer");
			for (var i = ls.length; i--;) {
				if (!ls[i].id) {
					body.removeChild(ls[i]);
				}
			}
			body.style.overflow = "";
		}
	}
}

/**
 * 在自定义组件中，根据路径获取data对象中的属性
 */
function getData(comModel, path) {
	var model = null;
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			model = getObjByPath(p, path, 1);
			if (null == model) {
				p = p.parent;
			}else{
				break;
			}
		}
	}
	return model;
}

/**
 * 在自定义组件中，根据路径获取methods中的方法
 */
function getFn(comModel, path) {
	var model = null;
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			model = getObjByPath(p, path, 2);
			if (null == model) {
				p = p.parent;
			}else{
				break;
			}
		}
	}
	return model;
}

/**
 * 根据路径查询父模型
 */
function getParentModel(comModel, path) {
	if (_.isString(path)) {
		var p = comModel.parent;
		while(null != p) {
			if (null != getObjByPath(p, path, 1)) {
				return p;
			}else{
				p = p.parent;
			}
		}
	}
	return null;
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
		if (qs[i].view === view) {
			return qs[i];
		}
	}
	return null;
}

/**
 *	tip提示框
 *  @param	id	{String}	提示框的id
 *  @param	opt	{{Object}}	参数。{left:0px,top:0px,right:0px;bottom:0px,dir:'down'|'top'|'left'|'right',message:"提示框"}
 */
var Tip = {
	show: function(id, opt) {
		var html = '<div id="'+ id +'" class="impex-tip impex-tip-'+ opt.dir +'" style="left:'+ opt.left +'px;top:'+ opt.top +'px;">\
						<span><em></em></span><div class="text">'+ opt.message +'</div>\
					</div>';
		var tip = $("#" + id);
		if (!tip.attr("id")) {
			$(document.body).append(html);
		}else{
			tip.find(".text").html(opt.message);
			tip.css({
				left: (opt.left || 0) + "px",
				top: (opt.top || 0) + "px",
				right: (opt.right || 0) + "px",
				bottom: (opt.bottom || 0) + "px"
			});
		}
	}
}