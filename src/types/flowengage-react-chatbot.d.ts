declare module "@flowengage/react-chatbot" {
  import type { ReactNode } from "react";

  interface FlowEngageConfig {
    siteId?: string;
    apiBaseUrl?: string;
    [key: string]: unknown;
  }

  interface FlowEngageProviderProps {
    siteId?: string;
    config?: FlowEngageConfig;
    language?: string;
    children: ReactNode;
  }

  export function FlowEngageProvider(props: FlowEngageProviderProps): JSX.Element;
  export function FlowEngageWidget(): JSX.Element;
  export function useFlowEngage(): unknown;
  export function AnimatedOrb(): JSX.Element;
}
