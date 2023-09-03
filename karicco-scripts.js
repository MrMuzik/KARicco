const initFinal = () => {
  // Sitewide script
  const activePage = document.querySelector('.router-link-exact-active').attributes.href.value;
  // Footer script
  const footer = document.querySelector('div[data-block-purpose^="footer"]');
  const footerContainer = footer.querySelector('.container > .w-container');
  const footerRows = footerContainer.querySelectorAll('.w-cell.row .w-container.row');
  const row1Col1 = footerRows[0].firstChild;
  const row1Col2 = document.createElement('div');
  const row1Col3 = footerRows[0].lastChild;
  const row2Col1 = footerRows[1].firstChild;
  const row2Col2 = footerRows[1].lastChild;
  const row2Col2LinkContainer = document.getElementById('7b3b9ad0-5e07-11e9-9104-6d5bd0e45376');
  const row2Col2Links = row2Col2LinkContainer.querySelectorAll('a');
  const row2Col2Addition = document.createElement('div');
  const footerNav = document.createElement('div');
  footerRows[0].classList.add('footer-row1');
  footerRows[1].classList.add('footer-row2');
  row1Col2.classList.add('w-cell', 'col', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-6', 'footer-row1-col2');
  row1Col2.innerHTML = `<div class="w-container col"><div class="w-cell row"><div class="w-wrapper"><blockquote>This place is great! Personal service and stylists who go out of their way to make your visit convenient and comfortable.&nbsp;<br>-&nbsp;​<a href="https://www.yelp.com/user_details?userid=XiNr6lcIBMpRbj_V64aU-w" target="_blank">Natalie W.</a><br></blockquote><a type="button" target="_blank" href="https://www.yelp.com/biz/ka-ricco-hair-design-scituate?hrid=JUopU2I5WB__hpVHgH2KuA&rh_type=phrase&rh_ident=south_shore" class="w-button w-button--button w-button--primary w-button--large w-button--full-width-mobile">More Reviews</a></div></div></div>`;
  footerRows[0].insertBefore(row1Col2, row1Col3);
  row1Col1.classList.remove('col-md-8');
  row1Col1.classList.add('align--left-sm', 'align--left-md', 'align--left-lg', 'col-md-4', 'col-lg-2', 'footer-row1-col1');
  row1Col3.classList.remove('col-sm-6');
  row1Col3.classList.add('footer-row1-col3');
  row2Col1.classList.add('align--left-sm', 'align--left-md', 'align--left-lg', 'footer-row2-col1');
  row2Col2.classList.add('footer-row2-col2', 'align--right-sm', 'align--right-md', 'align--right-lg');
  row2Col2Links.forEach((link) => {
    if (link.attributes.href.value.includes('facebook')) { 
      link.classList.add('wsite-social-facebook', 'wsite-social-item');
    }
    if (link.attributes.href.value.includes('instagram')) {
      link.classList.add('wsite-social-instagram', 'wsite-social-item');
    }
    if (link.attributes.href.value.includes('mailto')) {
      link.classList.add('wsite-social-mail', 'wsite-social-item');
    }
    link.children[0].remove();
  });
  row2Col2Addition.classList.add('footer-row2-col2-addition');
  row2Col2Addition.innerHTML = `<a href="/jobs"><img src="https://sandbox.weebly.com/uploads/b/73f56a8a48dfe0414ff550e9b6769f5c1dad0659117c2683eaa0013591841d3f/we-re-hiring-2_1692141219.png?width=2400&amp;optimize=medium" alt="Join The Team" width="196"></a>`;
  row2Col2LinkContainer.insertBefore(row2Col2Addition, row2Col2Links[0]);
  footerNav.classList.add('footer-nav');
  footerNav.innerHTML = `<a href="/tos">Terms of Service</a> | <a href="/privacy">Privacy Policy </a>|&nbsp; Copyright © 2023&nbsp;`;
  row2Col2LinkContainer.parentNode.insertBefore(footerNav, row2Col2LinkContainer.nextSibling);
  // Gallery script
  const gallery = document.querySelector('div[layout="gallery-1"]');
  if (gallery) {
    const container = gallery.querySelector('.container');
    const rows = gallery.querySelectorAll('.container > .w-cell.row')
    const rowToMove = rows[0];
    const rowToReplace = rows[1];
    const images = gallery.querySelectorAll('img');
    const imageSrcs = [];
    images.forEach((image) => {
      imageSrcs.push(image.src);
    });
    rowToReplace.innerHTML = '<div class="local-love-container"><div><img src="https://placehold.co/350x550" width="350" class="imgHasMax" /></div><div class="local-love-centered"><div><img src="https://placehold.co/150x250" width="150" /></div><div class="toBeReplaced">Local Love</div><div class="local-love-social"><a href="https://www.instagram.com/kariccohairdesign/" target="_blank"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/tBxa1IFcTQH.png" width="45" height="45" /></a></div><div>Follow Us On Instagram</div><div><img src="https://mrmuzik.github.io/KARicco/images/mermaid.png" width="350" /></div></div><div><img src="https://placehold.co/350x550" width="350" class="imgHasMax" /></div></div>';
    const headlineToReplace = document.querySelector('.toBeReplaced');
    headlineToReplace.innerHTML = rowToMove.innerHTML;
    rowToMove.remove();
    const placeholderImages = document.querySelectorAll('.local-love-container img');
    placeholderImages.forEach((image, index) => {
      let ip = 0
      if (index === 2 || index === 3) {
        return;
      } else if (index > 3) {
        ip = 2;
      }
      image.src = imageSrcs[index - ip];
    });
    container.classList.add('gallery-container');
  }
  // Services script
  if (activePage.includes('services')) {
    console.log('services');
  }
};

const init = () => {
  console.log('karicco-scripts.js loaded in init');
  const page = document.querySelector('.app-container');
  // console.log(page);
  const observer = new MutationObserver(logChanges);
  // Items to watch:
  let contentLoaded = false;
  let navLoaded = false;
  let footerLoaded = false;
  // Watch Function
  function logChanges(records, observer) {
    for (const record of records) {
      // console.log(record.target.childNodes.length);
      // Content
      if (!contentLoaded) {
        const container = document.querySelector('.main-content-wrapper > .w-container');
        console.log('check containter', container);
        if (container) {
          contentLoaded = true;
          console.log('page loaded');
        }
      }
      // Nav
      if (!navLoaded) {
        const links = document.querySelectorAll('li.nav__item > a');
        if (links.length > 0) {
          navLoaded = true;
          console.log('nav loaded');
        }
      }
      // Footer
      if (!footerLoaded) {
        const footer = document.querySelector('div[data-block-purpose^="footer"]');
        if (footer) {
          footerLoaded = true;
          console.log('footer loaded');        }
      }
    }
  }
  const observerOptions = {
    childList: true,
    subtree: true,
  };
  observer.observe(page, observerOptions);
};
document.addEventListener('DOMContentLoaded', init);
