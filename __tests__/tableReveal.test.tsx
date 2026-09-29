import { renderHook, waitFor } from "@testing-library/react";
import { useRevealNode } from "@/containers/editor/table/useRevealNode";
import type { TableGrid } from "@/lib/table/types";
import type { Virtualizer } from "@tanstack/react-virtual";

vi.mock("@/stores/statusStore", () => ({
  useStatusStore: (selector: (state: object) => unknown) =>
    selector({
      viewMode: "table",
      revealPosition: { version: 1, treeNodeId: "node", target: "value", from: "search" },
      isNeedReveal: () => true,
    }),
}));

const emptyGrid: TableGrid = { grid: [], width: 0, height: 0 };
const populatedGrid: TableGrid = {
  grid: [[{ x: 0, y: 0 } as TableGrid["grid"][number][number]]],
  width: 100,
  height: 100,
};

it("waits for a rendered grid before resolving a reveal position", async () => {
  const setTableRevealPosition = vi.fn().mockResolvedValue({ row: 0, col: 0 });
  window.worker = { setTableRevealPosition } as unknown as typeof window.worker;
  const scrollToOffset = vi.fn();
  const virtualizer = { scrollToOffset } as unknown as Virtualizer<HTMLDivElement, Element>;
  const element = document.createElement("div");
  element.scroll = vi.fn();
  const containerRef = { current: element };

  const { rerender } = renderHook(({ grid }) => useRevealNode(virtualizer, containerRef, grid), {
    initialProps: { grid: emptyGrid },
  });
  expect(setTableRevealPosition).not.toHaveBeenCalled();

  rerender({ grid: populatedGrid });
  await waitFor(() => expect(setTableRevealPosition).toHaveBeenCalledOnce());
  await waitFor(() => expect(scrollToOffset).toHaveBeenCalledWith(0));
});

it("does not read a row missing from the currently rendered grid", async () => {
  const setTableRevealPosition = vi.fn().mockResolvedValue({ row: 2, col: 0 });
  window.worker = { setTableRevealPosition } as unknown as typeof window.worker;
  const scrollToOffset = vi.fn();
  const virtualizer = { scrollToOffset } as unknown as Virtualizer<HTMLDivElement, Element>;
  const containerRef = { current: document.createElement("div") };

  renderHook(() => useRevealNode(virtualizer, containerRef, populatedGrid));
  await waitFor(() => expect(setTableRevealPosition).toHaveBeenCalledOnce());
  await Promise.resolve();
  expect(scrollToOffset).not.toHaveBeenCalled();
});
