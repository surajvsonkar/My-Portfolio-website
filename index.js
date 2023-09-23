const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.closed-menu');
const openMenu = document.querySelector('.mobile-menu');
const menu_items = document.querySelectorAll('.mobileNav li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// Close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function () {
        close();
    });
});

function show() {
    mobileNav.classList.replace('closed-menu', 'open-menu');
}

function close() {
    mobileNav.classList.replace('open-menu', 'closed-menu');
}
