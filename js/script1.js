function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

const $ = (e) => new jQuery(e);

jQuery.prototype.html = function(newHTML = null){
  if (newHTML === null) {
    this.each(element => element.innerHTML)
  }
  else {
    this.each(element => element.innerHTML = newHTML)
  }  
  return this;
}

// $('button:first-child').html('Кнопка 1') // изменяет html-содержимое первой кнопки
