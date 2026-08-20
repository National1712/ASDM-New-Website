export interface AssetManifestEntry {
  asset_id: string;
  current_path: string;
  type: 'image' | 'video' | 'document' | 'other';
  width: number | null;
  height: number | null;
  aspect_ratio: number | null;
  orientation: 'LANDSCAPE' | 'PORTRAIT' | 'SQUARE' | 'PANORAMIC' | 'UNKNOWN';
  file_size: number;
  current_status:
    | 'EXCELLENT'
    | 'GOOD'
    | 'USABLE WITH OPTIMISATION'
    | 'LOW RESOLUTION'
    | 'HEAVILY COMPRESSED'
    | 'BLURRED'
    | 'SCREENSHOT'
    | 'UNSUITABLE'
    | 'UNKNOWN';
}

export type AssetManifest = AssetManifestEntry[];
