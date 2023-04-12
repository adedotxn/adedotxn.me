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
    title: "MovLibrary 🎬",
    description:
      "A web app for getting information about movies — upcoming, popular, trending. Informations like Release date, genre, rating, etc.",
    source_code: "https://github.com/adedotxn/movlibrary",
    live_site: "https://movlibrary.vercel.app",
  },
  {
    title: "Octauth 🔐",
    description:
      "An authentication api for Github and Twitter Oauth. I built this because authentication is a pain point for me and also to be able to use when building simple projects.",
    source_code: "https://github.com/adedotxn/oct-auth",
  },
  {
    title: "Tagbookmarks 🔖",
    description:
      "A web app for searching through twitter bookmarks and assigning tags/labels to them for categorisation and easy traversal. This web app was built with the twitter api which was free to use at the time so incase the web app is not working at whatever time in the future this is, twitter must have sniped it.",
    source_code: "https://github.com/adedotxn/tagbookmarks",
    live_site: "https://tagbookmarks.vercel.appp",
  },
];
