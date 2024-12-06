'use client';

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResponseDisplayProps {
  response: string;
}

export function ResponseDisplay({ response }: ResponseDisplayProps) {
  return (
    <ScrollArea className="h-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Response</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm dark:prose-invert">
            {response || "No response yet. Start by sending a prompt!"}
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}