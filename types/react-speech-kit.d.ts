declare module "react-speech-kit" {
  export interface SpeakOptions {
    text: string;
    voice?: SpeechSynthesisVoice;
    rate?: number;
    pitch?: number;
    volume?: number;
  }

  export interface UseSpeechSynthesisResult {
    speak: (options: SpeakOptions) => void;
    cancel: () => void;
    speaking: boolean;
    supported: boolean;
    voices: SpeechSynthesisVoice[];
  }

  export function useSpeechSynthesis(): UseSpeechSynthesisResult;
}
