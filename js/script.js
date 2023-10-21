const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationList = document.querySelectorAll('.navigation')

navigationList.forEach(navigation => {
    navigation.style.opacity = '0';
    navigation.style.transform = 'translateX(100vw)';
});

const delay = 50

hamburgerMenu.addEventListener('click', () => {
    navigationList.forEach((navigation, index) => {
        if (navigation.style.opacity === '0') {
            navigation.style.transitionDelay = `${delay * index}ms`;
            navigation.style.opacity = '1'
            navigation.style.transform = 'translateX(0vw)'
        } else {        
        navigation.style.opacity = '0'
        navigation.style.transform = 'translateX(100vw)'

        }
    });
});

const taglines = document.querySelectorAll('.tagline')
window.addEventListener('load', () => {
    taglines.forEach(tagline =>{
        tagline.style.opacity = '1'
        tagline.style.transform = 'translateX(0vw)'
    })
})

// Carrousel