// Your code goes here
const navAll = document.querySelector('.nav');
Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
    });
    
});
const linkHome = document.querySelector('.nav-link:nth-of-type(1)');
linkHome.addEventListener('click', (event) => {
    console.log('you clicked home');
    linkHome.style.color = 'red';
});
const linkAbout = document.querySelector('.nav-link:nth-of-type(2)');
linkAbout.addEventListener('mouseover', (event) =>{
    console.log('you hovered about');
    linkAbout.style.fontSize = '3rem';
    
});
const linkBlog = document.querySelector('.nav-link:nth-of-type(3)');
const linkContact = document.querySelector('.nav-link:nth-of-type(4)');
linkBlog.addEventListener('click', (event) => {
    console.log('you clicked Blog');
    linkBlog.style.backgroundColor = 'blue';
});
linkContact.addEventListener('click', (event) =>{
    console.log('you clicked Contact');
    linkContact.style.color = 'green';
})
const intro = document.querySelector('.intro');
const imgOne = intro.querySelector('img');
imgOne.addEventListener('mouseover', (event) => {
    console.log('this is a nice bus');
    imgOne.style.border = '2px dashed magenta';
});


const destinationOne = document.querySelector('.destination:nth-of-type(1)');
const buttonOne = destinationOne.querySelector('.btn');
buttonOne.addEventListener('click', (event) => {
    console.log("don't push my button")
    buttonOne.style.transform = 'rotate(-10deg)';
    
});
const destinationTwo = document.querySelector('.destination:nth-of-type(2)');
const buttonTwo = destinationTwo.querySelector('.btn');
buttonTwo.addEventListener('click', (event) => {
    buttonTwo.style.transform = 'rotate(10deg)';
});
const destinationThree = document.querySelector('.destination:nth-of-type(3)');
const buttonThree = destinationThree.querySelector('.btn');
buttonThree.addEventListener('dblclick', (event) => {
    console.log('You really want this dont you');
    buttonThree.style.backgroundColor = 'magenta';
    buttonThree.style.color = 'green';
    buttonThree.style.fontSize = '3rem';
});
const wholePage = document.querySelector('body');
document.addEventListener('keydown', (event) => {
    wholePage.style.backgroundColor = 'black';
});
