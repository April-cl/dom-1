window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
  },
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length == 2) {
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
};
