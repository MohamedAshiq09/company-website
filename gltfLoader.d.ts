declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { GLTF } from 'three';
    import { Loader } from 'three';
  
    export class GLTFLoader extends Loader {
      load(url: string, onLoad: (gltf: GLTF) => void, onProgress?: (event: ProgressEvent) => void, onError?: (error: ErrorEvent) => void): void;
    }
  }
  