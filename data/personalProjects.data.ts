import { ProjectLinkType } from '@/enums';
import { PersonalProject } from '@/interfaces';

const personalProjects: PersonalProject[] = [
    {
        name: 'custom-logger',
        description:
            'A comprehensive Dart project that includes custom logger functionality for enhanced console output formatting. It provides options to set log levels, color codes, prefixes, suffixes, and more, allowing for tailored logging behavior.',
        technologies: ['Dart', 'Flutter', 'Firebase Crashlytics'],
        links: [
            {
                url: 'https://github.com/LFebruary/custom-logger',
                type: ProjectLinkType.github,
            },
        ],
    },
    {
        name: 'JSHelpers',
        description:
            'A versatile JavaScript library offering utility classes for enhanced DOM manipulation and interaction. JSHelpers includes features for observing class changes, mutating elements, and validating form fields, streamlining complex operations in web projects.',
        technologies: ['JavaScript', 'Web'],
        links: [
            {
                url: 'https://github.com/LFebruary/JSHelpers',
                type: ProjectLinkType.github,
            },
        ],
    },
    {
        name: 'AvaloniaSerialToSocket',
        description:
            'An Avalonia desktop application that reads data from a COM/Serial port and broadcasts it via a socket connection. It includes comprehensive utilities for network and serial port operations, ensuring efficient data transmission and communication.',
        technologies: ['C#', 'Desktop', 'Avalonia', 'Serial', 'Socket'],
        links: [
            {
                url: 'https://github.com/LFebruary/AvaloniaSerialToSocket',
                type: ProjectLinkType.github,
            },
        ],
    },
    {
        name: 'AvaloniaToolbox',
        description:
            'A collection of helper functions and UI components designed to streamline Avalonia application development. It provides various utilities and UI elements to enhance the development experience and improve code quality.',
        technologies: ['C#', 'Desktop', 'Avalonia'],
        links: [
            {
                url: 'https://github.com/LFebruary/AvaloniaToolbox',
                type: ProjectLinkType.github,
            },
        ],
    },
    {
        name: 'XamarinSocketClient',
        description:
            'A Xamarin application that receives string values from a server companion via a socket connection. It efficiently handles data reception and updates the UI, ensuring smooth communication between client and server.',
        technologies: ['C#', 'Xamarin', 'Android'],
        links: [
            {
                url: 'https://github.com/LFebruary/XamarinSocketClient',
                type: ProjectLinkType.github,
            },
        ],
    },
    {
        name: 'This',
        description:
            'A portfolio built on Next.js with Typescript. A lot of the components were built on top of MUI with a lot of custom SCSS styling. This is deployed via GitHub actions to Vercel.',
        technologies: ['Typescript', 'Next.js', 'MUI', 'SCSS', 'Bun'],
        links: [
            {
                url: 'https://github.com/LFebruary/bun-next-portfolio',
                type: ProjectLinkType.github,
            },
        ],
    },
];

export default personalProjects;
