var blocklyArea;
var blocklyDiv;
var workspace;

blocklyArea = document.getElementById('blocklyArea');
blocklyDiv = document.getElementById('blocklyDiv');
workspace = Blockly.inject(blocklyDiv,
  {
    toolbox: document.getElementById('toolbox'),
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true
    },
    trashcan: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 1.5,
      minScale: 0.8,
      scaleSpeed: 1.2,
      pinch: true
    },
    trashcan: true
  }
);
var onresize = function (e) {
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

window.onbeforeunload = () => saveBlocks();
window.onload = () => importBlocks();

