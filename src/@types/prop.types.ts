interface iconProps {
  icon: JSX.Element;
  url: string;
}

interface linkProps {
  text: string;
  url: string;
}

interface workProps {
  position: string;
  company: string;
  location: string;
  type: string;
  weblink: string;
  duration: string;
}

export type { iconProps, linkProps, workProps };
