$(document).ready(function(){
    $("#header").load("/header.html",function(){
        $.getScript("/js/nav.js");
        $.getScript("/js/scroll.js");
    });
    $("#footer").load("/footer.html");
}); 

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.top-bar-side .dropdown').forEach(dropdown => {
      const anchor = dropdown.querySelector('a');

      if (anchor) {
        // 텍스트 백업
        const text = anchor.innerText;

        // 새로운 span으로 대체
        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add('dropdown-title'); // 필요하면 스타일링용 클래스

        // 기존 <a> 제거 후 <span> 삽입
        dropdown.replaceChild(span, anchor);
      }
    });
  }
});
