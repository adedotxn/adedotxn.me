type Projects = {
  title: string;
  description: string;
  source_code: string;
  live_site?: string;
}[];

export const projects: Projects = [
  {
    title: "Savelink 📌",
    description:
      " Savelink is a (progressive) web app to store links from all across the web for ease of access, traversal and sharing. Links can be grouped into categories and searched through. All saved links can also be exported",
    source_code: "https://github.com/adedotxn/savelink",
    live_site: "https://savelink.vercal.app",
  },
  {
    title: "Block Party",
    description:
      "BlockParty is an MVP of a neighborhood app that meets all neighborhood needs in one place - bringing together people who share interests, and facilitate local support and collaborations. For the MVP, we are focusing on matching people who share interests.",
    source_code: "https://github.com/adedotxn/block-party",
    live_site: "https://the-blockparty.vercel.app/invite/P15Ry1",
  },
  {
    title: "MovLibrary 🎬",
    description:
      "A web app for getting information about movies — upcoming, popular, trending. Informations like Release date, genre, rating, etc.",
    source_code: "https://github.com/adedotxn/movlibrary",
    live_site: "https://movlibrary.vercel.app",
  },

  {
    title: "Tagbookmarks 🔖",
    description:
      "A web app for searching through twitter bookmarks and assigning tags/labels to them for categorisation and easy traversal. This web app was built with the twitter api which was free to use at the time so incase the web app is not working at whatever time in the future this is, twitter must have sniped it.",
    source_code: "https://github.com/adedotxn/tagbookmarks",
    live_site: "https://tagbookmarks.vercel.appp",
  },
];
