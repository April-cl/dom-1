const div = dom.create('<div id="div111">newDiv</div>');
console.log(div);
// dom.after(test1, div);
dom.before(test2, div);
dom.before(test1, div);

const div1 = dom.create("<div>div1</div>");
dom.append(div111, div1);

const div2 = dom.create('<div id="parent">div2</div>');
dom.wrap(test1, div2);
