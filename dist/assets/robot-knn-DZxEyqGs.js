const n=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Comparateur de navigation autonome — classification par capteurs</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

:root{
  --bg:#0b0e14;
  --panel:#12161f;
  --panel-2:#161b26;
  --border:#232a38;
  --grid-line:#1a212c;
  --text:#e6eaf0;
  --muted:#6b7688;
  --muted-2:#4a5468;
  --c-knn:#4fd1c5;
  --c-tree:#f0a868;
  --c-nb:#e667af;
  --c-heur:#a8d96b;
  --c-random:#8891a6;
  --c-custom:#a78bfa;
  --goal:#4f8ef7;
  --danger:#e5484d;
  --success:#7ee787;
  --radius:10px;
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'IBM Plex Mono', monospace;
  min-height:100vh;
  padding:22px 22px 60px;
}
h1,h2,h3{font-family:'Space Grotesk', sans-serif; margin:0;}
.wrap{max-width:1220px; margin:0 auto;}

/* ---------- header ---------- */
.hdr{display:flex; align-items:flex-start; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-bottom:18px;}
.hdr-title{font-size:22px; font-weight:700; letter-spacing:0.2px;}
.hdr-title .accent{color:var(--c-knn);}
.hdr-sub{color:var(--muted); font-size:12.5px; margin-top:6px; max-width:560px; line-height:1.5;}
.hdr-badge{
  font-size:10.5px; color:var(--muted); border:1px solid var(--border);
  border-radius:999px; padding:6px 12px; letter-spacing:0.5px; text-transform:uppercase;
  white-space:nowrap;
}
.hdr-badge b{color:var(--c-heur); font-weight:600;}

/* ---------- controls ---------- */
.controls{
  background:var(--panel); border:1px solid var(--border); border-radius:var(--radius);
  padding:14px 16px; display:flex; flex-wrap:wrap; gap:20px 26px; align-items:flex-end; margin-bottom:18px;
}
.ctrl-group{display:flex; flex-direction:column; gap:6px; min-width:120px;}
.ctrl-group label{font-size:10.5px; color:var(--muted); text-transform:uppercase; letter-spacing:0.6px;}
.ctrl-value{color:var(--c-knn); font-weight:600;}
select, input[type=range]{
  background:var(--panel-2); border:1px solid var(--border); color:var(--text);
  border-radius:6px; font-family:'IBM Plex Mono',monospace; font-size:12.5px;
}
select{padding:6px 8px;}
input[type=range]{width:120px; padding:0; accent-color:#4fd1c5; height:20px;}
.btn{
  background:var(--panel-2); border:1px solid var(--border); color:var(--text);
  border-radius:6px; padding:8px 14px; font-family:'IBM Plex Mono',monospace; font-size:12px;
  cursor:pointer; transition:border-color .15s, color .15s; letter-spacing:0.3px; font-weight:500;
}
.btn:hover{border-color:var(--c-knn); color:var(--c-knn);}
.btn.primary{background:var(--c-knn); color:#0b0e14; border-color:var(--c-knn); font-weight:600;}
.btn.primary:hover{opacity:0.88; color:#0b0e14;}
.btn-row{display:flex; gap:8px;}

.algo-toggles{display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; margin-left:auto;}
.algo-toggle{display:flex; align-items:center; gap:6px; font-size:12px; cursor:pointer; user-select:none;}
.algo-toggle input[type=checkbox]{accent-color:#4fd1c5; cursor:pointer;}
.dot{width:9px; height:9px; border-radius:50%; display:inline-block; flex-shrink:0;}
input.colorpick{
  -webkit-appearance:none; appearance:none; width:16px; height:16px; padding:0; border:none;
  border-radius:50%; cursor:pointer; background:none; overflow:hidden; flex-shrink:0;
}
input.colorpick::-webkit-color-swatch-wrapper{padding:0;}
input.colorpick::-webkit-color-swatch{border:1px solid var(--border); border-radius:50%;}
input.colorpick::-moz-color-swatch{border:1px solid var(--border); border-radius:50%;}

.hint{font-size:11px; color:var(--muted-2); width:100%; margin-top:-4px;}

/* ---------- panels ---------- */
.panels{
  display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:20px;
}
.panel{
  background:var(--panel); border:1px solid var(--border); border-radius:var(--radius);
  padding:12px; display:flex; flex-direction:column; gap:8px;
}
.panel-hdr{display:flex; align-items:center; justify-content:space-between; gap:8px;}
.panel-name{display:flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; font-family:'Space Grotesk',sans-serif;}
.panel-status{font-size:10px; padding:2px 8px; border-radius:999px; border:1px solid var(--border); color:var(--muted); text-transform:uppercase; letter-spacing:0.4px;}
.panel-status.running{color:var(--c-knn); border-color:var(--c-knn);}
.panel-status.success{color:var(--success); border-color:var(--success);}
.panel-status.timeout{color:var(--danger); border-color:var(--danger);}
.panel-status.error{color:var(--danger); border-color:var(--danger);}
.panel-status.stuck{color:var(--muted); border-color:var(--muted);}
.canvas-wrap{position:relative; width:100%; aspect-ratio:1/1; background:#0d1119; border-radius:6px; overflow:hidden; border:1px solid var(--grid-line);}
canvas{display:block; width:100%; height:100%;}
.panel-stats{display:flex; justify-content:space-between; font-size:11px; color:var(--muted);}
.panel-stats b{color:var(--text); font-weight:500;}

/* ---------- comparison table ---------- */
.compare{background:var(--panel); border:1px solid var(--border); border-radius:var(--radius); padding:14px 16px;}
.compare h2{font-size:14px; margin-bottom:10px;}
table{width:100%; border-collapse:collapse; font-size:12px;}
th,td{text-align:left; padding:7px 10px; border-bottom:1px solid var(--grid-line);}
th{color:var(--muted); font-size:10.5px; text-transform:uppercase; letter-spacing:0.4px; font-weight:500;}
td.num{font-family:'IBM Plex Mono',monospace;}
tr:last-child td{border-bottom:none;}

.empty-note{color:var(--muted-2); font-size:12px; text-align:center; padding:30px 0;}

/* ---------- custom code panel ---------- */
.code-panel{background:var(--panel); border:1px solid var(--border); border-radius:var(--radius); padding:14px 16px; margin-bottom:20px;}
.code-panel h2{font-size:14px; margin-bottom:8px;}
.code-panel code{color:var(--c-custom); background:var(--panel-2); padding:1px 5px; border-radius:4px; font-size:11.5px;}
#customCode{
  width:100%; min-height:190px; resize:vertical; background:#0d1119; color:var(--text);
  border:1px solid var(--border); border-radius:8px; padding:12px 14px; font-family:'IBM Plex Mono',monospace;
  font-size:12.5px; line-height:1.6; tab-size:2;
}
#customCode:focus{outline:none; border-color:var(--c-custom);}
.code-status{font-size:12px;}
.code-status.ok{color:var(--success);}
.code-status.err{color:var(--danger);}
.code-status.stale{color:var(--c-tree);}
#densityGroup.disabled{opacity:0.4; pointer-events:none;}

@media (max-width:640px){
  .controls{flex-direction:column; align-items:stretch;}
  .algo-toggles{margin-left:0;}
}
</style>
</head>
<body>
<div class="wrap">

  <div class="hdr">
    <div>
      <div class="hdr-title">Navigation <span class="accent">autonome</span> — comparateur de classifieurs</div>
      <div class="hdr-sub">Un robot lit ses capteurs de proximité (avant / gauche / droite / arrière) et la direction du but, puis un algorithme de classification décide du déplacement. L'environnement change à chaque génération et les obstacles ne sont révélés qu'une fois détectés par les capteurs.</div>
    </div>
    <div class="hdr-badge">Chemin optimal (BFS) : <b id="optimalLen">—</b> pas</div>
  </div>

  <div class="controls">
    <div class="ctrl-group">
      <label>Type d'environnement</label>
      <select id="envType">
        <option value="random">Obstacles aléatoires</option>
        <option value="maze" selected>Labyrinthe</option>
      </select>
    </div>
    <div class="ctrl-group">
      <label>Taille de la grille</label>
      <select id="gridSize">
        <option value="12">12 × 12</option>
        <option value="16" selected>16 × 16</option>
        <option value="20">20 × 20</option>
        <option value="24">24 × 24</option>
      </select>
    </div>
    <div class="ctrl-group disabled" id="densityGroup">
      <label>Densité d'obstacles : <span class="ctrl-value" id="densityVal">15%</span></label>
      <input type="range" id="density" min="5" max="35" value="15" step="1">
    </div>
    <div class="ctrl-group">
      <label>k (KNN) : <span class="ctrl-value" id="kVal">5</span></label>
      <input type="range" id="kValue" min="1" max="15" value="5" step="2">
    </div>
    <div class="ctrl-group">
      <label>Vitesse : <span class="ctrl-value" id="speedVal">6</span> pas/s</label>
      <input type="range" id="speed" min="1" max="15" value="6" step="1">
    </div>
    <div class="btn-row">
      <button class="btn primary" id="playPauseBtn">Lancer</button>
      <button class="btn" id="resetBtn">Réinitialiser</button>
      <button class="btn" id="newEnvBtn">Nouvel environnement</button>
    </div>
    <div class="ctrl-group">
      <label>Zoom : <span class="ctrl-value" id="zoomVal">100%</span></label>
      <div class="btn-row">
        <button class="btn" id="zoomOutBtn">−</button>
        <button class="btn" id="zoomResetBtn">Réinitialiser</button>
        <button class="btn" id="zoomInBtn">+</button>
      </div>
    </div>
    <div class="algo-toggles" id="algoToggles"></div>
    <div class="hint">Molette ou boutons +/− pour zoomer, glisser pour se déplacer, double-clic pour réinitialiser. Le changement de type / grille / densité s'applique au prochain clic sur « Nouvel environnement » — un nouveau labyrinthe est différent à chaque génération. k et vitesse s'appliquent immédiatement.</div>
  </div>

  <div class="code-panel">
    <h2>Implémentez votre propre algorithme</h2>
    <div class="hint" style="margin-bottom:8px;">
      Écrivez une fonction <code>decide(features)</code> où <code>features = [dN, dE, dS, dW, dx, dy]</code> :
      distances libres normalisées (0 = obstacle collé, 1 = rien en vue) vers le Nord/Est/Sud/Ouest, puis la
      direction normalisée vers le but (dx, dy ∈ [-1,1]). Retournez 0 (Nord), 1 (Est), 2 (Sud) ou 3 (Ouest).
      Cochez « Mon algorithme (code) » ci-dessus pour l'ajouter à la comparaison sur le labyrinthe ou l'environnement aléatoire.
    </div>
    <textarea id="customCode" spellcheck="false">function decide(features) {
  const [dN, dE, dS, dW, dx, dy] = features;
  // dx > 0 : le but est à l'Est ; dy > 0 : le but est au Sud. dN/dE/dS/dW : 0 = mur collé.
  if (dx > 0 && dE > 0.15) return 1;   // Est
  if (dx < 0 && dW > 0.15) return 3;   // Ouest
  if (dy > 0 && dS > 0.15) return 2;   // Sud
  if (dy < 0 && dN > 0.15) return 0;   // Nord
  // sinon, prendre la direction la plus dégagée
  const d = [dN, dE, dS, dW];
  return d.indexOf(Math.max(...d));
}</textarea>
    <div class="btn-row" style="margin-top:10px;">
      <button class="btn primary" id="applyCodeBtn">Tester mon code</button>
      <span class="code-status" id="codeStatus"></span>
    </div>
  </div>

  <div class="panels" id="panels"></div>

  <div class="compare">
    <h2>Comparaison en direct</h2>
    <table>
      <thead>
        <tr><th>Algorithme</th><th>Statut</th><th>Pas</th><th>Collisions</th><th>Distance restante</th><th>Efficacité</th></tr>
      </thead>
      <tbody id="compareBody"></tbody>
    </table>
  </div>

</div>

<script>
(function(){
"use strict";

/* ===================== CONFIG & CONSTANTS ===================== */
const MAXR = 5; // portée des capteurs (en cellules)
const DIRS = ['N','E','S','W'];
const VEC = { N:[0,-1], E:[1,0], S:[0,1], W:[-1,0] };

const ALGO_DEFS = [
  { id:'knn',       name:'KNN (k plus proches voisins)', hex:'#4fd1c5' },
  { id:'tree',      name:'Arbre de décision',            hex:'#f0a868' },
  { id:'nb',        name:'Naïve Bayes',                  hex:'#e667af' },
  { id:'heuristic', name:'Heuristique gloutonne',        hex:'#a8d96b' },
  { id:'random',    name:'Aléatoire (référence)',        hex:'#8891a6' },
  { id:'custom',    name:'Mon algorithme (code)',        hex:'#a78bfa' },
];
const DEFAULT_ON = new Set(['knn','tree','nb','heuristic']);

let CONFIG = { cols:16, rows:16, density:0.15, k:5, speedPerSec:6, envType:'maze' };

let state = {
  env:null, training:null, tree:null, nb:null,
  instances:{}, active:new Set(DEFAULT_ON),
  running:false, timer:null,
  colors:{}, // algoId -> hex, user-customisable
  view:{ scale:1, panX:0, panY:0 }, // shared zoom/pan across all panels
  customWorker:null, customCompiledCode:null, customValidatedCode:null,
};
ALGO_DEFS.forEach(a=>{ state.colors[a.id] = a.hex; });

/* ===================== GRID / SENSING ===================== */
function inBounds(x,y,cols,rows){ return x>=0 && y>=0 && x<cols && y<rows; }

function bfsDist(obs,cols,rows,start,goal){
  const q=[start]; const seen=new Set([start.join(',')]); const dist={[start.join(',')]:0};
  while(q.length){
    const [cx,cy]=q.shift();
    if(cx===goal[0] && cy===goal[1]) return dist[cx+','+cy];
    for(const [dx,dy] of [[0,-1],[1,0],[0,1],[-1,0]]){
      const nx=cx+dx, ny=cy+dy, key=nx+','+ny;
      if(inBounds(nx,ny,cols,rows) && !obs.has(key) && !seen.has(key)){
        seen.add(key); dist[key]=dist[cx+','+cy]+1; q.push([nx,ny]);
      }
    }
  }
  return Infinity;
}

function genEnv(cols,rows,density){
  for(let tries=0; tries<80; tries++){
    const obs = new Set();
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      if(Math.random() < density) obs.add(x+','+y);
    }
    const start=[0,0], goal=[cols-1,rows-1];
    obs.delete(start.join(',')); obs.delete(goal.join(','));
    const optimal = bfsDist(obs,cols,rows,start,goal);
    if(Number.isFinite(optimal)) return { obs, start, goal, optimal, cols, rows, type:'random' };
  }
  // fallback: sparser retry
  return genEnv(cols,rows,Math.max(0.03,density*0.6));
}

// Perfect maze (single spanning-tree path between any two rooms) via an iterative
// randomised depth-first carve — a new, different layout every time it's called.
function genMazeEnv(cols,rows){
  const mc = Math.max(3, Math.floor((cols-1)/2));
  const mr = Math.max(3, Math.floor((rows-1)/2));
  const W = 2*mc+1, H = 2*mr+1;
  const obs = new Set();
  for(let y=0;y<H;y++) for(let x=0;x<W;x++) obs.add(x+','+y);
  const visited = Array.from({length:mr}, ()=> new Array(mc).fill(false));
  const stack = [[0,0]];
  visited[0][0] = true;
  obs.delete('1,1');
  while(stack.length){
    const [rx,ry] = stack[stack.length-1];
    const gx = 2*rx+1, gy = 2*ry+1;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for(let i=dirs.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; [dirs[i],dirs[j]]=[dirs[j],dirs[i]]; }
    let advanced = false;
    for(const [dx,dy] of dirs){
      const nx=rx+dx, ny=ry+dy;
      if(nx>=0 && ny>=0 && nx<mc && ny<mr && !visited[ny][nx]){
        obs.delete((gx+dx)+','+(gy+dy));
        obs.delete((2*nx+1)+','+(2*ny+1));
        visited[ny][nx] = true;
        stack.push([nx,ny]);
        advanced = true;
        break;
      }
    }
    if(!advanced) stack.pop();
  }
  const start=[1,1], goal=[W-2,H-2];
  const optimal = bfsDist(obs,W,H,start,goal);
  return { obs, start, goal, optimal, cols:W, rows:H, type:'maze' };
}

// returns {dist, cells} — cells are the free cells swept by the ray (for fog-of-war reveal)
function rayScan(obs,cols,rows,pos,vec,maxRange){
  let cells=[];
  for(let i=1;i<=maxRange;i++){
    const nx=pos[0]+vec[0]*i, ny=pos[1]+vec[1]*i;
    if(!inBounds(nx,ny,cols,rows) || obs.has(nx+','+ny)){
      return { dist:i-1, cells, blocked:[nx,ny] };
    }
    cells.push([nx,ny]);
  }
  return { dist:maxRange, cells, blocked:null };
}

function featuresFor(env,pos){
  const scans = {};
  for(const d of DIRS) scans[d] = rayScan(env.obs,env.cols,env.rows,pos,VEC[d],MAXR);
  const dx = (env.goal[0]-pos[0]) / env.cols;
  const dy = (env.goal[1]-pos[1]) / env.rows;
  return { feat:[scans.N.dist/MAXR, scans.E.dist/MAXR, scans.S.dist/MAXR, scans.W.dist/MAXR, dx, dy], scans };
}

/* ===================== GROUND-TRUTH RULE ===================== */
// Greedy "move toward the goal along whichever free axis helps most" — no rotation/heading state,
// which keeps the decision stable (no oscillation between two headings).
function ruleAction(feat){
  const [dN,dE,dS,dW,dx,dy] = feat;
  const clear = { N:dN, E:dE, S:dS, W:dW };
  const score = { N:-dy, S:dy, E:dx, W:-dx };
  const penal = (c)=> c<=0 ? 5 : 0; // an immediately-blocked direction is heavily deprioritised
  let best=DIRS[0], bestV=-Infinity;
  for(const d of DIRS){
    const v = score[d] - penal(clear[d]);
    if(v>bestV){ bestV=v; best=d; }
  }
  return DIRS.indexOf(best);
}

/* ===================== SYNTHETIC TRAINING DATA ===================== */
function genTraining(n){
  const data=[];
  const lowBias = ()=> Math.random()<0.5 ? Math.random()*0.4 : Math.random();
  for(let i=0;i<n;i++){
    const f=[lowBias(),lowBias(),lowBias(),lowBias(), Math.random()*2-1, Math.random()*2-1];
    let label = ruleAction(f);
    if(Math.random()<0.04) label = (label + 1 + Math.floor(Math.random()*2)) % 4; // label noise
    data.push({x:f, y:label});
  }
  return data;
}

/* ===================== KNN ===================== */
function knnPredict(data,k,feat){
  const scored = data.map(s=>{
    let s2=0; for(let i=0;i<6;i++){ const diff=s.x[i]-feat[i]; s2+=diff*diff; }
    return { dist:s2, y:s.y };
  }).sort((a,b)=>a.dist-b.dist).slice(0,k);
  const votes=[0,0,0,0];
  scored.forEach(s=>votes[s.y]++);
  return votes.indexOf(Math.max(...votes));
}

/* ===================== DECISION TREE (CART, Gini) ===================== */
function gini(rows){
  const c=[0,0,0,0]; rows.forEach(r=>c[r.y]++);
  const n=rows.length; let g=1; c.forEach(k=>{ const p=k/n; g-=p*p; });
  return g;
}
function buildTree(rows,depth){
  const c=[0,0,0,0]; rows.forEach(r=>c[r.y]++);
  const majority = c.indexOf(Math.max(...c));
  if(depth<=0 || rows.length<8 || gini(rows)<0.05) return { leaf:true, label:majority };
  let best=null;
  for(let fi=0; fi<6; fi++){
    const thresholds = fi<4 ? [0.1,0.2,0.3,0.4,0.5,0.6] : [-0.5,-0.25,0,0.25,0.5];
    for(const t of thresholds){
      const left=rows.filter(r=>r.x[fi]<=t), right=rows.filter(r=>r.x[fi]>t);
      if(left.length<3 || right.length<3) continue;
      const g=(left.length*gini(left)+right.length*gini(right))/rows.length;
      if(!best || g<best.g) best={g,fi,t,left,right};
    }
  }
  if(!best) return { leaf:true, label:majority };
  return { leaf:false, fi:best.fi, t:best.t, left:buildTree(best.left,depth-1), right:buildTree(best.right,depth-1) };
}
function treePredict(node,feat){
  while(!node.leaf){ node = feat[node.fi] <= node.t ? node.left : node.right; }
  return node.label;
}

/* ===================== NAIVE BAYES (Gaussian) ===================== */
function trainNB(rows){
  return [0,1,2,3].map(c=>{
    const sub = rows.filter(r=>r.y===c);
    const n = sub.length || 1;
    const means=new Array(6).fill(0), stds=new Array(6).fill(0);
    for(let i=0;i<6;i++){
      const vals = sub.map(r=>r.x[i]);
      const m = vals.reduce((a,b)=>a+b,0)/n; means[i]=m;
      const v = vals.reduce((a,b)=>a+(b-m)*(b-m),0)/n; stds[i]=Math.sqrt(v)||0.15;
    }
    return { prior: sub.length/rows.length, means, stds };
  });
}
function nbPredict(stats,feat){
  let best=-1, bestP=-Infinity;
  stats.forEach((s,c)=>{
    let logp = Math.log(s.prior || 1e-6);
    for(let i=0;i<6;i++){
      const std = Math.max(s.stds[i],0.08);
      const diff = feat[i]-s.means[i];
      logp += -0.5*Math.log(2*Math.PI*std*std) - (diff*diff)/(2*std*std);
    }
    if(logp>bestP){ bestP=logp; best=c; }
  });
  return best;
}

/* ===================== ALGO PREDICT DISPATCH ===================== */
function predictFor(algoId, feat){
  switch(algoId){
    case 'knn': return knnPredict(state.training, CONFIG.k, feat);
    case 'tree': return treePredict(state.tree, feat);
    case 'nb': return nbPredict(state.nb, feat);
    case 'heuristic': return ruleAction(feat);
    case 'random': return Math.floor(Math.random()*4);
    default:
      console.warn('predictFor: algoId inconnu, repli sur Nord ->', algoId);
      return 0;
  }
}

/* ===================== SIMULATION INSTANCE ===================== */
function initInstance(){
  const env = state.env;
  const inst = {
    pos:[...env.start], steps:0, collisions:0, status:'running',
    path:[env.start.slice()], revealed:new Set(),
    maxSteps: Math.round(env.cols*env.rows*(env.type==='maze'?4:2.5)), lastDir:'E',
    dfsStack:[env.start.slice()], visited:new Set([env.start.join(',')]),
    pending:false, errorMessage:null,
  };
  revealAround(inst, env);
  return inst;
}
function revealAround(inst, env){
  inst.revealed.add(inst.pos.join(','));
  for(const d of DIRS){
    const {cells} = rayScan(env.obs, env.cols, env.rows, inst.pos, VEC[d], MAXR);
    cells.forEach(c=>inst.revealed.add(c.join(',')));
  }
}

// Applies one guaranteed-terminating move given an already-decided suggested direction.
// Shared by the synchronous built-in algorithms and the async, worker-based custom algorithm.
function applyStep(inst, env, suggestedDir){
  const isFree = (x,y)=> inBounds(x,y,env.cols,env.rows) && !env.obs.has(x+','+y);
  const sv = VEC[suggestedDir];
  const sx = inst.pos[0]+sv[0], sy = inst.pos[1]+sv[1];
  inst.steps++;
  if(!isFree(sx,sy)) inst.collisions++; // a genuine wall bump — still a useful comparison signal

  const parent = inst.dfsStack.length>=2 ? inst.dfsStack[inst.dfsStack.length-2] : null;
  const parentKey = parent ? parent.join(',') : null;
  const unvisitedChildren = DIRS.map(d=>{
    const v=VEC[d]; const nx=inst.pos[0]+v[0], ny=inst.pos[1]+v[1];
    return { d, nx, ny };
  }).filter(c=> isFree(c.nx,c.ny) && c.nx+','+c.ny!==parentKey && !inst.visited.has(c.nx+','+c.ny));

  let chosen;
  if(unvisitedChildren.length){
    chosen = unvisitedChildren.find(c=>c.d===suggestedDir);
    if(!chosen){
      const dx=(env.goal[0]-inst.pos[0]), dy=(env.goal[1]-inst.pos[1]);
      const score = { N:-dy, S:dy, E:dx, W:-dx };
      unvisitedChildren.sort((a,b)=> score[b.d]-score[a.d]);
      chosen = unvisitedChildren[0];
    }
  } else if(parent){
    chosen = { nx:parent[0], ny:parent[1],
      d: DIRS.find(d=>{ const v=VEC[d]; return inst.pos[0]+v[0]===parent[0] && inst.pos[1]+v[1]===parent[1]; }) };
  } else {
    inst.status = 'stuck'; // nothing unexplored left and nowhere to backtrack to
    return;
  }

  inst.pos = [chosen.nx, chosen.ny];
  inst.lastDir = chosen.d;
  inst.visited.add(inst.pos.join(','));
  inst.path.push(inst.pos.slice());
  const under = inst.dfsStack.length>=2 ? inst.dfsStack[inst.dfsStack.length-2] : null;
  if(under && under[0]===inst.pos[0] && under[1]===inst.pos[1]) inst.dfsStack.pop();
  else inst.dfsStack.push(inst.pos.slice());
  revealAround(inst, env);

  if(inst.pos[0]===env.goal[0] && inst.pos[1]===env.goal[1]) inst.status = 'success';
  else if(inst.steps >= inst.maxSteps) inst.status = 'timeout';
}

// A single step always makes a legal, terminating move: explore an unvisited neighbour if one
// exists (the algorithm's own suggestion picks *which* one when there's a choice), otherwise
// backtrack to the parent — classic depth-first maze solving (Trémaux's algorithm). This is what
// guarantees every connected maze gets solved eventually, regardless of how good the algorithm's
// per-step guess is; the guess still shows up as steps taken, exploration order and wall bumps.
function stepInstance(inst, algoId){
  const env = state.env;
  if(inst.status !== 'running') return;
  const { feat } = featuresFor(env, inst.pos);
  const suggestedDir = DIRS[predictFor(algoId, feat)];
  applyStep(inst, env, suggestedDir);
}

// The custom algorithm runs in a Web Worker sandbox (see CUSTOM USER CODE section below) so a
// runaway loop in user code can be forcibly terminated instead of freezing the whole page. This
// makes stepping it inherently asynchronous, decoupled from the synchronous built-in algorithms.
async function stepCustomInstance(inst){
  const env = state.env;
  if(inst.status !== 'running' || inst.pending) return;
  if(!state.customWorker || !state.customValidatedCode){
    return; // no valid sandboxed code yet — this panel simply waits, doesn't burn steps
  }
  inst.pending = true;
  const { feat } = featuresFor(env, inst.pos);
  const res = await callCustomWorker('predict', feat);
  inst.pending = false;
  if(inst.status !== 'running') return; // instance was reset/removed while awaiting — nothing to do

  if(res.fatal){
    // the sandbox was genuinely killed — always surface this, even if the user paused meanwhile
    inst.status = 'error';
    inst.errorMessage = res.error;
    renderAll(); updatePanelStatuses(); updateCompareTable();
    return;
  }
  if(!state.running) return; // paused meanwhile — don't silently move the robot, just drop this decision

  const action = (res.ok && Number.isInteger(res.result) && res.result>=0 && res.result<=3) ? res.result : 0;
  applyStep(inst, env, DIRS[action]);
  renderAll(); updatePanelStatuses(); updateCompareTable();
}

/* ===================== DOM / PANELS ===================== */
const panelsEl = document.getElementById('panels');
const canvases = {}; // algoId -> {canvas, ctx}

function buildAlgoToggles(){
  const el = document.getElementById('algoToggles');
  el.innerHTML = '';
  ALGO_DEFS.forEach(a=>{
    const label = document.createElement('label');
    label.className = 'algo-toggle';
    label.innerHTML = \`<input type="checkbox" data-id="\${a.id}" \${state.active.has(a.id)?'checked':''}>
      <input type="color" class="colorpick" data-id="\${a.id}" value="\${state.colors[a.id]}" title="Couleur de \${a.name}">
      \${a.name}\`;
    label.querySelector('input[type=checkbox]').addEventListener('change', (e)=>{
      if(e.target.checked) state.active.add(a.id); else state.active.delete(a.id);
      syncPanels();
    });
    label.querySelector('input[type=color]').addEventListener('input', (e)=>{
      state.colors[a.id] = e.target.value;
      const dot = document.getElementById('legendDot-'+a.id);
      if(dot) dot.style.background = e.target.value;
      renderAll();
      updateCompareTable();
    });
    el.appendChild(label);
  });
}

function syncPanels(){
  // remove panels no longer active
  Object.keys(canvases).forEach(id=>{
    if(!state.active.has(id)){
      const p = document.getElementById('panel-'+id);
      if(p) p.remove();
      delete canvases[id];
      delete state.instances[id];
    }
  });
  // add panels newly active
  ALGO_DEFS.forEach(a=>{
    if(state.active.has(a.id) && !canvases[a.id]){
      const div = document.createElement('div');
      div.className = 'panel';
      div.id = 'panel-'+a.id;
      div.innerHTML = \`
        <div class="panel-hdr">
          <div class="panel-name"><span class="dot" id="legendDot-\${a.id}" style="background:\${state.colors[a.id]}"></span>\${a.name}</div>
          <div class="panel-status running" id="status-\${a.id}">en cours</div>
        </div>
        <div class="canvas-wrap"><canvas id="canvas-\${a.id}"></canvas></div>
        <div class="panel-stats">
          <span>Pas : <b id="steps-\${a.id}">0</b></span>
          <span>Collisions : <b id="coll-\${a.id}">0</b></span>
        </div>\`;
      panelsEl.appendChild(div);
      const canvas = document.getElementById('canvas-'+a.id);
      canvases[a.id] = { canvas, ctx: canvas.getContext('2d') };
      attachCanvasInteractions(canvas);
      if(state.env){
        state.instances[a.id] = initInstance();
      }
    }
  });
  if(panelsEl.children.length===0){
    panelsEl.innerHTML = '<div class="empty-note">Sélectionnez au moins un algorithme ci-dessus pour lancer la comparaison.</div>';
  } else if(panelsEl.querySelector('.empty-note')){
    panelsEl.querySelector('.empty-note').remove();
  }
  renderAll();
  updateCompareTable();
}

/* ===================== ZOOM & PAN ===================== */
const ZOOM_MIN = 0.5, ZOOM_MAX = 4.5;
let dragState = null;

function clampScale(s){ return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s)); }
function updateZoomLabel(){
  const el = document.getElementById('zoomVal');
  if(el) el.textContent = Math.round(state.view.scale*100)+'%';
}
function zoomBy(factor, cursorX, cursorY, size=1){
  const Ox = size/2, Oy = size*0.14;
  const oldScale = state.view.scale;
  const newScale = clampScale(oldScale*factor);
  const f = newScale/oldScale;
  const cx = cursorX!==undefined ? cursorX : Ox;
  const cy = cursorY!==undefined ? cursorY : Oy;
  state.view.panX = (cx-Ox)*(1-f) + f*state.view.panX;
  state.view.panY = (cy-Oy)*(1-f) + f*state.view.panY;
  state.view.scale = newScale;
  renderAll();
  updateZoomLabel();
}
function resetView(){
  state.view = { scale:1, panX:0, panY:0 };
  renderAll();
  updateZoomLabel();
}
function attachCanvasInteractions(canvas){
  canvas.style.cursor = 'grab';
  canvas.addEventListener('wheel', (e)=>{
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const sx = (e.clientX-rect.left) * (canvas.width/rect.width);
    const sy = (e.clientY-rect.top) * (canvas.height/rect.height);
    zoomBy(e.deltaY < 0 ? 1.15 : 1/1.15, sx, sy, canvas.width);
  }, { passive:false });
  canvas.addEventListener('pointerdown', (e)=>{
    dragState = { x:e.clientX, y:e.clientY, panX:state.view.panX, panY:state.view.panY, canvas };
    canvas.style.cursor = 'grabbing';
  });
  canvas.addEventListener('dblclick', resetView);
}
window.addEventListener('pointermove', (e)=>{
  if(!dragState) return;
  const rect = dragState.canvas.getBoundingClientRect();
  const scaleFactor = dragState.canvas.width / rect.width;
  state.view.panX = dragState.panX + (e.clientX-dragState.x)*scaleFactor;
  state.view.panY = dragState.panY + (e.clientY-dragState.y)*scaleFactor;
  renderAll();
});
window.addEventListener('pointerup', ()=>{
  if(dragState){ dragState.canvas.style.cursor = 'grab'; dragState = null; }
});

/* ===================== RENDERING ===================== */
function resizeCanvas(canvas){
  const dpr = window.devicePixelRatio || 1;
  const size = canvas.clientWidth;
  if(canvas.width !== Math.round(size*dpr)){
    canvas.width = Math.round(size*dpr);
    canvas.height = Math.round(size*dpr);
  }
  return dpr;
}

/* ---- isometric helpers ---- */
function roundRectPath(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}
// world (grid) direction -> screen-space heading angle in this iso projection
const DIR_ANGLE = {
  N: Math.atan2(-1, 1), E: Math.atan2(1, 1), S: Math.atan2(1, -1), W: Math.atan2(-1, -1)
};

function drawGroundTile(ctx,cx,cy,tw,th,revealed){
  ctx.beginPath();
  ctx.moveTo(cx, cy-th/2); ctx.lineTo(cx+tw/2, cy); ctx.lineTo(cx, cy+th/2); ctx.lineTo(cx-tw/2, cy);
  ctx.closePath();
  ctx.fillStyle = revealed ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0.012)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  ctx.stroke();
}

function hash2(x,y){
  const h = Math.sin(x*127.1 + y*311.7) * 43758.5453;
  return h - Math.floor(h);
}

function drawTree(ctx,cx,cy,tw,gx,gy){
  const jitter = hash2(gx,gy);
  const scaleVar = 0.85 + jitter*0.3;
  const xOff = (hash2(gx+0.37,gy+0.91)-0.5) * tw*0.12;
  cx += xOff;
  tw *= scaleVar;

  const trunkW = tw*0.1, trunkH = tw*0.24;
  const baseY = cy - tw*0.02;

  // ground shadow (grounds the tree, reinforces the elevation/3D cue)
  ctx.fillStyle = 'rgba(0,0,0,0.32)';
  ctx.beginPath(); ctx.ellipse(cx+tw*0.05,cy,tw*0.24,tw*0.1,0,0,Math.PI*2); ctx.fill();

  // trunk, two-tone to suggest a cylinder catching light from the upper-left
  ctx.fillStyle = '#5c4023';
  ctx.fillRect(cx-trunkW/2, baseY-trunkH, trunkW, trunkH);
  ctx.fillStyle = '#9c7042';
  ctx.fillRect(cx-trunkW/2, baseY-trunkH, trunkW*0.55, trunkH);

  // foliage: three stacked rounded tiers — bright, saturated greens with a soft glow so the
  // trees read clearly against the dark scene regardless of what's behind them
  const tiers = [
    { w: tw*0.42, h: tw*0.28, y: baseY-trunkH+tw*0.07 },
    { w: tw*0.33, h: tw*0.25, y: baseY-trunkH-tw*0.13 },
    { w: tw*0.24, h: tw*0.21, y: baseY-trunkH-tw*0.30 },
  ];
  tiers.forEach(t=>{
    const apexX = cx, apexY = t.y - t.h;
    ctx.beginPath();
    ctx.moveTo(apexX, apexY);
    ctx.quadraticCurveTo(cx + t.w*0.62, t.y - t.h*0.18, cx + t.w/2, t.y);
    ctx.lineTo(cx - t.w/2, t.y);
    ctx.quadraticCurveTo(cx - t.w*0.62, t.y - t.h*0.18, apexX, apexY);
    ctx.closePath();
    ctx.save();
    ctx.shadowColor = 'rgba(120,230,140,0.55)';
    ctx.shadowBlur = tw*0.22;
    const grad = ctx.createRadialGradient(cx - t.w*0.22, t.y - t.h*0.75, t.w*0.04, cx, t.y - t.h*0.35, t.w*0.7);
    grad.addColorStop(0, '#8fe07a');
    grad.addColorStop(0.55, '#4fae4f');
    grad.addColorStop(1, '#2d7a34');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(210,255,200,0.55)';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    // small glint to sell the roundness
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.beginPath();
    ctx.ellipse(cx - t.w*0.16, t.y - t.h*0.62, t.w*0.09, t.h*0.16, -0.4, 0, Math.PI*2);
    ctx.fill();
  });
}

function drawHouse(ctx,cx,cy,tw,th){
  const w = tw*0.46, h = th*2.6;
  const baseY = cy - th*0.15;
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath(); ctx.ellipse(cx,cy,w*0.65,th*0.32,0,0,Math.PI*2); ctx.fill();
  // walls
  ctx.fillStyle = '#dfe6ef';
  ctx.fillRect(cx-w/2, baseY-h*0.55, w, h*0.55);
  ctx.strokeStyle = 'rgba(20,25,35,0.35)'; ctx.lineWidth = 1;
  ctx.strokeRect(cx-w/2, baseY-h*0.55, w, h*0.55);
  // roof
  ctx.fillStyle = '#d97757';
  ctx.beginPath();
  ctx.moveTo(cx-w/2-w*0.14, baseY-h*0.55);
  ctx.lineTo(cx+w/2+w*0.14, baseY-h*0.55);
  ctx.lineTo(cx, baseY-h*0.55-h*0.42);
  ctx.closePath(); ctx.fill();
  // door
  ctx.fillStyle = '#5b4636';
  const dw=w*0.26, dh=h*0.3;
  ctx.fillRect(cx-dw/2, baseY-dh, dw, dh);
  // window
  ctx.fillStyle = 'rgba(120,180,230,0.85)';
  ctx.fillRect(cx+w*0.14, baseY-h*0.42, w*0.2, h*0.16);
}

function drawCar(ctx,cx,cy,tw,color,angle){
  const len = tw*0.58, wid = tw*0.36;
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath(); ctx.ellipse(cx,cy,len*0.5,wid*0.5,0,0,Math.PI*2); ctx.fill();
  ctx.save();
  ctx.translate(cx, cy-wid*0.22);
  ctx.rotate(angle);
  // body (front points toward +X)
  ctx.fillStyle = color;
  roundRectPath(ctx, -len/2, -wid/2, len, wid, wid*0.4);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 1; ctx.stroke();
  // windshield / cabin (front-biased)
  ctx.fillStyle = 'rgba(10,14,22,0.6)';
  roundRectPath(ctx, -len*0.05, -wid*0.36, len*0.42, wid*0.72, wid*0.18);
  ctx.fill();
  // headlights
  ctx.fillStyle = '#ffe9a8';
  ctx.beginPath(); ctx.arc(len/2-1, -wid*0.28, wid*0.09, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(len/2-1,  wid*0.28, wid*0.09, 0, Math.PI*2); ctx.fill();
  // wheels
  ctx.fillStyle = '#20242c';
  [[-len*0.28,-wid*0.5],[-len*0.28,wid*0.5],[len*0.22,-wid*0.5],[len*0.22,wid*0.5]].forEach(([wx,wy])=>{
    ctx.beginPath(); ctx.arc(wx,wy,wid*0.14,0,Math.PI*2); ctx.fill();
  });
  ctx.restore();
}

function renderPanel(algoId){
  const c = canvases[algoId];
  if(!c || !state.env) return;
  const inst = state.instances[algoId];
  const env = state.env;
  resizeCanvas(c.canvas);
  const ctx = c.ctx;
  const size = c.canvas.width;
  ctx.clearRect(0,0,size,size);

  const n = Math.max(env.cols, env.rows);
  const baseTw = (size*1.62) / (env.cols+env.rows);
  const tw = baseTw * state.view.scale;
  const th = tw*0.5;
  const originX = size/2 + state.view.panX;
  const originY = size*0.14 + state.view.panY;
  const project = (x,y)=>({ cx: originX + (x-y)*tw/2, cy: originY + (x+y)*th/2 });

  // ground tiles — in maze mode the whole layout is shown immediately (so it actually reads
  // as a maze at a glance); the random-obstacles mode keeps the fog-of-war/"unknown obstacles" feel.
  const showAll = env.type === 'maze';
  for(let y=0;y<env.rows;y++){
    for(let x=0;x<env.cols;x++){
      const {cx,cy} = project(x+0.5,y+0.5);
      drawGroundTile(ctx,cx,cy,tw,th, showAll || inst.revealed.has(x+','+y));
    }
  }

  // trail (robot's own path, drawn flat on the ground before the 3D objects)
  const color = state.colors[algoId] || '#4fd1c5';
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1.5, tw*0.05);
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  inst.path.forEach((p,i)=>{
    const {cx,cy} = project(p[0]+0.5,p[1]+0.5);
    if(i===0) ctx.moveTo(cx,cy); else ctx.lineTo(cx,cy);
  });
  ctx.stroke();
  ctx.globalAlpha = 1;

  // 3D objects: obstacle trees, the goal house, the car — painter's algorithm (back to front)
  const objects = [];
  const treeKeys = showAll ? env.obs : inst.revealed;
  treeKeys.forEach(key=>{
    if(env.obs.has(key)){
      const [x,y] = key.split(',').map(Number);
      objects.push({ depth:x+y, draw:()=>{ const {cx,cy}=project(x+0.5,y+0.5); drawTree(ctx,cx,cy,tw,x,y); } });
    }
  });
  objects.push({ depth: env.goal[0]+env.goal[1]-0.01, draw:()=>{
    const {cx,cy} = project(env.goal[0]+0.5, env.goal[1]+0.5);
    drawHouse(ctx,cx,cy,tw,th);
  }});
  objects.push({ depth: inst.pos[0]+inst.pos[1]+0.02, draw:()=>{
    const {cx,cy} = project(inst.pos[0]+0.5, inst.pos[1]+0.5);
    drawCar(ctx,cx,cy,tw,color,DIR_ANGLE[inst.lastDir]||0);
  }});
  objects.sort((a,b)=>a.depth-b.depth).forEach(o=>o.draw());

  // status overlay
  if(inst.status !== 'running'){
    ctx.fillStyle = inst.status==='success' ? 'rgba(126,231,135,0.10)' : 'rgba(229,72,77,0.08)';
    ctx.fillRect(0,0,size,size);
  }
}

function renderAll(){
  state.active.forEach(id=>renderPanel(id));
}

/* ===================== STATS / COMPARE TABLE ===================== */
function statusLabel(s){
  return { running:'en cours', success:'but atteint', timeout:'temps écoulé', stuck:'bloqué', error:'bac à sable arrêté' }[s] || s;
}
function updatePanelStatuses(){
  state.active.forEach(id=>{
    const inst = state.instances[id];
    if(!inst) return;
    const badge = document.getElementById('status-'+id);
    if(badge){ badge.textContent = statusLabel(inst.status); badge.className = 'panel-status '+inst.status; }
    const stepsEl = document.getElementById('steps-'+id); if(stepsEl) stepsEl.textContent = inst.steps;
    const collEl = document.getElementById('coll-'+id); if(collEl) collEl.textContent = inst.collisions;
  });
}
function updateCompareTable(){
  const body = document.getElementById('compareBody');
  body.innerHTML = '';
  if(!state.env) return;
  ALGO_DEFS.forEach(a=>{
    if(!state.active.has(a.id)) return;
    const inst = state.instances[a.id];
    if(!inst) return;
    const dist = Math.abs(state.env.goal[0]-inst.pos[0]) + Math.abs(state.env.goal[1]-inst.pos[1]);
    const eff = inst.status==='success' ? Math.round(100*state.env.optimal/inst.steps)+'%' : '—';
    const tr = document.createElement('tr');
    tr.innerHTML = \`
      <td><span class="dot" style="background:\${state.colors[a.id]}"></span> &nbsp;\${a.name}</td>
      <td>\${statusLabel(inst.status)}</td>
      <td class="num">\${inst.steps}</td>
      <td class="num">\${inst.collisions}</td>
      <td class="num">\${dist}</td>
      <td class="num">\${eff}</td>\`;
    body.appendChild(tr);
  });
}

/* ===================== ENV / TRAINING LIFECYCLE ===================== */
function newEnvironment(){
  state.env = CONFIG.envType==='maze' ? genMazeEnv(CONFIG.cols, CONFIG.rows) : genEnv(CONFIG.cols, CONFIG.rows, CONFIG.density);
  state.training = genTraining(900);
  state.tree = buildTree(state.training, 5);
  state.nb = trainNB(state.training);
  document.getElementById('optimalLen').textContent = state.env.optimal;
  state.active.forEach(id=>{ state.instances[id] = initInstance(); });
  renderAll();
  updatePanelStatuses();
  updateCompareTable();
}
function resetInstances(){
  if(!state.env) return;
  state.active.forEach(id=>{ state.instances[id] = initInstance(); });
  renderAll();
  updatePanelStatuses();
  updateCompareTable();
}

/* ===================== RUN LOOP ===================== */
function tick(){
  let anyRunning = false;
  state.active.forEach(id=>{
    const inst = state.instances[id];
    if(!inst || inst.status!=='running') return;
    anyRunning = true;
    if(id === 'custom') stepCustomInstance(inst); // async — updates itself when it resolves
    else stepInstance(inst, id);
  });
  renderAll();
  updatePanelStatuses();
  updateCompareTable();
  if(!anyRunning) pause();
}
function play(){
  if(state.running) return;
  state.running = true;
  document.getElementById('playPauseBtn').textContent = 'Pause';
  state.timer = setInterval(tick, 1000/CONFIG.speedPerSec);
}
function pause(){
  state.running = false;
  document.getElementById('playPauseBtn').textContent = 'Lancer';
  if(state.timer){ clearInterval(state.timer); state.timer = null; }
}
function restartTimerIfRunning(){
  if(state.running){ clearInterval(state.timer); state.timer = setInterval(tick, 1000/CONFIG.speedPerSec); }
}

/* ===================== CUSTOM USER CODE (sandboxed in a Web Worker) ===================== */
// A synchronous infinite loop in user code (e.g. \`while(true){}\`) cannot be interrupted from
// the same thread — no try/catch or timer helps once it's running. Running it in a Web Worker
// is what makes it recoverable: the worker can be terminated from outside even while stuck.
const CUSTOM_TIMEOUT_MS = 300;
const CUSTOM_WORKER_SRC = \`
self.onmessage = function(e){
  const { id, code, feat, mode } = e.data;
  try {
    const decide = (new Function(code + '\\\\nreturn decide;'))();
    if (mode === 'validate') {
      if (typeof decide !== 'function') throw new Error("La fonction decide(features) est introuvable.");
      const probe = decide([0.5,0.5,0.5,0.5,0.2,-0.3]);
      if(!Number.isInteger(probe) || probe<0 || probe>3){
        throw new Error('decide() doit retourner un entier entre 0 et 3 (reçu : '+JSON.stringify(probe)+').');
      }
      self.postMessage({ id, ok:true });
    } else {
      self.postMessage({ id, ok:true, result: decide(feat) });
    }
  } catch(err){
    self.postMessage({ id, ok:false, error: (err && err.message) || String(err) });
  }
};
\`;

let customReqId = 0;
const customCallbacks = new Map();

function createCustomWorker(){
  if(state.customWorker) state.customWorker.terminate();
  const blob = new Blob([CUSTOM_WORKER_SRC], { type:'application/javascript' });
  const url = URL.createObjectURL(blob);
  const worker = new Worker(url);
  worker.onmessage = (e)=>{
    const { id, ok, result, error } = e.data;
    const cb = customCallbacks.get(id);
    if(!cb) return;
    customCallbacks.delete(id);
    clearTimeout(cb.timer);
    cb.resolve({ ok, result, error });
  };
  worker.onerror = ()=>{
    customCallbacks.forEach(cb=>{ clearTimeout(cb.timer); cb.resolve({ ok:false, error:"Erreur interne du bac à sable." }); });
    customCallbacks.clear();
  };
  state.customWorker = worker;
  return worker;
}

function callCustomWorker(mode, feat){
  return new Promise((resolve)=>{
    const workerRef = state.customWorker;
    if(!workerRef){ resolve({ ok:false, error:'Aucun code compilé.' }); return; }
    const id = ++customReqId;
    const timer = setTimeout(()=>{
      customCallbacks.delete(id);
      workerRef.terminate();
      // only clear the shared reference if it's still THIS worker (a newer one may already exist)
      if(state.customWorker === workerRef) state.customWorker = null;
      resolve({ ok:false, fatal:true, error:'Le code a mis trop de temps à répondre (boucle infinie suspectée) — le bac à sable a été arrêté. Corrigez le code et cliquez à nouveau sur « Tester mon code ».' });
    }, CUSTOM_TIMEOUT_MS);
    customCallbacks.set(id, { resolve, timer });
    workerRef.postMessage({ id, code: state.customCompiledCode, feat, mode });
  });
}

async function compileCustomCode(){
  const code = document.getElementById('customCode').value;
  const statusEl = document.getElementById('codeStatus');
  // syntax-only check on the main thread first — this only PARSES the code, never executes
  // user logic, so it can't hang even if the code contains an infinite loop.
  try {
    new Function(code + '\\nreturn decide;');
  } catch(e){
    statusEl.textContent = '✗ Erreur de syntaxe : ' + e.message;
    statusEl.className = 'code-status err';
    return;
  }
  statusEl.textContent = '… Test dans un bac à sable isolé…';
  statusEl.className = 'code-status';
  createCustomWorker();
  state.customCompiledCode = code;
  const res = await callCustomWorker('validate', null);
  if(res.ok){
    state.customValidatedCode = code;
    statusEl.textContent = '✓ Code appliqué avec succès (exécuté dans un bac à sable protégé).';
    statusEl.className = 'code-status ok';
    if(state.active.has('custom') && state.env){
      state.instances['custom'] = initInstance();
      renderAll(); updatePanelStatuses(); updateCompareTable();
    }
  } else {
    state.customValidatedCode = null;
    statusEl.textContent = '✗ Erreur : ' + res.error;
    statusEl.className = 'code-status err';
  }
}

document.getElementById('customCode').addEventListener('input', ()=>{
  const statusEl = document.getElementById('codeStatus');
  const current = document.getElementById('customCode').value;
  if(current !== state.customCompiledCode && !statusEl.className.includes('stale')){
    statusEl.textContent = '⚠ Code modifié depuis le dernier test — cliquez sur « Tester mon code » pour l\\'appliquer.';
    statusEl.className = 'code-status stale';
  }
});

document.getElementById('envType').addEventListener('change', e=>{
  CONFIG.envType = e.target.value;
  document.getElementById('densityGroup').classList.toggle('disabled', CONFIG.envType==='maze');
});
document.getElementById('applyCodeBtn').addEventListener('click', compileCustomCode);

/* ===================== WIRE UP CONTROLS ===================== */
document.getElementById('gridSize').addEventListener('change', e=>{
  const n = parseInt(e.target.value,10); CONFIG.cols = n; CONFIG.rows = n;
});
document.getElementById('density').addEventListener('input', e=>{
  const v = parseInt(e.target.value,10);
  document.getElementById('densityVal').textContent = v+'%';
  CONFIG.density = v/100;
});
document.getElementById('kValue').addEventListener('input', e=>{
  const v = parseInt(e.target.value,10);
  document.getElementById('kVal').textContent = v;
  CONFIG.k = v;
});
document.getElementById('speed').addEventListener('input', e=>{
  const v = parseInt(e.target.value,10);
  document.getElementById('speedVal').textContent = v;
  CONFIG.speedPerSec = v;
  restartTimerIfRunning();
});
document.getElementById('playPauseBtn').addEventListener('click', ()=> state.running ? pause() : play());
document.getElementById('resetBtn').addEventListener('click', ()=>{ pause(); resetInstances(); });
document.getElementById('newEnvBtn').addEventListener('click', ()=>{ pause(); newEnvironment(); });
document.getElementById('zoomInBtn').addEventListener('click', ()=> zoomBy(1.25));
document.getElementById('zoomOutBtn').addEventListener('click', ()=> zoomBy(1/1.25));
document.getElementById('zoomResetBtn').addEventListener('click', resetView);

window.addEventListener('resize', renderAll);

/* ===================== INIT ===================== */
buildAlgoToggles();
compileCustomCode();
newEnvironment();
syncPanels();
})();
<\/script>
</body>
</html>
`;export{n as default};
