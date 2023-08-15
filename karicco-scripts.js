const init = () => {
  console.log('init');
  const footer = document.querySelector('div[data-block-purpose^="footer"]');
  const footerContainer = footer.querySelector('.container > .w-container');
  const footerRows = footerContainer.querySelectorAll('.w-cell.row .w-container.row');
  const row1Col1 = footerRows[0].firstChild;
  const row1Col2 = document.createElement('div');
  const row1Col3 = footerRows[0].lastChild;
  const row2Col1 = footerRows[1].firstChild;
  const row2Col2 = footerRows[1].lastChild;
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
};

// document.addEventListener('DOMContentLoaded', init);
