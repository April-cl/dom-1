const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.prev(s2));

const t = dom.find("#siblings")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(dom.index(s2));
