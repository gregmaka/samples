getIframe();

function getIframe() {
  var isInt = document.getElementById('google_ads_iframe_/152023730/hcp_interstitial_0');
  if (isInt) {
    initShadowbox();
  } else {
    setTimeout("getIframe()", 100);
  }
}

function loadShadowBox() {

  if (document.getElementById('google_ads_iframe_/152023730/hcp_interstitial_0').contentWindow.document.getElementById('aw0') === null) {
    return;
  }

  var href, imgsrc, newnode;
  href = document.getElementById('google_ads_iframe_/152023730/hcp_interstitial_0').contentWindow.document.getElementById('aw0').href;
  imgsrc = document.getElementById('google_ads_iframe_/152023730/hcp_interstitial_0').contentWindow.document.getElementById('aw0').innerHTML;
  newnode = '<a href="' + href + '">' + imgsrc + '"</a>';

  if (document.getElementById('sb-container')) {
    // If the sb-container is there, load up the interstitial
    Shadowbox.open({
      content: newnode,
      player: "html",
      handleOversize: "resize",
      title: "ADVERTISEMENT",
      width: 640,
      height: 480
    });
  } else {
    // If sb-container doesn't exist, recursive until it does
    setTimeout("loadShadowBox()", 100);
  }
}

// Boolean flag to know if Shadowbox has been loaded
var ShadowboxOutputted = false;

// Function to check for Shadowbox and if it's not available, load it.
function initShadowbox() {
  // Checks if Shadowbox is exists
  if (typeof(Shadowbox) == 'undefined') {
    // Checks if Shadowbox is has been loaded previously
    if (!ShadowboxOutputted) {
      // Only output the script once..
      ShadowboxOutputted = true;
      // Output the script
      document.write("<scr" + "ipt type=\"text/javascript\" src=\"sites/default/themes/hcp/includes/shadowbox/shadowbox.js\"></scr" + "ipt>");
    }
    // Recursive until Shadowbox is loaded
    setTimeout("initShadowbox()", 100);
  } else {
    // Shadowbox looks to be loaded, let's run it
    loadShadowBox();
  }
}
