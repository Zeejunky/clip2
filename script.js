function copyText(text) {
  // Create a temporary textarea element to copy the text
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  // Change the button color to green for 5 seconds
  event.target.style.backgroundColor = '#4CAF50';
  setTimeout(() => {
    event.target.style.backgroundColor = '#fff';
  }, 5000);
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  const contextMenu = document.getElementById('context-menu');
  contextMenu.style.display = 'block';
  contextMenu.style.left = event.clientX + 'px';
  contextMenu.style.top = event.clientY + 'px';

  document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
  });
});
