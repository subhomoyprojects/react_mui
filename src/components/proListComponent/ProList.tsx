import assets from "../../assets";

interface FeatureCompetition {
  img: string;
  title: string;
  package: number;
  announcement: string;
  tag: string[];
}

export const featureCompetition: FeatureCompetition[] = [
  {
    img: assets.pro1,
    title: "4 Nights In Iceland Holiday",
    package: 2.99,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro2,
    title: "2016 Volkswagen Golf GTD Auto + €3,000 Cash",
    package: 16.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro3,
    title: "Gran Canaria Radisson Winter Getaway",
    package: 8.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro4,
    title: "High Roller €1,300 Cash",
    package: 8.0,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro5,
    title: "High Roller Fridays Macbook Air M1 Chip",
    package: 20.0,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro6,
    title: "High Roller €400 Cash",
    package: 15.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro7,
    title: "5 Star Krakow Poland Getaway",
    package: 22.0,
    announcement: "",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro8,
    title: "4 Nights In Iceland Holiday",
    package: 2.99,
    announcement: "Live draw tonight 10PM",
    tag: ["Draw Tonight", "Draw Tomorrow", "ending soon", "Sold out", "Draw Tue 23rd Aug"],
  },
  {
    img: assets.pro9,
    title: "€700 Cash For €2.99",
    package: 2.99,
    announcement: "",
    tag: ["Draw Thu 26th Aug"],
  },
  {
    img: assets.pro10,
    title: "€500 Gift Card",
    package: 2.99,
    announcement: "",
    tag: ["Draw Thu 26th Aug"],
  },
  {
    img: assets.pro11,
    title: "Manchester United V Leeds United #2",
    package: 2.99,
    announcement: "",
    tag: ["Draw Thu 26th Aug"],
  },
  {
    img: assets.pro12,
    title: "Liverpool V West Ham United Hospitality Package",
    package: 2.99,
    announcement: "",
    tag: ["Draw Thu 26th Aug"],
  },
];
