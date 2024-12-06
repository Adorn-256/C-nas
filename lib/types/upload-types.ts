export type DocumentType = 'report' | 'research' | 'accountability' | 'other';

export interface UploadedDocument {
  id: string;
  title: string;
  type: DocumentType;
  organization: string;
  description: string;
  tags: string[];
  uploadDate: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
}

export interface UploadResponse {
  success: boolean;
  documentId?: string;
  error?: string;
}