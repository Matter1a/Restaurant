var dish = document.getElementById("hiddendish")
var textbtn = document.getElementById("btn")
var dish2 = document.getElementById("hiddendishtwo")
var textbtn2 = document.getElementById("btntwo")
var dish3 = document.getElementById("hiddendish3")
var textbtn3 = document.getElementById("btn3")
function Hidden(b) {
    if (dish.style.display == "flex") {
        textbtn.textContent = "Показать еще..."
        dish.style.display = "none";

    } else {
        textbtn.textContent = "Свернуть."
        dish.style.display = "flex";
        if (!dish) return;
        dish.scrollIntoView({
            behavior: b || 'auto',
            block: 'end',
        });
    }
}

function Hidden2(b) {
    if (dish2.style.display == "flex") {
        textbtn2.textContent = "Показать еще..."
        dish2.style.display = "none";

    } else {
        textbtn2.textContent = "Свернуть."
        dish2.style.display = "flex";
        if (!dish2) return;
        dish2.scrollIntoView({
            behavior: b || 'auto',
            block: 'end',
        });
    }
}
function Hidden3(b) {
    if (dish3.style.display == "flex") {
        textbtn3.textContent = "Показать еще..."
        dish3.style.display = "none";

    } else {
        textbtn3.textContent = "Свернуть."
        dish3.style.display = "flex";
        if (!dish3) return;
        dish3.scrollIntoView({
            behavior: b || 'auto',
            block: 'end',
        });
    }
}
const ratings = document.querySelectorAll('.rating');

if(ratings.length> 0 ) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let i=0; i< ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector(".rating_active");
        ratingValue = rating.querySelector(".rating_value");
    }

    function setRatingActiveWidth(i = ratingValue.innerHTML) {
        const ratingActiveWidth = i/0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
       const ratingItems = document.querySelectorAll('.rating_item');
       for (let i=0; i<ratingItems.length; i++) {
        const ratingItem = ratingItems[i];
        ratingItem.addEventListener("mouseenter", function(e){
            initRatingVars(rating);
            setRatingActiveWidth(ratingItem.value);
        }); 
        ratingItem.addEventListener("mouseleave", function(e){
            setRatingActiveWidth();
        });
        ratingItem.addEventListener("click", function(e){
            initRatingVars(rating);

            if(rating.dataset.ajax) {
                setRatingValue(ratingItem.value, rating);
            } else {
                ratingValue.innerHTML = i+1;
                setRatingActiveWidth();о
            }
        });
       }
    }

}

var regbtn = document.querySelectorAll(".form__btn");
var reg = document.querySelectorAll(".register");

for(let i=0; i<regbtn.length; i++) {
    regbtn[i].addEventListener('click', function(){
        if (document.getElementById("reg")) {
            var obj = document.getElementById("reg");
            if(obj.style.display != "flex") {
                obj.style.display = "flex";
            } else obj.style.display = "none"; 
        }
    });
}

function showHide(element_id, secelem) {

        if (document.getElementById(element_id)) {
            var obj = document.getElementById(element_id); 
            if (obj.style.display != "flex") {
                obj.style.display = "flex"; 
            }
            else obj.style.display = "none"; 
        }
        if (document.getElementById(secelem)) {
            var secobj = document.getElementById(secelem); 
            if (secobj.style.display != "none") {
                secobj.style.display = "none";
            } else {
                secobj.style.display = "flex";
            }
        }
            
}
