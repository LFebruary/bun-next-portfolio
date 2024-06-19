import { ProjectLinkType } from "@/enums";
import { Project } from "@/interfaces";

const projects: Project[] = [
    {
        name: 'custom-logger',
        description: 'A comprehensive Dart project that includes custom logger functionality for enhanced console output formatting. It provides options to set log levels, color codes, prefixes, suffixes, and more, allowing for tailored logging behavior.',
        technologies: ['Dart', 'Flutter', 'Firebase Crashlytics'],
        links: [
            {
                link: 'https://github.com/LFebruary/custom-logger',
                linkType: ProjectLinkType.github,
            }
        ],
    },
    {
        name: 'JSHelpers',
        description: 'A collection of useful JavaScript classes that can be used in various projects.',
        technologies: ['JavaScript', 'Web'],
        links: [
            {
                link: 'https://github.com/LFebruary/JSHelpers',
                linkType: ProjectLinkType.github,
            }
        ],
    },
    {
        name: 'AvaloniaSerialToSocket',
        description: 'An Avalonia desktop application that reads code from COM/Serial port and broadcasts it via socket connection.',
        technologies: ['C#', 'Desktop', 'Avalonia', 'Serial Ports', 'Sockets'],
        links: [
            {
                link: 'https://github.com/LFebruary/AvaloniaSerialToSocket',
                linkType: ProjectLinkType.github,
            }
        ],
    },
    {
        name: 'AvaloniaToolbox',
        description: 'A collection of helper functions and UI components designed to streamline Avalonia application development. It provides various utilities and UI elements to enhance the development experience and improve code quality.',
        technologies: ['C#', 'Desktop', 'Avalonia'],
        links: [
            {
                link: 'https://github.com/LFebruary/AvaloniaToolbox',
                linkType: ProjectLinkType.github,
            }
        ],
    },
    {
        name: 'XamarinSocketClient',
        description: 'Xamarin application that receives string-values from server companion via socket connection.',
        technologies: ['C#', 'Xamarin', 'Android'],
        links: [
            {
                link: 'https://github.com/LFebruary/XamarinSocketClient',
                linkType: ProjectLinkType.github,
            }
        ],
    }
];

export default projects;