import type { ReactElement } from "react";

const GRID = (
  <g stroke="#183242" strokeWidth="1">
    {Array.from({ length: 9 }, (_, i) => (
      <line key={`v${i}`} x1={i * 60} y1={0} x2={i * 60} y2={270} />
    ))}
    {Array.from({ length: 5 }, (_, i) => (
      <line key={`h${i}`} x1={0} y1={i * 68} x2={480} y2={i * 68} />
    ))}
  </g>
);

export function DeltaSimulatorArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <g className="art-sway" style={{ transformOrigin: "240px 70px" }}>
        <rect x="200" y="50" width="80" height="34" rx="8" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
        <line x1="215" y1="84" x2="170" y2="180" stroke="#5eead4" strokeWidth="4" strokeLinecap="round" />
        <line x1="240" y1="84" x2="240" y2="185" stroke="#5eead4" strokeWidth="4" strokeLinecap="round" />
        <line x1="265" y1="84" x2="310" y2="180" stroke="#5eead4" strokeWidth="4" strokeLinecap="round" />
        <circle cx="240" cy="188" r="9" fill="#22d3ee" />
      </g>
      <circle cx="240" cy="188" r="16" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.4" className="art-pulse-scale" />
    </svg>
  );
}

export function DigitalTwinArt() {
  const tanks = [110, 240, 370];
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      {tanks.map((cx, i) => (
        <g key={cx}>
          <rect x={cx - 34} y="70" width="68" height="130" rx="10" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" />
          <clipPath id={`clip-${i}`}>
            <rect x={cx - 30} y="74" width="60" height="122" rx="7" />
          </clipPath>
          <rect
            x={cx - 30}
            y="74"
            width="60"
            height="122"
            rx="7"
            fill="#22d3ee"
            opacity="0.35"
            clipPath={`url(#clip-${i})`}
            className="art-rise"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </g>
      ))}
      <path d="M144 200 L144 230 L406 230 L406 200" fill="none" stroke="#5eead4" strokeWidth="2" className="art-flow" />
    </svg>
  );
}

export function PlcSimArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <line x1="60" y1="40" x2="60" y2="230" stroke="#38bdf8" strokeWidth="3" />
      <line x1="420" y1="40" x2="420" y2="230" stroke="#38bdf8" strokeWidth="3" />
      {[80, 135, 190].map((y, i) => (
        <g key={y}>
          <line x1="60" y1={y} x2="420" y2={y} stroke="#183242" strokeWidth="2" />
          <line
            x1="60"
            y1={y}
            x2="420"
            y2={y}
            stroke="#22d3ee"
            strokeWidth="2"
            className="art-flow"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <rect x={130 + i * 60} y={y - 10} width="14" height="20" fill="#0b1721" stroke="#5eead4" strokeWidth="2" className="art-blink" style={{ animationDelay: `${i * 0.3}s` }} />
          <rect x={300 - i * 40} y={y - 10} width="14" height="20" fill="#0b1721" stroke="#5eead4" strokeWidth="2" />
        </g>
      ))}
      <rect x="340" y="60" width="60" height="150" rx="6" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
      <circle cx="360" cy="80" r="4" fill="#5eead4" className="art-blink" />
    </svg>
  );
}

export function CrmTicketsArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <rect x="160" y="90" width="140" height="120" rx="10" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
      <rect x="180" y="110" width="100" height="36" rx="4" fill="#183242" />
      <g>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={186 + i * 24} y={160} width="16" height="36" rx="2" fill="#38bdf8" />
        ))}
      </g>
      <clipPath id="receiptClip">
        <rect x="192" y="205" width="76" height="70" />
      </clipPath>
      <g clipPath="url(#receiptClip)">
        <rect x="192" y="205" width="76" height="60" fill="#e2f7fb" className="art-bob" style={{ animationDuration: "3.2s" }} />
      </g>
      <g className="art-pulse-scale">
        <rect x="330" y="60" width="80" height="60" rx="8" fill="#0b1721" stroke="#5eead4" strokeWidth="1.5" opacity="0.9" />
        <polyline points="340,105 355,85 368,95 382,70 400,80" fill="none" stroke="#5eead4" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function ConveyorArt() {
  const shapes = [
    { d: "M0,-8 L8,8 L-8,8 Z", color: "#5eead4" },
    { d: "M-8,-8 L8,-8 L8,8 L-8,8 Z", color: "#38bdf8" },
    { d: "M0,-9 L9,0 L0,9 L-9,0 Z", color: "#22d3ee" },
  ];
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <rect x="60" y="150" width="360" height="20" rx="10" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="70" cy="160" r="12" fill="none" stroke="#5eead4" strokeWidth="2" className="art-spin" />
      <circle cx="410" cy="160" r="12" fill="none" stroke="#5eead4" strokeWidth="2" className="art-spin" />
      {shapes.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill={s.color}
          transform="translate(90 158)"
          className="art-slide"
          style={{ animationDelay: `${i * 1.05}s` }}
        />
      ))}
      <g opacity="0.6">
        <line x1="130" y1="60" x2="110" y2="140" stroke="#22d3ee" strokeWidth="1.5" className="art-blink" />
        <line x1="150" y1="55" x2="140" y2="140" stroke="#22d3ee" strokeWidth="1.5" className="art-blink" style={{ animationDelay: "0.3s" }} />
        <line x1="170" y1="60" x2="170" y2="140" stroke="#22d3ee" strokeWidth="1.5" className="art-blink" style={{ animationDelay: "0.6s" }} />
      </g>
    </svg>
  );
}

export function ColorSortArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <rect x="70" y="170" width="300" height="18" rx="9" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" />
      {["#ef4444", "#22c55e", "#3b82f6"].map((c, i) => (
        <rect key={c} x={280 + i * 30} y="196" width="20" height="20" fill={c} opacity="0.9" />
      ))}
      <g className="art-sway" style={{ transformOrigin: "150px 90px" }}>
        <line x1="150" y1="60" x2="150" y2="120" stroke="#5eead4" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="120" x2="200" y2="150" stroke="#5eead4" strokeWidth="5" strokeLinecap="round" />
        <circle cx="200" cy="150" r="6" fill="#22d3ee" />
      </g>
      <line x1="200" y1="156" x2="200" y2="185" stroke="#22d3ee" strokeWidth="2" className="art-blink" />
      <rect x="188" y="182" width="24" height="10" fill="#ef4444" className="art-bob" style={{ animationDuration: "2.6s" }} />
    </svg>
  );
}

export function RobotKnnArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <g transform="translate(240 40)">
        <rect x="0" y="0" width="120" height="90" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" rx="6" />
        {[
          [16, 60, "#ef4444"], [30, 40, "#ef4444"], [40, 55, "#ef4444"],
          [55, 20, "#5eead4"], [65, 35, "#5eead4"], [50, 45, "#5eead4"],
          [90, 15, "#38bdf8"], [100, 30, "#38bdf8"], [85, 40, "#38bdf8"],
        ].map(([x, y, c], i) => (
          <circle key={i} cx={x as number} cy={y as number} r="4" fill={c as string} className="art-blink" style={{ animationDelay: `${(i % 5) * 0.2}s` }} />
        ))}
      </g>
      <g>
        <rect x="0" y="0" width="34" height="22" rx="5" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" className="art-bob" />
        <circle cx="8" cy="24" r="5" fill="#5eead4" />
        <circle cx="26" cy="24" r="5" fill="#5eead4" />
        <animateMotion dur="4s" repeatCount="indefinite" path="M100,180 L100,120 L220,120" />
      </g>
    </svg>
  );
}

export function ElevatorArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <rect x="220" y="20" width="90" height="220" fill="none" stroke="#38bdf8" strokeWidth="2" />
      <line x1="245" y1="20" x2="245" y2="240" stroke="#183242" strokeWidth="2" />
      <line x1="285" y1="20" x2="285" y2="240" stroke="#183242" strokeWidth="2" />
      <g className="art-bob" style={{ animationDuration: "3.6s" }}>
        <rect x="232" y="110" width="66" height="70" rx="4" fill="#0b1721" stroke="#5eead4" strokeWidth="2" />
        <rect x="242" y="120" width="46" height="50" fill="#0e2430" />
      </g>
      <rect x="120" y="90" width="60" height="70" rx="6" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
      {["#5eead4", "#ef4444", "#38bdf8"].map((c, i) => (
        <circle key={c} cx="150" cy={108 + i * 18} r="4" fill={c} className="art-blink" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
      <path d="M150 126 L150 200 L232 200" fill="none" stroke="#22d3ee" strokeWidth="2" className="art-flow" />
    </svg>
  );
}

export function BalanceTableArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <g className="art-sway" style={{ transformOrigin: "240px 150px", animationDuration: "3s" }}>
        <ellipse cx="240" cy="150" rx="120" ry="26" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="240" cy="128" r="14" fill="#5eead4" />
      </g>
      <circle cx="240" cy="185" r="10" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
      <line x1="160" y1="185" x2="160" y2="205" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" className="art-blink" />
      <line x1="320" y1="185" x2="320" y2="205" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" className="art-blink" style={{ animationDelay: "0.5s" }} />
    </svg>
  );
}

export function RobotArm3AxisArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <rect x="280" y="200" width="90" height="16" rx="4" fill="#0b1721" stroke="#38bdf8" strokeWidth="2" />
      <g style={{ transformOrigin: "325px 200px" }} className="art-sway">
        <line x1="325" y1="200" x2="325" y2="140" stroke="#5eead4" strokeWidth="6" strokeLinecap="round" />
        <g style={{ transformOrigin: "325px 140px" }} className="art-bob">
          <line x1="325" y1="140" x2="260" y2="105" stroke="#5eead4" strokeWidth="6" strokeLinecap="round" />
          <circle cx="260" cy="105" r="6" fill="#22d3ee" />
        </g>
      </g>
      <g>
        <rect x="90" y="190" width="60" height="34" rx="6" fill="#0b1721" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="120" cy="195" r="10" fill="#183242" stroke="#5eead4" strokeWidth="2" />
        <circle cx="105" cy="214" r="5" fill="#22c55e" className="art-blink" />
        <circle cx="135" cy="214" r="5" fill="#ef4444" className="art-blink" style={{ animationDelay: "0.4s" }} />
      </g>
    </svg>
  );
}

export function Ros2AcademyArt() {
  const nodes = [
    { x: 70, y: 190, color: "#5eead4" },
    { x: 165, y: 130, color: "#38bdf8" },
    { x: 260, y: 170, color: "#8b5cf6" },
    { x: 355, y: 110, color: "#f59e0b" },
    { x: 420, y: 60, color: "#ef4444" },
  ];
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      <path
        d="M70,190 L165,130 L260,170 L355,110 L420,60"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeDasharray="6 6"
        className="art-flow"
      />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="14" fill="#0b1721" stroke={n.color} strokeWidth="2" />
          <circle
            cx={n.x}
            cy={n.y}
            r="20"
            fill="none"
            stroke={n.color}
            strokeWidth="1.5"
            opacity="0.4"
            className="art-pulse-scale"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          <circle cx={n.x} cy={n.y} r="4" fill={n.color} className="art-blink" style={{ animationDelay: `${i * 0.25}s` }} />
        </g>
      ))}
    </svg>
  );
}

export function SytracItsArt() {
  return (
    <svg className="art-canvas" viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg">
      {GRID}
      {/* 4-Way Smart City Intersection Roads */}
      <rect x="180" y="0" width="120" height="270" fill="#09131a" />
      <rect x="0" y="75" width="480" height="120" fill="#09131a" />

      {/* Lane Dividers */}
      <line x1="240" y1="0" x2="240" y2="75" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" className="art-flow" />
      <line x1="240" y1="195" x2="240" y2="270" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" className="art-flow" />
      <line x1="0" y1="135" x2="180" y2="135" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" className="art-flow" />
      <line x1="300" y1="135" x2="480" y2="135" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 6" className="art-flow" />

      {/* Intersection Radar / Telemetry Sensing Pulse */}
      <circle cx="240" cy="135" r="45" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.4" className="art-pulse-scale" />
      <circle cx="240" cy="135" r="75" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.25" className="art-pulse-scale" style={{ animationDelay: "0.8s" }} />

      {/* Traffic Light Controllers */}
      <g>
        {/* Top-Left Signal */}
        <rect x="155" y="45" width="20" height="26" rx="4" fill="#0b1721" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="165" cy="53" r="3.5" fill="#ef4444" className="art-blink" />
        <circle cx="165" cy="63" r="3.5" fill="#22c55e" className="art-blink" style={{ animationDelay: "1s" }} />

        {/* Top-Right Signal */}
        <rect x="305" y="45" width="20" height="26" rx="4" fill="#0b1721" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="315" cy="53" r="3.5" fill="#22c55e" className="art-blink" />
        <circle cx="315" cy="63" r="3.5" fill="#ef4444" className="art-blink" style={{ animationDelay: "1s" }} />

        {/* Bottom-Right Signal */}
        <rect x="305" y="198" width="20" height="26" rx="4" fill="#0b1721" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="315" cy="206" r="3.5" fill="#ef4444" className="art-blink" />
        <circle cx="315" cy="216" r="3.5" fill="#22c55e" className="art-blink" style={{ animationDelay: "0.5s" }} />

        {/* Bottom-Left Signal */}
        <rect x="155" y="198" width="20" height="26" rx="4" fill="#0b1721" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="165" cy="206" r="3.5" fill="#22c55e" className="art-blink" style={{ animationDelay: "0.7s" }} />
        <circle cx="165" cy="216" r="3.5" fill="#ef4444" className="art-blink" />
      </g>

      {/* Vehicles & Emergency Priority Corridor */}
      <g>
        {/* Standard Vehicle Moving East */}
        <rect x="20" y="142" width="28" height="14" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" className="art-slide" />

        {/* Emergency Priority Ambulance with flashing siren beacon */}
        <g transform="translate(195 20)">
          <rect x="0" y="0" width="16" height="32" rx="4" fill="#dc2626" stroke="#fca5a5" strokeWidth="1.5" />
          <circle cx="8" cy="16" r="4" fill="#38bdf8" className="art-blink" />
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M0,0 L0,220" />
        </g>
      </g>

      {/* AI Telemetry HUD Box */}
      <g className="art-bob" style={{ animationDuration: "4s" }}>
        <rect x="340" y="15" width="125" height="52" rx="6" fill="#0b1721" stroke="#d97706" strokeWidth="1.5" opacity="0.9" />
        <text x="350" y="32" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">SYTRAC ITS v2.4</text>
        <text x="350" y="46" fill="#22d3ee" fontSize="9" fontFamily="monospace">AI Green Wave: 98%</text>
        <circle cx="452" cy="28" r="4" fill="#10b981" className="art-blink" />
      </g>
    </svg>
  );
}

export const projectArt: Record<string, () => ReactElement> = {
  "sytrac-its": SytracItsArt,
  "delta-simulator": DeltaSimulatorArt,
  "digital-twin-3cuves": DigitalTwinArt,
  "plc-sim": PlcSimArt,
  "crm-tickets": CrmTicketsArt,
  conveyor: ConveyorArt,
  "color-sort": ColorSortArt,
  "robot-knn": RobotKnnArt,
  elevator: ElevatorArt,
  "balance-table": BalanceTableArt,
  "robot-arm-3axis": RobotArm3AxisArt,
  "ros2-academy": Ros2AcademyArt,
};
