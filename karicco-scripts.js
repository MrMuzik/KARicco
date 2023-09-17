const setBannerSizing = () => {
  const headerBanner = document.querySelector('.w-image-block.w-block-banner.w-block.banner-3');
  console.log('headerBanner', headerBanner);
  if (!headerBanner) {
    return false;
  } else if (headerBanner) {
    headerBanner.classList.add('custom-header-banner');
    headerBanner.querySelector('.container .element-group .text-component.w-text--rendered').classList.add('custom-header-banner-page-title');
    console.log('bannerLoaded');
    return true;
  }
};

const setHomepageGallery = () => {
  const gallery = document.querySelector('div[layout="gallery-1"]');
  if (!gallery) {
    return false;
  } else if (gallery) {
    console.log('gallery', gallery);
    const container = gallery.querySelector('.container');
    const rows = gallery.querySelectorAll('.container > .w-cell.row')
    const rowToMove = rows[0];
    const rowToReplace = rows[1];
    const images = gallery.querySelectorAll('img');
    const imageSrcs = [];
    images.forEach((image) => {
      console.dir(image);
      if (image.src) {
        console.log('image', image);
        imageSrcs.push(image.src);
      }
    });
    console.log('imageSrcs reached?', imageSrcs);
    if (!imageSrcs.length) {
      return false;
    }
    rowToReplace.innerHTML = '<div class="local-love-container"><div><img src="https://placehold.co/350x550" width="350" class="imgHasMax" /></div><div class="local-love-centered"><div><img src="https://placehold.co/150x250" width="150" /></div><div class="toBeReplaced">Local Love</div><div class="local-love-social"><a href="https://www.instagram.com/kariccohairdesign/" target="_blank"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/tBxa1IFcTQH.png" width="45" height="45" /></a></div><div>Follow Us On Instagram</div><div><img src="https://mrmuzik.github.io/KARicco/images/mermaid.png" width="350" /></div></div><div><img src="https://placehold.co/350x550" width="350" class="imgHasMax" /></div></div>';
    const headlineToReplace = document.querySelector('.toBeReplaced');
    headlineToReplace.innerHTML = rowToMove.innerHTML;
    rowToMove.remove();
    const placeholderImages = document.querySelectorAll('.local-love-container img');
    placeholderImages.forEach((image, index) => {
      let ip = 0
      if (index === 2 || index === 3) {
        // return;
      } else if (index > 3) {
        ip = 2;
      }
      image.src = imageSrcs[index - ip];
    });
    container.classList.add('gallery-container');
    console.log('galleryLoaded', galleryLoaded);
    return true;
  }
};

const setFooter = () => {
  const footer = document.querySelector('div[data-block-purpose^="footer"]');
  if (footer) {
    const footerContainer = footer.querySelector('.container > .w-container');
    if (footerContainer) {
      const footerRows = footerContainer.querySelectorAll('.w-cell.row .w-container.row');
      if (footerRows) {
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
        if (!document.querySelector('blockquote + a')) {
          footerRows[0].insertBefore(row1Col2, row1Col3);
        }
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
          if (link.children[0]) {
            link.children[0].remove();
          }
        });
        row2Col2Addition.classList.add('footer-row2-col2-addition');
        // TODO: move image to github
        row2Col2Addition.innerHTML = `<a href="/jobs"><img src="https://sandbox.weebly.com/uploads/b/73f56a8a48dfe0414ff550e9b6769f5c1dad0659117c2683eaa0013591841d3f/we-re-hiring-2_1692141219.png?width=2400&amp;optimize=medium" alt="Join The Team" width="196"></a>`;
        if (row2Col2Links[0]?.offsetHeight > 0) {
          row2Col2LinkContainer.insertBefore(row2Col2Addition, row2Col2Links[0]);
        }
        footerNav.classList.add('footer-nav');
        footerNav.innerHTML = `<a href="/terms-of-service">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy </a>|&nbsp; Copyright © 2023&nbsp;`;
        if (row2Col2LinkContainer.nextSibling) {
          console.log('nextSibling');
          console.dir(row2Col2LinkContainer.nextSibling);
          row2Col2LinkContainer.parentNode.insertBefore(footerNav, row2Col2LinkContainer.nextSibling);
        }
        console.log('footer loaded');
        return true;
      } else {
        console.log('footer not loaded');
        return false;
      }
    } else {
      console.log('footer not loaded');
      return false;
    }
  } else {
    console.log('footer not loaded');
    return false;
  }
};

const init = () => {
  console.log('Init Loaded');
  const page = document.querySelector('.app-container');
  const observer = new MutationObserver(logChanges);
  // Items to watch:
  let contentLoaded = false;
  let navLoaded = false;
  let footerLoaded = false;
  let bannerLoaded = false;
  let galleryLoaded = false;
  let storedActivePage = '';
  // Pages to watch:
  let homePageLoaded = false;
  let servicesPageLoaded = false;
  let productsPageLoaded = false;
  let giftCardsPageLoaded = false;
  let ourStoryPageLoaded = false;
  let staffPageLoaded = false;
  let contactPageLoaded = false;
  let jobsPageLoaded = false;
  let termsOfServicePageLoaded = false;
  let privacyPolicyPageLoaded = false;
  // Watch Function
  function logChanges(records, observer) {
    for (const record of records) {
      // console.log('record',record);
      // Get all elements
      if (!contentLoaded) {
        // Content
        const container = document.querySelector('.main-content-wrapper > .w-container');
        
        if (container) {
          contentLoaded = true;
          console.log('page loaded');
        } else {
          contentLoaded = false;
          console.log('page not loaded');
        }
      }
      if (!navLoaded) {
        // Nav
        const links = document.querySelectorAll('li.nav__item > a');
        if (links.length > 0) {
          navLoaded = true;
          console.log('nav loaded');
        } else {
          navLoaded = false;
          console.log('nav not loaded');
        }
      }
      if (!footerLoaded) {
        // Footer
        footerLoaded = setFooter();
      }
      if (!bannerLoaded) {
        bannerLoaded = setBannerSizing();
      }
      if (contentLoaded) {
        let activePage = document.location.pathname;
        if (activePage) {
          console.log('activePage', activePage);
          if (activePage !== storedActivePage) {
            if (storedActivePage !== '') {
              // Reset watch items
              contentLoaded = false;
              navLoaded = false;
              footerLoaded = false;
              bannerLoaded = false;
              galleryLoaded = false;
            }
            storedActivePage = activePage;
            console.log('storedActivePage', storedActivePage);
          }
        } else {
          console.log('activePage not found');
        }
        switch (storedActivePage) {
          case '/':
            if (!homePageLoaded) {
              homePageLoaded = true;
              console.log('indexPageLoaded', homePageLoaded);  
            }
            
            if (homePageLoaded && !galleryLoaded) {
              galleryLoaded = setHomepageGallery();
            }
            break;
          case '/home':
            
            break;
          case '/services':
            if (!servicesPageLoaded) {
              servicesPageLoaded = true;
              console.log('servicesPageLoaded', servicesPageLoaded);
              // setBannerSizing();
              // const containerToHoldServices = document.querySelector('[id="groups\/1\/text"]');
              // const servicesTopBanner = document.querySelector('.container .w-container.row a .image img');
              // containerToHoldServices.innerHTML = '<div class="simple-table-wrapper"><table class="simple-table style-top"><tbody><tr><td class="cell" style="width: 50%;"><div class="paragraph"><font color="#ffffff">DESIGN SERVICES</font></div></td><td class="cell" style="width: 50%;"><div class="paragraph"><font color="#ffffff">PRICES</font></div></td></tr><tr><td class="cell" style="width: 50%;"><div class="paragraph">Haircut &amp; Blow Out</div></td><td class="cell" style="width: 50%;"><div class="paragraph"><span style="font-weight:700"></span>$60 - $85</div></td></tr><tr><td class="cell" style="width: 50%;"><div class="paragraph">Wash &amp; Style</div></td><td class="cell" style="width: 50%;"><div class="paragraph">​$50+ ( w/hot tool additional $10.00)</div></td></tr><tr><td class="cell" style="width: 50%;"><div class="paragraph">Wet Hair Cut</div></td><td class="cell" style="width: 50%;"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$50+</span></div></td></tr></tbody></table></div><div class="simple-table-wrapper"><table class="simple-table style-top"><tbody><tr><td class="cell"><div class="paragraph"><font color="#ffffff">COLOR SERVICES</font></div></td><td class="cell"><div class="paragraph"><font color="#ffffff">PRICES</font></div></td></tr><tr><td class="cell"><div class="paragraph">Single Process</div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$80+</span></div></td></tr><tr><td class="cell"><div class="paragraph">​Color Gloss/ Glaze</div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">&nbsp;$60+</span></div></td></tr><tr><td class="cell"><div class="paragraph">​Fashion or Corrective Color</div></td><td class="cell"><div class="paragraph">​Priced Upon Consultation&nbsp;</div></td></tr></tbody></table></div><div class="simple-table-wrapper"><table class="simple-table style-top"><tbody><tr><td class="cell"><div class="paragraph">​<font color="#ffffff">DIMENSIONAL COLOR</font>&nbsp;</div></td><td class="cell"><div class="paragraph"><font color="#ffffff">PRICES</font></div></td></tr><tr><td class="cell"><div class="paragraph">​1/2 Head Foil</div></td><td class="cell"><div class="paragraph">​$110 - $120</div></td></tr><tr><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">3/4 Foil</span></div></td><td class="cell"><div class="paragraph">​<span style="color:rgb(34, 34, 34)">&nbsp;$125 - $155</span></div></td></tr><tr><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">Full Head Foil&nbsp;</span>​</div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$150 - $190</span></div></td></tr><tr><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">Platinum Card Foil</span></div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$250+</span></div></td></tr></tbody></table></div><div class="simple-table-wrapper"><table class="simple-table style-top"><tbody><tr><td class="cell"><div class="paragraph"><font color="#ffffff">PAINTING&nbsp;​</font></div></td><td class="cell"><div class="paragraph"><font color="#ffffff">PRICES</font></div></td></tr><tr><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">Balayage</span></div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$250+</span></div></td></tr><tr><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">Ombre</span></div></td><td class="cell"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$240+</span></div></td></tr></tbody></table></div><div class="simple-table-wrapper"><table class="simple-table style-top"><tbody><tr><td class="cell" style="width: 50%;"><div class="paragraph"><font color="#ffffff">​TEXTURIZING</font></div></td><td class="cell" style="width: 49%;"><div class="paragraph"><font color="#ffffff">PRICES</font></div></td></tr><tr><td class="cell" style="width: 50%;"><div class="paragraph">​Full Natural Keratin Smoothing Treatment</div></td><td class="cell" style="width: 49%;"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$375+</span></div></td></tr><tr><td class="cell" style="width: 50%;"><div class="paragraph"><span style="color:rgb(34, 34, 34)">Keratin Complex Express Blowout&nbsp;</span>​</div></td><td class="cell" style="width: 49%;"><div class="paragraph"><span style="color:rgb(34, 34, 34)">$165+</span></div></td></tr></tbody></table></div><div class="paragraph">​All Pricing Is A LA CARTE</div>';
              // servicesTopBanner.classList.add('services-top-banner');
            }
            break;
          case '/products':
            if (!productsPageLoaded) {
              productsPageLoaded = true;
              console.log('productsPageLoaded', productsPageLoaded);
              // setBannerSizing();
              // const productsTopBlock = document.querySelectorAll('.main-content-wrapper .container.content-align--center')[0];
              // console.log('productsTopBlock', productsTopBlock);
              // if (productsTopBlock) {
              //   productsTopBlock.classList.add('products-top-block');
              // }
            }
            break;
          case '/gift-cards':
            if (!giftCardsPageLoaded) {
              giftCardsPageLoaded = true;
              // Nothing to do here
              console.log('giftCardsPageLoaded', giftCardsPageLoaded);
            }
            break;
          case '/our-story':
            if (!ourStoryPageLoaded) {
              ourStoryPageLoaded = true;
              console.log('ourStoryPageLoaded', ourStoryPageLoaded);
              // setBannerSizing();
              // const ourStoryBlocks = document.querySelectorAll('.story-2.container .w-container.col > .w-cell.row');
              // const ourStoryGraphicBlock = document.querySelectorAll('.story-2.container .w-container.col > .w-cell.row')[ourStoryBlocks.length - 1];
              // ourStoryGraphicBlock.classList.add('our-story-graphic-block');
            }
            break;
          case '/staff':
            if (!staffPageLoaded) {
              staffPageLoaded = true;
              console.log('staffPageLoaded', staffPageLoaded);
              // setBannerSizing();
              // const teamMemberBlocks = Array.from(document.querySelectorAll('.w-text--rendered.text-component')).filter(block => block.id === "");
              // const teamMemberBlockLisa = teamMemberBlocks[1];
              // const teamMemberBlockJulia = teamMemberBlocks[2];
              // teamMemberBlockLisa.insertAdjacentHTML('afterend', '<div><div class="team-block-marketing"><a href="https://squareup.com/appointments/book/nad1ifwni5px0c/LZ24RC7QFEQ58/services" target="_blank"><img src="https://mrmuzik.github.io/KARicco/images/lookslogo.png" alt="Looks by Lisa Aftosmes" /></a></div><div class="team-block-marketing"><a href="https://squareup.com/appointments/book/nad1ifwni5px0c/LZ24RC7QFEQ58/services" target="_blank"><img src="https://mrmuzik.github.io/KARicco/images/looksqr.png" alt="Looks by Lisa Aftosmes - QR Code" /></a></div></div>');
              // teamMemberBlockJulia.insertAdjacentHTML('afterend', '<div><div class="team-block-marketing"><a href="https://hair-by-julia-cathryn.square.site" target="_blank"><img src="https://mrmuzik.github.io/KARicco/images/julialogo.png" alt="Hair by Julia Cathryn" /></a></div><div class="team-block-marketing"><a href="https://hair-by-julia-cathryn.square.site" target="_blank"><img src="https://mrmuzik.github.io/KARicco/images/juliaqr.png" alit="Hair by Julia Cathryn - QR Code" /></a></div></div>');
            }
            break;
          case '/contact-us':
            if (!contactPageLoaded) {
              contactPageLoaded = true;
              console.log('contactPageLoaded', contactPageLoaded);
              // setBannerSizing();
              // const contactUsBlock = document.querySelector('.w-text--rendered.text-component.link--browser');
              // contactUsBlock.insertAdjacentHTML('beforebegin', '<img class="contact-img" src="https://mrmuzik.github.io/KARicco/images/location_1.jpg" alt="K.A. Ricco Hair Design Location" />');
            }
            break;
          case '/jobs':
            if (!jobsPageLoaded) {
              jobsPageLoaded = true;
              console.log('jobsPageLoaded', jobsPageLoaded);
              // setBannerSizing();
              // const jobsBlock = Array.from(document.querySelectorAll('.text-component.w-text--rendered')).filter(item => item.innerText.includes('message Karen'))[0];
              // jobsBlock.insertAdjacentHTML('beforeend', '<a href="mailto:kariccohairdesign03@gmail.com" class="w-button w-button--button w-button--primary w-button--large w-button--full-width-mobile mt-10">Email Karen</a>');
            }
            break;
          case '/terms-of-service':
            if (!termsOfServicePageLoaded) {
              termsOfServicePageLoaded = true;
              console.log('termsOfServicePageLoaded', termsOfServicePageLoaded);
              // setBannerSizing();
            }
            break;
          case '/privacy-policy':
            if (!privacyPolicyPageLoaded) {
              privacyPolicyPageLoaded = true;
              console.log('privacyPolicyPageLoaded', privacyPolicyPageLoaded);
              // setBannerSizing();
            }
            break;
          default:
            console.log('default');
        }
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
