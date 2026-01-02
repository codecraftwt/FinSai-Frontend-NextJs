import React, { useEffect } from 'react';
import BlogsDescCard from '../../components/LearnGrow/Blogs/BlogsDescCard';
import BlogsContent from '../../components/LearnGrow/Blogs/BlogsContent';
import BlogsPoints from '../../components/LearnGrow/Blogs/BlogsPoints';
import BlogThoughts from '../../components/LearnGrow/Blogs/BlogThoughs';
import SearchBar from '../../components/LearnGrow/Blogs/SearchBar';
import BlogList from '../../components/LearnGrow/Blogs/BlogList';
import CommentsSection from '../../components/layout/CommentsSection';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import assets from '../../assets/assets';

const TagList = ({ title, tags }) => {
  return (
    <div style={styles.tagContainer}>
      <h3 style={styles.tagTitle}>{title}</h3>
      <div style={styles.tagList}>
        {tags.map((tag, index) => (
          <span key={index} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ image, date, title, label }) => {
  return (
    <div style={blogCardStyles.container}>
      <p style={blogCardStyles.label}>{label}</p>
      <div style={blogCardStyles.card}>
        <div style={blogCardStyles.imageContainer}>
          <img src={image} alt={title} style={blogCardStyles.image} />
        </div>
        <div style={blogCardStyles.content}>
          <p style={blogCardStyles.date}>{date}</p>
          <h3 style={blogCardStyles.title}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const blogCardStyles = {
  container: {
    backgroundColor: 'rgba(73, 109, 171, 0.10)',
    borderRadius: '15px',
    padding: '20px',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: 0,
    color: 'white',
  },
  card: {
    display: 'flex',
    gap: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    flex: 1,
  },
  imageContainer: {
    flexShrink: 0,
    width: '150px',
    height: '70px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  date: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255)',
    margin: '0 0 6px 0',
  },
  title: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
    margin: 0,
    color: '#ffffff',
  },
};

const styles = {
  tagContainer: {
    backgroundColor: 'rgba(73, 109, 171, 0.08)',
    borderRadius: '8px',
    padding: '15px',
    width: '100%',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.18)',

  },
  tagTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: 0,
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px',
  },
  tag: {
    backgroundColor: 'rgba(73, 109, 171, 0.10)',
    color: 'rgba(255, 255, 255, 0.70)',
    padding: '6px 16px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
};

const SingleBlog = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogItem = {
    id: 1,
    title: "Crypto & Christmas: Does The Santa Claus Rally Affect Cryptocurrency Markets?",
    description: `"History doesn’t repeat itself, but it often rhymes.As the holiday season approaches, traders everywhere start wondering: will the markets deliver gifts or coal this year? For traditionalstockmarkets, the “Santa Claus Rally” is a familiar phenomenon, with historical data showing the S&P 500 has gained 1.3% on average during the last five trading days of December and the first two of January. But what about the decentralised world of crypto? Do festive season crypto trends echo Wall Street cheer?"`,
    image: assets.CryptoChristmas,
    format: " 4 December 2025",
    href: "/blog/understanding-forex-trading"
  };

  const cryptoContent = {
    title: "The Christmas Effect On Crypto Markets",
    introText: "The Santa Claus Rally, First Coined In 1972, Is Often Attributed To Lighter Trading Volumes, Holiday Optimism, And Year-End Institutional Rebalancing. While The Crypto Market Doesn't Close, It Does Experience Unique Seasonal Shifts. During Christmas And New Year, Crypto Often Sees:",
    listItems: [
      "Increased Retail Activity: Many Traders Have More Free Time To Research And Invest.",
      "Year-End Portfolio Rebalancing: Investors Might Adjust Their Crypto Holdings To Optimise Tax Or Strategic Positions.",
      "Speculative Buzz: Seasonal Hype Can Spark FOMO-Driven Buying, Especially When Bitcoin Or Altcoins Begin To Trend."
    ],
    conclusionText: "That Said, The Christmas Effect On Crypto Markets Isn't Guaranteed. Last Year, While Equities Rallied, Bitcoin Remained Range-Bound. Crypto's Volatility, Global Investor Base, And 24/7 Trading Mean It's Influenced By More Than Just Western Holiday Sentiment."
  };

 const holidaySeasonContent = {
  title: "Holiday Season Market Trends: What The Data Says",
  introText: "In previous years, Bitcoin has shown mixed performance during December, with occasional strong rallies driven by year-end optimism, institutional inflows, or macro factors. However, the results have been highly variable, and historical patterns do not guarantee future outcomes.",
  listItems: [
    "In December 2020, Bitcoin surged approximately 47-50% (from ~$19,000-$20,000 at the start to ~$29,000 by year-end), fueled by institutional adoption, post-COVID liquidity, and broad market enthusiasm.",
    "In December 2022, BTC was relatively flat to down ~3-4% (closing around $16,500), amid a broader bear market, crypto winter fallout (e.g., FTX collapse), and weak stock market correlation despite equity gains.",
    "Broader December trends (2013-2024): Positive closes in about 60-70% of years, with notable strong gains in bull markets (e.g., 2013, 2017, 2020). Median performance often flat or slightly negative when excluding outlier rallies; seasonality is inconsistent compared to traditional stocks' \"Santa Claus rally.\""
  ],
  currentStatusText: "Current status as of late December 2025: Bitcoin crossed $100,000 in early December 2024 amid post-election optimism and ETF inflows, but 2025 has seen significant volatility. After peaking above $120,000-$126,000 earlier in the year, BTC has corrected sharply, trading in the $86,000-$89,000 range through much of December—with no strong holiday rally materializing so far. This reflects reduced leverage, profit-taking by long-term holders, lower retail interest, and macro caution (e.g., shifting Fed expectations).",
  conclusionText: "Takeaway: While holiday season trends can occasionally provide a short-term boost to crypto prices—especially in risk-on environments—performance remains heavily influenced by broader macroeconomic conditions, investor sentiment, institutional flows, and regulatory developments. Past variability (strong gains in some years, flat/declines in others) underscores that December is not a reliable \"rally month\" for Bitcoin. Always consider current market dynamics over historical averages alone."
};

  const tradersWatchData = {
    title: "What Traders Should Watch This December",
    points: [
      "Consumer Spending & Retail Trends: Record-Breaking Holiday Sales Can Bolster Market Sentiment.",
      "Stock-Crypto Correlation: If Online Stock Trading Sees A Rally, Crypto May Follow.",
      "Fed Announcements: Hints At Interest Rate Changes Can Spark Market-Wide Volatility.",
      "Whale Activity: Large Crypto Holders Might Move Markets With Year-End Repositioning."
    ]
  };

  const marketAnalysisData = {
    title: "Finsai Trade’s Santa Trading Wish List Campaign",
    introText: " To sprinkle extra joy this season, Finsai Trade is launching the Santa Trading Wish List campaign — and you’re invited!   Here’s your chance to turn your trading dreams into tangible rewards:",
    listItems: [
     " Make a Reel: Share what you wish for as a trader this Christmas. Be creative, real, and fun!",
      " Get Rewarded: Weekly winners receive Amazon vouchers, gadgets, and trading bonuses. Plus, qualify for the Grand Lucky Draw featuring an iPhone 17 Pro, gold coins, and more.",
      " Just open a live account, fund it with $500, trade 25 standard lots, and you’re in! Trade more to enter the Grand Draw."
    ],
    conclusionText: " This festive season, Finsai Trade isn’t just your trading partner – we’re your Santa too."
  };

  const featuredBlogsData = {
    title: "All Blogs",
    blogs: [
      { title: "Prop Trading Vs Market Making: A Helpful Exploration (Without The Jargon)" },
      { title: "Scalping Vs Day Trading: What's The Difference?" },
      { title: "Is Finset Trade Authentic? The Unvarnished Truth Exposed" },
      { title: "What Are CFds And How Do They Work In Forex And Commodity Trading?" },
      { title: "How The New Finset Trade Upgrade Can Improve Your Trading Experience" }
    ]
  };

  const recentBlogsData = {
    title: "Popular Blogs",
    blogs: [
      { title: "Prop Trading Vs Market Making: A Helpful Exploration (Without The Jargon)" },
      { title: "Scalping Vs Day Trading: What's The Difference?" },
      { title: "Is Finset Trade Authentic? The Unvarnished Truth Exposed" },
    ]
  };

  const tagData = [
    "Prop Trading",
    "Market Trading",
    "Crypto Markets",
    "Retail Trends"
  ];

  const previousBlogData = {
    label: "Previous Blog",
    image: assets.PropTrading,
    date: "November 29, 2024",
    title: "Prop Trading Vs Market Making: A Helpful Exploration (Without The Jargon)"
  };

  const nextBlogData = {
    label: "Next Blog",
    image:assets.Scalping,
    date: "December 15, 2024",
    title: "Scalping Vs Day Trading: What's The Difference?"
  };

  const finalThoughtsData = {
    title: "Final Thoughts",
    paragraphs: [
      "The Santa Claus Rally May Not Be A Surefire Predictor, But It Offers Valuable Insights Into Seasonal Investor Psychology. Whether You're Trading Bitcoin, Ethereum, Or Traditional Forex Pairs, December's Market Mood Is Worth Watching Closely.",
      "And If You're Ready To Make The Most Of Festive Season Crypto Trends, Finset Trade Is Here To Power Your Journey. And Secure. And Built For Real Traders.",
      "Disclaimer: Trading Forex, Crypto, And CFDs Carries Risk And May Not Be Suitable For All Investors. This Article Is For Educational Purposes Only And Does Not Constitute Financial Advice."
    ],
    links: [
      { text: "Power Your Journey", href: "#" }
    ]
  };

  const sampleComments = [
    {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "Merry Alexon",
      text: "Yes, The Santa Claus Rally Often Brings A Positive Vibe To Crypto Markets, With Holiday Optimism And Renewed Investor Confidence Lifting Prices. Increased Risk Appetite And Festive Sentiment Can Give Cryptocurrencies A Cheerful Year-End Boost."
    },
    {
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Merry Alexon",
      text: "Yes, The Santa Claus Rally Often Brings A Positive Vibe To Crypto Markets, With Holiday Optimism And Renewed Investor Confidence Lifting Prices. Increased Risk Appetite And Festive Sentiment Can Give Cryptocurrencies A Cheerful Year-End Boost."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-black">
      {/* Header  */}
      <Header isFixed={false}/>

        {/* Banner */}
      <Banner
        heading="Blog Detail: Crypto & Christmas"
        description="Where we decode the market and provide you with practical tips and strategies for success"
        backgroundImage={assets.learngrow}
        breadcrumbBase="HOME"
        breadcrumbCurrent="LEARN & GROW"
        maxWidthTitle="max-w-4xl"
      />
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="w-full lg:w-[65%] bg-transparent flex flex-col text-white text-2xl gap-4">
          <div className=" w-full">
            <BlogsDescCard item={blogItem} />
            
          </div>
            <div className="">
            <BlogsContent {...cryptoContent} />
          </div>
          <div className="">
            <BlogsContent {...holidaySeasonContent} />
          </div>
          <div className="">
            <BlogsPoints {...tradersWatchData} />
          </div>
          <div className="">
            <BlogsContent {...marketAnalysisData} />
          </div>
          <div className="">
            <BlogThoughts {...finalThoughtsData} />
          </div>
        </div>

        <div className="w-full lg:w-[35%] bg-transparent flex flex-col text-white text-2xl gap-8 mt-8">
          <div className="">
            <SearchBar />
          </div>
          <div className="">
            <BlogList {...featuredBlogsData} />
          </div>
          <div className="">
            <BlogList {...recentBlogsData} />
          </div>
          <div className="">
            <TagList title="Tags" tags={tagData} />
          </div>
          <div className="">
            <BlogCard {...previousBlogData} />
          </div>
          <div className="">
            <BlogCard {...nextBlogData} />
          </div>
        </div>
      </div>

        <div className="w-full max-w-4xl mx-auto my-10">
          <CommentsSection comments={sampleComments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
