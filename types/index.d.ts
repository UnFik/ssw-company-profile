import { Component, JSX } from "react";

export interface ReactTypingEffectProps {
  text: string | string[];
  staticText?: string | undefined;
  className?: string | undefined;
  speed?: number | undefined;
  eraseDelay?: number | undefined;
  eraseSpeed?: number | undefined;
  typingDelay?: number | undefined;
  cursor?: string | undefined;
  cursorClassName?: string | undefined;
  displayTextRenderer?(text: string, i: number): JSX.Element;
}

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
};

export default class ReactTypingEffect extends Component<ReactTypingEffectProps> {}
