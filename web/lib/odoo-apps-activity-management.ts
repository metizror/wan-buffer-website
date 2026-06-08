import type { OdooApp } from "./odoo-apps-data-types";

const ACTIVITY_MANAGEMENT_ASSETS = "/odoo-apps/activity-management";
const ACTIVITY_MANAGEMENT_SCREENSHOTS = `${ACTIVITY_MANAGEMENT_ASSETS}/screenshots`;
const ACTIVITY_MANAGEMENT_FEATURES = `${ACTIVITY_MANAGEMENT_ASSETS}/features`;

export const ACTIVITY_MANAGEMENT_APP: OdooApp = {
    slug: "activity-management",
    name: "Activity Management",
    technicalName: "wb_activity_dashboard",
    summary:
      "A clean activity dashboard for Odoo that helps teams track calls, meetings, emails, and follow-ups without digging through individual records.",
    description:
      "Bring every scheduled activity into one place. Activity Management gives your team a simple dashboard, a full activity list, and module-wise views so managers and users always know what is due today, what is late, and what is coming next.",
    introParagraphs: [
      "If your team lives inside Odoo activities, you already know the pain. Tasks are spread across CRM, sales orders, invoices, and projects. Managers struggle to see the full picture, and users waste time opening record after record just to check what is due.",
      "Activity Management fixes that with a dedicated dashboard built around how Odoo activities actually work. Users stay focused on their own work. Managers get visibility across the business. Everyone can filter by Today, Planned, Overdue, or History without leaving a single screen.",
      "The module respects Odoo access rights, works with the apps you already installed, and ships with the same 365-day support Wan Buffer provides across our Apps Store catalog.",
    ],
    categories: ["Productivity", "Sales & CRM"],
    versions: ["17.0", "18.0", "19.0"],
    priceLabel: "From $30",
    priceAmount: "$30.27",
    license: "OPL-1",
    linesOfCode: 635,
    dependencies: ["Calendar", "Discuss", "Sales", "Invoicing"],
    iconSrc: `${ACTIVITY_MANAGEMENT_ASSETS}/icon.png`,
    cardImageSrc: `${ACTIVITY_MANAGEMENT_ASSETS}/cover.png`,
    heroImageSrc: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/activity_dashboard.png`,
    highlights: [
      {
        title: "One dashboard for the whole team",
        body: "Open Activity Management and see Today, Late, Future, and History in a layout your team can read at a glance. No more jumping between apps to understand workload.",
      },
      {
        title: "Built for managers and users",
        body: "Assign Manager or User access in Settings. Managers monitor organization-wide activity and team views. Users see the screens they need without extra clutter.",
      },
      {
        title: "Works with your installed apps",
        body: "Activity counts adapt to the Odoo modules you run. CRM, Sales, Invoicing, and more appear module-wise with Today Call, Today Email, and status breakdowns.",
      },
    ],
    trustStats: [
      { value: "365", label: "Days free support" },
      { value: "50+", label: "Custom apps delivered" },
      { value: "254+", label: "Happy customers" },
      { value: "7+", label: "Years of experience" },
    ],
    features: [
      {
        title: "Centralized activity dashboard",
        body: "Get a single overview of scheduled work across Odoo instead of checking each record one by one.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f1.png`,
      },
      {
        title: "Manager-wide visibility",
        body: "Activity Managers can review all activities in the company and keep follow-ups from slipping through the cracks.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f2.png`,
      },
      {
        title: "All Activities menu",
        body: "Jump straight to a dedicated list where every scheduled activity can be reviewed, filtered, and managed.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f3.png`,
      },
      {
        title: "Structured activity views",
        body: "Activities are grouped in a clear layout so teams spend less time searching and more time completing tasks.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f4.png`,
      },
      {
        title: "Status filters that match real work",
        body: "Switch between Today, Planned, Overdue, and History to match how your team plans its day.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f5.png`,
      },
      {
        title: "Deadline tracking",
        body: "Counts and lists update by status so overdue work stands out before it becomes a customer issue.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f6.png`,
      },
      {
        title: "Role-based screens",
        body: "Manager and User access rights control which menus appear, including the My Team Activity view for leaders.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f7.png`,
      },
      {
        title: "Module-aware tracking",
        body: "See activity volume by installed module, including Today Call and Today Email counts where relevant.",
        imageSrc: `${ACTIVITY_MANAGEMENT_FEATURES}/f8.png`,
      },
    ],
    setupSteps: [
      {
        title: "Install the module",
        body: "Open the Apps menu in Odoo, search for Activity Management, and install the module on your database.",
      },
      {
        title: "Grant Manager access",
        body: "Go to Settings, Users, and Access Rights. Set Activity Dashboard permissions to Manager for users who need company-wide visibility.",
      },
      {
        title: "Review the dashboard overview",
        body: "Managers and users can open the dashboard to track Today, Late, Future, and History activities, including module-wise counts for each installed app.",
      },
      {
        title: "Use the All Activities screen",
        body: "The All Activities menu lists every scheduled activity in the system. Filter today, planned, and overdue work from one centralized view.",
      },
      {
        title: "Create activity tags",
        body: "Navigate to Activities, Tags, and create labels your team will reuse. New tags appear automatically when scheduling activities.",
      },
      {
        title: "Open My Team Activity",
        body: "Managers can use the My Team Activity screen to review activities assigned to their team at the time each activity was created.",
      },
      {
        title: "Assign User access",
        body: "For team members who only need personal visibility, set Activity Dashboard permissions to User in Access Rights.",
      },
      {
        title: "Understand the user experience",
        body: "Users with dashboard access see the main activity screens. The My Team Activity menu stays hidden unless Manager rights are assigned.",
      },
      {
        title: "Leave access unset when not needed",
        body: "If no Activity Dashboard group is selected, the dashboard and manager-only menus remain hidden for that user.",
      },
      {
        title: "Filter by activity status",
        body: "Click Today Activity, Late Activity, or Future Activity to open focused lists with the matching count displayed on screen.",
      },
      {
        title: "Drill into today's work",
        body: "The Today Activity view shows only items scheduled for the current day, making daily standups and check-ins much faster.",
      },
      {
        title: "Browse module-wise activity",
        body: "The module-wise screen groups activities by installed Odoo apps with Today, Tomorrow, Late, and Future counts for each area.",
      },
      {
        title: "Review calls and emails",
        body: "Module-wise views also surface Today Call and Today Email totals so sales and support teams can prioritize outreach.",
      },
      {
        title: "Open module-specific details",
        body: "Select any module tile to see its activities broken down by Today, Tomorrow, Late, and Future with the related records attached.",
      },
    ],
    screenshots: [
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/home_dashboard.png`,
        alt: "Activity Management home dashboard in Odoo",
        title: "Home dashboard",
        caption: "The main entry point shows activity status summaries your team can scan in seconds.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/activity_dashboard.png`,
        alt: "Activity dashboard overview with status counts",
        title: "Activity dashboard",
        caption: "Today, Late, Future, and History appear together with counts that update as work moves through the day.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/all_activities.png`,
        alt: "All Activities list in Odoo",
        title: "All Activities",
        caption: "Review every scheduled activity from one list, no matter which user or manager is signed in.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/today.png`,
        alt: "Today activities filter in Activity Management",
        title: "Today activities",
        caption: "Focus on the current day with a filtered view and a clear total count at the top.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/module_wise.png`,
        alt: "Module-wise activity view in Odoo",
        title: "Module-wise view",
        caption: "See activity volume by installed module, including calls and emails scheduled for today.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/module_wise_data.png`,
        alt: "Module-specific activity details",
        title: "Module drill-down",
        caption: "Click a module to inspect its Today, Tomorrow, Late, and Future activities in detail.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/tags.png`,
        alt: "Activity tags configuration",
        title: "Activity tags",
        caption: "Create reusable tags that appear when your team schedules new activities.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/manager_team_activity.png`,
        alt: "My Team Activity screen for managers",
        title: "My Team Activity",
        caption: "Managers review team workload from activities assigned under their responsibility.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/manager_access.png`,
        alt: "Manager access rights for Activity Dashboard",
        title: "Manager access rights",
        caption: "Control who sees manager-only menus directly from Odoo user access settings.",
      },
      {
        src: `${ACTIVITY_MANAGEMENT_SCREENSHOTS}/user_home.png`,
        alt: "User home dashboard for Activity Management",
        title: "User dashboard",
        caption: "Standard users get the activity views they need without manager-only screens.",
      },
    ],
    faqs: [
      {
        q: "What is Activity Management used for?",
        a: "It gives you a centralized place to plan, track, and manage scheduled activities in Odoo. Teams use it for reminders, follow-ups, and daily visibility without opening each CRM or sales record separately.",
      },
      {
        q: "Can I set recurring activities automatically?",
        a: "Yes. The module supports recurring schedules such as daily, weekly, or monthly activities through cron jobs, so repeat follow-ups can be created automatically.",
      },
      {
        q: "Can multiple users be assigned to one activity?",
        a: "Yes. Activity Management supports multiple assignees on the same activity, which helps when a task needs shared ownership across a small team.",
      },
      {
        q: "Does it work on Community and Enterprise?",
        a: "Yes. It runs on Odoo Community and Enterprise, including Odoo Online, Odoo.sh, and on-premise installations.",
      },
      {
        q: "Which Odoo apps does it depend on?",
        a: "The module depends on Calendar, Discuss, Sales, and Invoicing. Module-wise views then reflect whichever related apps you have installed in your database.",
      },
      {
        q: "How do I get support after purchase?",
        a: "Every purchase includes 365 days of support from Wan Buffer. Email sales@wanbuffer.com for setup help, bug reports, or customization questions.",
      },
    ],
    odooStoreUrl: "https://apps.odoo.com/apps/modules/19.0/wb_activity_dashboard",
    featured: true,
  };
