document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("file").onclick = function () { myFunction() };
  const textarea = document.getElementById("notepad-textarea");
  textarea.addEventListener("input", function () {
    const text = textarea.value;

    if (text.includes("fuck") || text.includes("shit") || text.includes("bitch") || text.includes("asshole")) {
      document.getElementsByClassName('popup-title')[0].innerHTML = "WOAH! SLOW DOWN1!";
      document.getElementsByClassName('popup-content-body')[0].innerHTML = "<p> Are you tryna ragebaiting or having strong accent?. <br> <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Buy Notepad Platinum Premium</a> to use more racist words.</p>";
      document.getElementsByClassName('popup')[0].style.display = "block";
      document.getElementById('notepad-textarea').value = text.replace(/fuck|shit|bitch|asshole/gi, "");
    }
  });
});
function myFunction() {
  document.getElementById("dropdown-content").classList.toggle("show");
}
setTimeout(function () {
  document.getElementsByClassName('popup')[0].style.display = "block";
  document.getElementsByClassName('popup-title')[0].innerHTML = "HEY, YOU!";
  document.getElementsByClassName('close')[0].style.display = "none";
  document.getElementsByClassName('popup-content-body')[0].innerHTML = "<p> Did your parents tell you that I was wastin' up your time?<br> Oh, now you're wastin' mine.<br> <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Buy Notepad Platinum Premium</a> to avoid interruptions.</p>";
}, 40000);
function Open() {
  document.getElementById('popup').style.display='block';
  document.getElementsByClassName('popup-title')[0].innerHTML = "FEATURE LOCKED";
  document.getElementsByClassName('popup-content-body')[0].innerHTML='<p>To enable this feature, <a href=https://www.youtube.com/watch?v=xvFZjo5PgG0>buy Notepad Platinum Premium.</a></p>'; document.getElementById('popup').style.display='block';
}