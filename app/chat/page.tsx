'use client';

import { useState } from 'react';
import { SplitView } from '@/components/ui/split-view';
import { PromptInput } from '@/components/chat/prompt-input';
import { ResponseDisplay } from '@/components/chat/response-display';

export default function ChatPage() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      setResponse(`Response to: ${prompt}\n\nThis is a simulated response. Replace this with actual API integration.`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <SplitView
        left={
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-bold">Prompt</h2>
            </div>
            <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
          </div>
        }
        right={
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-bold">Response</h2>
            </div>
            <ResponseDisplay response={response} />
          </div>
        }
      />
    </div>
  );
}