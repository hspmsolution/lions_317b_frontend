// homepage navigation config
import SvgColor from "../svg-color";

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

export const homeNavConfig=(role) =>{
 return [
    {
      title: "Home",
      path: "/",
      icon: icon("ic_dashboard"),
      isClick: false,
    },
    {
      title: "About",
      path: null,
      icon: icon("ic_activity"),
      isClick: false,
      subItems: [
        {
          title: "Governor",
          path: "/about/governor",
          icon: icon("ic_arrow"),
        },
        {
          title: "DG Team",
          path: "/about/dgteam",
          icon: icon("ic_arrow"),
        },
        {
          title: "About District 317B",
          path: "/about/aboutdistrict317b",
          icon: icon("ic_arrow"),
        },
        {
          title: "Organization Chart",
          path: "/about/organizationchart",
          icon: icon("ic_arrow"),
        },
      ].filter(Boolean),
    },
    {
      title: "Activities",
      path: "/activities",
      icon: icon("ic_dashboard"),
      isClick: false,
    },
    {
      title: "Membership",
      path: null,
      icon: icon("ic_activity"),
      isClick: false,
      subItems: [
        {
          title: "E Directory",
          path: "/membership/edirectory",
          icon: icon("ic_arrow"),
        },
        {
          title: "Member Directory",
          path: "/membership/memberdirectory",
          icon: icon("ic_arrow"),
        },
        {
          title: "Business Directory",
          path: "https://digicard.hspmsolutions.com/",
          icon: icon("ic_arrow"),
        },
        {
          title: "Download Member Data",
          path: "/membership/downloadmemberdata",
          icon: icon("ic_arrow"),
        },
      ].filter(Boolean),
    },
    {
      title: "Resources",
      path: null,
      icon: icon("ic_activity"),
      isClick: false,
      subItems: [
        {
          title: "News",
          path: "/resources/news",
          icon: icon("ic_arrow"),
        },
        {
          title: "Gallery",
          path: "/resources/gallery",
          icon: icon("ic_arrow"),
        },
        {
          title: "Global Priorities",
          path: "/resources/globalpriorities",
          icon: icon("ic_arrow"),
        },
        {
          title: "Download Resources",
          path: "/resources/downloadresources",
          icon: icon("ic_arrow"),
        },
      ].filter(Boolean),
    },
  ].filter(Boolean);
} 

export const config=(role) =>{
    return [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_dashboard"),
    isClick: false,
  },
  {
    title: "Activities",
    path: null,
    icon: icon("ic_activity"),
    isClick: false,
    subItems: [
      (role?.includes("Club Treasurer") ||
        role?.includes("Club Secretary") ||
        role?.includes("Club Administrator") ||
        role?.includes("Club President")) && {
        title: "Report New Activity",
        path: "/dashboard/activity",
        icon: icon("ic_arrow"),
      },
      {
        title: "Reported Activities",
        path: "/dashboard/pastactivity",
        icon: icon("ic_arrow"),
      },
    ].filter(Boolean),
  },
  (role?.includes("Club President") ||
    role?.includes("Club Secretary") ||
    role?.includes("Club Administrator") ||
    role?.includes("District Governor")) && {
    title: "Club Details",
    path: null,
    icon: icon("ic_activity"),
    isClick: false,
    subItems: [
      {
        title: "Add Club Details",
        path: "/dashboard/clubdetails",
        icon: icon("ic_arrow"),
      },
      {
        title: "Reported Club Details",
        path: "/dashboard/reportedclubdetails",
        icon: icon("ic_arrow"),
      },
      // {
      //   title: "Club Gallery",
      //   path: "/dashboard/clubgallery",
      //   icon: icon("ic_arrow"),
      // },
    ].filter(Boolean),
  },

  (role?.includes("Club Treasurer") ||
    role?.includes("Club Secretary") ||
    role?.includes("Club Administrator") ||
    role?.includes("Club President")) && {
    title: "Admin Reports",
    path: null,
    icon: icon("ic_activity"),
    isClick: false,
    subItems: [
      {
        title: "Add Admin Report",
        path: "/dashboard/admin",
        icon: icon("ic_admin"),
      },
    ].filter(Boolean),
  },

  // ///////

  {
    title: "News Reporting",
    path: "/dashboard/news",
    icon: icon("ic_news"),
    isClick: false,
  },
  role?.includes("Club Treasurer") && {
    title: "Expense Manager",
    path: "/dashboard/manage-expense",
    icon: icon("ic_expense"),
    isClick: false,
  },
  role?.includes("Zone Chairperson") && {
    title: "Zone",
    path: "/dashboard/zone",
    icon: icon("ic_zone"),
    isClick: false,
  },
  role?.includes("Region Chairperson") && {
    title: "Region",
    path: "/dashboard/region",
    icon: icon("ic_region"),
    isClick: false,
  },
].filter(Boolean)};
