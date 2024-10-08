document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span"),l=e.firstChild;t.textContent=l.textContent.trim(),e.replaceChild(t,l),t.addEventListener("click",function(t){t.preventDefault();var l=e.querySelector("ul");l&&("none"===l.style.display?l.style.display="block":l.style.display="none")})});
//# sourceMappingURL=index.858e1614.js.map
