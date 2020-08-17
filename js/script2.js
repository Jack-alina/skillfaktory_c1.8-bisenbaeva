function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

const $ = (e) => new jQuery(e);

jQuery.prototype.text = function(newText = null){
  if (newText === null) {
    this.each(element => element.innerText)
  }
  else {
    this.each(element => element.innerText = newText)
  }  
  return this;
}

// $('div').html('Измененное текстовое содержаение')