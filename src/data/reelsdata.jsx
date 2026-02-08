import concertVideo from "../assets/concert.mp4"
import photoVideo from "../assets/photo.mp4"
import blackholeVideo from "../assets/blackhole.mp4"
import stocksVideo from "../assets/stocks.mp4"
import trekVideo from "../assets/trek.mp4"
import warVideo from "../assets/war.mp4"
import techVideo from "../assets/tech.mp4"
import movieVideo from "../assets/movie.mp4"
import catVideo from "../assets/cat.mp4"

const reelsData = [
  {
    id: 1,
    video: concertVideo,
    user: {
      username: "@siddharth_734",
      userImg: "https://images.unsplash.com/photo-1769272382095-6baeab7e3b59?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "THE BEST CONCERT🎤🎉",
    stats: { likes: "1.2M", comments: "177K", shares: "1" }
  },

  {
    id: 2,
    video: "https://www.w3schools.com/html/movie.mp4",
    user: {
      username: "@techbytes",
      userImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "Why programmers love DARK MODE 🌑💻",
    stats: { likes: "980K", comments: "65K", shares: "3.2K" }
  },

  {
    id: 3,
    video: blackholeVideo,
    user: {
      username: "@space.explained",
      userImg: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=600&auto=format&fit=crop&q=60",
      isFollowing: true
    },
    caption: "This is what falling into a BLACK HOLE would feel like 🕳️🚀",
    stats: { likes: "2.8M", comments: "410K", shares: "9.4K" }
  },

  {
    id: 4,
    video: photoVideo,
    user: {
      username: "@psychologyfacts",
      userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "Your brain believes this illusion is REAL 😵‍💫",
    stats: { likes: "1.6M", comments: "220K", shares: "5.1K" }
  },

  {
    id: 5,
    video: stocksVideo,
    user: {
      username: "@moneydecoded",
      userImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
      isFollowing: true
    },
    caption: "Why the rich NEVER keep money in savings 💰📉",
    stats: { likes: "3.1M", comments: "540K", shares: "18K" }
  },

  {
    id: 6,
    video: trekVideo,
    user: {
      username: "@fitness.science",
      userImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "This is healing",
    stats: { likes: "1.9M", comments: "198K", shares: "6.7K" }
  },

  {
    id: 7,
    video: warVideo,
    user: {
      username: "@history.short",
      userImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60",
      isFollowing: true
    },
    caption: "This WAR started because of ONE mistake ⚔️",
    stats: { likes: "2.2M", comments: "305K", shares: "11K" }
  },

  {
    id: 8,
    video: movieVideo,
    user: {
      username: "@cinema.secrets",
      userImg: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "This movie scene was NOT scripted 🎬😳",
    stats: { likes: "4.5M", comments: "620K", shares: "29K" }
  },

  {
    id: 9,
    video: techVideo,
    user: {
      username: "@ai.daily",
      userImg: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
      isFollowing: true
    },
    caption: "AI will replace THESE jobs first 🤖⚠️",
    stats: { likes: "5.2M", comments: "890K", shares: "41K" }
  },

  {
    id: 10,
    video: catVideo,
    user: {
      username: "@deep.thoughts",
      userImg: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=600&auto=format&fit=crop&q=60",
      isFollowing: false
    },
    caption: "If you understand this, you’re mentally strong 🧠✨",
    stats: { likes: "3.7M", comments: "470K", shares: "15K" }
  }
];

export default reelsData;
