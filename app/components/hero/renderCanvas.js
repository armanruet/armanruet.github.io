function WaveAnimation(params) {
  this.init(params || {});
}
WaveAnimation.prototype = {
  init: function (params) {
    this.phase = params.phase || 0;
    this.offset = params.offset || 0;
    this.frequency = params.frequency || 0.001;
    this.amplitude = params.amplitude || 1;
  },
  update: function () {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
  value: function () {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
};

function Line(params) {
  this.init(params || {});
}

Line.prototype = {
  init: function (params) {
    this.spring = params.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (var i = 0; i < E.size; i++) {
      var node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  },
  update: function () {
    var springForce = this.spring,
      currentNode = this.nodes[0];
    currentNode.vx += (pos.x - currentNode.x) * springForce;
    currentNode.vy += (pos.y - currentNode.y) * springForce;
    for (var i = 0, len = this.nodes.length; i < len; i++) {
      currentNode = this.nodes[i];
      if (i > 0) {
        var prevNode = this.nodes[i - 1];
        currentNode.vx += (prevNode.x - currentNode.x) * springForce;
        currentNode.vy += (prevNode.y - currentNode.y) * springForce;
        currentNode.vx += prevNode.vx * E.dampening;
        currentNode.vy += prevNode.vy * E.dampening;
      }
      currentNode.vx *= this.friction;
      currentNode.vy *= this.friction;
      currentNode.x += currentNode.vx;
      currentNode.y += currentNode.vy;
      springForce *= E.tension;
    }
  },
  draw: function () {
    var currentNode,
      nextNode,
      xPos = this.nodes[0].x,
      yPos = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    for (var i = 1, max = this.nodes.length - 2; i < max; i++) {
      currentNode = this.nodes[i];
      nextNode = this.nodes[i + 1];
      xPos = 0.5 * (currentNode.x + nextNode.x);
      yPos = 0.5 * (currentNode.y + nextNode.y);
      ctx.quadraticCurveTo(currentNode.x, currentNode.y, xPos, yPos);
    }
    currentNode = this.nodes[i];
    nextNode = this.nodes[i + 1];
    ctx.quadraticCurveTo(currentNode.x, currentNode.y, nextNode.x, nextNode.y);
    ctx.stroke();
    ctx.closePath();
  },
};

function onMousemove(event) {
  function initLines() {
    lines = [];
    for (var i = 0; i < E.trails; i++)
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }

  function handleMouseOrTouch(event) {
    if (event.touches) {
      pos.x = event.touches[0].pageX;
      pos.y = event.touches[0].pageY;
    } else {
      pos.x = event.clientX;
      pos.y = event.clientY;
    }
    event.preventDefault();
  }

  function handleTouchStart(event) {
    if (event.touches.length === 1) {
      pos.x = event.touches[0].pageX;
      pos.y = event.touches[0].pageY;
    }
  }

  document.removeEventListener('mousemove', onMousemove);
  document.removeEventListener('touchstart', onMousemove);
  document.addEventListener('mousemove', handleMouseOrTouch);
  document.addEventListener('touchmove', handleMouseOrTouch);
  document.addEventListener('touchstart', handleTouchStart);
  
  handleMouseOrTouch(event);
  initLines();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'hsla(' + Math.round(wave.update()) + ',90%,50%,0.25)';
    ctx.lineWidth = 1;
    
    for (var i = 0; i < E.trails; i++) {
      var line = lines[i];
      line.update();
      line.draw();
    }
    
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

const config = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

let ctx;
let wave;
let pos = {};
let lines = [];
const E = config;

export const renderCanvas = function () {
  ctx = document.getElementById('canvas').getContext('2d');
  ctx.running = true;
  ctx.frame = 1;
  
  wave = new WaveAnimation({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  
  document.addEventListener('mousemove', onMousemove);
  document.addEventListener('touchstart', onMousemove);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  
  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  
  window.addEventListener('blur', () => {
    ctx.running = true;
  });
  
  resizeCanvas();
};
