// impexui对象
var impexui = {};

/**
 * 获取impex的最顶端组件模型
 */
impexui.render = function(domEl, model, delay) {
	if (!delay) {
		impex.render(domEl, model);
	}else{
		setTimeout(function() {
			impex.render(domEl, model);
		}, delay);
	}
}