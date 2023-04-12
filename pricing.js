const sliderValue = document.querySelector('#slider');
const pageView = document.querySelector('.page-view-data');
const price = document.querySelector('.price-data');
const billingCheckbox = document.querySelector('#billing-period');

const pricePerMonth = [8, 12, 16, 24, 36];
sliderValue.addEventListener('change', () => {
    let sliderData = sliderValue.value;

    if(sliderData === "1000") {
        pageView.innerText = 1 + "M";
    } else {
        pageView.innerText = sliderData + "K";
    }
    
    let perMonth;
    if(sliderData < parseInt("50")) {
        perMonth = pricePerMonth[0];
    } else if(sliderData < parseInt("100")) {
        perMonth = pricePerMonth[1];
    } else if(sliderData < parseInt("500")) {
        perMonth = pricePerMonth[2];
    } else if(sliderData < parseInt("1000")) {
        perMonth = pricePerMonth[3];
    } else {
        perMonth = pricePerMonth[4];
    }

    if(billingCheckbox.checked) {
        perMonth = perMonth * 0.75;
    }

    price.innerText = perMonth.toFixed(2);
});

billingCheckbox.addEventListener('click', () => {
    let currentPrice = parseInt(price.innerText);
    if(billingCheckbox.checked) {
        currentPrice *= 0.75 
    } else {
        currentPrice = currentPrice / 75 * 100;
    }
    price.innerText = currentPrice.toFixed(2);
});