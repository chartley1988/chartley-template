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
    twitter?: {
      url: string;
    };
    facebook?: {
      url: string;
    };
    youtube?: {
      url: string;
    };
  };
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
    twitter: { url: "https://www.twitter.com/" },
    facebook: { url: "https://www.facebook.com/" },
    youtube: { url: "https://www.youtube.com/watch?v=Gibberish" },
  },
};

export default summary;
