'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, ChartBar, GitCompare, Lightbulb } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button as CalendarButton } from "@/components/ui/button";

interface PromptBuilderProps {
  onSubmit: (analysis: any) => void;
  isLoading?: boolean;
}

export function PromptBuilder({ onSubmit, isLoading }: PromptBuilderProps) {
  const [query, setQuery] = useState('');
  const [analysisType, setAnalysisType] = useState<string>('impact');
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit({
        query,
        analysisType,
        dateRange: date ? { start: format(date, 'yyyy-MM-dd') } : undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="space-y-2">
        <Label>Analysis Type</Label>
        <Select value={analysisType} onValueChange={setAnalysisType}>
          <SelectTrigger>
            <SelectValue placeholder="Select analysis type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="impact">
              <div className="flex items-center">
                <ChartBar className="mr-2 h-4 w-4" />
                Impact Analysis
              </div>
            </SelectItem>
            <SelectItem value="overlap">
              <div className="flex items-center">
                <GitCompare className="mr-2 h-4 w-4" />
                Project Overlap
              </div>
            </SelectItem>
            <SelectItem value="recommendation">
              <div className="flex items-center">
                <Lightbulb className="mr-2 h-4 w-4" />
                Recommendations
              </div>
            </SelectItem>
            <SelectItem value="trend">
              <div className="flex items-center">
                <Brain className="mr-2 h-4 w-4" />
                Trend Analysis
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Time Period</Label>
        <Popover>
          <PopoverTrigger asChild>
            <CalendarButton
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select date"}
            </CalendarButton>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Analysis Query</Label>
        <Textarea
          placeholder="Describe your analysis needs... (e.g., 'Analyze the impact of education projects in Kasese district')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-[150px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading || !query.trim()}
      >
        <Brain className="mr-2 h-4 w-4" />
        Generate Analysis
      </Button>
    </form>
  );
}