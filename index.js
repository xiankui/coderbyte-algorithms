// algorithm pre code load once
let PRECODE = '';
const codeFlag = '// hidden runtime response';

// fetch text for pre code
function fetchText(url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(callback);
}

function renderText(text) {
  PRECODE = text;
  const hiddenRuntimeRes = text.indexOf(codeFlag);
  document.getElementById('code').innerHTML = `${text.slice(
    0,
    hiddenRuntimeRes
  )}`;
}

function renderRuntimeRes(res) {
  document.getElementById(
    'runtime-res'
  ).innerHTML = `<pre><code>${res}</code></pre>`;
}

function resetRuntimeRes() {
  const runtimeResPlaceholder = 'click button blow to run result';
  document.getElementById('runtime-res').innerHTML = runtimeResPlaceholder;
}

// load script for runtime and set runtime response
function loadScript(text, callback) {
  const script = document.createElement('script');
  script.innerHTML = `(() => {${text}})();`;
  document.body.appendChild(script);

  callback && callback(window.global && window.global.runtimeRes);

  script.onload = function() {
    script.remove();
  };
}

// render algorithms list only once
function renderAlgorithmsList() {
  const hash = window.location.hash.slice(1);

  const url = './algorithms.json';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const list = Object.keys(data).map(
        item =>
          `<li><a href="#${item}" class="${
            item === hash ? 'selected' : ''
          }">${item}</a></li>`
      );
      document.getElementById('algorithms-list').innerHTML = list.join('');
    });
}

// on anchor click, change selected status
function setAlgorithmSelected(hash) {
  const anchors = document
    .getElementById('algorithms-list')
    .querySelectorAll('li a');
  anchors.forEach(algorithm => {
    if (algorithm.getAttribute('href').slice(1) === hash) {
      algorithm.classList.add('selected');
    } else {
      algorithm.classList.remove('selected');
    }
  });
}

// show run-btn & runtime-res
function showRunBtn() {
  document.getElementById('run-btn').classList.remove('hidden');
  document.getElementById('runtime-res').classList.remove('hidden');
}

renderAlgorithmsList();

// render algorithm text and set anchor status & reset runtime response
function renderAlgorithmByHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    return;
  }

  const source = hash + '.js';
  fetchText(source, renderText);
  resetRuntimeRes();
  setAlgorithmSelected(hash);
  showRunBtn();
}

renderAlgorithmByHash();

// for prettify force to reload page
window.addEventListener('hashchange', () => window.location.reload(true));

// load javascript runtime and set response
document.getElementById('run-btn').addEventListener('click', () => {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    return;
  }

  loadScript(PRECODE, renderRuntimeRes);

  // hidden btn
  document.getElementById('run-btn').classList.add('hidden');
});

// copy to clipboard
function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.right = '-500px';
  textArea.style.top = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful;

  try {
    successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.error('Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
  return successful;
}

document.getElementById('copy-text').addEventListener('click', () => {
  let index = PRECODE.indexOf(codeFlag);
  const successful = copyTextToClipboard(PRECODE.slice(0, index));
  if (successful) {
    const $copyBtn = document.getElementById('copy-text');
    $copyBtn.classList.add('copied');
    $copyBtn.innerHTML = 'copied';
  }
});
