import { ProjectLinkType } from "@/enums";
import { PersonalProject } from "@/interfaces";

const personalProjects: PersonalProject[] = [
  {
    description:
      "A comprehensive Dart project that includes custom logger functionality for enhanced console output formatting. It provides options to set log levels, color codes, prefixes, suffixes, and more, allowing for tailored logging behavior.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/custom-logger",
      },
    ],
    name: "custom-logger",
    technologies: ["Dart", "Flutter", "Firebase Crashlytics"],
  },
  {
    description:
      "A versatile JavaScript library offering utility classes for enhanced DOM manipulation and interaction. JSHelpers includes features for observing class changes, mutating elements, and validating form fields, streamlining complex operations in web projects.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/JSHelpers",
      },
    ],
    name: "JSHelpers",
    technologies: ["JavaScript", "Web"],
  },
  {
    description:
      "An Avalonia desktop application that reads data from a COM/Serial port and broadcasts it via a socket connection. It includes comprehensive utilities for network and serial port operations, ensuring efficient data transmission and communication.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/AvaloniaSerialToSocket",
      },
    ],
    name: "AvaloniaSerialToSocket",
    technologies: ["C#", "Desktop", "Avalonia", "Serial", "Socket"],
  },
  {
    description:
      "A collection of helper functions and UI components designed to streamline Avalonia application development. It provides various utilities and UI elements to enhance the development experience and improve code quality.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/AvaloniaToolbox",
      },
    ],
    name: "AvaloniaToolbox",
    technologies: ["C#", "Desktop", "Avalonia"],
  },
  {
    description:
      "A Xamarin application that receives string values from a server companion via a socket connection. It efficiently handles data reception and updates the UI, ensuring smooth communication between client and server.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/XamarinSocketClient",
      },
    ],
    name: "XamarinSocketClient",
    technologies: ["C#", "Xamarin", "Android"],
  },
  {
    description:
      "A portfolio built on Next.js with Typescript. A lot of the components were built on top of MUI with a lot of custom SCSS styling. This is deployed via GitHub actions to Vercel.",
    links: [
      {
        type: ProjectLinkType.github,
        url: "https://github.com/LFebruary/bun-next-portfolio",
      },
    ],
    name: "This",
    technologies: ["Typescript", "Next.js", "MUI", "SCSS", "Bun"],
  },
];

export default personalProjects;
