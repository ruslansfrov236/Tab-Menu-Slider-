function Tabs() {
    var bindAll = () => {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = () => {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = (e) => {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');

        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

function Carousel() {
    const imgSlider = ['./src/img/1.jpg', './src/img/2.jpg', './src/img/3.jpg', './src/img/4.jpg', './src/img/5.jpg', './src/img/6.jpg', './src/img/7.jpg'];

    const carousel = document.getElementById("carousel");
    const btnLeft = carousel.querySelector('.btn-left');
    const btnRight = carousel.querySelector('.btn-right');

    let currentIndex = 0;
    let sliderTime;

    function updateImage() {
        const imageElement = document.getElementById('carousel-image');
        if (imageElement) {
            imageElement.src = imgSlider[currentIndex];
        }
    }

    function startSlider() {
        sliderTime = setInterval(() => {
            currentIndex = (currentIndex + 1) % imgSlider.length;
            updateImage();
        }, 1000);
    }

    function stopSlider() {
        clearInterval(sliderTime);
    }

    carousel.addEventListener('mouseenter', stopSlider);
    carousel.addEventListener('mouseleave', startSlider);

    btnLeft.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imgSlider.length) % imgSlider.length;
        updateImage();
    });

    btnRight.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imgSlider.length;
        updateImage();
    });


    updateImage();
    startSlider();
}


Carousel();
class AddElement {
    constructor(text ) {
        
        this.text = text;

    }
}



function addToList() {
    const input = document.querySelector('#text-add');
    const id = document.querySelector('#checkId');
    const btnAdd = document.querySelector('.btn-add');
    const cardList = document.querySelector('.card-list');
    const addArray = []; // Initialize an array to store the elements

    btnAdd.addEventListener('click', addElement);

    function addElement() {
        const inputValue = input.value.trim();
       
        if (inputValue === "") {
            alert("Bos deyer daxil edibsiniz");
        } else {
            const newElement = {  text: inputValue, checked: false }; 
            addArray.push(newElement);

            input.value = "";
        
     
            cardList.innerHTML = "";

            addArray.forEach((item) => {
              
                cardList.innerHTML += `<div class="box" id="box">
                    
                    <input type="checkbox" id="checkbox" ${item.checked ? 'checked' : ''} />
                  
                    <p id="texts">${item.text}</p>
                    <button class="btn-remove"><i class="fa-solid fa-trash"></i></button>
                </div>`;
            });

            // Update the event listener for each checkbox and remove button
            addArray.forEach((item, index) => {
                const checkBox = document.getElementById(`checkbox`);
                const boxText = document.getElementById(`texts`);
                const btnRemove = document.querySelector(".btn-remove");
                const box = document.getElementById(`box`);

                btnRemove.addEventListener("click", () => {
                    box.remove();
                });

                checkBox.addEventListener('change', (event) => {
                    item.checked = event.currentTarget.checked;

                    if (event.currentTarget.checked) {
                        boxText.style.textDecoration = "line-through";
                    } else {
                        boxText.style.textDecoration = "none";
                    }
                });
            });
        }
    }
}

addToList();


