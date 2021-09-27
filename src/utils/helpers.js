// Import logo svgs
import { ReactComponent as FacebookLogo } from "../svgs/icon-facebook.svg";
import { ReactComponent as IgLogo } from "../svgs/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../svgs/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../svgs/icon-youtube.svg";

export const handlePlatformColour = (platform) => {
  switch (platform) {
    case "facebook":
      return "background: var(--facebook);";
    case "twitter":
      return "background: var(--twitter);";
    case "youtube":
      return "background: var(--youtube);";
    case "instagram":
      return "background: var(--instagram);";
    default:
      return null;
  }
};

export const handlePlatformLogo = (platform) => {
  switch (platform) {
    case "facebook":
      return <FacebookLogo />;
    case "twitter":
      return <TwitterLogo />;
    case "youtube":
      return <YoutubeLogo />;
    case "instagram":
      return <IgLogo />;
    default:
      return null;
  }
};

export const handleNumToK = (num) => {
  return Math.abs(num) >= 10000 ? Math.abs(num) / 1000 + "k" : Math.abs(num);
};

export const handleNumSeparator = (num) => {
  return Math.abs(num) >= 1000
    ? Math.abs(num)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : Math.abs(num);
};
