const e=`<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Table d'equilibre autonome - Simulateur PID 3D</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow:wght@400;500;600;700&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --bg0:#0a0e14; --bg1:#0f1520; --bg2:#151d2e; --border:#1f3050;
    --accent:#22d3ee; --accent2:#0891b2; --green:#00e676; --amber:#ffab00; --red:#ff3d3d;
    --text:#cbd5e1; --muted:#64748b; --mono:'Share Tech Mono',monospace; --sans:'Barlow',sans-serif;
  }
  html,body{height:100%;background:var(--bg0);color:var(--text);font-family:var(--sans);overflow:hidden;}
  .app{display:flex;flex-direction:column;height:100vh;}
  header{display:flex;align-items:center;justify-content:space-between;padding:10px 18px;
    background:var(--bg1);border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px;flex-shrink:0;}
  header h1{font-size:14px;letter-spacing:1.5px;color:var(--accent);font-family:var(--mono);font-weight:700;}
  header h1 span{display:block;font-size:10px;color:var(--muted);letter-spacing:1px;margin-top:2px;}
  .status{display:flex;gap:8px;flex-wrap:wrap;}
  .pill{font-family:var(--mono);font-size:11px;padding:4px 10px;border-radius:999px;border:1px solid var(--border);}
  .pill.ok{color:var(--green);border-color:rgba(0,230,118,.4);background:rgba(0,230,118,.08);}
  .pill.warn{color:var(--amber);border-color:rgba(255,171,0,.4);background:rgba(255,171,0,.08);}
  .pill.err{color:var(--red);border-color:rgba(255,61,61,.4);background:rgba(255,61,61,.08);}
  main{flex:1;display:grid;grid-template-columns:minmax(270px,400px) 1fr;gap:14px;padding:14px;min-height:0;}
  @media (max-width:820px){ main{grid-template-columns:1fr;grid-template-rows:auto 1fr;} }
  .panel{background:var(--bg1);border:1px solid var(--border);border-radius:8px;padding:14px;overflow:auto;}
  .panel h2{font-family:var(--mono);font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:12px;}
  .stage{display:flex;flex-direction:column;padding:0;overflow:hidden;position:relative;}
  .stage h2{padding:14px 14px 0;}
  #stage3d{flex:1;position:relative;min-height:280px;}
  #stage3d canvas{display:block;width:100%;height:100%;cursor:grab;}
  .hint{font-size:11px;color:var(--muted);text-align:center;padding:8px 14px 12px;}
  .row{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
  .row label{width:56px;flex-shrink:0;font-family:var(--mono);font-size:11px;color:var(--muted);}
  .row input[type=range]{flex:1;accent-color:var(--accent);}
  .row .val{width:48px;text-align:right;font-family:var(--mono);font-size:12px;color:var(--accent);}
  .btnrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;}
  button{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;
    padding:8px 12px;border-radius:6px;border:1px solid var(--border);background:var(--bg2);color:var(--text);cursor:pointer;}
  button:hover{border-color:var(--accent2);color:#fff;}
  button.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#041019;border:none;}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
  .kv{background:var(--bg2);border:1px solid var(--border);border-radius:6px;padding:8px 10px;}
  .kv .l{font-size:10px;color:var(--muted);letter-spacing:.5px;text-transform:uppercase;}
  .kv .v{font-family:var(--mono);font-size:15px;color:var(--text);margin-top:2px;}
  .kv .v.ok{color:var(--green);} .kv .v.warn{color:var(--amber);}
  #fallenBanner{position:absolute;top:10px;left:50%;transform:translateX(-50%);
    font-family:var(--mono);font-size:12px;font-weight:700;color:#fff;background:rgba(255,61,61,.85);
    padding:6px 14px;border-radius:6px;display:none;letter-spacing:.5px;}
  #loadingBanner{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
    font-family:var(--mono);font-size:12px;color:var(--muted);}
</style>
</head>
<body>
<div class="app">
  <header>
    <h1>TABLE D'EQUILIBRE AUTONOME<span>Regulation PID en boucle fermee &middot; plateforme 2 axes &middot; vue 3D</span></h1>
    <div class="status" id="statusPills"></div>
  </header>
  <main>
    <div class="panel">
      <h2>Regulateur PID</h2>
      <div class="row"><label>Kp</label><input id="kp" type="range" min="0" max="12" step="0.1" value="4.2"><span class="val" id="kpVal">4.2</span></div>
      <div class="row"><label>Ki</label><input id="ki" type="range" min="0" max="3" step="0.05" value="0.3"><span class="val" id="kiVal">0.30</span></div>
      <div class="row"><label>Kd</label><input id="kd" type="range" min="0" max="8" step="0.1" value="3.0"><span class="val" id="kdVal">3.0</span></div>
      <div class="btnrow">
        <button class="primary" id="btnTarget">Nouvelle cible</button>
        <button id="btnDisturb">Perturbation</button>
        <button id="btnReset">Reinitialiser</button>
      </div>
      <h2 style="margin-top:18px;">Telemetrie</h2>
      <div class="grid2">
        <div class="kv"><div class="l">Position bille X</div><div class="v" id="posX">0.0 cm</div></div>
        <div class="kv"><div class="l">Position bille Y</div><div class="v" id="posY">0.0 cm</div></div>
        <div class="kv"><div class="l">Erreur radiale</div><div class="v" id="errR">0.0 cm</div></div>
        <div class="kv"><div class="l">Vitesse bille</div><div class="v" id="spd">0.0 cm/s</div></div>
        <div class="kv"><div class="l">Servo tilt X</div><div class="v" id="tiltX">0.0 deg</div></div>
        <div class="kv"><div class="l">Servo tilt Y</div><div class="v" id="tiltY">0.0 deg</div></div>
      </div>
      <h2 style="margin-top:18px;">Historique de l'erreur</h2>
      <canvas id="graph" width="360" height="90" style="width:100%;height:90px;"></canvas>
    </div>
    <div class="panel stage">
      <h2>Plateforme (vue 3D)</h2>
      <div id="stage3d">
        <div id="loadingBanner">Chargement du moteur 3D...</div>
        <div id="fallenBanner">BILLE HORS PLATEAU — Reinitialiser</div>
      </div>
      <p class="hint">Cliquez / touchez la plateforme pour deplacer la consigne. Glissez pour orbiter la camera, molette pour zoomer. Deux boucles PID (axes X / Y) pilotent l'inclinaison reelle du plateau.</p>
    </div>
  </main>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<script>
(function(){
  "use strict";

  // ---------- Physics / PID state (unchanged model) ----------
  var kpEl = document.getElementById("kp"), kiEl = document.getElementById("ki"), kdEl = document.getElementById("kd");
  var kpVal = document.getElementById("kpVal"), kiVal = document.getElementById("kiVal"), kdVal = document.getElementById("kdVal");

  var state = {
    x: 3, y: -2, vx: 0, vy: 0,
    targetX: 0, targetY: 0,
    intX: 0, intY: 0, prevErrX: 0, prevErrY: 0,
    tiltX: 0, tiltY: 0,
    fallen: false,
    t: 0
  };
  var errHistory = [];
  var MAXR = 14; // cm, usable radius of the plate

  function gains(){
    return { kp: parseFloat(kpEl.value), ki: parseFloat(kiEl.value), kd: parseFloat(kdEl.value) };
  }
  function syncLabels(){
    kpVal.textContent = parseFloat(kpEl.value).toFixed(1);
    kiVal.textContent = parseFloat(kiEl.value).toFixed(2);
    kdVal.textContent = parseFloat(kdEl.value).toFixed(1);
  }
  kpEl.addEventListener("input", syncLabels);
  kiEl.addEventListener("input", syncLabels);
  kdEl.addEventListener("input", syncLabels);
  syncLabels();

  function randomTarget(){
    var ang = Math.random() * Math.PI * 2;
    var rad = Math.random() * (MAXR * 0.7);
    state.targetX = Math.cos(ang) * rad;
    state.targetY = Math.sin(ang) * rad;
  }
  document.getElementById("btnTarget").addEventListener("click", randomTarget);
  document.getElementById("btnDisturb").addEventListener("click", function(){
    state.vx += (Math.random() - 0.5) * 40;
    state.vy += (Math.random() - 0.5) * 40;
  });
  document.getElementById("btnReset").addEventListener("click", function(){
    state.x = 0; state.y = 0; state.vx = 0; state.vy = 0;
    state.intX = 0; state.intY = 0; state.fallen = false;
    state.targetX = 0; state.targetY = 0;
    errHistory = [];
  });

  var G = 60, DAMPING = 0.92;
  var MAX_TILT = 12 * Math.PI / 180;

  function step(dt){
    if (state.fallen) return;
    var g = gains();
    var errX = state.targetX - state.x;
    var errY = state.targetY - state.y;

    state.intX = Math.max(-8, Math.min(8, state.intX + errX * dt));
    state.intY = Math.max(-8, Math.min(8, state.intY + errY * dt));

    var derX = (errX - state.prevErrX) / dt;
    var derY = (errY - state.prevErrY) / dt;
    state.prevErrX = errX;
    state.prevErrY = errY;

    var outX = g.kp * errX + g.ki * state.intX + g.kd * derX;
    var outY = g.kp * errY + g.ki * state.intY + g.kd * derY;

    var tiltCmdX = Math.max(-MAX_TILT, Math.min(MAX_TILT, outX * 0.02));
    var tiltCmdY = Math.max(-MAX_TILT, Math.min(MAX_TILT, outY * 0.02));
    state.tiltX += (tiltCmdX - state.tiltX) * Math.min(1, dt * 10);
    state.tiltY += (tiltCmdY - state.tiltY) * Math.min(1, dt * 10);

    state.vx += G * Math.sin(state.tiltX) * dt;
    state.vy += G * Math.sin(state.tiltY) * dt;
    state.vx *= DAMPING;
    state.vy *= DAMPING;
    state.x += state.vx * dt;
    state.y += state.vy * dt;

    var rad = Math.sqrt(state.x*state.x + state.y*state.y);
    if (rad > MAXR){ state.fallen = true; state.vx = 0; state.vy = 0; }

    var errR = Math.sqrt(errX*errX + errY*errY);
    errHistory.push(errR);
    if (errHistory.length > 240) errHistory.shift();
  }

  // ---------- Telemetry / graph (2D canvas, unchanged) ----------
  var graph = document.getElementById("graph");
  var gctx = graph.getContext("2d");
  function drawGraph(){
    var gw = graph.width, gh = graph.height;
    gctx.clearRect(0,0,gw,gh);
    gctx.strokeStyle = "rgba(34,211,238,0.15)";
    gctx.beginPath(); gctx.moveTo(0, gh/2); gctx.lineTo(gw, gh/2); gctx.stroke();
    if (errHistory.length < 2) return;
    var maxErr = Math.max.apply(null, errHistory.concat([1]));
    gctx.strokeStyle = "#22d3ee";
    gctx.lineWidth = 1.5;
    gctx.beginPath();
    for (var i=0;i<errHistory.length;i++){
      var px = (i/(errHistory.length-1)) * gw;
      var py = gh - (errHistory[i]/maxErr) * (gh-6) - 3;
      if (i===0) gctx.moveTo(px,py); else gctx.lineTo(px,py);
    }
    gctx.stroke();
  }

  function updateTelemetry(){
    document.getElementById("posX").textContent = state.x.toFixed(1) + " cm";
    document.getElementById("posY").textContent = state.y.toFixed(1) + " cm";
    var errR = Math.sqrt(Math.pow(state.targetX-state.x,2)+Math.pow(state.targetY-state.y,2));
    var errEl = document.getElementById("errR");
    errEl.textContent = errR.toFixed(2) + " cm";
    errEl.className = "v " + (errR < 1 ? "ok" : errR < 4 ? "warn" : "");
    var spd = Math.sqrt(state.vx*state.vx + state.vy*state.vy);
    document.getElementById("spd").textContent = spd.toFixed(1) + " cm/s";
    document.getElementById("tiltX").textContent = (state.tiltX*180/Math.PI).toFixed(1) + " deg";
    document.getElementById("tiltY").textContent = (state.tiltY*180/Math.PI).toFixed(1) + " deg";

    var pills = document.getElementById("statusPills");
    var stableTxt, cls;
    if (state.fallen){ stableTxt = "BILLE PERDUE"; cls="err"; }
    else if (errR < 1){ stableTxt = "STABILISE"; cls="ok"; }
    else { stableTxt = "ASSERVISSEMENT EN COURS"; cls="warn"; }
    pills.innerHTML =
      '<span class="pill ' + cls + '">' + stableTxt + '</span>' +
      '<span class="pill">BOUCLE 100 Hz</span>' +
      '<span class="pill">PID actif</span>';
    document.getElementById("fallenBanner").style.display = state.fallen ? "block" : "none";
  }

  // ---------- 3D scene (Three.js) ----------
  var mount = document.getElementById("stage3d");
  var scene, camera, renderer, plateGroup, plateMesh, ballMesh, targetMesh, raycaster, pickPlane;
  var cameraAzimuth = Math.PI * 0.28, cameraElevation = 0.85, cameraDist = 34;
  var dragging = false, lastPX = 0, lastPY = 0;
  var UNIT = 1.0; // 1 scene unit per cm

  function initThree(){
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0e14, 30, 70);

    camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    var ambient = new THREE.AmbientLight(0x2a4a5e, 1.1);
    scene.add(ambient);
    var key = new THREE.DirectionalLight(0x9fe8ff, 0.9);
    key.position.set(12, 22, 10);
    scene.add(key);
    var rim = new THREE.PointLight(0x22d3ee, 0.6, 60);
    rim.position.set(-14, 10, -10);
    scene.add(rim);

    // base pedestal (static)
    var pedestalGeo = new THREE.CylinderGeometry(3.2, 4.2, 6, 24);
    var pedestalMat = new THREE.MeshPhongMaterial({ color: 0x0f1520, shininess: 30, specular: 0x1f3050 });
    var pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -4;
    scene.add(pedestal);

    plateGroup = new THREE.Group();
    scene.add(plateGroup);

    var plateGeo = new THREE.CylinderGeometry(MAXR+2, MAXR+2, 0.6, 48);
    var plateMat = new THREE.MeshPhongMaterial({ color: 0x0d1826, shininess: 90, specular: 0x22d3ee, transparent:true, opacity:0.96 });
    plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateGroup.add(plateMesh);

    var ringGeo = new THREE.TorusGeometry(MAXR+2, 0.15, 10, 60);
    var ringMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    var ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI/2;
    ring.position.y = 0.32;
    plateGroup.add(ring);

    // subtle grid on plate surface
    var gridHelper = new THREE.GridHelper(2*(MAXR+2), 14, 0x22d3ee, 0x143247);
    gridHelper.position.y = 0.32;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.35;
    plateGroup.add(gridHelper);

    var targetGeo = new THREE.RingGeometry(0.7, 1.0, 24);
    var targetMat = new THREE.MeshBasicMaterial({ color: 0xffab00, side: THREE.DoubleSide });
    targetMesh = new THREE.Mesh(targetGeo, targetMat);
    targetMesh.rotation.x = -Math.PI/2;
    targetMesh.position.y = 0.35;
    plateGroup.add(targetMesh);

    var ballGeo = new THREE.SphereGeometry(0.9, 24, 24);
    var ballMat = new THREE.MeshPhongMaterial({ color: 0x8ff3ff, shininess: 100, specular: 0xffffff, emissive: 0x0891b2, emissiveIntensity: 0.25 });
    ballMesh = new THREE.Mesh(ballGeo, ballMat);
    plateGroup.add(ballMesh);

    // invisible flat plane at plate-local y=0 for raycasting clicks (child of plateGroup so it tilts with the plate)
    var pickGeo = new THREE.CircleGeometry(MAXR, 32);
    var pickMat = new THREE.MeshBasicMaterial({ visible: false });
    pickPlane = new THREE.Mesh(pickGeo, pickMat);
    pickPlane.rotation.x = -Math.PI/2;
    pickPlane.position.y = 0.32;
    plateGroup.add(pickPlane);

    raycaster = new THREE.Raycaster();

    buildServos();

    resize3D();
    document.getElementById("loadingBanner").style.display = "none";
  }

  // ---------- Visible servo motors driving the tilt (3x, 120 deg apart) ----------
  var SERVO_COUNT = 3;
  var ANCHOR_RADIUS = MAXR - 1.5;   // where push-rods attach under the plate
  var MOTOR_RADIUS = MAXR + 4.5;    // where motor housings sit, outside the plate
  var MOTOR_Y = -2.4;
  var HORN_LEN = 2.4;
  var servos = [];

  function buildServos(){
    var baseMat = new THREE.MeshPhongMaterial({ color: 0x151d2e, shininess: 50, specular: 0x22d3ee });
    var capMat = new THREE.MeshPhongMaterial({ color: 0x1f3050, shininess: 60, specular: 0x22d3ee });
    var hornMat = new THREE.MeshPhongMaterial({ color: 0x22d3ee, emissive: 0x073744, shininess: 90 });
    var rodMat = new THREE.MeshPhongMaterial({ color: 0x8ea3b8, shininess: 90, specular: 0xffffff });

    for (var i=0;i<SERVO_COUNT;i++){
      var ang = (Math.PI*2/SERVO_COUNT)*i + Math.PI/2;
      var localX = Math.cos(ang)*ANCHOR_RADIUS;
      var localZ = Math.sin(ang)*ANCHOR_RADIUS;
      var motorPos = new THREE.Vector3(Math.cos(ang)*MOTOR_RADIUS, MOTOR_Y, Math.sin(ang)*MOTOR_RADIUS);

      // motor body (visible housing, sits on the fixed base)
      var bodyGeo = new THREE.BoxGeometry(1.9, 1.7, 2.4);
      var body = new THREE.Mesh(bodyGeo, baseMat);
      body.position.copy(motorPos);
      body.lookAt(0, MOTOR_Y, 0);
      scene.add(body);

      // gear cap on top of the motor (where the horn pivots)
      var capGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 16);
      var cap = new THREE.Mesh(capGeo, capMat);
      cap.position.copy(motorPos).add(new THREE.Vector3(0, 1.05, 0));
      scene.add(cap);

      // status LED
      var ledGeo = new THREE.SphereGeometry(0.14, 8, 8);
      var led = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: 0x00e676 }));
      led.position.copy(motorPos).add(new THREE.Vector3(0, 0.4, 1.25));
      scene.add(led);

      // pivot: oriented so local -Z points toward the plate center; hinge = rotation.x
      var pivot = new THREE.Object3D();
      pivot.position.copy(motorPos).add(new THREE.Vector3(0, 1.05, 0));
      pivot.lookAt(0, pivot.position.y, 0);
      scene.add(pivot);
      var baseQuaternion = pivot.quaternion.clone();

      var horn = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.28, HORN_LEN), hornMat);
      horn.position.z = -HORN_LEN/2;
      pivot.add(horn);
      var hornTipDot = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), hornMat);
      hornTipDot.position.z = -HORN_LEN;
      pivot.add(hornTipDot);

      // push-rod connecting horn tip to the plate underside
      var rod = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1, 8), rodMat);
      scene.add(rod);

      // small ball-joint marker under the plate
      var joint = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), rodMat);
      plateGroup.add(joint);
      joint.position.set(localX, 0.15, localZ);

      servos.push({ localX: localX, localZ: localZ, pivot: pivot, baseQuaternion: baseQuaternion, rod: rod, led: led });
    }
  }

  var UP_AXIS = new THREE.Vector3(1,0,0);
  var _tmpQ = new THREE.Quaternion();
  var _tmpV = new THREE.Vector3();

  function updateServos(){
    for (var i=0;i<servos.length;i++){
      var s = servos[i];
      var anchorWorld = plateGroup.localToWorld(new THREE.Vector3(s.localX, 0.15, s.localZ));
      var toAnchor = anchorWorld.clone().sub(s.pivot.position);

      var invQuat = s.baseQuaternion.clone().conjugate();
      var localToAnchor = toAnchor.clone().applyQuaternion(invQuat);
      var angle = Math.atan2(localToAnchor.y, -localToAnchor.z);
      angle = THREE.MathUtils.clamp(angle, -0.55, 0.55);

      _tmpQ.setFromAxisAngle(UP_AXIS, angle);
      s.pivot.quaternion.copy(s.baseQuaternion).multiply(_tmpQ);
      s.pivot.updateMatrixWorld(true);

      _tmpV.set(0, 0, -HORN_LEN).applyMatrix4(s.pivot.matrixWorld);

      var mid = _tmpV.clone().add(anchorWorld).multiplyScalar(0.5);
      var dir = anchorWorld.clone().sub(_tmpV);
      var len = Math.max(0.05, dir.length());
      s.rod.position.copy(mid);
      s.rod.scale.set(1, len, 1);
      s.rod.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize());

      var activity = Math.min(1, Math.abs(angle) / 0.55);
      s.led.material.color.setHSL(0.33 - activity*0.33, 1, 0.35 + activity*0.15);
    }
  }

  function resize3D(){
    var w = mount.clientWidth, h = mount.clientHeight;
    if (w < 10 || h < 10) return;
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", resize3D);

  function updateCamera(){
    var x = cameraDist * Math.sin(cameraElevation) * Math.cos(cameraAzimuth);
    var z = cameraDist * Math.sin(cameraElevation) * Math.sin(cameraAzimuth);
    var y = cameraDist * Math.cos(cameraElevation);
    camera.position.set(x, y, z);
    camera.lookAt(0, 1, 0);
  }

  function getPointerNDC(evt, target){
    var rect = mount.getBoundingClientRect();
    var clientX = (evt.touches ? evt.touches[0].clientX : evt.clientX);
    var clientY = (evt.touches ? evt.touches[0].clientY : evt.clientY);
    target.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    target.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    return { moveX: clientX, moveY: clientY };
  }

  var ndc = new THREE.Vector2();
  var dragMoved = false;

  function onPointerDown(evt){
    dragging = true;
    dragMoved = false;
    var p = getPointerNDC(evt, ndc);
    lastPX = p.moveX; lastPY = p.moveY;
  }
  function onPointerMove(evt){
    if (!dragging) return;
    var p = getPointerNDC(evt, ndc);
    var dx = p.moveX - lastPX, dy = p.moveY - lastPY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved = true;
    cameraAzimuth -= dx * 0.006;
    cameraElevation = Math.max(0.25, Math.min(1.45, cameraElevation - dy * 0.006));
    lastPX = p.moveX; lastPY = p.moveY;
    if (evt.cancelable) evt.preventDefault();
  }
  function onPointerUp(evt){
    if (!dragging) return;
    dragging = false;
    if (!dragMoved){
      // treat as a click: raycast against the plate pick-plane to set target
      var p = getPointerNDC(evt, ndc);
      raycaster.setFromCamera(ndc, camera);
      var hits = raycaster.intersectObject(pickPlane, false);
      if (hits.length){
        var local = plateGroup.worldToLocal(hits[0].point.clone());
        var wx = local.x, wy = -local.z; // map plate-local (x,-z) to simulation (x,y)
        if (Math.sqrt(wx*wx+wy*wy) <= MAXR){
          state.targetX = wx;
          state.targetY = wy;
        }
      }
    }
  }
  mount.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  mount.addEventListener("touchstart", function(e){ onPointerDown(e); }, {passive:true});
  mount.addEventListener("touchmove", function(e){ onPointerMove(e); }, {passive:false});
  mount.addEventListener("touchend", function(e){ onPointerUp(e); }, {passive:true});
  mount.addEventListener("wheel", function(e){
    cameraDist = Math.max(16, Math.min(55, cameraDist + e.deltaY * 0.02));
    e.preventDefault();
  }, {passive:false});

  function render3D(){
    plateGroup.rotation.z = -state.tiltX;
    plateGroup.rotation.x = state.tiltY;
    plateGroup.updateMatrixWorld(true);

    ballMesh.position.set(state.x, 0.32 + 0.9, -state.y);
    targetMesh.position.set(state.targetX, 0.35, -state.targetY);

    updateServos();

    plateMesh.material.color.set(state.fallen ? 0x2a0d0d : 0x0d1826);
    updateCamera();
    renderer.render(scene, camera);
  }

  // ---------- Main loop ----------
  var last = performance.now();
  function loop(now){
    var dt = Math.min(0.05, (now - last)/1000);
    last = now;
    state.t += dt;
    step(dt);
    render3D();
    drawGraph();
    updateTelemetry();
    requestAnimationFrame(loop);
  }

  function boot(){
    initThree();
    randomTarget();
    requestAnimationFrame(loop);
  }

  if (window.THREE){
    boot();
  } else {
    var check = setInterval(function(){
      if (window.THREE){ clearInterval(check); boot(); }
    }, 60);
    setTimeout(function(){
      if (!window.THREE){
        document.getElementById("loadingBanner").textContent = "Impossible de charger le moteur 3D (reseau indisponible).";
      }
    }, 6000);
  }
})();
<\/script>
</body>
</html>
`;export{e as default};
