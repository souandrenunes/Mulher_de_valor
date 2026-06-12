
document.querySelectorAll('.faq-q').forEach(btn=>{
 btn.addEventListener('click',()=>{
  const a=btn.nextElementSibling;
  a.style.display=a.style.display==='block'?'none':'block';
 });
});
