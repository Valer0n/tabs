const titleTab = document.querySelectorAll('li');

const textTab = document.querySelectorAll('.tab')

titleTab.forEach((item) => {
    item.addEventListener('click', activeTab)
});


function activeTab(item) {
    let currentTab = item.currentTarget;

    let tabId = currentTab.getAttribute('data-tab');

    let currentText = document.querySelector(tabId);


    if (!currentTab.classList.contains('active')) {
        titleTab.forEach(function (item) {
            item.classList.remove('active');
        });

        textTab.forEach(function (item) {
            item.classList.remove('active');
        });

        currentTab.classList.add('active');
        currentText.classList.add('active');
    };

    localStorage.setItem('currentTab', JSON.stringify(tabId));

}

window.addEventListener('load', function () {
    let activeTab = localStorage.getItem('currentTab');
    document.querySelector(`[data-tab=${activeTab}]`).click();
});

