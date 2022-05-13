// Import logo svgs
import FacebookLogo from "../svgs/icon-facebook.svg";
import IgLogo from "../svgs/icon-instagram.svg";
import TwitterLogo from "../svgs/icon-twitter.svg";
import YoutubeLogo from "../svgs/icon-youtube.svg";

// Import arrow svgs
import { ReactComponent as UpArrow } from "../svgs/icon-up.svg";
import { ReactComponent as DownArrow } from "../svgs/icon-down.svg";

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
      return <img src={FacebookLogo} alt="Facebook logo" />;
    case "twitter":
      return <img src={TwitterLogo} alt="Twitter logo" />;
    case "youtube":
      return <img src={YoutubeLogo} alt="Youtube logo" />;
    case "instagram":
      return <img src={IgLogo} alt="Instagram logo" />;
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

export const handleArrows = (deltaType) => {
  if (deltaType === "up") {
    return <UpArrow className="arrow" />;
  }
  if (deltaType === "down") {
    return <DownArrow className="arrow" />;
  }
};
