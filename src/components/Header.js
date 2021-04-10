export default function Header() {
  const ELEMENTS = document.querySelectorAll(".HOVER");
  const ELEMENTS_SPAN = [];
  
  ELEMENTS.forEach((element, index) => {  
    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
      ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });

    element.addEventListener("mouseout", e => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });
  });
  return(
    <header class="header">
      <a href="https://chao-chi.github.io/midterm/index.html">
          <img class="logo" src="images/logo.png" alt="GEGEU3U"/>
      </a>
      <div class="contact">
          <a href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw" target="_blank">
              <img class="contact_icon" src="images/icn_ig.png" alt="ig"/>
          </a>
          <a href="https://www.facebook.com/groups/568827753582047" target="_blank">
              <img class="contact_icon" src="images/icn_fb.png" alt="fb"/>
          </a>
          <a href="https://www.youtube.com/channel/UCmej5oymLBhl8X3TGrd7JKg/" target="_blank">
              <img class="contact_icon" src="images/icn_yt.png" alt="yt"/>
          </a>
      </div>
      <div class="header_ripple">
          <div class="HOVER">
              <span></span>
          </div>
      </div>
    </header>
  );
}