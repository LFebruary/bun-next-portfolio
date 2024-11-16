import { WorkExperience } from '@/interfaces/workExperience.interface';

const workExperiences: WorkExperience[] = [
    {
        startDate: new Date(2020, 6, 1),
        endDate: new Date(2022, 5, 31),
        companyName: 'Farsoft Solutions',
        languages: [
            {
                languageName: 'C#',
                frameworks: ['WPF', 'Avalonia (Linux)', 'Xamarin', 'Ranorex'],
            },
            {
                languageName: 'Kotlin',
                frameworks: ['Native Android'],
            },
            {
                languageName: 'Dart',
                frameworks: ['Flutter Web'],
            },
        ],
        companyDescription:
            'Farsoft develops and supports information systems for the fresh produce industry, focusing largely on international fruit exports.',
    },
    {
        startDate: new Date(2022, 5, 1),
        endDate: new Date(2024, 5, 31),
        companyName: 'Mediclinic',
        languages: [
            {
                languageName: 'C#',
                frameworks: ['.NET MVC', '.NET API', 'Blazor'],
            },
            {
                languageName: 'Dart',
                frameworks: ['Flutter Mobile'],
            },
            {
                languageName: 'JavaScript',
                frameworks: ['jQuery', 'AJAX'],
            },
        ],
        companyDescription:
            'Mediclinic Southern Africa operates a range of multi-disciplinary acute care private hospitals in South Africa and Namibia and focuses on providing value to our patients through safe, quality care in a patient friendly environment.',
    },
    {
        startDate: new Date(2024, 5, 1),
        companyName: 'DotDigital',
        languages: [
            {
                languageName: 'C#',
                frameworks: ['.NET API', 'NUnit'],
            },
            {
                languageName: 'Typescript',
                frameworks: ['Angular'],
            },
        ],
        companyDescription:
            'dotDigital Group PLC is a software-as-a-service technology company. The company provides software as an omnichannel service and managed services to digital marketing professionals.',
    },
];

workExperiences.sort((a, b) => b.startDate.getUTCFullYear() - a.startDate.getUTCFullYear());

export default workExperiences;
