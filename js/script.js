// getting total price
let totalCost = document.getElementById('total-cost');
let billPayCost = document.getElementById('pay-cost');

// setting memory price
function setMemoryPirce(addMemory) {
    let memoryCost = document.getElementById('memory-cost');
    if (addMemory) {
        memoryCost.innerText = 180;
    }
    else {
        memoryCost.innerText = 0;
    }
};

// setting stroage price
function setStroagePrice(addStroage) {
    let stroageCost = document.getElementById('stroage-cost');
    if (addStroage) {
        stroageCost.innerText = 180;
    }
    else if (addStroage == false) {
        stroageCost.innerText = 100;
    }
    else {
        stroageCost.innerText = 0;
    }
};

// setting shipping cost
function setShippingCost(fastShipping) {
    let shippingCost = document.getElementById('delivery-cost');
    if (fastShipping) {
        shippingCost.innerText = 20;
    }
    else {
        shippingCost.innerText = 0;
    }
};

// calculating total price
function totalBill() {
    let previousBill = parseFloat(document.getElementById('base-cost').innerText);
    let memoryBill = parseFloat(document.getElementById('memory-cost').innerText);
    let storageBill = parseFloat(document.getElementById('stroage-cost').innerText);
    let deliveryBill = parseFloat(document.getElementById('delivery-cost').innerText);

    let totalBill = previousBill + memoryBill + storageBill + deliveryBill;
    totalCost.innerText = totalBill;
    billPayCost.innerText = totalBill;
    return totalBill;
};

// calculating discounted price
function discountedCost(premiumCost) {
    let discountBox = document.getElementById('pomo-input');

    let discountedCost = (parseFloat(premiumCost) * 80) / 100;
    if (discountBox.value == 'stevekaku') {
        billPayCost.innerText = discountedCost;
    }
    discountBox.value = '';
};


// click handler for memory section
document.getElementById('memory-8GB').addEventListener('click', function () {
    setMemoryPirce(false);
    totalBill();
});

document.getElementById('memory-16GB').addEventListener('click', function () {
    setMemoryPirce(true);
    totalBill();
});


// click handler for storage section
document.getElementById('storage-1TB').addEventListener('click', function () {
    setStroagePrice(true);
    totalBill();
});

document.getElementById('storage-512GB').addEventListener('click', function () {
    setStroagePrice(false);
    totalBill();
});

document.getElementById('storage-256GB').addEventListener('click', function () {
    setStroagePrice();
    totalBill();
});


// click handler for delivery section
document.getElementById('delivery-fast').addEventListener('click', function () {
    setShippingCost(true);
    totalBill();
});

document.getElementById('delivery-normal').addEventListener('click', function () {
    setShippingCost(false);
    totalBill();
});


// click handler for managing discount section
document.getElementById('discount-button').addEventListener('click', function () {
    discountedCost(totalBill());
});



