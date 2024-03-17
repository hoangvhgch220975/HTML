const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

leftSide.addEventListener('mouseenter', function () {
    leftSide.style.flex = '3';
    rightSide.style.flex = '1';
});

leftSide.addEventListener('mouseleave', function () {
    leftSide.style.flex = '1.5';
    rightSide.style.flex = '1';
});

rightSide.addEventListener('mouseenter', function () {
    leftSide.style.flex = '1';
    rightSide.style.flex = '3';

});

rightSide.addEventListener('mouseleave', function () {
    leftSide.style.flex = '1.5';
    rightSide.style.flex = '1';
});