document.addEventListener("DOMContentLoaded", function(e) {
  const textArea = document.getElementById("source");
  const resultText = document.getElementById("destination");
  const resetIcon =  document.querySelector("#sourceContainer .icon-reset");
  const copyIcons =  document.querySelector("#destinationContainer .icons");
  const sourceCount = document.getElementById("sourceCount");
  const destinationCount = document.getElementById("destinationCount");

  const charFilter = /[\s\.,;:\-—]/g;

  const t = new Transliterator(Object.values(T_LITERATOR_CONFIGS));
  let latinType;
  // let respectAcronyms = false;

  const markdownConverter = new showdown.Converter();

  // Tabs renderer
  function renderTabs(srcList, container, clickHandler) {
    let expandable = container.classList.contains("expandable");

    Object.keys(srcList).forEach(function(key) {
      // Make tab
      let a = document.createElement("a");
      a.className = "nav-link";
      a.id = key;
      a.innerHTML = srcList[key]["name"];
      if (srcList[key]["year"]) a.innerHTML += " <sup class='secondary'>" + srcList[key]["year"] + "</sup>"

      // Bind selection on click
      a.addEventListener("click", clickHandler);
      let li = document.createElement("li");
      li.className = "nav-item";

      if (expandable && !srcList[key]["isEssential"]) {
        a.classList.add("link-secondary");
        li.classList.add("hidden");
      }
      li.appendChild(a);

      if (expandable) {
        container.insertBefore(li, container.querySelector(".expandable-control"));
      } else {
        container.appendChild(li);
      }
    });
  }

  // Render source template tabs
  renderTabs(SOURCE_TEMPLATES, document.getElementById("sourceTemplate"), function(e) {
    if (!this.classList.contains("active")) {
      let txt = SOURCE_TEMPLATES[this.id]["text"];
      document.getElementById("source").value = txt;
      if (!txt) {
        textArea.focus();
      }
      setActiveTab(this);
      inputUpdated();
    }
    e.preventDefault();
  });

  // Render latin tabs
  renderTabs(T_LITERATOR_CONFIGS, document.getElementById("latinType"), function(e) {
    if (!this.classList.contains("active")) {
      latinType = this.id;
      translateInput();
      populateLatinDesc();
      setActiveTab(this);
      updateURL();
    }
    e.preventDefault();
  });

  // Expand/collapse tabs
  document.querySelectorAll(".expandable-control a").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      this.closest(".expandable").classList.toggle("expanded");
      e.preventDefault();
    });
  });

  // Mark tab as active
  function setActiveTab(a) {
    a.closest(".nav").querySelectorAll(".nav-link").forEach((sibling) => (sibling.classList.remove("active")));
    a.classList.add("active");

    let expandableContainer = a.closest(".expandable");
    if (expandableContainer) {
      expandableContainer.querySelectorAll(".nav-item").forEach((sibling) => (sibling.classList.remove("has-active")));
      a.closest(".nav-item").classList.add("has-active");
    }
  };

  // Update URL
  function updateURL() {
    let params = "";
    let sourceTemplate = document.querySelector("#sourceTemplate .active").id;
    params += "?l=" + latinType;
    if (textArea.value.length) {
      if (document.querySelector("#sourceTemplate li:first-child a").classList.contains("active")) {
        params += "&s=" + textArea.value;
      } else {
        params += "&t=" + sourceTemplate;
      }
    } 
    window.history.pushState(
      {
        l : latinType,
        s : textArea.value,
        t : sourceTemplate
      },
      "Latynka",
      window.location.href.split('?')[0] + params
    );
  }

  // Apply browser history
  window.addEventListener("popstate", function(e) {
    if (e.state) {
      latinType = e.state.l;
      if (e.state.t && e.state.t != document.querySelector("#sourceTemplate li:first-child a").id) {
        setActiveTab(document.getElementById(e.state.t));
        textArea.value = SOURCE_TEMPLATES[e.state.t]["text"];
      } else {
        setActiveTab(document.querySelector("#sourceTemplate li:first-child a"));
        textArea.value = e.state.s;
      }
    } else {
      latinType = document.querySelector("#latinType li:first-child a").id;
      textArea.value = "";
    }

    setActiveTab(document.getElementById(latinType));
    inputUpdated(true);
    populateLatinDesc();
  });

  // Populate selected latin description
  function populateLatinDesc() {
    const LETTER_INDEX = {
      1: "а",
      2: "â",
      3: "b",
      4: "c",
      5: "ç",
      6: "d",
      7: "e",
      8: "f",
      9: "g",
      10: "ğ",
      11: "h",
      12: "ı",
      13: "i",
      14: "j",
      15: "k",
      16: "l",
      17: "m",
      18: "n",
      19: "ñ",
      20: "o",
      21: "ö",
      22: "p",
      23: "q",
      24: "r",
      25: "s",
      26: "ş",
      27: "t",
      28: "u",
      29: "ü",
      30: "v",
      31: "y",
      32: "z"
    }

    // Populate desc
    let desc = document.getElementById("desc-txt");
    desc.innerHTML = markdownConverter.makeHtml(T_LITERATOR_CONFIGS[latinType]["desc"]);
    // Setup internal links
    desc.querySelectorAll("a").forEach(function(a) {
      a.addEventListener("click", function(e) {
        if (this.href.includes("/?l=")) {
          e.preventDefault();
          let latinTabID = this.href.split("/?l=")[1];
          let latinTab = document.getElementById(latinTabID);
          latinTab && latinTab.dispatchEvent(new Event("click", { "bubbles": true }));
        }
      });
    });

    // Populate table
    let dic = t.getConfigTransliterationInfo();
    let html = "<tr><td colspan=6></td></tr>";
    
    for (let i = 1; i <= 10; i++) {
      html += "<tr>";
      for (let j = 0; j <= 2; j++) {
        let letter = LETTER_INDEX[i + j * 11].toLocaleUpperCase('tr-TR') + " " + LETTER_INDEX[i + j*11];
        html += "<th>" + letter + "</th><td>" + dic[letter] + "</td>";
      }
      html += "</tr>";
    }
    document.querySelector("#desc-alphabet tbody").innerHTML = html;

    // Extra chars, if exist
    if (dic["_others_"]) {
      document.querySelector("#desc-symbols dd").innerHTML = dic["_others_"];
      document.querySelector("#desc-symbols").classList.remove("d-none");
    } else {
      document.querySelector("#desc-symbols").classList.add("d-none");
    }

    // Link
    if (T_LITERATOR_CONFIGS[latinType]["link"]) {
      document.querySelector("#desc div>a").href = T_LITERATOR_CONFIGS[latinType]["link"];
      document.querySelector("#desc div>a").classList.remove("d-none");
    } else {
      document.querySelector("#desc div>a").classList.add("d-none");
    }
  }

  // Translate input
  function translateInput() {
    let srcCount = textArea.value.trim().replace(charFilter, '').length;

    t.useConfig(latinType);
    let trans = (srcCount) ? t.transliterate(textArea.value) : t.transliterate(textArea.placeholder);
    let destCount = trans.replace(charFilter, '').length;
    
    resultText.innerHTML = trans.replaceAll("\n", "<br/>");
    sourceCount.querySelector("span").innerText = srcCount;
    destinationCount.querySelector("span").innerText = destCount;
  }

  // Respond to input
  function inputUpdated(skipHistory = false) {
    // If empty
    if (!textArea.value.trim().replace(charFilter, '').length) {
      textArea.value = "";
      textArea.style.height = "0px";
      resetIcon.classList.add("d-none");
      copyIcons.classList.add("d-none");
      resultText.classList.add("text-muted");

      // Reset template tabs
      setActiveTab(document.querySelector("#sourceTemplate li:first-child a"));

      sourceCount.classList.add("d-none");
      destinationCount.classList.add("d-none");
    // If not empty
    } else {
      resetIcon.classList.remove("d-none");
      copyIcons.classList.remove("d-none");
      resultText.classList.remove("text-muted");
      sourceCount.classList.remove("d-none");
      destinationCount.classList.remove("d-none");
    }

    // Textarea auto font size
    let destination = document.getElementById("destination");
    if (textArea.value.trim().length > 200) {
      textArea.classList.remove("fs-5");
      textArea.classList.add("fs-6");
      destination.classList.remove("fs-5");
      destination.classList.add("fs-6");
    } else {
      textArea.classList.remove("fs-6");
      textArea.classList.add("fs-5");
      destination.classList.remove("fs-6");
      destination.classList.add("fs-5");
    }

    // Textarea auto-height
    textArea.style.minHeight = "8rem";
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px" ;
    textArea.style.minHeight = "100%";

    if (!skipHistory) updateURL();
    translateInput();
  }
  
  textArea.addEventListener("input", inputUpdated);
  textArea.addEventListener("keyup", function(e) {
    setActiveTab(document.querySelector("#sourceTemplate li:first-child a"));
    inputUpdated();
  });

  // Text area reset
  resetIcon.addEventListener("click", function(e) {  
    textArea.value = ""; 
    inputUpdated();
    document.getElementById("source").focus();
    e.preventDefault();
  });

  // Toggle respectAcronyms
  // document.getElementById("abbr").addEventListener("click", function(e) {  
  //   respectAcronyms = !respectAcronyms;
  // });

  // Copy helper
  function copyStr(str, subject) {
    let el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // Render message
    let msg = document.createElement("div");
    msg.classList.add("alert", "alert-success", "tmp", "small");
    msg.innerHTML = subject + " скопійовано";
    document.body.append(msg);
    setTimeout(function() {
      msg.remove();
    }, 3000);
  }

  // Copy text
  document.querySelector("#destinationContainer .icon-copy").addEventListener("click", function(e) {
    copyStr(resultText.innerHTML.replaceAll("<br>", "\n"), "Текст");
    e.preventDefault();
  });

  // Copy link
  document.querySelector("#destinationContainer .icon-link").addEventListener("click", function(e) {
    copyStr(window.location.href, "Посилання");
    e.preventDefault();
  });

  // Tab scroll behavior
  document.querySelectorAll(".h-scroll-container").forEach(function(scrollContainer) {
    let containerWidth = scrollContainer.clientWidth;
    let lastElementPositionLeft = scrollContainer.querySelector("ul li:last-child").getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left;
    let lastElementWidth = scrollContainer.querySelector("ul li:last-child").clientWidth;

    // Fade out edges on scroll
    scrollContainer.addEventListener("scroll", function(e) {
      let scrollOffset = scrollContainer.querySelector(".h-scroll-content").getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left;
      if (scrollOffset < 0) {
        this.closest(".h-scroll").querySelector(".fadeout-left").classList.remove("d-none");
      } else {
        this.closest(".h-scroll").querySelector(".fadeout-left").classList.add("d-none");
      }
      let scrolledTo = -(scrollOffset - containerWidth);
      let lastElementEdge = lastElementPositionLeft + lastElementWidth - 10; // Removing extra for confidence
      if (scrolledTo < lastElementEdge) {
        this.closest(".h-scroll").querySelector(".fadeout-right").classList.remove("d-none");
      } else {
        this.closest(".h-scroll").querySelector(".fadeout-right").classList.add("d-none");
      }
    });
  });

  // Toggle theme
  document.querySelector(".theme-control").addEventListener("click", function(e) {
    document.querySelector("body").classList.toggle("dark");
    if (document.querySelector("body").classList.contains("dark")) {
      localStorage.setItem("darkTheme", JSON.stringify(true));
    } else {
      localStorage.removeItem("darkTheme");
    }
    e.preventDefault();
  });

  // Cookies message
  // if (!JSON.parse(localStorage.getItem("cookiesAccepted"))) {
  //   let msg = document.createElement("div");
  //   msg.classList.add("alert", "alert-warning", "small");
  //   msg.innerHTML = "Ми використовуємо Google Analytics, що зберігає кукі. Залишаючись на цій сторінці, ти погоджуєшся з цим.";
  //   let btn = document.createElement("a");
  //   btn.classList.add("link", "mx-1");
  //   btn.innerText = "Погоджуюсь";
  //   btn.addEventListener("click", function(e) {
  //     localStorage.setItem("cookiesAccepted", JSON.stringify(true));
  //     msg.remove();
  //     e.preventDefault();
  //   });
  //   msg.append(btn);
  //   document.body.append(msg);
  // }

  // Set theme from cookies
  if (JSON.parse(localStorage.getItem("darkTheme"))) document.querySelector("body").classList.add("dark");

  // React to URL params
  let url = new URL(window.location.href);
  let l = url.searchParams.get("l");
  let tab = document.getElementById(l);
  if (tab) {
    latinType = l;
    setActiveTab(tab);

    let sourceTemplate = url.searchParams.get("t"); 
    if (sourceTemplate) {
      setActiveTab(document.getElementById(sourceTemplate));
      textArea.value = SOURCE_TEMPLATES[sourceTemplate]["text"];
    } else {
      textArea.value = url.searchParams.get("s");
      setActiveTab(document.querySelector("#sourceTemplate li:first-child a"));
    }
  } else {
    let latinTab = document.querySelector("#latinType li:first-child a");
    latinType = latinTab.id;
    setActiveTab(latinTab);
    textArea.focus();
  }
  inputUpdated(true);
  populateLatinDesc();
  
  // Page title animation
  let pt = "Qırım ≠ kirim";
  let ptPos = 0;
  let ptCycles = 0;
  let ptInt = setInterval(function() {
    if (ptCycles < 2) {
      if (ptCycles % 2 == 0) {
        document.title = t.transliterate(pt.substring(0, ptPos)) + pt.substring(ptPos, pt.length);
      } else {
        document.title = pt.substring(0, ptPos) + t.transliterate(pt.substring(ptPos, pt.length));
      }
  
      if (ptPos == pt.length) {
        ptPos = 0;
        ptCycles++;
      }
      ptPos++;
      if (pt.substring(ptPos, ptPos + 1) == " " || "а") ptPos++;
    } else {
      clearInterval(ptInt);
    }
  }, 300);
});