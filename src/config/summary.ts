// Types, edit this if you like
interface summaryType {
  siteName: string;
  url: string;
  logoURL: string;
  description: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  social?: {
    twitter?: socialType;
    facebook?: socialType;
    youtube?: socialType;
    instagram?: socialType;
    linkedin?: socialType;
  };
}

interface socialType {
  url: string;
  icon: string;
  label: string;
}

// Enter all the info for your site here, used throughout.
const summary: summaryType = {
  siteName: "Tamarack Productions",
  url: "https://chartley-template.vercel.app/",
  logoURL: "/favicon.svg",
  description:
    "A company devoted to building beautiful additions to your home. From decks, fences, pergolas, and more. Call now for a free quote!",
  contact: { phone: "123-321-4321", email: "example@gmail.com" },
  social: {
    twitter: {
      url: "https://www.twitter.com/",
      icon: "twitter-x",
      label: "Twitter",
    },
    facebook: {
      url: "https://www.facebook.com/",
      icon: "facebook",
      label: "Facebook",
    },
    youtube: {
      url: "https://www.youtube.com/watch?v=Gibberish",
      icon: "youtube",
      label: "Youtube",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/unique-url",
      icon: "linkedin",
      label: "LinkedIn",
    },
  },
};

export default summary;
