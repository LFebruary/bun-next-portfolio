import { WorkExperience } from "@/interfaces/workExperience.interface";

const workExperiences: WorkExperience[] = [
  {
    companyDescription:
      "Farsoft develops and supports information systems for the fresh produce industry, focusing largely on international fruit exports.",
    companyName: "Farsoft Solutions",
    endDate: new Date(2022, 5, 31),
    languages: [
      {
        frameworks: [
          ".NET WPF",
          "Avalonia (Linux)",
          "Xamarin",
          "Ranorex",
          "Class Library",
        ],
        languageName: "C#",
      },
      {
        frameworks: ["Native Android", "MVVM", "Retrofit", "OkHttp"],
        languageName: "Kotlin",
      },
      {
        frameworks: ["Flutter Web", "Dio"],
        languageName: "Dart",
      },
      {
        frameworks: ["Clarion", "NetTalk"],
        languageName: "Clarion",
      },
      {
        frameworks: ["Git", "SVN", "TortoiseSVN"],
        languageName: "Version control",
      },
      {
        frameworks: [
          "MySQL",
          "UX & UI design",
          "Trello",
          "ZXing (Barcodes + QR)",
        ],
        languageName: "Misc",
      },
    ],
    startDate: new Date(2020, 6, 1),
  },
  {
    companyDescription:
      "Mediclinic Southern Africa operates a range of multi-disciplinary acute care private hospitals in South Africa and Namibia and focuses on providing value to our patients through safe, quality care in a patient friendly environment.",
    companyName: "Mediclinic",
    endDate: new Date(2024, 5, 31),
    languages: [
      {
        frameworks: [".NET MVC", ".NET API", "Blazor", "Class Library"],
        languageName: "C#",
      },
      {
        frameworks: ["Flutter Mobile", "Riverpod", "Bloc"],
        languageName: "Dart",
      },
      {
        frameworks: ["jQuery", "AJAX", "React Native"],
        languageName: "JavaScript",
      },
      {
        frameworks: ["Unit testing", "xUnit", "flutter_test"],
        languageName: "Testing",
      },
      {
        frameworks: ["CSS", "HTML", "SQL", "Firebase", "Azure", "Git"],
        languageName: "Misc",
      },
    ],
    startDate: new Date(2022, 5, 1),
  },
  {
    companyDescription:
      "dotDigital Group PLC is a software-as-a-service technology company. The company provides software as an omnichannel service and managed services to digital marketing professionals.",
    companyName: "DotDigital",
    languages: [
      {
        frameworks: [".NET API", "Class Library"],
        languageName: "C#",
      },
      {
        frameworks: ["Angular"],
        languageName: "Typescript",
      },
      {
        frameworks: ["Unit testing", "nUnit"],
        languageName: "Testing",
      },
      {
        frameworks: ["SCSS", "HTML", "SQL", "Azure", "Git"],
        languageName: "Misc",
      },
    ],
    startDate: new Date(2024, 5, 1),
  },
];

workExperiences.sort(
  (a, b) => b.startDate.getUTCFullYear() - a.startDate.getUTCFullYear(),
);

export default workExperiences;
