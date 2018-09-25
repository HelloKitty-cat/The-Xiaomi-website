/**
 * 通过id名称获取元素对象
 * @param {id名称} id
 */
function $eleByID(id) {
	return document.getElementById(id);
}

/**
 * 兼容性封装设置元素内容
 * @param {元素对象} obj
 * @param {文本内容} txt
 */
function setTextContent(obj, txt) {
	if(obj.textContent) {
		obj.textContent = txt;
	} else {
		obj.innerText = txt;
	}

}
//setTextContent(box2,'下午不困');

/**
 * 兼容性封装读取元素内容
 * @param {标签对象} obj
 */
function getTextContent(obj) {
	if(obj.textContent) {
		return obj.textContent;
	} else {
		return obj.innerText;
	}
}
/**
 * 兼容读取样式方法
 * @param {标签对象} obj
 * @param {属性名} styleName
 */
function getStyle(obj, styleName) {
	//由于getComputedStyle全局的函数,这个函数其实是window下的属性
	if(window.getComputedStyle) {
		//			 	alert('高级');
		return getComputedStyle(obj)[styleName];
	} else {
		//			 	alert('低级');
		return obj.currentStyle[styleName];
	}
}

			/**
			 * 封装动画函数
			 * @param {元素对象} obj
			 * @param {目标值} target
			 */
			function animate(obj,target){
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					var step = 1226;
					
					var current = obj.offsetLeft;
					step = current < target?step:-step;
					current+=step;
					if(Math.abs(target-current) > Math.abs(step)){
						obj.style.left = current+'px';
					}else{
						obj.style.left = target +'px';
						clearInterval(obj.timer);
					}
					
				},10);
			}
