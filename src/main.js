const fn = () => {
  console.log("点到我啦");
};

dom.on(test1, "click", fn);
dom.on(test2, "click", () => {
  dom.off(test1, "click", fn);
});
