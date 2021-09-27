// Import logo svgs
import { ReactComponent as FacebookLogo } from "../svgs/icon-facebook.svg";
import { ReactComponent as IgLogo } from "../svgs/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../svgs/icon-twitter.svg";
import { ReactComponent as YoutubeLogo } from "../svgs/icon-youtube.svg";

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
