
export function generateMetadata({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
}) {
  const siteName = 'Finsai';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Trade Secure`;
  
  return {
    title: fullTitle,
    description,
    keywords,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

const routeMetadataMap = {
  '/': {
    title: '',
    description: 'Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.',
  },
  '/home': {
    title: '',
    description: 'Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn About Finsai mission to provide secure and efficient trading solutions.',
  },
  '/academy': {
    title: 'Academy',
    description: 'Access our comprehensive trading Academy to enhance your skills and knowledge.',
  },
  '/accounts': {
    title: 'Accounts',
    description: 'Manage your trading accounts, view transaction history, and access account settings.',
  },
  '/platforms': {
    title: 'Trading Platforms',
    description: 'Discover our powerful trading platforms including MetaTrader 5, WebTrader, and Mobile App.',
  },
  '/forex': {
    title: 'Forex Trading',
    description: 'Trade major, minor, and exotic currency pairs with competitive spreads and fast execution.',
  },
  '/crypto': {
    title: 'Cryptocurrency Trading',
    description: 'Trade popular cryptocurrencies including Bitcoin, Ethereum, and more with advanced tools.',
  },
  '/indices': {
    title: 'Indices Trading',
    description: 'Trade global stock indices including US30, US500, UK100, and more.',
  },
  '/metals': {
    title: 'Metals & Commodities',
    description: 'Trade gold, silver, oil, and natural gas with transparent pricing and real-time data.',
  },
  '/worldstocks': {
    title: 'World Stocks',
    description: 'Trade stocks from global markets including US, European, and Asian stocks.',
  },
  '/tools': {
    title: 'Trading Tools',
    description: 'Access advanced trading tools, calculators, and analysis resources to enhance your trading.',
  },
  '/learn-grow': {
    title: 'Learn & Grow',
    description: 'Expand your trading knowledge with educational resources, tutorials, and market insights.',
  },
  '/blogs': {
    title: 'Blogs',
    description: 'Read the latest market news, trading tips, and insights from our expert team.',
  },
  '/news-analysis': {
    title: 'News & Analysis',
    description: 'Stay updated with the latest financial news and market analysis to make informed trading decisions.',
  },
  '/webinars': {
    title: 'Webinars',
    description: 'Join our live webinars and learn from trading experts and market analysts.',
  },
  '/tutorials': {
    title: 'Tutorials',
    description: 'Step-by-step tutorials to help you master trading strategies and platform features.',
  },
  '/glossary': {
    title: 'Trading Glossary',
    description: 'Comprehensive glossary of trading terms and financial market definitions.',
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about trading, accounts, platforms, and more.',
  },
  '/help': {
    title: 'Help Center',
    description: 'Get help and support for all your trading needs and platform questions.',
  },
  '/contact-support': {
    title: 'Contact Support',
    description: 'Get in touch with our support team for any questions or assistance.',
  },
  '/career': {
    title: 'Careers',
    description: 'Join the Finsai team and build your career in the financial technology industry.',
  },
  '/our-team': {
    title: 'Our Team',
    description: 'Meet the experienced professionals behind Finsai\'s success.',
  },
  '/regulations': {
    title: 'Regulations',
    description: 'Learn about our regulatory compliance and commitment to secure trading practices.',
  },
  '/regulations-security': {
    title: 'Regulations & Security',
    description: 'Our commitment to security, compliance, and regulatory standards.',
  },
  '/company-regulations': {
    title: 'Company Regulations',
    description: 'Understanding our regulatory framework and compliance standards.',
  },
  '/company-regulations-india': {
    title: 'Company Regulations - India',
    description: 'Regulatory information and compliance details for Indian operations.',
  },
  '/finsai-care': {
    title: 'Finsai Care',
    description: 'Our commitment to client care and support throughout your trading journey.',
  },
  '/finsai-venture': {
    title: 'Finsai Venture',
    description: 'Learn about Finsai Venture and our investment initiatives.',
  },
  '/venture-steps': {
    title: 'Venture Steps',
    description: 'Step-by-step guide to getting started with Finsai Venture.',
  },
  '/rewards': {
    title: 'Rewards Program',
    description: 'Explore our rewards program and benefits for loyal traders.',
  },
  '/rewards-ibprogram': {
    title: 'IB Program',
    description: 'Join our Introducing Broker program and earn commissions.',
  },
  '/rewards-promotion': {
    title: 'Promotions',
    description: 'Check out our latest trading promotions and special offers.',
  },
  '/payment': {
    title: 'Payment Methods',
    description: 'Secure payment options for deposits and withdrawals.',
  },
  '/testimonials': {
    title: 'Client Testimonials',
    description: 'Read what our clients say about trading with Finsai.',
  },
  '/single-blog': {
    title: 'Blog Post',
    description: 'Read our latest blog post and stay updated with trading insights and market analysis.',
  },
  '/preview': {
    title: 'Preview',
    description: 'Preview your page content before publishing.',
  },
  '/homepageeditor': {
    title: 'Homepage Editor',
    description: 'Edit and customize your homepage content with our visual editor.',
  },
  '/view': {
    title: 'View',
    description: 'View frequently asked questions and learn more about Finsai.',
  },
};


export function getMetadataForRoute(routePath) {
  const normalizedPath = routePath === '' ? '/' : `/${routePath.replace(/^\/+|\/+$/g, '')}`;
  
  const metadata = routeMetadataMap[normalizedPath] || {
    title: 'Page',
    description: 'Trade securely with Finsai - Your trusted trading partner.',
  };
  
  return metadata;
}


export function getRouteMetadata(routePath, overrides = {}) {
  const routeMetadata = getMetadataForRoute(routePath);
  
  // Return proper Next.js Metadata object with title and description
  // Title will use the template from root layout: '%s | Finsai'
  // So if routeMetadata.title is 'About Us', it becomes 'About Us | Finsai'
  return {
    title: routeMetadata.title || undefined, // undefined will use default from root layout
    description: routeMetadata.description || 'Trade securely with Finsai - Your trusted trading partner.',
    ...overrides,
  };
}

export const pageMetadata = {
  home: routeMetadataMap['/'] || routeMetadataMap['/home'],
  about: routeMetadataMap['/about'],
  academy: routeMetadataMap['/academy'],
  accounts: routeMetadataMap['/accounts'],
  testimonials: routeMetadataMap['/testimonials'],
};
