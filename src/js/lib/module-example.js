export default function injectHtml(id, text) {
  return document.getElementById(id).append(text);
}
