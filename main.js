let spanProgress = document.querySelectorAll(".skill-bar span");
let textProgress = document.querySelectorAll(".text-progress");
let skillSection = document.querySelector(".skills")

var flag = false;

window.onscroll = function () {
    if (window.scrollY >= skillSection.offsetTop - 300 && (!flag)) {
        flag = true
        spanProgress.forEach((ele) => (ele.style.width = ele.dataset.progress));
      
        textProgress.forEach(function(ele, index) {
          var limit = parseFloat(spanProgress[index].dataset.progress)
          let counter = setInterval(function(){
              ele.textContent++
      
              if(ele.textContent >= parseFloat(spanProgress[index].dataset.progress)) {
                  clearInterval(counter)
              }
          }, 2000 / limit)
      })
    }
};


// Gallery
let gallerySwitcher = document.querySelectorAll(".switcher")
let category = document.querySelectorAll(".projects-container article")

function showElements(category, type) {
    category.forEach(function(ele) {

        if(ele.classList.contains(type)) {
            ele.style.display = "flex"
            setTimeout(() => {ele.style.opacity = "1"}, 500)
        }

        ele.classList.contains(type)
        ? ele.style.display = "flex"
        : ""
    })
        
}

addEventListener("click", function(evt) {
    if(evt.target.classList.contains("switcher")) {
        category.forEach(ele => ele.style.cssText = "display: none; opacity: 0")

        gallerySwitcher.forEach(ele => ele.classList.remove("active"))
        evt.target.classList.add("active")
    }

    if(evt.target.dataset.category === "landing-category") {
        showElements(category, evt.target.dataset.category)

    } else if (evt.target.dataset.category === "webapp-category") {
        showElements(category, evt.target.dataset.category)

    } else if (evt.target.dataset.category === "api-category") {
        showElements(category, evt.target.dataset.category)

    } else if (evt.target.dataset.category === "all") {
        category.forEach(function(ele) {
            ele.style.display = "flex"
            setTimeout(() => {ele.style.opacity = "1"}, 500)
        })
    }
})
