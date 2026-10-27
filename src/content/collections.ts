export type ShelfEntry = {
  slug: string;
  title: string;
  creator: string;
  genre: string;
  status: "To read" | "Reading" | "Finished" | "To watch" | "Watching";
  color: "sage" | "lavender" | "rose";
  overview: string;
  source: string;
  notes?: string;
  spoilerNotes?: string;
  favorite?: boolean;
  rating?: number;
  progress?: { current: number; total: number; unit: "pages" | "episodes" };
};

// Popular starter picks requested by Sushi. No personal ratings, notes, or
// completed statuses are assumed. Edit these records as the diaries grow.
export const books: ShelfEntry[] = [
  { slug: "the-midnight-library", title: "The Midnight Library", creator: "Matt Haig", genre: "Fiction", status: "To read", color: "lavender", overview: "A library of possible lives invites Nora Seed to explore the choices she could have made.", source: "https://www.penguinrandomhouse.com/books/575653/the-midnight-library-by-matt-haig/" },
  { slug: "atomic-habits", title: "Atomic Habits", creator: "James Clear", genre: "Personal growth", status: "To read", color: "sage", overview: "A practical look at building small habits and making everyday changes that last.", source: "https://global.penguinrandomhouse.com/announcements/avery-celebrates-5-years-of-atomic-habits-an-astounding-260-weeks-on-the-nyt-bestseller-list/" },
  { slug: "the-seven-husbands-of-evelyn-hugo", title: "The Seven Husbands of Evelyn Hugo", creator: "Taylor Jenkins Reid", genre: "Fiction", status: "To read", color: "rose", overview: "A Hollywood legend tells a journalist the story behind her public life and private relationships.", source: "https://taylorjenkinsreid.com/books/the-seven-husbands-of-evelyn-hugo/" },
];

export const dramas: ShelfEntry[] = [
  { slug: "when-life-gives-you-tangerines", title: "When Life Gives You Tangerines", creator: "IU / Park Bo-gum", genre: "Romance", status: "To watch", color: "sage", overview: "A sweeping Korean romance following Ae-sun and Gwan-sik through life's changing seasons.", source: "https://www.netflix.com/tudum/articles/when-life-gives-you-tangerines-release-date-news" },
  { slug: "queen-of-tears", title: "Queen of Tears", creator: "Kim Ji-won / Kim Soo-hyun", genre: "Romance", status: "To watch", color: "rose", overview: "A married couple navigates a relationship crisis in this Korean romantic drama written by Park Ji-eun.", source: "https://www.netflix.com/tudum/queen-of-tears" },
  { slug: "squid-game", title: "Squid Game", creator: "Hwang Dong-hyuk", genre: "Thriller", status: "To watch", color: "lavender", overview: "Players enter a high-stakes competition where familiar childhood games take a dangerous turn.", source: "https://www.netflix.com/tudum/squid-game" },
];
