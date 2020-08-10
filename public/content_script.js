chrome.runtime.onMessage.addListener(function (m) {
  document.body.appendChild(
    (() => {
      const s = document.createElement("script");
      s.src = m.url;
      return s;
    })()
  );
  console.log(`💿 Loaded a ${m.name ? m.name : m.url}`);
});
