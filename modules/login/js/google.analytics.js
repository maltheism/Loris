function loadScript(url) {
  // Adding the script tag to the head as suggested before
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  // Start the loading...
  head.appendChild(script);
}
function gtag(){
  dataLayer.push(arguments);
}
if (window.origin !== 'http://localhost:5000') {
  // Production
  loadScript('https://www.googletagmanager.com/gtag/js?id=UA-135012395-1');
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', 'UA-135012395-1');
}

