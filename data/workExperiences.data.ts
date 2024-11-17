import { WorkExperience } from '@/interfaces/workExperience.interface';

const workExperiences: WorkExperience[] = [
    {
        startDate: new Date(2020, 6, 1),
        endDate: new Date(2022, 5, 31),
        companyName: 'Farsoft Solutions',
        languages: [
            {
                languageName: 'C#',
                frameworks: ['.NET WPF', 'Avalonia (Linux)', 'Xamarin', 'Ranorex', 'Class Library'],
            },
            {
                languageName: 'Kotlin',
                frameworks: ['Native Android', 'MVVM', 'Retrofit', 'OkHttp'],
            },
            {
                languageName: 'Dart',
                frameworks: ['Flutter Web', 'Dio'],
            },
            {
                languageName: 'Clarion',
                frameworks: ['Clarion', 'NetTalk'],
            },
            {
                languageName: 'Version control',
                frameworks: ['Git', 'SVN', 'TortoiseSVN'],
            },
            {
                languageName: 'Misc',
                frameworks: ['MySQL', 'UX & UI design', 'Trello', 'ZXing (Barcodes + QR)'],
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
                frameworks: ['.NET MVC', '.NET API', 'Blazor', 'Class Library'],
            },
            {
                languageName: 'Dart',
                frameworks: ['Flutter Mobile', 'Riverpod', 'Bloc'],
            },
            {
                languageName: 'JavaScript',
                frameworks: ['jQuery', 'AJAX', 'React Native'],
            },
            {
                languageName: 'Testing',
                frameworks: ['Unit testing', 'xUnit', 'flutter_test'],
            },
            {
                languageName: 'Misc',
                frameworks: ['CSS', 'HTML', 'SQL', 'Firebase', 'Azure', 'Git'],
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
                frameworks: ['.NET API', 'Class Library'],
            },
            {
                languageName: 'Typescript',
                frameworks: ['Angular'],
            },
            {
                languageName: 'Testing',
                frameworks: ['Unit testing', 'Integration testing', 'nUnit', 'Jasmine'],
            },
            {
                languageName: 'Misc',
                frameworks: ['SCSS', 'HTML', 'SQL', 'Azure', 'Git'],
            },
        ],
        companyDescription:
            'dotDigital Group PLC is a software-as-a-service technology company. The company provides software as an omnichannel service and managed services to digital marketing professionals.',
    },
];

workExperiences.sort((a, b) => b.startDate.getUTCFullYear() - a.startDate.getUTCFullYear());

export default workExperiences;
