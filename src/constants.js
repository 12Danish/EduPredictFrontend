export const basicRequirements = [
  "File format: CSV or Excel (.xlsx)",
  "Maximum file size: 10MB",
  "First row should contain column headers",
  "Make sure there are no null or empty values",
];

export const columnRequirements = [
  {
    name: "Student Roll Number",
    description: "Unique identifier for each student",
    example: "S001, ST2023001, etc.",
  },
  {
    name: "Previous qualification (grade)",
    description: "Grade from previous degree (normalized 0-1)",
    example: "0.927 (for 1020/1100)",
  },
  {
    name: "Admission grade",
    description: "Grade from admission test (normalized 0-1)",
    example: "0.75 (for 150/200)",
  },
  {
    name: "Curricular units 1st sem (approved)",
    description: "Number of courses passed in first semester",
    example: "6, 5, 7",
  },
  {
    name: "Curricular units 2nd sem (approved)",
    description: "Number of courses passed in second semester",
    example: "5, 6, 4",
  },
  {
    name: "Curricular units 1st sem (grade)",
    description: "Average grade in first semester (normalized 0-1)",
    example: "0.70 (for 3.5/5.0)",
  },
  {
    name: "Curricular units 2nd sem (grade)",
    description: "Average grade in second semester (normalized 0-1)",
    example: "0.75 (for 3.75/5.0)",
  },
  {
    name: "Age at enrollment",
    description: "Student's age when they enrolled",
    example: "18, 19, 20",
  },
  {
    name: "Tuition fees up to date",
    description: "Whether fees are paid on time (0=No, 1=Yes)",
    example: "1 for Yes, 0 for No",
  },
];

export const sampleData = [
  {
    "Student Roll Number": "S001",
    "Previous qualification (grade)": 0.927, // 1020/1100
    "Admission grade": 0.75, // 150/200
    "Curricular units 1st sem (approved)": 6,
    "Curricular units 2nd sem (approved)": 5,
    "Curricular units 1st sem (grade)": 0.7, // 3.5/5
    "Curricular units 2nd sem (grade)": 0.75, // 3.75/5
    "Age at enrollment": 19,
    "Tuition fees up to date": 1,
  },
  {
    "Student Roll Number": "S002",
    "Previous qualification (grade)": 0.845, // 930/1100
    "Admission grade": 0.8, // 160/200
    "Curricular units 1st sem (approved)": 5,
    "Curricular units 2nd sem (approved)": 6,
    "Curricular units 1st sem (grade)": 0.68, // 3.4/5
    "Curricular units 2nd sem (grade)": 0.82, // 4.1/5
    "Age at enrollment": 20,
    "Tuition fees up to date": 0,
  },
];
