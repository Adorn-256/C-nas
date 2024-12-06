'use client';

import { useState } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import type { DocumentType } from '@/lib/types/upload-types';

interface FileUploadProps {
  onUpload: (formData: FormData) => Promise<void>;
  isUploading: boolean;
}

export function FileUpload({ onUpload, isUploading }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<DocumentType>('report');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', title);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('tags', tags);

    await onUpload(formData);
    
    // Reset form
    setSelectedFile(null);
    setTitle('');
    setType('report');
    setDescription('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Document Title</Label>
          <Input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
          />
        </div>

        <div>
          <Label>Document Type</Label>
          <Select value={type} onValueChange={(value) => setType(value as DocumentType)}>
            <SelectTrigger>
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="report">Report</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="accountability">Accountability Document</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter document description"
            className="min-h-[100px]"
          />
        </div>

        <div>
          <Label>Tags (comma-separated)</Label>
          <Input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., education, healthcare, kasese"
          />
        </div>

        <div>
          <Label>File</Label>
          {selectedFile ? (
            <Card className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <File className="h-5 w-5 mr-2" />
                <span>{selectedFile.name}</span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFile(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </Card>
          ) : (
            <div className="mt-2">
              <Input
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.txt,.csv,.xlsx"
                required
              />
            </div>
          )}
        </div>
      </div>

      <Button type="submit" disabled={!selectedFile || isUploading} className="w-full">
        <Upload className="mr-2 h-4 w-4" />
        {isUploading ? 'Uploading...' : 'Upload Document'}
      </Button>
    </form>
  );
}