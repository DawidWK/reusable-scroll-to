function reusableScrollTo(selectedElement) {
    const navbarHeight = 50;
    const sectionElement = document.querySelector(selectedElement);
    const calculatedY = sectionElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ 
        top: calculatedY,
        behavior: 'smooth' 
    });
}
