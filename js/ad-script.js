const style = 'padding: 10px !important; background: rgb(220,137,232) !important;\n' +
  'background: linear-gradient(141deg, rgba(220,137,232,1) 0%, rgba(144,64,204,1) 100%) !important; height: 55px; text-align: center'

const ad =
  `<a href="https://tiiny.host?ref=free-site">
    <div style="${style}">
      <img style="height: 35px !important; width: auto !important;" src="https://tiiny.host/assets/img/ad.png" alt="tiiny.host">
    </div>
  </a>`;

window.onload = function() {
  const elemDiv = document.createElement('div');
  elemDiv.innerHTML = ad;
  elemDiv.style.cssText = `position: fixed !important; bottom:0% !important; width:100% !important; height:55px !important; z-index:9999 !important`;
  document.body.insertBefore(elemDiv, document.body.firstChild);
  document.body.style.cssText = 'margin-bottom: 55px !important'

  //PDF
  const elem = document.getElementById('viewerContainer');
  if (elem) {
    elem.style.cssText = 'bottom: 55px !important';
  }
};