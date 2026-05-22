export type EventCategory =
  | "AI"
  | "Email Marketing"
  | "Events"
  | "Marketing Automation"
  | "Odoo"
  | "Odoo CRM"
  | "PharmaTech Expo";

export type EventLocation = "Online" | "Helipad Exhibition Centre, Gandhinagar, Gujarat, India";

export interface EventHost {
  name: string;
  role: string;
}

export interface EventHighlight {
  title: string;
  description: string;
}

export interface EventContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface WanBufferEvent {
  slug: string;
  title: string;
  pageHeading: string;
  excerpt: string;
  dateLabel: string;
  sortDate: string;
  time?: string;
  location: EventLocation;
  categories: EventCategory[];
  imageSrc: string;
  imageW: number;
  imageH: number;
  priceLabel: string;
  introParagraphs: string[];
  hosts?: EventHost[];
  highlights?: EventHighlight[];
  sections?: EventContentSection[];
  learnItems?: string[];
  audienceItems?: string[];
  closingParagraphs?: string[];
  youtubeUrl?: string;
  hashtags?: string;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  "AI",
  "Email Marketing",
  "Events",
  "Marketing Automation",
  "Odoo",
  "Odoo CRM",
  "PharmaTech Expo",
];

export const EVENT_LOCATIONS: EventLocation[] = [
  "Online",
  "Helipad Exhibition Centre, Gandhinagar, Gujarat, India",
];

export function eventPath(slug: string): string {
  return `/event/${slug}`;
}

export const WAN_BUFFER_EVENTS: WanBufferEvent[] = [
  {
    slug: "the-plugi-success-future-proofing-your-email-verification-strategy",
    title: "The Plugi Success: Future-Proofing Your Email Verification Strategy",
    pageHeading: "Talk Show – The Plugi Success Event",
    excerpt:
      "Second edition of the Plugi Success talk show—future-proofing email verification with Odoo and Plugi.",
    dateLabel: "Sat, 12 Oct 2024",
    sortDate: "2024-10-12",
    time: "11:00 am (Asia/Kolkata)",
    location: "Online",
    categories: ["Email Marketing", "Events"],
    imageSrc: "/event/plugi-future.jpg",
    imageW: 750,
    imageH: 385,
    priceLabel: "Free",
    introParagraphs: [
      "We are excited to announce the second edition of the talk show, “The Plugi Success,” where we dive deeper into the evolving landscape of email verification. Plugi, the innovative Odoo connector, is engineered to elevate your email management and ensure accuracy across your communication channels. This episode will provide fresh insights and explore new capabilities of Plugi, which is proudly powered by Wan Buffer Services.",
      "In this special session, Saloni and Bhavik will explore the advancements and practical applications of Plugi, showing how businesses can unlock more value from their email management processes. They’ll guide you through success stories and real-world applications that demonstrate how Plugi simplifies email verification while seamlessly integrating with your ERP systems.",
    ],
    hosts: [
      { name: "Saloni Darji", role: "Business Development, Wan Buffer Services" },
      { name: "Bhavik Shah", role: "CEO, TechnoBrains Business Solutions" },
    ],
    highlights: [
      {
        title: "Explore New Features",
        description:
          "Learn about the latest updates to Plugi, how it addresses the evolving challenges of email verification, and what new features can offer your business. Bhavik Shah will share industry insights on email management trends and how Plugi adapts to these changes.",
      },
      {
        title: "Boost Your Email Campaigns",
        description:
          "With accurate email verification, Plugi ensures your messages reach the intended audience. This session will show how improving email list reliability leads to higher ROI on marketing campaigns and reduced bounce rates.",
      },
      {
        title: "Practical Implementation Advice",
        description:
          "Saloni will share her experience in deploying Plugi across different industries and highlight the best practices for smooth integration with Odoo, ensuring you get the most out of this tool.",
      },
      {
        title: "The Future of Email Management",
        description:
          "Get a sneak peek into the future of email verification and management as Bhavik discusses how emerging technologies are shaping the way businesses communicate. Find out how Plugi is evolving to stay ahead of the curve.",
      },
      {
        title: "Insights from Tech Expo Gujarat 2024",
        description:
          "Bhavik Shah will share valuable insights from Tech Expo Gujarat 2024, giving you a deeper understanding of the technology trends shaping the future of email management and other key business areas.",
      },
    ],
    closingParagraphs: [
      "Join us for a power-packed session to learn how Plugi can take your email management processes to the next level! Don’t miss this opportunity to hear from industry leaders and discover how to make your email verification faster, more reliable, and integrated seamlessly with your business processes.",
      "If you couldn’t catch the live session, now’s your chance to dive into the insights and discussions from this edition of The Plugi Success talk show.",
    ],
    hashtags:
      "#PlugiSuccess #EmailVerification #TechExpoGujarat2024 #OdooIntegration #WanBufferServices #TechnoBrains #EmailManagement #OdooConnector #EmailCampaign #BusinessGrowth #TechTalks #EmailMarketing #DigitalSolutions #PlugiUpdates #ERPIntegration",
  },
  {
    slug: "odoo-17-crm-customer-relationship-management-demo-odoo-17-enterpriseedition-community-edition",
    title:
      "Odoo 17 CRM (Customer Relationship Management) Demo | Odoo 17 Enterprise Edition & Community Edition",
    pageHeading: "Odoo 17 CRM Enterprise Edition & Community Edition",
    excerpt:
      "Live Odoo CRM demo—streamlining customer relationships ahead of Tech Expo Gujarat 2024.",
    dateLabel: "Sat, 28 Sep 2024",
    sortDate: "2024-09-28",
    time: "11:00 am (UTC+5.5)",
    location: "Online",
    categories: ["Odoo", "Odoo CRM"],
    imageSrc: "/event/odoo-17-crm.jpg",
    imageW: 751,
    imageH: 387,
    priceLabel: "Free",
    introParagraphs: [
      "Welcome to our exclusive webinar on “Odoo CRM: Streamlining Your Customer Relationships,” hosted by Prachi Patel from Wan Buffer Services. This webinar serves as a live demo for the innovative Odoo CRM solutions you’ll see at Tech Expo Gujarat 2024. Join us for an interactive session designed to showcase how Odoo CRM can revolutionize your customer management, boost your sales performance, and transform your business processes.",
    ],
    highlights: [
      {
        title: "Sneak Peek of Tech Expo Gujarat 2024",
        description:
          "Get an early look at the Odoo CRM tools and features that will be demonstrated at the Expo.",
      },
      {
        title: "Gain Insightful Knowledge",
        description:
          "Explore how Odoo CRM can automate your customer interactions, from lead management to customer retention, increasing efficiency.",
      },
      {
        title: "Expert Guidance",
        description:
          "Learn from industry leaders, including Prachi Patel, who will walk you through the success stories of businesses using Odoo CRM.",
      },
      {
        title: "Live Demonstrations",
        description:
          "Watch real-time demos of Odoo CRM’s features, from lead tracking to sales pipeline management.",
      },
      {
        title: "Interactive Q&A",
        description: "Have your questions answered by our experts in the live Q&A session.",
      },
      {
        title: "Networking Opportunities",
        description: "Meet other professionals and connect with experts ahead of Tech Expo Gujarat 2024.",
      },
    ],
    learnItems: [
      "Overview of Odoo CRM: Discover the key features and functionalities of Odoo CRM and how they can improve your customer relationship management.",
      "Sales Workflow Automation: Learn how to automate the entire sales process, from lead generation to deal closing.",
      "Integration & Customization: See how easy it is to integrate Odoo CRM with your existing systems and tailor it to your unique business needs.",
      "Tech Expo Preview: Get a sneak peek of what’s in store at Tech Expo Gujarat 2024, where Odoo solutions will be front and center.",
      "Best Practices: Gain insights and best practices to optimize your business operations using Odoo CRM.",
      "Real-World Case Studies: Explore how real businesses have benefited from implementing Odoo CRM.",
    ],
    audienceItems: [
      "Business Owners: Seeking to enhance customer relationships and optimize sales operations.",
      "Sales Managers: Looking to improve workflow automation and boost conversion rates.",
      "Marketing Professionals: Interested in tracking customer journeys and improving engagement through Odoo CRM.",
      "IT Managers: Exploring integrated CRM solutions to enhance efficiency.",
      "Odoo Users: Those already using Odoo CRM and looking for advanced tips.",
    ],
    closingParagraphs: [
      "This webinar is the perfect opportunity to experience firsthand what Wan Buffer Services will showcase at Tech Expo Gujarat 2024. Get an early understanding of how Odoo CRM can transform your business, and be ready to explore more when you visit the expo.",
      "If you missed the webinar, you can revisit the session recording and materials shared after the live demo.",
    ],
    hashtags:
      "#Odoo17 #CRM #OdooDemo #TechExpoGujarat2024 #EnterpriseEdition #CommunityEdition #WanBufferServices #CustomerManagement #SalesAutomation #TechEvents #BusinessGrowth #InnovationInTech",
  },
  {
    slug: "join-us-for-the-plugi-success-talk-show-exploring-odoo-connector-for-email-verification",
    title: 'Join Us for "The Plugi Success" Talk Show: Exploring Odoo Connector for Email Verification',
    pageHeading: "Talk Show – The Plugi Success Event for Odoo Connector and Email Verification",
    excerpt:
      "First edition talk show on the Odoo connector for email verification with Plugi and Wan Buffer.",
    dateLabel: "Sat, 31 Aug 2024",
    sortDate: "2024-08-31",
    time: "11:00 am (UTC+5.5)",
    location: "Online",
    categories: ["Odoo", "Email Marketing", "Events"],
    imageSrc: "/event/plugi-talk-show.png",
    imageW: 750,
    imageH: 386,
    priceLabel: "Free",
    introParagraphs: [
      "We are thrilled to announce the first-ever talk show, “The Plugi Success,” a deep dive into the groundbreaking realm of email verification with Plugi, the cutting-edge Odoo connector designed to streamline and elevate your email management like never before. Plugi is powered by Wan Buffer Services, ensuring top-notch performance and reliability.",
      "Join our esteemed hosts, Saloni and Manthan, as they guide you through the journey of Plugi’s development and its powerful impact on business operations. Learn about the innovative features, key benefits, and real-world applications of Plugi, providing you with actionable insights to enhance your email verification processes and seamlessly integrate with Odoo. As this is the inaugural talk show on Plugi, you’ll have a unique opportunity to be among the first to discover how this tool is revolutionizing email management.",
      "Plugi is an advanced email verification solution meticulously designed to help businesses ensure the accuracy and reliability of their email lists. By verifying emails in real-time and integrating seamlessly with existing ERP systems, Plugi enhances email management processes, leading to more effective communication and marketing efforts.",
    ],
    hosts: [
      { name: "Saloni Darji", role: "Business Development, Wan Buffer Services" },
      { name: "Manthan Bhavsar", role: "Founder & CMO, Metizsoft Solutions" },
    ],
    highlights: [
      {
        title: "In-Depth Knowledge",
        description:
          "Dive deep into the intricacies of Plugi, exploring how it can revolutionize your email verification process. Discover the latest features and capabilities that make Plugi an essential tool for modern businesses.",
      },
      {
        title: "Expert Guidance",
        description:
          "Benefit from the extensive experience and insights of Manthan Bhavsar, Founder & CMO of Metizsoft Solutions, on leveraging the connector to optimize your email verification processes.",
      },
      {
        title: "Future of Email Management",
        description:
          "Get insights into the future trends of email management and verification. Understand how Plugi is adapting to emerging technologies and what that means for your business’s email strategies.",
      },
      {
        title: "Boosting Marketing ROI",
        description:
          "Learn how accurate email verification can directly impact your marketing ROI. With clean email lists, your campaigns will reach the right audience, reducing costs and improving conversion rates.",
      },
    ],
    closingParagraphs: [
      "Don’t miss out on this exclusive event! Watch the recording and join us on this exciting journey into the future of email verification.",
    ],
    hashtags:
      "#PlugiSuccess #OdooConnector #EmailVerification #WanBufferServices #MetizsoftSolutions #TechTalkShow #BusinessDevelopment #EmailManagement #OdooIntegration #TechEvents #InnovationInTech",
  },
  {
    slug: "meet-us-at-pharmatech-expo-labtech-expo-2024-in-gandhinagar",
    title: "Meet us at PharmaTech Expo & LabTech Expo 2024 in Gandhinagar!",
    pageHeading: "Wan Buffer Services at PharmaTech Expo & LabTech Expo 2024",
    excerpt:
      "Wan Buffer at PharmaTech & LabTech Expo 2024—pharma machinery, lab tech, and Odoo solutions.",
    dateLabel: "Thu, 8 Aug – Sat, 10 Aug 2024",
    sortDate: "2024-08-08",
    time: "10:00 am – 6:00 pm (UTC+5.5)",
    location: "Helipad Exhibition Centre, Gandhinagar, Gujarat, India",
    categories: ["PharmaTech Expo", "Events"],
    imageSrc: "/event/pharmatech.jpg",
    imageW: 750,
    imageH: 386,
    priceLabel: "Free",
    introParagraphs: [
      "Wan Buffer Services is thrilled to announce our participation in the upcoming PharmaTech Expo & LabTech Expo 2024. This premier event will take place at the Helipad Exhibition Centre, Gandhinagar, Gujarat, India, from August 8–10, 2024, and is organized by PharmaTechnologyIndex.com Pvt Ltd (a division of KNS Group).",
    ],
    sections: [
      {
        heading: "Event details",
        bullets: [
          "Dates: August 8–10, 2024",
          "Venue: Helipad Exhibition Centre, Gandhinagar, Gujarat, India",
          "Organizer: PharmaTechnologyIndex.com Pvt Ltd (A Division of KNS Group)",
        ],
      },
      {
        heading: "Exhibition schedule",
        bullets: [
          "August 8, 2024: 10:00 AM to 12:00 PM – Exhibition Inaugural; 10:00 AM to 06:00 PM – Exhibition",
          "August 9, 2024: 10:00 AM to 06:00 PM – Exhibition",
          "August 10, 2024: 10:00 AM to 06:00 PM – Exhibition",
          "Note: Students from Pharma Institutes are allowed entry after 2:00 PM on the last day, August 10, 2024, with valid ID.",
        ],
      },
      {
        heading: "About PharmaTech & LabTech Expo",
        paragraphs: [
          "PharmaTech Expo & LabTech Expo is an international showcase featuring Pharma Machinery, Formulations, Nutraceuticals, Laboratory, Analytical, and Packaging Equipment. This exhibition highlights the latest advancements and cutting-edge technologies in the pharmaceutical sector, providing manufacturers with in-depth insights into industry innovations and trends.",
        ],
      },
    ],
    highlights: [
      {
        title: "Face-to-Face Interaction",
        description:
          "PharmaTech Expo offers a unique opportunity to connect with hundreds of the region’s most influential and key decision-makers in one location. Engage with key players in the high-value, high-quality fine & specialty pharmaceutical market.",
      },
      {
        title: "New Technology",
        description:
          "Discover the latest solutions, products, and technologies available in the industry. Meet new suppliers and manufacturers from around the world all under one roof.",
      },
      {
        title: "Networking",
        description:
          "Uncover business opportunities in the dynamic market and connect with local manufacturers, companies, and investors interested in pharmaceutical projects.",
      },
    ],
    closingParagraphs: [
      "For up-to-date event and registration information, session details, and other important updates, please visit the official expo website. We look forward to connecting with you at PharmaTech Expo & LabTech Expo 2024 and showcasing how Wan Buffer Services can support your business needs.",
    ],
  },
  {
    slug: "odoo-marketing-and-sales-workflow-automation",
    title: "Odoo Marketing and Sales Workflow Automation for Efficiency and Growth",
    pageHeading: "Odoo Marketing and Sales Workflow Automation",
    excerpt:
      "Webinar on Odoo marketing and sales workflow automation—efficiency, demos, and Q&A.",
    dateLabel: "Sat, 20 Jul 2024",
    sortDate: "2024-07-20",
    time: "11:00 am – 12:00 pm (UTC+5.5)",
    location: "Online",
    categories: ["Odoo", "Marketing Automation"],
    imageSrc: "/event/marketing-automation.jpg",
    imageW: 751,
    imageH: 387,
    priceLabel: "Free",
    introParagraphs: [
      "Welcome to our exclusive webinar on “Odoo Marketing and Sales Workflow Automation” hosted by Wan Buffer Services. This event is designed to help you unlock the full potential of your business operations by leveraging Odoo’s powerful automation tools. Join us as we dive into the innovative features of Odoo that can streamline your marketing and sales processes, boost efficiency, and drive growth.",
    ],
    highlights: [
      {
        title: "Gain Insightful Knowledge",
        description:
          "Discover how Odoo’s marketing and sales workflow automation can transform your business operations.",
      },
      {
        title: "Expert Guidance",
        description: "Learn from industry experts who will share practical tips and success stories.",
      },
      {
        title: "Live Demonstrations",
        description:
          "Watch real-time demonstrations of Odoo’s features and see how they can be applied to your business.",
      },
      {
        title: "Interactive Q&A",
        description: "Get your questions answered by our knowledgeable panel during the live Q&A session.",
      },
      {
        title: "Networking Opportunities",
        description: "Connect with other professionals and experts in the field.",
      },
    ],
    learnItems: [
      "Overview of Odoo Marketing Automation: Understand the key features and benefits of Odoo’s marketing automation tools.",
      "Sales Workflow Automation: Learn how to automate your sales processes from lead generation to closing deals.",
      "Integration and Customization: Discover how to integrate Odoo with your existing systems and customize it to meet your specific business needs.",
      "Case Studies: Explore real-world examples of businesses that have successfully implemented Odoo automation.",
      "Best Practices: Get actionable tips and best practices to maximize the impact of Odoo on your business.",
    ],
    audienceItems: [
      "Business Owners: Looking to streamline operations and enhance efficiency.",
      "Marketing Professionals: Interested in leveraging automation to boost campaign effectiveness.",
      "Sales Managers: Seeking to optimize sales workflows and improve conversion rates.",
      "IT Managers: Exploring integrated solutions for seamless business operations.",
      "Odoo Users: Existing users who want to get more out of their Odoo system.",
    ],
    closingParagraphs: [
      "If you missed the live session, you can watch the full recording of the webinar on our YouTube channel.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=BL55j8bOydA",
  },
  {
    slug: "ai-powered-email-marketing-with-chatgpt-on-odoo",
    title: "AI-Powered Email Marketing: with ChatGPT on Odoo",
    pageHeading: "Unlock the Future of Email Marketing with AI and Odoo",
    excerpt:
      "Unlock AI-powered email marketing—ChatGPT and Odoo for personalised campaigns and automation.",
    dateLabel: "Sat, 22 Jun 2024",
    sortDate: "2024-06-22",
    time: "12:00 pm – 1:00 pm (UTC+5.5)",
    location: "Online",
    categories: ["AI", "Email Marketing", "Odoo"],
    imageSrc: "/event/ai-email-marketing.jpg",
    imageW: 751,
    imageH: 386,
    priceLabel: "Free",
    introParagraphs: [
      "Welcome to an exclusive event that will transform your approach to email marketing! Join us for “AI-Powered Email Marketing: The ChatGPT and Odoo Advantage,” where we will delve into the innovative fusion of artificial intelligence and Odoo’s comprehensive business management tools. This webinar is designed for marketing professionals, business owners, and anyone looking to elevate their email marketing strategies through cutting-edge technology.",
      "In the dynamic world of digital marketing, staying ahead means adopting the latest advancements that offer efficiency and personalisation. This webinar will reveal how integrating ChatGPT with Odoo can revolutionise your email marketing efforts, providing you with the tools to create compelling, personalised content effortlessly and automate customer interactions.",
    ],
    highlights: [
      {
        title: "Automated Content Creation",
        description:
          "Discover how ChatGPT can generate engaging and tailored email content that resonates with your audience.",
      },
      {
        title: "Streamlined Workflows",
        description:
          "Learn to automate your email marketing processes, saving time and resources while maintaining a personal touch.",
      },
      {
        title: "Enhanced Customer Engagement",
        description:
          "Explore strategies to boost open rates, click-through rates, and conversions by leveraging AI-powered personalisation.",
      },
      {
        title: "Comprehensive Integration",
        description:
          "Understand the seamless integration between ChatGPT and Odoo and how it can fit into your existing marketing ecosystem.",
      },
      {
        title: "Practical Tips and Insights",
        description:
          "Gain actionable tips and strategies from industry experts to optimize your email marketing campaigns using AI.",
      },
    ],
    audienceItems: [
      "Marketing Professionals: Looking to enhance their email marketing tactics with AI-driven personalisation.",
      "Business Owners: Interested in automating their marketing processes to improve efficiency and ROI.",
      "Odoo Users: Wanting to explore new functionalities and integrations to maximize their use of the platform.",
      "Tech Enthusiasts: Eager to learn about the latest advancements in AI and its practical applications in marketing.",
    ],
    closingParagraphs: [
      "Missed our live webinar? You can watch the full session anytime on our YouTube channel.",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=cCeJau6F3TU",
    hashtags:
      "#AIEmailMarketing #ChatGPT #Odoo #WanBufferServices #MarketingAutomation #EmailMarketing #OdooIntegration",
  },
];

export const EVENT_COUNT = WAN_BUFFER_EVENTS.length;

export function getEventBySlug(slug: string): WanBufferEvent | undefined {
  return WAN_BUFFER_EVENTS.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return WAN_BUFFER_EVENTS.map((e) => e.slug);
}
