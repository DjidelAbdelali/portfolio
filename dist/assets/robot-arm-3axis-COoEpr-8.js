const e=`<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ARM-3DOF · Simulateur 3D bras manipulateur 3 axes</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow:wght@400;500;600;700;800&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --bg0:#0a0e14; --bg1:#0f1520; --bg2:#151d2e; --bg3:#1c2640;
    --border:#1f3050; --accent:#00c8ff; --accent2:#0088aa;
    --green:#00e676; --amber:#ffab00; --red:#ff3d3d; --purple:#b468ff;
    --text:#c8d8e8; --muted:#4a6080;
    --mono:'Share Tech Mono', monospace; --sans:'Barlow', sans-serif;
  }
  body{background:var(--bg0);color:var(--text);font-family:var(--sans);font-size:14px;overflow-x:hidden}
  .app{display:flex;flex-direction:column;min-height:100vh}

  .nav{display:flex;align-items:center;gap:0;background:var(--bg1);border-bottom:1px solid var(--border);padding:0 18px;height:56px;position:sticky;top:0;z-index:100}
  .nav-logo{font-family:var(--mono);color:var(--accent);font-size:13px;letter-spacing:2px;margin-right:20px;white-space:nowrap}
  .nav-logo small{display:block;font-size:9px;color:var(--muted);letter-spacing:1px;margin-top:2px}
  .nav-tabs{display:flex;gap:0;flex:1;overflow-x:auto}
  .nav-tab{padding:0 16px;height:56px;display:flex;align-items:center;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap;transition:.15s}
  .nav-tab:hover{color:var(--text)}
  .nav-tab.active{color:var(--accent);border-bottom-color:var(--accent)}
  .nav-right{display:flex;align-items:center;gap:10px;margin-left:auto}
  .status-pill{font-family:var(--mono);font-size:11px;padding:4px 10px;border-radius:2px;white-space:nowrap}
  .status-pill.on{background:rgba(0,230,118,.15);color:var(--green);border:1px solid var(--green)}
  .status-pill.warn{background:rgba(255,171,0,.14);color:var(--amber);border:1px solid var(--amber)}
  .status-pill.off{background:rgba(255,61,61,.15);color:var(--red);border:1px solid var(--red)}
  .btn-nav{border:1px solid var(--border);background:var(--bg0);color:var(--text);padding:6px 12px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;cursor:pointer;border-radius:3px}
  .btn-nav.on{border-color:var(--green);color:var(--green);background:rgba(0,230,118,.08)}
  .btn-nav.danger{border-color:var(--red);color:var(--red);background:rgba(255,61,61,.1)}

  .page{flex:1;padding:18px;max-width:1440px;margin:0 auto;width:100%}
  .grid-main{display:grid;grid-template-columns:1.25fr .75fr;gap:16px}
  @media(max-width:980px){.grid-main{grid-template-columns:1fr}}

  .panel{background:var(--bg1);border:1px solid var(--border);border-radius:4px;margin-bottom:16px}
  .panel-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border)}
  .panel-title{font-family:var(--mono);font-size:11px;letter-spacing:2px;color:var(--accent);text-transform:uppercase}
  .panel-body{padding:14px}
  .panel-body.flush{padding:0}

  /* 3D SCENE */
  .scene-wrap{position:relative;background:radial-gradient(circle at 50% 15%,rgba(0,200,255,.10),transparent 60%),var(--bg0);border-radius:3px;overflow:hidden;height:460px}
  #three-canvas{width:100%;height:100%;display:block;cursor:grab}
  #three-canvas:active{cursor:grabbing}
  .scene-hud{position:absolute;top:10px;left:10px;font-family:var(--mono);font-size:10px;color:var(--muted);line-height:1.7;pointer-events:none}
  .scene-hud b{color:var(--accent)}
  .scene-hud .hint{color:#3a4a66;margin-top:4px}
  .scene-legend{position:absolute;bottom:10px;left:10px;display:flex;gap:14px;font-family:var(--mono);font-size:10px;color:var(--muted);pointer-events:none}
  .scene-legend span{display:flex;align-items:center;gap:5px}
  .scene-legend i{width:9px;height:9px;border-radius:50%;display:inline-block}

  .joy-row{display:flex;gap:16px;flex-wrap:wrap;align-items:center;justify-content:center}
  .joystick{position:relative;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle at 50% 45%,var(--bg2),var(--bg0));border:1px solid var(--border);touch-action:none;cursor:grab}
  .joystick:active{cursor:grabbing}
  .joy-ring{position:absolute;inset:8px;border-radius:50%;border:1px dashed rgba(0,200,255,.2)}
  .joy-cross{position:absolute;inset:0}
  .joy-cross::before,.joy-cross::after{content:'';position:absolute;background:rgba(255,255,255,.06)}
  .joy-cross::before{left:50%;top:6px;bottom:6px;width:1px;transform:translateX(-50%)}
  .joy-cross::after{top:50%;left:6px;right:6px;height:1px;transform:translateY(-50%)}
  .joy-handle{position:absolute;width:46px;height:46px;border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%);background:radial-gradient(circle at 35% 30%,#39d6ff,#0088aa);box-shadow:0 0 18px rgba(0,200,255,.55),inset 0 0 8px rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.4)}
  .joy-label{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:1px;text-align:center;margin-top:8px}

  .slider-col{display:flex;flex-direction:column;align-items:center;gap:8px}
  .vslider-wrap{height:170px;display:flex;align-items:center}
  input[type=range].vslider{writing-mode:vertical-lr;direction:rtl;width:34px;height:160px;accent-color:var(--purple)}
  input[type=range]{accent-color:var(--accent)}

  .joint-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
  .joint-card{background:var(--bg2);border:1px solid var(--border);border-radius:3px;padding:10px}
  .joint-card .jc-name{font-family:var(--mono);font-size:10px;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
  .joint-card .jc-val{font-family:var(--mono);font-size:22px;color:var(--accent)}
  .joint-card .jc-bar-wrap{background:var(--bg0);border:1px solid var(--border);border-radius:2px;height:6px;margin-top:8px;overflow:hidden}
  .joint-card .jc-bar{height:100%;background:linear-gradient(90deg,var(--accent2),var(--accent))}

  .kv{display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px}
  .kv .label{color:var(--muted)}
  .kv .value{font-family:var(--mono);color:var(--text)}
  .kv .value.ok{color:var(--green)}
  .kv .value.warn{color:var(--amber)}

  .btn-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
  .btn-maint{font-size:11px;padding:6px 12px;border:1px solid var(--border);background:var(--bg0);color:var(--text);cursor:pointer;border-radius:2px;font-family:var(--mono)}
  .btn-maint:hover{border-color:var(--accent2);color:var(--accent)}
  .btn-maint.active{border-color:var(--accent);color:var(--accent);background:rgba(0,200,255,.08)}

  .led-row{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--text);margin-bottom:8px}
  .led-dot{width:10px;height:10px;border-radius:50%;background:#24324a;flex-shrink:0}
  .led-dot.on{background:var(--green);box-shadow:0 0 8px rgba(0,230,118,.65)}
  .led-dot.warn{background:var(--amber);box-shadow:0 0 8px rgba(255,171,0,.65)}
  .led-dot.err{background:var(--red);box-shadow:0 0 8px rgba(255,61,61,.65)}

  .console{background:#04070c;border:1px solid var(--border);border-radius:3px;height:150px;overflow-y:auto;padding:8px 10px;font-family:var(--mono);font-size:11px}
  .console div{color:var(--muted);margin-bottom:3px}
  .console div span{color:var(--accent)}
  .console::-webkit-scrollbar{width:6px}
  .console::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}

  .seq-list{max-height:110px;overflow-y:auto;font-family:var(--mono);font-size:11px}
  .seq-item{display:flex;justify-content:space-between;padding:5px 8px;border-bottom:1px solid var(--border);color:var(--muted)}
  .seq-item span{color:var(--text)}

  .footer-note{font-family:var(--mono);font-size:10px;color:var(--muted);text-align:center;padding:16px}
  .loading-badge{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;color:var(--muted);letter-spacing:1px}
</style>
</head>
<body>
<div class="app">
  <div class="nav">
    <div class="nav-logo">◈ ARM-3DOF<br><span style="font-size:9px;color:var(--muted);letter-spacing:1px">BRAS MANIPULATEUR 3 AXES · JOYSTICK · 3D</span></div>
    <div class="nav-tabs">
      <div class="nav-tab active">Commande</div>
    </div>
    <div class="nav-right">
      <span class="status-pill on" id="pill-mode">MODE MANUEL</span>
      <span class="status-pill off" id="pill-power">MOTEURS OFF</span>
      <button class="btn-nav" id="btn-power">Activer moteurs</button>
      <button class="btn-nav danger" id="btn-estop">ARRÊT</button>
    </div>
  </div>

  <div class="page">
    <div class="grid-main">
      <!-- LEFT: 3D scene + joystick -->
      <div>
        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">Vue 3D — cinématique directe (FK)</span>
            <span class="status-pill on" id="pill-fk">FK EN DIRECT</span>
          </div>
          <div class="panel-body flush">
            <div class="scene-wrap">
              <canvas id="three-canvas"></canvas>
              <div class="loading-badge" id="loadingBadge">CHARGEMENT DU MOTEUR 3D…</div>
              <div class="scene-hud">
                Repère base : <b>O(0,0,0)</b> · L1=60mm L2=110mm L3=100mm<br>
                <span class="hint">clic-glisser : orbiter · molette : zoom</span><br>
                <span class="hint">clavier : ← → base · ↑ ↓ épaule · Q/E coude · espace pince · H home</span>
              </div>
              <div class="scene-legend">
                <span><i style="background:#00c8ff"></i> Bras (épaule)</span>
                <span><i style="background:#b468ff"></i> Avant-bras (coude)</span>
                <span><i style="background:#ffab00"></i> Effecteur</span>
                <span><i style="background:#00e676"></i> Zone de ramassage</span>
                <span><i style="background:#ff8a00"></i> Zone de dépôt</span>
              </div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header"><span class="panel-title">Commande joystick</span></div>
          <div class="panel-body">
            <div class="joy-row">
              <div class="slider-col">
                <div class="joystick" id="joystick">
                  <div class="joy-cross"></div>
                  <div class="joy-ring"></div>
                  <div class="joy-handle" id="joyHandle"></div>
                </div>
                <div class="joy-label">JOYSTICK 1 &nbsp;·&nbsp; X = BASE &nbsp;·&nbsp; Y = ÉPAULE</div>
              </div>
              <div class="slider-col">
                <div class="vslider-wrap">
                  <input type="range" class="vslider" id="coudeSlider" min="-90" max="90" value="0" step="1">
                </div>
                <div class="joy-label">AXE 3 · COUDE</div>
              </div>
              <div class="slider-col">
                <div class="vslider-wrap">
                  <input type="range" class="vslider" id="pinceSlider" min="0" max="60" value="20" step="1">
                </div>
                <div class="joy-label">PINCE (option)</div>
              </div>
            </div>

            <div class="joint-grid">
              <div class="joint-card">
                <div class="jc-name">Axe 1 · Base</div>
                <div class="jc-val" id="valBase">0°</div>
                <div class="jc-bar-wrap"><div class="jc-bar" id="barBase" style="width:50%"></div></div>
              </div>
              <div class="joint-card">
                <div class="jc-name">Axe 2 · Épaule</div>
                <div class="jc-val" id="valEpaule">0°</div>
                <div class="jc-bar-wrap"><div class="jc-bar" id="barEpaule" style="width:50%"></div></div>
              </div>
              <div class="joint-card">
                <div class="jc-name">Axe 3 · Coude</div>
                <div class="jc-val" id="valCoude">0°</div>
                <div class="jc-bar-wrap"><div class="jc-bar" id="barCoude" style="width:50%"></div></div>
              </div>
            </div>

            <div class="btn-row">
              <button class="btn-maint" id="btn-center">Centrer joystick</button>
              <button class="btn-maint" id="btn-home">Position HOME</button>
              <button class="btn-maint" id="btn-record">● Enregistrer point</button>
              <button class="btn-maint" id="btn-deadzone">Zone morte : <span id="dzState">ON</span></button>
              <button class="btn-maint" id="btn-trail">Trace : <span id="trailState">ON</span></button>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: status + console + sequences -->
      <div>
        <div class="panel">
          <div class="panel-header"><span class="panel-title">État du système</span></div>
          <div class="panel-body">
            <div class="led-row"><span class="led-dot" id="ledPower"></span> Alimentation moteurs</div>
            <div class="led-row"><span class="led-dot on"></span> Liaison joystick (ADC)</div>
            <div class="led-row" id="rowLimit"><span class="led-dot"></span> Butée logicielle atteinte</div>
            <div class="led-row"><span class="led-dot on"></span> Boucle de commande (50 Hz)</div>

            <div class="kv" style="margin-top:10px"><span class="label">Position effecteur X</span><span class="value" id="posX">0.0 mm</span></div>
            <div class="kv"><span class="label">Position effecteur Y</span><span class="value" id="posY">0.0 mm</span></div>
            <div class="kv"><span class="label">Position effecteur Z</span><span class="value" id="posZ">0.0 mm</span></div>
            <div class="kv"><span class="label">Portée courante</span><span class="value" id="reach">0.0 mm</span></div>
            <div class="kv"><span class="label">Vitesse de commande</span><span class="value" id="speedMode">Normale</span></div>

            <div class="btn-row">
              <button class="btn-maint active" data-speed="1">Lente</button>
              <button class="btn-maint" data-speed="2">Normale</button>
              <button class="btn-maint" data-speed="3">Rapide</button>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">Zones de ramassage / dépôt</span>
            <span class="status-pill off" id="pill-delivered">0 / 3 livrés</span>
          </div>
          <div class="panel-body">
            <div class="kv"><span class="label">État de la pince</span><span class="value" id="gripState">Libre</span></div>
            <div class="kv"><span class="label">Objet à portée</span><span class="value" id="nearObj">—</span></div>
            <div class="kv"><span class="label">Distance à l'objet le plus proche</span><span class="value" id="nearDist">— mm</span></div>
            <div class="btn-row">
              <button class="btn-maint" id="btn-grip">Attraper / Lâcher</button>
              <button class="btn-maint" id="btn-reset-objects">Réinitialiser les objets</button>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">Console série (simulation Arduino)</span>
          </div>
          <div class="panel-body">
            <div class="console" id="console"></div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <span class="panel-title">Séquence enregistrée (teach &amp; repeat)</span>
            <span class="status-pill off" id="pill-seq-count">0 point(s)</span>
          </div>
          <div class="panel-body">
            <div class="seq-list" id="seqList">
              <div style="color:var(--muted);font-size:11px;padding:6px">Aucun point enregistré. Utilisez « Enregistrer point » pendant que vous pilotez le bras.</div>
            </div>
            <div class="btn-row">
              <button class="btn-maint" id="btn-play">▶ Rejouer la séquence</button>
              <button class="btn-maint" id="btn-clear-seq">Effacer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-note">Simulation pédagogique 3D — cinématique directe (FK) d'un bras 3 axes série, base + épaule + coude, commande par joystick analogique</div>
</div>

<script type="importmap">
{ "imports": {
    "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
    "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
} }
<\/script>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---------- state ----------
const state = { base:0, epaule:0, coude:0, pince:20, power:false, speed:2, deadzone:true, trail:true, seq:[] };
const LIMITS = { base:[-90,90], epaule:[-60,60], coude:[-90,90] };
const L_MM = { l1:60, l2:110, l3:100 }; // mm
const SCALE = 1/30; // mm -> scene units
const L = { l1:L_MM.l1*SCALE, l2:L_MM.l2*SCALE, l3:L_MM.l3*SCALE };

function deg2rad(d){ return d*Math.PI/180; }
function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
function applyDeadzone(v){ return (state.deadzone && Math.abs(v)<0.06) ? 0 : v; }

// ---------- three.js scene ----------
const canvas = document.getElementById('three-canvas');
const wrap = canvas.parentElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0e14);
scene.fog = new THREE.Fog(0x0a0e14, 8, 16);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(5.2, 4.0, 6.2);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 1.6, 0);
controls.minDistance = 3;
controls.maxDistance = 13;
controls.minPolarAngle = 0.15;
controls.maxPolarAngle = 1.48;

// lights
scene.add(new THREE.HemisphereLight(0x2a6b8a, 0x05070c, 0.9));
const key = new THREE.DirectionalLight(0xbfe9ff, 1.1);
key.position.set(5, 8, 4);
scene.add(key);
const rim = new THREE.PointLight(0x00c8ff, 0.6, 12);
rim.position.set(-3, 3, -3);
scene.add(rim);

// grid floor
const grid = new THREE.GridHelper(14, 28, 0x22405e, 0x14202f);
grid.position.y = 0;
scene.add(grid);
const floor = new THREE.Mesh(
  new THREE.CircleGeometry(7, 48),
  new THREE.MeshBasicMaterial({ color:0x0a0e14, transparent:true, opacity:.55 })
);
floor.rotation.x = -Math.PI/2;
floor.position.y = -0.01;
scene.add(floor);

// materials
const matPanel = new THREE.MeshStandardMaterial({ color:0x151d2e, metalness:.3, roughness:.6, emissive:0x00161c, emissiveIntensity:.4 });
const matJointCyan = new THREE.MeshStandardMaterial({ color:0x00c8ff, emissive:0x00c8ff, emissiveIntensity:.5, metalness:.4, roughness:.3 });
const matJointPurple = new THREE.MeshStandardMaterial({ color:0xb468ff, emissive:0xb468ff, emissiveIntensity:.5, metalness:.4, roughness:.3 });
const matLinkCyan = new THREE.MeshStandardMaterial({ color:0x0d3a4a, metalness:.5, roughness:.35, emissive:0x00c8ff, emissiveIntensity:.15 });
const matLinkPurple = new THREE.MeshStandardMaterial({ color:0x2a1a4a, metalness:.5, roughness:.35, emissive:0xb468ff, emissiveIntensity:.15 });
const matEffectorIdle = new THREE.MeshStandardMaterial({ color:0xffab00, emissive:0xffab00, emissiveIntensity:.7, metalness:.3, roughness:.3 });
const matEffectorReady = new THREE.MeshStandardMaterial({ color:0x00e676, emissive:0x00e676, emissiveIntensity:.9, metalness:.3, roughness:.3 });
const matEffectorHolding = new THREE.MeshStandardMaterial({ color:0x39d6ff, emissive:0x39d6ff, emissiveIntensity:.9, metalness:.3, roughness:.3 });
const matGripIdle = new THREE.MeshStandardMaterial({ color:0x2a2f3d, metalness:.65, roughness:.35 });
const matGripReady = new THREE.MeshStandardMaterial({ color:0x0e5c34, emissive:0x00e676, emissiveIntensity:.5, metalness:.5, roughness:.35 });
const matGripHolding = new THREE.MeshStandardMaterial({ color:0x0a4a63, emissive:0x39d6ff, emissiveIntensity:.5, metalness:.5, roughness:.35 });

// --- base ---
const armRoot = new THREE.Group();
scene.add(armRoot);

const baseStand = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.22, 32), matPanel);
baseStand.position.y = 0.11;
armRoot.add(baseStand);

const baseColumn = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, L.l1, 24), matPanel);
baseColumn.position.y = 0.22 + L.l1/2;
armRoot.add(baseColumn);

// baseGroup: rotates around Y for the "base" joint, pivoted at top of column
const baseGroup = new THREE.Group();
baseGroup.position.y = 0.22 + L.l1;
armRoot.add(baseGroup);

const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 16), matJointCyan);
baseGroup.add(shoulderJoint);

// shoulderPivot: tilts (epaule) — child of baseGroup so it inherits base rotation
const shoulderPivot = new THREE.Group();
baseGroup.add(shoulderPivot);

const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.19, L.l2, 20), matLinkCyan);
upperArm.position.y = L.l2/2;
shoulderPivot.add(upperArm);

// elbowPivot: at tip of upper arm, tilts (coude) relative to upper arm
const elbowPivot = new THREE.Group();
elbowPivot.position.y = L.l2;
shoulderPivot.add(elbowPivot);

const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 16), matJointPurple);
elbowPivot.add(elbowJoint);

const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, L.l3, 20), matLinkPurple);
forearm.position.y = L.l3/2;
elbowPivot.add(forearm);

// end-effector group at forearm tip
const effectorGroup = new THREE.Group();
effectorGroup.position.y = L.l3;
elbowPivot.add(effectorGroup);

const effectorCore = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 14), matEffectorIdle);
effectorCore.position.y = 0.02;
effectorGroup.add(effectorCore);

// ---- gripper (2-finger parallel gripper, opens/closes on the pince slider) ----
const gripperMount = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.14, 20), matPanel);
gripperMount.position.y = 0.09;
effectorGroup.add(gripperMount);

function buildFinger(){
  const g = new THREE.Group();
  const knuckle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.07, 0.13), matGripIdle);
  knuckle.position.y = 0.035;
  g.add(knuckle);
  const link = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.30, 0.10), matGripIdle);
  link.position.y = 0.07 + 0.15;
  g.add(link);
  const pad = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, 0.12), matGripIdle);
  pad.position.y = 0.07 + 0.30 + 0.02;
  g.add(pad);
  g.userData.parts = [knuckle, link, pad];
  return g;
}
const fingerL = buildFinger();
const fingerR = buildFinger();
fingerL.position.y = 0.15; fingerR.position.y = 0.15;
effectorGroup.add(fingerL, fingerR);

function setGripperMaterial(mat){
  [fingerL, fingerR].forEach(f=>f.userData.parts.forEach(p=>p.material=mat));
}

const clawL = fingerL, clawR = fingerR;

// ---------- zones de ramassage / dépôt ----------
const ZONE_RADIUS_SCENE = 5; // ~150mm from the base axis
const ZONE_HEIGHT = 1.05;    // scene units above the floor
const pickupAngle = deg2rad(-50);
const dropAngle = deg2rad(50);
const pickupCenter = new THREE.Vector3(ZONE_RADIUS_SCENE*Math.sin(pickupAngle), ZONE_HEIGHT, ZONE_RADIUS_SCENE*Math.cos(pickupAngle));
const dropCenter = new THREE.Vector3(ZONE_RADIUS_SCENE*Math.sin(dropAngle), ZONE_HEIGHT, ZONE_RADIUS_SCENE*Math.cos(dropAngle));

function makePedestal(center, color){
  const g = new THREE.Group();
  g.position.set(center.x, 0, center.z);
  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, ZONE_HEIGHT, 24), matPanel);
  stand.position.y = ZONE_HEIGHT/2;
  g.add(stand);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.35, 0.5, 32), new THREE.MeshBasicMaterial({ color, transparent:true, opacity:.85, side:THREE.DoubleSide }));
  ring.rotation.x = -Math.PI/2;
  ring.position.y = ZONE_HEIGHT + 0.01;
  g.add(ring);
  scene.add(g);
  return g;
}
makePedestal(pickupCenter, 0x00e676);
makePedestal(dropCenter, 0xff8a00);

// pickable objects — small cubes sitting on the pickup pedestal
const OBJECT_DEFS = [
  { color:0x00e676, offset:new THREE.Vector3(-0.16, 0, -0.1) },
  { color:0xffffff, offset:new THREE.Vector3(0.18, 0, 0.05) },
  { color:0x39d6ff, offset:new THREE.Vector3(0, 0, 0.2) },
];
const objects = [];
function spawnObjects(){
  objects.forEach(o=>scene.remove(o.mesh));
  objects.length = 0;
  OBJECT_DEFS.forEach(def=>{
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.22, 0.22),
      new THREE.MeshStandardMaterial({ color:def.color, metalness:.2, roughness:.5, emissive:def.color, emissiveIntensity:.15 })
    );
    const home = pickupCenter.clone().add(def.offset).add(new THREE.Vector3(0, 0.11 + ZONE_HEIGHT - ZONE_HEIGHT, 0));
    home.y = ZONE_HEIGHT + 0.11;
    mesh.position.copy(home);
    scene.add(mesh);
    objects.push({ mesh, held:false, home });
  });
}
spawnObjects();

let deliveredCount = 0;
let holding = null;
const GRAB_RADIUS = 1.05; // scene units (~31mm) — généreux pour rester facile à viser
const ZONE_CATCH_RADIUS = 1.1; // scene units for a valid drop
const tmpVec = new THREE.Vector3();

function nearestFreeObject(effectorWorld){
  let best = null, bestDist = Infinity;
  objects.forEach(o=>{
    if(o.held) return;
    o.mesh.getWorldPosition(tmpVec);
    const d = tmpVec.distanceTo(effectorWorld);
    if(d < bestDist){ bestDist = d; best = o; }
  });
  return { obj:best, dist:bestDist };
}

function updateGripReadouts(effectorWorld){
  const { obj, dist } = nearestFreeObject(effectorWorld);
  const distMm = dist*30;
  const inRange = !holding && obj && dist <= GRAB_RADIUS;

  document.getElementById('gripState').textContent = holding ? 'Tient un objet' : 'Libre';
  document.getElementById('gripState').className = 'value ' + (holding ? 'ok' : '');

  const nearObjEl = document.getElementById('nearObj');
  const nearDistEl = document.getElementById('nearDist');
  if(holding){
    nearObjEl.textContent = '—'; nearObjEl.className = 'value';
    nearDistEl.textContent = '— mm'; nearDistEl.className = 'value';
  } else if(obj){
    nearObjEl.textContent = inRange ? 'à portée ✓' : 'hors de portée';
    nearObjEl.className = 'value ' + (inRange ? 'ok' : '');
    nearDistEl.textContent = distMm.toFixed(0) + ' mm';
    nearDistEl.className = 'value ' + (inRange ? 'ok' : '');
  } else {
    nearObjEl.textContent = 'aucun'; nearObjEl.className = 'value';
    nearDistEl.textContent = '— mm'; nearDistEl.className = 'value';
  }

  // visual feedback on the gripper + effector LED
  if(holding){
    effectorCore.material = matEffectorHolding;
    setGripperMaterial(matGripHolding);
  } else if(inRange){
    effectorCore.material = matEffectorReady;
    setGripperMaterial(matGripReady);
  } else {
    effectorCore.material = matEffectorIdle;
    setGripperMaterial(matGripIdle);
  }
}

function toggleGrip(){
  effectorGroup.getWorldPosition(tmpVec);
  const effectorWorld = tmpVec.clone();

  if(!holding){
    const { obj, dist } = nearestFreeObject(effectorWorld);
    if(obj && dist <= GRAB_RADIUS){
      obj.mesh.getWorldPosition(tmpVec);
      const local = effectorGroup.worldToLocal(tmpVec.clone());
      effectorGroup.add(obj.mesh);
      obj.mesh.position.copy(local);
      obj.held = true;
      holding = obj;
      log('Objet saisi par la pince.');
    } else {
      log("Aucun objet à portée de la pince — rapprochez l'effecteur (rayon "+(GRAB_RADIUS*30).toFixed(0)+" mm).");
    }
  } else {
    holding.mesh.getWorldPosition(tmpVec);
    const releaseWorld = tmpVec.clone();
    scene.add(holding.mesh);
    holding.mesh.position.copy(releaseWorld);
    holding.held = false;

    const distToDrop = Math.hypot(releaseWorld.x-dropCenter.x, releaseWorld.z-dropCenter.z);
    const distToPickup = Math.hypot(releaseWorld.x-pickupCenter.x, releaseWorld.z-pickupCenter.z);
    if(distToDrop <= ZONE_CATCH_RADIUS){
      holding.mesh.position.set(dropCenter.x + (Math.random()-0.5)*0.4, ZONE_HEIGHT+0.11, dropCenter.z + (Math.random()-0.5)*0.4);
      deliveredCount++;
      document.getElementById('pill-delivered').textContent = deliveredCount + ' / ' + objects.length + ' livrés';
      document.getElementById('pill-delivered').className = 'status-pill ' + (deliveredCount>=objects.length ? 'on' : 'warn');
      log('Objet déposé dans la zone de dépôt ✔ ('+deliveredCount+'/'+objects.length+').');
    } else if(distToPickup <= ZONE_CATCH_RADIUS){
      holding.mesh.position.y = ZONE_HEIGHT + 0.11;
      log('Objet reposé dans la zone de ramassage.');
    } else {
      holding.mesh.position.y = 0.11;
      log('Objet lâché hors zone — il repose au sol.');
    }
    holding = null;
  }
  updateGripReadouts(effectorWorld);
}

// trail (end-effector path)
const TRAIL_LEN = 160;
const trailPositions = new Float32Array(TRAIL_LEN*3);
const trailGeo = new THREE.BufferGeometry();
trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
const trailMat = new THREE.LineBasicMaterial({ color:0x00e676, transparent:true, opacity:.55 });
const trailLine = new THREE.Line(trailGeo, trailMat);
trailLine.frustumCulled = false;
scene.add(trailLine);
let trailCount = 0;
let trailFilled = false;

function resetTrail(){ trailCount = 0; trailFilled = false; trailGeo.setDrawRange(0,0); }

function pushTrailPoint(p){
  if(!state.trail) return;
  trailPositions[trailCount*3] = p.x;
  trailPositions[trailCount*3+1] = p.y;
  trailPositions[trailCount*3+2] = p.z;
  trailCount++;
  if(trailCount>=TRAIL_LEN){ trailCount=0; trailFilled=true; }
  trailGeo.setDrawRange(0, trailFilled ? TRAIL_LEN : trailCount);
  trailGeo.attributes.position.needsUpdate = true;
}

function resize(){
  const w = wrap.clientWidth, h = wrap.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(wrap);
resize();
document.getElementById('loadingBadge').style.display = 'none';

const worldPos = new THREE.Vector3();

function updateKinematics(){
  baseGroup.rotation.y = -deg2rad(state.base);
  shoulderPivot.rotation.z = deg2rad(state.epaule);
  elbowPivot.rotation.z = deg2rad(state.coude);
  const clawOpen = 0.11 + (state.pince/60)*0.14;
  clawL.position.x = -clawOpen;
  clawR.position.x = clawOpen;

  armRoot.updateMatrixWorld(true);
  effectorGroup.getWorldPosition(worldPos);
  pushTrailPoint(worldPos);

  const X = worldPos.x / SCALE;
  const Y = worldPos.z / SCALE;
  const Z = worldPos.y / SCALE;
  const reach = Math.sqrt(X*X+Y*Y+Z*Z);

  document.getElementById('posX').textContent = X.toFixed(1)+' mm';
  document.getElementById('posY').textContent = Y.toFixed(1)+' mm';
  document.getElementById('posZ').textContent = Z.toFixed(1)+' mm';
  document.getElementById('reach').textContent = reach.toFixed(1)+' mm';

  document.getElementById('valBase').textContent = Math.round(state.base)+'°';
  document.getElementById('valEpaule').textContent = Math.round(state.epaule)+'°';
  document.getElementById('valCoude').textContent = Math.round(state.coude)+'°';
  document.getElementById('barBase').style.width = (50+state.base/LIMITS.base[1]*50)+'%';
  document.getElementById('barEpaule').style.width = (50+state.epaule/LIMITS.epaule[1]*50)+'%';
  document.getElementById('barCoude').style.width = (50+state.coude/LIMITS.coude[1]*50)+'%';

  const nearLimit = Math.abs(state.base)>=LIMITS.base[1]-2 || Math.abs(state.epaule)>=LIMITS.epaule[1]-2 || Math.abs(state.coude)>=LIMITS.coude[1]-2;
  document.querySelector('#rowLimit .led-dot').className = 'led-dot ' + (nearLimit ? 'warn' : '');

  updateGripReadouts(worldPos);
}

const target = { base:0, epaule:0, coude:0 };
const LERP_RATE = { 1:0.045, 2:0.11, 3:0.24 };

function animate(){
  requestAnimationFrame(animate);
  controls.update();
  const r = LERP_RATE[state.speed];
  state.base += (target.base-state.base)*r;
  state.epaule += (target.epaule-state.epaule)*r;
  state.coude += (target.coude-state.coude)*r;
  updateKinematics();
  renderer.render(scene, camera);
}
updateKinematics();
animate();

// ---------- console log ----------
const consoleEl = document.getElementById('console');
function log(msg){
  const d = document.createElement('div');
  const t = new Date().toLocaleTimeString('fr-FR');
  d.innerHTML = '<span>['+t+']</span> '+msg;
  consoleEl.appendChild(d);
  consoleEl.scrollTop = consoleEl.scrollHeight;
  if(consoleEl.children.length>120) consoleEl.removeChild(consoleEl.children[0]);
}
log('Système initialisé — attente activation moteurs.');
log('Moteur 3D chargé (Three.js) — orbitez avec la souris.');

// ---------- power / estop ----------
const btnPower = document.getElementById('btn-power');
const pillPower = document.getElementById('pill-power');
const ledPower = document.getElementById('ledPower');
btnPower.addEventListener('click', ()=>{
  state.power = !state.power;
  pillPower.textContent = state.power ? 'MOTEURS ON' : 'MOTEURS OFF';
  pillPower.className = 'status-pill ' + (state.power ? 'on' : 'off');
  ledPower.className = 'led-dot ' + (state.power ? 'on' : '');
  btnPower.textContent = state.power ? 'Couper moteurs' : 'Activer moteurs';
  log(state.power ? 'Moteurs activés (PWM servos ON).' : 'Moteurs désactivés.');
});
document.getElementById('btn-estop').addEventListener('click', ()=>{
  state.power = false;
  pillPower.textContent = 'MOTEURS OFF'; pillPower.className='status-pill off';
  ledPower.className = 'led-dot';
  btnPower.textContent = 'Activer moteurs';
  log("ARRÊT D'URGENCE — tous les servos relâchés.");
});

// ---------- joystick ----------
const joystick = document.getElementById('joystick');
const joyHandle = document.getElementById('joyHandle');
let dragging = false;

function setJoyVisual(dx, dy){
  joyHandle.style.left = (50 + dx*40) + '%';
  joyHandle.style.top = (50 + dy*40) + '%';
}
function syncJoyVisualFromTarget(){
  setJoyVisual(target.base/LIMITS.base[1], -target.epaule/LIMITS.epaule[1]);
}
function joyMove(clientX, clientY){
  const rect = joystick.getBoundingClientRect();
  const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
  let dx = (clientX-cx)/(rect.width/2);
  let dy = (clientY-cy)/(rect.height/2);
  const mag = Math.sqrt(dx*dx+dy*dy);
  if(mag>1){ dx/=mag; dy/=mag; }
  setJoyVisual(dx, dy);
  dx = applyDeadzone(dx); dy = applyDeadzone(dy);
  target.base = clamp(dx*LIMITS.base[1], LIMITS.base[0], LIMITS.base[1]);
  target.epaule = clamp(-dy*LIMITS.epaule[1], LIMITS.epaule[0], LIMITS.epaule[1]);
}
joystick.addEventListener('pointerdown', e=>{ dragging=true; joystick.setPointerCapture(e.pointerId); joyMove(e.clientX, e.clientY); });
joystick.addEventListener('pointermove', e=>{ if(dragging) joyMove(e.clientX, e.clientY); });
joystick.addEventListener('pointerup', ()=>{ dragging=false; setJoyVisual(0,0); target.base=0; target.epaule=0; });

document.getElementById('btn-center').addEventListener('click', ()=>{
  setJoyVisual(0,0); target.base=0; target.epaule=0;
  log('Joystick recentré — base et épaule reviennent à 0°.');
});

document.getElementById('coudeSlider').addEventListener('input', e=>{
  target.coude = parseFloat(e.target.value);
});
document.getElementById('pinceSlider').addEventListener('input', e=>{
  state.pince = parseFloat(e.target.value); updateKinematics();
});

function goHome(){
  target.base=0; target.epaule=0; target.coude=0;
  document.getElementById('coudeSlider').value=0;
  setJoyVisual(0,0);
  log('Retour position HOME (0°, 0°, 0°).');
}
document.getElementById('btn-home').addEventListener('click', goHome);

document.getElementById('btn-deadzone').addEventListener('click', function(){
  state.deadzone = !state.deadzone;
  document.getElementById('dzState').textContent = state.deadzone ? 'ON' : 'OFF';
  log('Zone morte joystick : ' + (state.deadzone?'activée':'désactivée') + '.');
});

document.getElementById('btn-trail').addEventListener('click', function(){
  state.trail = !state.trail;
  document.getElementById('trailState').textContent = state.trail ? 'ON' : 'OFF';
  trailLine.visible = state.trail;
  if(!state.trail) resetTrail();
  log('Trace effecteur : ' + (state.trail?'activée':'désactivée') + '.');
});

// ---------- clavier (pilotage plus simple au clavier) ----------
const KEY_STEP = 3.2;
document.addEventListener('keydown', (e)=>{
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if(tag === 'INPUT' || tag === 'TEXTAREA') return;
  let handled = true;
  switch(e.key){
    case 'ArrowLeft':  target.base = clamp(target.base-KEY_STEP, LIMITS.base[0], LIMITS.base[1]); break;
    case 'ArrowRight': target.base = clamp(target.base+KEY_STEP, LIMITS.base[0], LIMITS.base[1]); break;
    case 'ArrowUp':    target.epaule = clamp(target.epaule+KEY_STEP, LIMITS.epaule[0], LIMITS.epaule[1]); break;
    case 'ArrowDown':  target.epaule = clamp(target.epaule-KEY_STEP, LIMITS.epaule[0], LIMITS.epaule[1]); break;
    case 'q': case 'Q': target.coude = clamp(target.coude-KEY_STEP, LIMITS.coude[0], LIMITS.coude[1]); break;
    case 'e': case 'E': target.coude = clamp(target.coude+KEY_STEP, LIMITS.coude[0], LIMITS.coude[1]); break;
    case ' ':          toggleGrip(); break;
    case 'h': case 'H': goHome(); break;
    default: handled = false;
  }
  if(handled){
    e.preventDefault();
    document.getElementById('coudeSlider').value = target.coude;
    syncJoyVisualFromTarget();
  }
});

document.getElementById('btn-grip').addEventListener('click', toggleGrip);

document.getElementById('btn-reset-objects').addEventListener('click', ()=>{
  if(holding){ scene.add(holding.mesh); holding.held = false; holding = null; }
  spawnObjects();
  deliveredCount = 0;
  document.getElementById('pill-delivered').textContent = '0 / ' + OBJECT_DEFS.length + ' livrés';
  document.getElementById('pill-delivered').className = 'status-pill off';
  log('Objets réinitialisés dans la zone de ramassage.');
  effectorGroup.getWorldPosition(tmpVec);
  updateGripReadouts(tmpVec.clone());
});

document.querySelectorAll('[data-speed]').forEach(btn=>{
  btn.addEventListener('click', function(){
    document.querySelectorAll('[data-speed]').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    state.speed = parseInt(this.dataset.speed);
    const labels = {1:'Lente',2:'Normale',3:'Rapide'};
    document.getElementById('speedMode').textContent = labels[state.speed];
    log('Vitesse de commande réglée sur : ' + labels[state.speed] + '.');
  });
});

// ---------- sequence (teach & repeat) ----------
const seqListEl = document.getElementById('seqList');
const pillSeqCount = document.getElementById('pill-seq-count');
function refreshSeqList(){
  if(state.seq.length===0){
    seqListEl.innerHTML = '<div style="color:var(--muted);font-size:11px;padding:6px">Aucun point enregistré. Utilisez « Enregistrer point » pendant que vous pilotez le bras.</div>';
  } else {
    seqListEl.innerHTML = state.seq.map((p,i)=>
      '<div class="seq-item">#'+ (i+1) +'<span>Base '+p.base.toFixed(0)+'° · Épaule '+p.epaule.toFixed(0)+'° · Coude '+p.coude.toFixed(0)+'°</span></div>'
    ).join('');
  }
  pillSeqCount.textContent = state.seq.length + ' point(s)';
  pillSeqCount.className = 'status-pill ' + (state.seq.length ? 'on' : 'off');
}
document.getElementById('btn-record').addEventListener('click', ()=>{
  state.seq.push({base:state.base, epaule:state.epaule, coude:state.coude});
  refreshSeqList();
  log('Point enregistré (#'+state.seq.length+').');
});
document.getElementById('btn-clear-seq').addEventListener('click', ()=>{
  state.seq = []; refreshSeqList();
  log('Séquence effacée.');
});
document.getElementById('btn-play').addEventListener('click', ()=>{
  if(state.seq.length===0){ log('Aucune séquence à rejouer.'); return; }
  log('Lecture de la séquence ('+state.seq.length+' points)...');
  let i=0;
  const step = ()=>{
    if(i>=state.seq.length){ log('Séquence terminée.'); return; }
    const p = state.seq[i];
    target.base=p.base; target.epaule=p.epaule; target.coude=p.coude;
    document.getElementById('coudeSlider').value = p.coude;
    syncJoyVisualFromTarget();
    i++;
    setTimeout(step, 900);
  };
  step();
});
<\/script>
</body>
</html>
`;export{e as default};
