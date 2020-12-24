let mouseCursor =document.querySelector(".cursor");
let links=document.querySelectorAll('button,img.phone');
let allElements=document.querySelectorAll('img,p,h1,h2,h3,h4,h5,h6');
window.addEventListener('mousemove',cursor);
function cursor(e) {
	mouseCursor.style.top =e.pageY+'px';
	mouseCursor.style.left =e.pageX+'px';   
} 
links.forEach(link =>{
 link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove('link-glow'); 
 	});
 link.addEventListener('mouseover', () =>{
    mouseCursor.classList.add('link-glow'); 
 	});
});
allElements.forEach(element =>{
 element.addEventListener('mouseleave', () =>{
 document.getElementsByClassName("mouse-glow")[0].textContent = ''; 	
    mouseCursor.classList.remove('mouse-glow');        
 	});
 element.addEventListener('mouseover', () =>{

    mouseCursor.classList.add('mouse-glow');
    document.getElementsByClassName("mouse-glow")[0].textContent = 'masterfilter';

 	});
});


