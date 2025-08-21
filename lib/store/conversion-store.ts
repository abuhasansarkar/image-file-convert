import { create } from 'zustand';

export interface ConversionFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: 'queued' | 'processing' | 'completed' | 'error';
  progress: number;
  error?: string;
  outputBlob?: Blob;
  outputUrl?: string;
}

export interface ConversionOptions {
  quality?: number;
  width?: number;
  height?: number;
  format?: string;
  stripMetadata?: boolean;
  pageSize?: 'A4' | 'Letter' | 'Legal';
  dpi?: number;
  compression?: boolean;
  pageRange?: string;
  scale?: number;
  backgroundColor?: string;
  bitDepth?: 8 | 16 | 32;
  demosaicQuality?: 'fast' | 'balanced' | 'high';
  whiteBalance?: 'auto' | 'daylight' | 'tungsten' | 'fluorescent';
}

interface ConversionStore {
  files: ConversionFile[];
  options: ConversionOptions;
  isProcessing: boolean;
  maxConcurrency: number;
  
  // Actions
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
  updateFileStatus: (id: string, status: ConversionFile['status'], progress?: number, error?: string) => void;
  setFileOutput: (id: string, blob: Blob, url: string) => void;
  updateOptions: (options: Partial<ConversionOptions>) => void;
  setProcessing: (processing: boolean) => void;
  resetFile: (id: string) => void;
}

export const useConversionStore = create<ConversionStore>()((set, _get) => ({
    files: [],
    options: {
      quality: 80,
      stripMetadata: true,
      pageSize: 'A4',
      dpi: 150,
      compression: true,
      scale: 1,
      backgroundColor: '#ffffff',
      bitDepth: 8,
      demosaicQuality: 'balanced',
      whiteBalance: 'auto',
    },
    isProcessing: false,
    maxConcurrency: 2,

    addFiles: (files) =>
      set((state) => {
        const newFiles = files.map((file) => ({
          id: crypto.randomUUID(),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'queued' as const,
          progress: 0,
        }));
        return { files: [...state.files, ...newFiles] };
      }),

    removeFile: (id) =>
      set((state) => {
        const file = state.files.find((f) => f.id === id);
        if (file?.outputUrl) {
          URL.revokeObjectURL(file.outputUrl);
        }
        return { files: state.files.filter((f) => f.id !== id) };
      }),

    clearFiles: () =>
      set((state) => {
        state.files.forEach((file) => {
          if (file.outputUrl) {
            URL.revokeObjectURL(file.outputUrl);
          }
        });
        return { files: [] };
      }),

    updateFileStatus: (id, status, progress = 0, error) =>
      set((state) => ({
        files: state.files.map((file) =>
          file.id === id
            ? { ...file, status, progress, ...(error && { error }) }
            : file
        ),
      })),

    setFileOutput: (id, blob, url) =>
      set((state) => ({
        files: state.files.map((file) =>
          file.id === id
            ? { ...file, outputBlob: blob, outputUrl: url, status: 'completed' as const, progress: 100 }
            : file
        ),
      })),

    updateOptions: (options) =>
      set((state) => ({
        options: { ...state.options, ...options },
      })),

    setProcessing: (processing) =>
      set({ isProcessing: processing }),

    resetFile: (id) =>
      set((state) => {
        const file = state.files.find((f) => f.id === id);
        if (file?.outputUrl) {
          URL.revokeObjectURL(file.outputUrl);
        }
        return {
          files: state.files.map((file) =>
            file.id === id
              ? {
                  ...file,
                  status: 'queued' as const,
                  progress: 0,
                  error: undefined,
                  outputBlob: undefined,
                  outputUrl: undefined,
                }
              : file
          ),
        };
      }),
  }));
