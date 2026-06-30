/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLOWENGAGE_SITE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
