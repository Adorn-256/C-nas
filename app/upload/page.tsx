'use client';

import { useState } from 'react';
import { FileUpload } from '@/components/upload/file-upload';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (formData: FormData) => {
    setIsUploading(true);
    try {
      // Simulate API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Document uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Upload Training Data</CardTitle>
          <CardDescription>
            Share your organization&apos;s documents to improve C-NAS&apos;s AI capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload onUpload={handleUpload} isUploading={isUploading} />
        </CardContent>
      </Card>
    </div>
  );
}