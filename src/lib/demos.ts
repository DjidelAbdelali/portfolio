const loaders: Record<string, () => Promise<{ default: string }>> = {
  "delta-simulator": () => import("../assets/demos/delta-simulator.html?raw"),
  "digital-twin-3cuves": () => import("../assets/demos/digital-twin-3cuves.html?raw"),
  "plc-sim": () => import("../assets/demos/plcsim-standalone.html?raw"),
  "crm-tickets": () => import("../assets/demos/crm-tickets.html?raw"),
  "robot-knn": () => import("../assets/demos/robot-knn.html?raw"),
  "balance-table": () => import("../assets/demos/balance-table.html?raw"),
  "robot-arm-3axis": () => import("../assets/demos/robot-arm-3axis.html?raw"),
  elevator: () => import("../assets/demos/elevator.html?raw"),
  "color-sort": () => import("../assets/demos/color-sort.html?raw"),
  "ros2-academy": () => import("../assets/demos/ros2-academy.html?raw"),
};

export async function loadDemo(demoId: string): Promise<string | null> {
  const loader = loaders[demoId];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
