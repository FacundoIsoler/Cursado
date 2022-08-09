var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
    // console.log(startEl.children);
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if (matchFunc(startEl)) resultSet.push(startEl);
  let children = Array.from(startEl.children);
  for (let i = 0; i < children.length; i++) {
    let resultado = traverseDomAndCollectElements(matchFunc, children[i]);
    resultSet = [...resultSet, ...resultado];
  }

  // if (startEl.children.length) {
  //   for (let el of startEl.children) {
  //     const resultado = traverseDomAndCollectElements(matchFunc, el);
  //     resultSet = [...resultSet, ...resultado];
  //   }
  // }
  return resultSet;
  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// $('#algo') => un elemento cuyo id sea 'algo'
var selectorTypeMatcher = function (selector) {
  // tu código aquí
  //console.log(selector); => string
  if (selector[0] === "#") return "id"; //#id
  if (selector[0] === ".") return "class"; //.class
  if (selector.split(".").length > 1) return "tag.class"; // ['tag', 'class']
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  // true o false
  var selectorType = selectorTypeMatcher(selector); //string  id, class, tag.class, tag
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elemento) => `#${elemento.id}` === selector;
    // {
    //   // console.log(selector); // "#price"
    //   // console.log(elemento); // <div id=price />
    //   if (`#${elemento.id}` === selector) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      // console.log(selector); // ".photo"
      // console.log(elemento); // <div class='photos uno dos' /> [photos, uno, dos]
      // console.log("clase:", elemento.className, "lista:", elemento.classList);
      return elemento.classList.contains(selector.replace(".", "")); //slice , substring
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      // console.log(selector); // "img.thumbnail"
      // console.log(elemento); // <img class=thumbnail />
      const [tag, tagClass] = selector.split("."); // [img , thumbnail]
      const elementoClassName = elemento.className.split(" ");
      //console.log(elementoClassName);
      // console.log(elemento.tagName);
      const elementoTagName = elemento.tagName.toLowerCase();
      //return tag === elementoTagName && elementoClassName.includes(tagClass);
      return (
        matchFunctionMaker(tag)(elemento) &&
        matchFunctionMaker(`.${tagClass}`)(elemento)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (elemento) =>
      elemento.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
