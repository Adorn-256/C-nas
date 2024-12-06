'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

interface SplitViewProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export function SplitView({ left, right }: SplitViewProps) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[calc(100vh-2rem)] rounded-lg border"
    >
      <ResizablePanel defaultSize={40} minSize={30}>
        {left}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60} minSize={30}>
        {right}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}