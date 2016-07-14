/**
 * 分页列表，监听oms.table.refresh 刷新列表内容广播
 * 
 * @event  oms.table.goto 点击分页切换时触发
 *         
 * @param  {[type]} 
 */
impex.component('impex-table-page',{
    $template:'<div {{=BINDPROPS}} class="impexs-component-tabe-page"><div style="text-align: right;">\
    	当前显示 {{(index-1)*pageSize + 1}} - {{(index*pageSize) > recordNum ? recordNum : (index*pageSize)}} 条, 共 {{recordNum}} 条\
    	</div>\
    	<div align="center" class="row">\
    		<ul class="pagination">\
    			<li class="select">\
    				每页\
    				<select x-value="pageSize" :change="changePageCount(this)">\
    					<option value="10">10</option>\
    					<option value="20">20</option>\
    					<option value="50">50</option>\
    					<option value="100">100</option>\
    				</select>\
    				条\
    			</li>\
    			<li class="{{index===1?\'disabled\':\'\'}}"\
    				:click="goto(index - 1,this);">上一页</li>\
    			<li x-if="index-2>0" :click="goto(1,this);">1</li>\
    			<li x-if="index-3>0">...</li>\
    			<li class="{{i===0?\'active\':\'\'}}"\
    				x-each="[-1,0,1] as i"\
    				x-if="index + i>0 && index + i<=pageCount"\
    				:click="goto(index + i,this);">\
    				{{index + i}}\
    			</li>\
    			<li x-if="pageCount - index > 2">...\
    			</li>\
    			<li x-if="pageCount - index >= 2" :click="goto(pageCount,this);">{{pageCount}}</li>\
    			<li class="{{index===pageCount?\'disabled\':\'\'}}" :click="goto(index + 1,this);">下一页</li>\
    			<li class="goto">\
    				到第 <input value="{{fastGotoNumber > pageCount ? pageCount : fastGotoNumber}}" x-model="fastGotoNumber" type="text"/> 页\
    				<button :click="fastGoto(this)" class="btn btn-default btn-sm">确定</button>\
    			</li>\
    		</ul>\
    	</div></div> ',
    pagetool: true,
	pageid:"",
    //pagination:{
	index:1,
	pageSize:10,
	recordNum:0,
	pageCount:0,
	fastGotoNumber: 2,
	goto:function(i,ot){
		//if(this.id != this.pageid) return;
		if(i<1)return;
		if(i>this.pageCount)return;
		if(i === this.index + "")return;

		this.index = i;
		this.fastGotoNumber = (i == this.pageCount) ? this.pageCount : (i　+ 1);
		ot.emit('impex.table.goto'+(this.id?("."+this.id):""),i, this.pageSize,this.id);
       // }
    },
    onInit: function() {
  		//this.pagination = $.extend({}, this.pagination);
		impex.top = this;
		this.pageid = this.id;
    },
    fastGoto: function(ot) {
		//if(this.id!=this.pageid) return;
		var that = this;
    	var type = event.type;
    	//var pagination = this.pagination;
    	var fastGotoNumber = that.fastGotoNumber;
    	var reg = /^([1-9]\d*)$/;
    	if (!reg.test(fastGotoNumber)) {
    		that.fastGotoNumber = that.pageCount > 1 ? 2 : 1;
    		that.goto(1, ot);
    		return;
    	}
    	
    	if (fastGotoNumber > that.pageCount) {
    		that.fastGotoNumber = that.pageCount; 
    	}
    	
    	if (("keydown" === type && event.keyCode === 13) || "click" === type) {
    		that.goto(parseInt(that.fastGotoNumber), ot);
    	}
    },
    changePageCount: function(com) {
		//if(this.id!=this.pageid) return;
		var that = this;
    	//var pagination = this.pagination;
    	that.pageSize = com.$view.el.value;
    	com.emit("impex.table.goto"+(this.id?("."+this.id):""), 1, that.pageSize,this.id);
    },
    refresh:function(pagination,pageid){
		
        if(pagination && this.id==pageid) {
        	for(var k in pagination){
                this[k] = pagination[k];
            }
        	var pi = pagination.index + 1;
        	if (pi > pagination.pageCount) pi = pagination.index;
        	this.fastGotoNumber = pi;
        }
    },
    onCreate:function(){
		var that = this;
        this.on('impex.table.refresh',function(target,pagination,pageid){			
			that.pageid = pageid;
			if(that.id!=that.pageid) return;
			that.pageCount = pagination.pageCount;
			that.recordNum = pagination.recordNum;
			that.index = pagination.index;
            that.refresh(pagination,pageid);
        });
    },
});

/**
 * oms-form组件
 */
impex.component('impex-form', {
	$template: '<form {{=BINDPROPS}} x-submit="onsubmitt">{{=CONTENT}}\
				<div id="modalFooter" class="modal-footer" style="text-align:center;">\
						<button id="submitbtn" class="btn btn-primary" type="submit" x-disabled="studentForm.invalid" >&nbsp;&nbsp;保 存&nbsp;&nbsp;</button>\
						<button id="cancelbtn" class="btn btn-primary" :click="cancel();">&nbsp;&nbsp;关 闭&nbsp;&nbsp;</button> \
				</div>\
				</form>',   
	onInit: function() {
		
	},	
	onsubmitt: function() {
		console.log("1");
		try{
			if(this.onsubmit!=undefined){
				this.$parent.closest(this.onsubmit)[this.onsubmit](this.$view.el);
			}
		}catch(e){
			console.log("调用onsubmit函数出错");
		}
	}
});

/**
 * impex-area组件
 */
impex.component('impex-area', {
	ps: [],
	cs: [],
	as: [],
	class: "",
	scss: "",
	value: "",
	id: "",
	$template: '<div class="impex-area {{=class}}" id="{{=id}}">\
				<select class="{{scss}}" name="{{=pname}}" :change="pchange(this)">\
					<option x-each="ps as p" value="{{p.p}}">{{p.p}}</option>\
				</select>\
				<select class="{{scss}}" name="{{=cname}}" :change="cchange(this)">\
					<option x-each="cs as c" value="{{c.n}}">{{c.n}}</option>\
				</select>\
				<select class="{{scss}}" name="{{=aname}}" :change="achange(this)" x-show="as.length > 0">\
					<option x-each="as as a" value="{{a.s}}">{{a.s}}</option>\
				</select>\
				<input x-if="name" type="hidden" name="{{=name}}" value="{{value}}">\
				</div>', 
	onInit: function() {
		this.ps = _impex_areaList;
		this.cs = this.ps[0].c;
		as = this.cs[0].a || [];
		this.setHiddenValue(0 , 0, 0);
	},
	// 设置隐藏域值
	setHiddenValue: function(a, b, c) {
		if (this.name) {
			var v = "";
			v += this.ps[a].p;
			if (this.cs.length > 0) {
				v += "," + this.cs[b].n;
			}
			if (this.as.length > 0) {
				v += "," + this.as[c].s;
			}
		}
		this.value = v;
	},
	pchange: function(com) {
		var v = "";
		if (com.$view) {
			v = com.$view.el.selectedIndex;
		}else{
			v = com;
		}
		this.cs = this.ps[v].c || [];
		this.as = this.cs[0].a || [];
		var el = this.$view.el;
		setTimeout(function() {
			var ss = el.querySelectorAll("select");
			var pselect = ss[0];
			var cselect = ss[1];
			var aselect = ss[2];
			if (cselect.options.length != 0) cselect.options[0].selected = true;
			if (aselect.options.length != 0) aselect.options[0].selected = true;
		}, 10);
		this.setHiddenValue(v, 0, 0);
	},
	cchange: function(com) {
		var v = com.$view.el.selectedIndex;
		this.as = this.cs[v].a || [];
		var el = this.$view.el;
		var ss = el.querySelectorAll("select");
		setTimeout(function() {
			var aselect = ss[2];
			aselect.options[0].selected = true;
		}, 10);
		this.setHiddenValue(ss[0].selectedIndex, v, 0);
	},
	achange: function(com) {
		var el = this.$view.el;
		var ss = el.querySelectorAll("select");
		var v = com.$view.el.selectedIndex;
		this.setHiddenValue(ss[0].selectedIndex, ss[1].selectedIndex, v);
	},
	setValue: function(p, c, a) {
		var ss = this.$view.el.querySelectorAll("select");
		var pselect = ss[0];
		
		var pv, po;
		for (var i = this.ps.length; i--;) {
			if (this.ps[i].p == p) {
				pv = i;
				po = this.ps[i];
			}
		}
		if (!pv) {
			pselect.options[0].selected = true;
			po = this.ps[0];
		}else{
			pselect.options[pv].selected = true;
		}
		
		
		if (!po) {
			this.cs = [];
		}else{
			this.cs = po.c || [];
		}
		var cv, co;
		for (var i = this.cs.length; i--;) {
			if (this.cs[i].n == c) {
				cv = i;
				co = this.cs[i];
			}
		}

		if (!co) {
			this.as = [];
		}else{
			this.as = co.a || [];
		}
		var av;
		for (var i = this.as.length; i--;) {
			if (this.as[i].s == a) {
				av = i;
			}
		}
		
		var el = this.$view.el;
		setTimeout(function() {
			var ss = el.querySelectorAll("select");
			var cselect = ss[1];
			var aselect = ss[2];
			if (cselect.options.length != 0) cselect.options[cv].selected = true;
			if (aselect.options.length != 0) aselect.options[av].selected = true;
		}, 10);
		this.setHiddenValue(pv, cv, av);
	}
});

/**
 * impex-linkbutton组件
 */
impex.component("impex-linkbutton", {
	template:  '<div class="impex-linkbutton {{=class}}" :click="clickHandler()">\
					<div class="icon {{=iconcls}}" x-if="_.isString(iconcls)"></div>\
					<div class="text" x-if="_.isString(text)">{{=text}}</div>\
				</div>',
	methods: {
		clickHandler: function() {
			var fn = getFn(this, this.data.click);
			if (null != fn) {
				fn(this);
			}else{
				this.emit("linkbutton.click");
			}
		}
	}
});

/**
 * impex-linkbutton组件
 */
impex.component("impex-linkbutton", {
	template:  '<div class="impex-linkbutton {{=class}}" :click="clickHandler()">\
					<div class="icon {{=iconcls}}" x-if="_.isString(iconcls)"></div>\
					<div class="text" x-if="_.isString(text)">{{=text}}</div>\
				</div>',
	methods: {
		clickHandler: function() {
			var fn = this.m(this.data.click);
			if (null != fn) {
				fn(this);
			}else{
				this.emit("linkbutton.click");
			}
		}
	}
});

/**
 * impex-datagrid组件
 */
impex.component("impex-datagrid", {
	template: '<div id="{{id}}" class="impex-datagrid {{=class}}">\
					<div class="title" x-if="_.isString(title)"><i x-if="_.isString(titleiconcls)" class="icon {{=titleiconcls}}"></i> <div class="text">{{# title}}</div></div>\
					<div class="toolbar" x-if="_.isString(toolbar)">\
						{{# toolbarHtml}}\
					</div>\
					<table class="table" cellspacing="0" cellpadding="0" border="0">\
						<thead class="head">\
						<tr x-order="##orderId">\
							<th class="line-number" x-if="_.isString(linenumber) && \'true\' == linenumber"></th>\
							<th order="{{col.order ? col.code : \'\'}}" x-each="columns as col"  style="text-align:{{col.align}};width:{{col.width}}px;">\
								<span x-if="!col.checkbox">{{col.title}}</span>\
								<span x-if="col.checkbox" class="checkAll"><input :click="checkAll(this)" type="checkbox"/></span>\
							</th>\
						</tr>\
						</thead>\
						<tbody>\
							<tr x-each="dataSource as d => limitBy:pageSize:startSize .orderBy:##orderId[\'key\']:##orderId[\'dir\']">\
								<td class="line-number" x-if="_.isString(linenumber) && \'true\' == linenumber">{{$index + 1 + start}}</td>\
								<td x-each="columns as col" style="text-align:{{col.align}};width:{{col.width}}px;">\
									<span x-if="!col.checkbox">\
										<span x-if="_.isString(col.formatter)">{{# this.m(col.formatter)(d[col.code], d)}}</span>\
										<span x-if="!col.formatter">{{d[col.code]}}</span>\
									</span>\
									<span x-if="col.checkbox" class="checkbox"><input :click="checkItem(this)" value="{{d[col.code]}}" type="checkbox"/></span>\
								</td>\
							</tr>\
						</tbody>\
					</table>\
					<div x-if="_.isString(pagination) && \'true\' == pagination"><impex-pager id="##pagerId"></impex-pager></div>\
				</div>',
	data: {
		dataSource: [],
		columns: [],
		$checkIds: [],
		allChecked: false,
		pagerId: "",
		pageSize: 0,
		startSize: 0,
		start: 0,
		queryParams: {}
	},
	onInit: function() {
		if (_.isString(this.data.url)) {	// 远程数据源
			if (!this.hasPager()) {	// 远程不带分页
				this.loadUrl();
			}else{
				this.data.queryParams.rows = 10;
				this.data.queryParams.page = 1;
				this.data.start = 0;
				this.loadUrl();
			}
		}else{
			// 初始化数据源
			var dataSource = getData(this, this.data.ds);
			if (null != dataSource) {
				this.data.dataSource = dataSource;
			}

			if (_.isString(this.data.ds)) {
				var p = getParentModel(this, this.data.ds);						
				if (null != p) {
					var that = this;
					p.watch(this.data.ds, function(target, name, type, newVal, oldVal) {
						if ("update" != type) return;
						that.data.dataSource = newVal;
						
						if (that.hasPager()) {
							var pagerConfig = getData(that, that.data.pager);
							var pager = that.getPager();
							that.data.startSize = 0;
							if (0 == that.data.pageSize) {
								that.data.pageSize = (null == pagerConfig) ? 10 : (pagerConfig.pageSize || 10);
							}
							that.data.start = that.data.startSize;
							pager.setConfig({
								current: 1,
								pageNos: (null == pagerConfig) ? false : (pagerConfig.pageNos || false),
								total: that.data.dataSource.length,
								pageSize: that.data.pageSize
							});
						}
						that.clearCheckbox();
					});
				}
			}
		}

		// 初始化表头
		var columns = getData(this, this.data.cols);
		if (null != columns) this.data.columns = columns;
		
		// 初始化工具栏
		if (_.isString(this.data.toolbar)) {
			var barEl = document.getElementById(this.data.toolbar);
			if (null != barEl) {
				this.data.toolbarHtml = barEl.innerHTML;
				barEl.style.display = "none";
			}
		}

		if (!this.data.id) this.data.id = "impex_grid_" + getId();
	},
	onDisplay: function() {
		// 初始化分页
		if (this.hasPager()) {
			if (_.isString(this.data.pager)) {
				var p = this.data.pager;
				var pagerConfig = getData(this, this.data.pager);
				
				this.data.pageSize = p.pageSize || 0;
				this.data.startSize = (p.current - 1) * this.data.pageSize || 0;
				if (null != pagerConfig) {
					this.getPager().setConfig(pagerConfig);
				}
			}else{
				this.data.pageSize = 0;
				this.data.startSize = 0;
				this.getPager().setConfig({});
			}
		}

		// 监听分页跳转
		this.on("pager.goto", function(pager, currentPage, pageSize) {
			if (_.isString(this.data.url) && this.hasPager()) { // 远程带分页
				this.data.queryParams.page = currentPage;
				this.data.queryParams.rows = pageSize;
				this.data.start = pageSize * (currentPage - 1);
				var that = this;
				this.loadUrl(function() {
					that.clearCheckbox();
				});
			}else{
				this.data.pageSize = pageSize;
				this.data.startSize = (currentPage - 1) * this.data.pageSize;
				this.data.start = this.data.startSize;
				this.clearCheckbox();
			}
		});
	},
	clearCheckbox: function() {	// 清除checkbox选中状态
		var gridEl = document.getElementById(this.data.id);
		var all = gridEl.querySelectorAll(".checkAll input");
		if (all.length > 0) {
			all[0].checked = false;
			var itemChecks = gridEl.querySelectorAll(".checkbox input")
			for (var i = itemChecks.length; i--;) {
				itemChecks[i].checked = false;
			}
		}		
	},
	onBeforeCompile:function(str){
		this.data.pagerId = "pagerId_" + getId();
		return str.replace(/##orderId/g, "gridOrder_" + getId())
				  .replace(/##pagerId/g, this.data.pagerId);
	},
	methods:　{
		checkAll: function(checkbox) {
			var el = checkbox.view.el;
			var gridEl = document.getElementById(this.data.id);
			var checkboxs = gridEl.querySelectorAll(".checkbox input");
			if (el.checked) {
				var cs = [];
				var gridEl = document.getElementById(this.data.id);
				var checkboxs = gridEl.querySelectorAll(".checkbox input");
				for (var i = 0; i < checkboxs.length; i++) {
					cs.push(checkboxs[i].value);
				}
				this.data.$checkIds = cs;
			}else{
				this.data.$checkIds = [];
			}
			
			for (var i = checkboxs.length; i--;) {
				checkboxs[i].checked = el.checked;
			}
		},
		checkItem: function(checkbox) {
			var el = checkbox.view.el;
			if (el.checked) {
				this.data.$checkIds.push(el.value);
			}else{
				for (var i = 0; i < this.data.$checkIds.length; i++) {
					if (this.data.$checkIds[i] == el.value) {
						this.data.$checkIds.splice(i, 1);
						break;
					}
				}
			}
			var gridEl = document.getElementById(this.data.id);
			var all = gridEl.querySelectorAll(".checkAll input");
			var itemChecks = gridEl.querySelectorAll(".checkbox input");
			all[0].checked = this.data.$checkIds.length == itemChecks.length;
		}
	},
	getChecked: function() {
		return this.data.$checkIds.join(",");
	},
	getPager: function() {
		return impex.cget(this.data.pagerId);
	},
	hasPager: function() {	// 是否含有分页
		return _.isString(this.data.pagination) && "true" == this.data.pagination;
	},
	reload: function(reloadParams) {
		var params = this.data.queryParams;
		if ($.isPlainObject(reloadParams)) {
			params = _.extend(params, reloadParams);
		}
		this.loadUrl();
	},
	loadUrl: function(cbk) {
		var url = this.data.url;
		var params = this.data.queryParams;
		var that= this;
		$.ajax({
			url: url,
			data: params,
			dataType: "json",
			success: function(rs) {
				cbk && cbk();
				that.data.dataSource = rs.rows || "";
				if (rs.total && that.hasPager()) {
					var pager = that.getPager();
					var pagerConfig = getData(that, that.data.pager);
					if (null == pagerConfig) {
						pager.setConfig({
							current: params.page,
							pageSize: params.rows,
							total: rs.total
						});
					}else{
						pager.setConfig({
							current: pagerConfig.page || params.page,
							pageSize: pagerConfig.rows || params.rows,
							total: pagerConfig.total || rs.total,
							pageNos: pagerConfig.pageNos || false
						});
					}
				}
			},
			error: function(rs) {
				console.log("请求出错，错误对象如下：");
				console.log(rs);
			}
		});
	}
});

/**
 * impex-pager分页组件
 */
impex.component("impex-pager", {
	template: 	'<div class="impex-pager {{=class}}">\
					<select class="pageNos" :change="changePageSize(this)">\
						<option x-each="pageNos as no" value="{{no}}">{{no}}</option>\
					</select>\
					<div class="separator"></div>\
					<div class="btn {{current == 1 ? \'btn-disabled\' : \'\'}}" :click="goto(1)"><i class="pagination-icon first-page"></i></div>\
					<div class="btn {{current == 1 ? \'btn-disabled\' : \'\'}}" :click="goto(current - 1)"><i class="pagination-icon prev-page"></i></div>\
					<div class="separator"></div>\
					<div class="pageNum-container">第 <input value="{{current}}" :keypress="nonstop(this)" type="text" class="pageNum" size="2"/> 页 共 {{totalPage}} 页</div>\
					<div class="separator"></div>\
					<div class="btn {{current == totalPage ? \'btn-disabled\' : \'\'}}" :click="goto(current + 1)"><i class="pagination-icon next-page"></i></div>\
					<div class="btn {{current == totalPage ? \'btn-disabled\' : \'\'}}" :click="goto(totalPage)"><i class="pagination-icon last-page"></i></div>\
					<div class="separator" x-show="false"></div>\
					<div class="btn" x-show="false" :click="refresh()"><i class="pagination-icon refresh"></i></div>\
					<div class="pagination-info">显示 {{(current - 1) * pageSize + 1}} 到 {{(pageSize * current) > total ? total : (pageSize * current)}} 条 共 {{total}} 条</div>\
				</div>',
	data: {
		current: 1,
		pageSize: 10,
		total: 0,
		totalPage: 0,
		pageNos: [10, 20, 30, 40, 50]
	},
	
	onInit: function() {
		
	},
	setConfig: function(config) {
		this.data.current = config.current || this.data.current;
		this.data.pageSize = config.pageSize || this.data.pageSize;
		this.data.total = config.total || this.data.total;
		this.data.pageNos = config.pageNos || this.data.pageNos;
		
		this.data.totalPage = Math.ceil(this.data.total/this.data.pageSize);
	},
	methods: {
		goto: function(current) {
			if (current == this.data.current || current <= 0 || current > this.data.totalPage) return;
			this.data.current = current;
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		nonstop: function(input) {
			if (event.keyCode != 13) return;
			var value = input.view.el.value;
			if (isNaN(value) 
				|| (value.indexOf("-") != -1 || value.indexOf(".") != -1)) {
				this.data.current = 1;
				input.view.el.value = 1;
				this.emit("pager.goto", this.data.current, this.data.pageSize);
				return;
			}
			value = parseInt(value);
			if (value > this.data.totalPage) {
				this.data.current = this.data.totalPage;
			}else if (value == 0){
				this.data.current = 1;
			}else{
				this.data.current = value;
			}
			input.view.el.value = this.data.current;
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		refresh: function() {
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		changePageSize: function(select) {
			this.data.current = 1;
			this.data.pageSize = select.view.el.value;
			this.data.totalPage = Math.ceil(this.data.total/this.data.pageSize);
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		}
	}
});