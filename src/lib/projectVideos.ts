const loaders: Record<string, () => Promise<{ default: string }>> = {
  "sytrac-its": () => import("../assets/project-videos/sytrac-its.mp4"),
  "delta-simulator": () => import("../assets/project-videos/delta-simulator.mp4"),
  "digital-twin-3cuves": () => import("../assets/project-videos/digital-twin-3cuves.mp4"),
  "plc-sim": () => import("../assets/project-videos/plc-sim.mp4"),
  "crm-tickets": () => import("../assets/project-videos/crm-tickets.mp4"),
  conveyor: () => import("../assets/project-videos/conveyor.mp4"),
  "color-sort": () => import("../assets/project-videos/color-sort.mp4"),
  "robot-knn": () => import("../assets/project-videos/robot-knn.mp4"),
  elevator: () => import("../assets/project-videos/elevator.mp4"),
  "balance-table": () => import("../assets/project-videos/balance-table.mp4"),
  "robot-arm-3axis": () => import("../assets/project-videos/robot-arm-3axis.mp4"),
  "ros2-academy": () => import("../assets/project-videos/ros2-academy.mp4"),
};

export async function loadProjectVideo(key: string): Promise<string | null> {
  const loader = loaders[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
