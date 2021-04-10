export default function Header() {
  return(
    <header class="header">
      <a href="https://chao-chi.github.io/midterm/index.html">
          <img class="logo" src="images/logo.png" alt="GEGEU3U"/>
      </a>
      <div class="contact">
          <a href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw" target="_blank">
              <img class="contact_icon" src="images/icn_ig.png" alt="ig"/>
          </a>
          <a href="https://www.facebook.com/groups/1517468085196003" target="_blank">
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