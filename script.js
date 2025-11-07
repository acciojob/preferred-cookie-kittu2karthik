document.addEventListener("DOMContentLoaded", (e) => {
  const getCookie = (name) => {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
    return cookies[name];
  };

  let fontsize = getCookie('fontsize') || '16';
  let fontcolor = getCookie('fontcolor') || '#000000';

  const bodyEl = document.body;
  bodyEl.style.fontSize = `${fontsize}px`; 
  bodyEl.style.color = fontcolor;

  const btn = document.querySelector('input[type="submit"]');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const fontsizeInput = document.querySelector('#fontsize');
    const fontcolorInput = document.querySelector('#fontcolor');
    const newFontsize = fontsizeInput.value;
    const newFontcolor = fontcolorInput.value;

    document.cookie = `fontsize=${newFontsize}; path=/`;
    document.cookie = `fontcolor=${newFontcolor}; path=/`;

    bodyEl.style.fontSize = `${newFontsize}px`;
    bodyEl.style.color = newFontcolor;
  });
});