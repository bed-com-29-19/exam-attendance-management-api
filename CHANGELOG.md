### Changelog

#### Version 1.0.0 (December 9, 2023)

- **Added:**

  - Initial project setup using Expo.
  - Implemented a `LoginScreen` component.
  - Integrated `@react-navigation/stack` for navigation.
  - Created a `CourseSelectionScreen` for invigilators to select courses.
  - Implemented `CourseCard` component for displaying course information.
  - Developed a `ScanScreen` for scanning students' IDs using `expo-barcode-scanner`.
  - Created a `ScanCompleteScreen` for successful scan details display.
  - Added a button in `ScanCompleteScreen` to navigate to the `SummaryScreen`.
  - Implemented a placeholder `SummaryScreen` component.
  - Created an `UnsuccessfulScanScreen` for handling unsuccessful scans.

- **Changed:**

  - Updated the `App.js` file to include new screens and navigation routes.

- **Fixed:**
  - Resolved the "expo-barcode-scanner module not found" issue.

#### Version 1.0.1 (December 9, 2023)

- **Fixed:**
  - Resolved a bug in `ScanScreen` that caused the screen not to reset after a successful scan.

#### Version 1.1.0 (January 5, 2024)

- **Added:**
  - Implemented the `ExamDetailsScreen` to display exam information.
  - Passed the selected course information through screens for better tracking.
  - Enhanced the `ScanScreen` to carry selected course details during the scan process.

#### Version 1.1.1 (January 10, 2024)

- **Fixed:**
  - Addressed a styling issue in the `ExamDetailsScreen` for better user experience.

#### Version 1.2.0 (February 2, 2024)

- **Added:**
  - Improved data flow between screens for more efficient navigation.
  - Enhanced the `SummaryScreen` to display a comprehensive summary of scanned students.
  - Introduced a button in `ExamDetailsScreen` to submit exam details to Google Sheets.

#### Version 1.2.1 (February 5, 2024)

- **Fixed:**
  - Resolved a minor issue related to the submission of exam details.

#### Future Plans and Roadmap:

- **Version 1.3.0 (March 1, 2024)**

  - **Added:**
    - Counter to track the number of students scanned.
    - Counter to track the number of students not scanned.
    - View counters in the `SummaryScreen`.
    - Integration with an external API for enhanced data management.
  - **Improved:**
    - User interface for a more intuitive experience.

- **Version 1.4.0 (April 1, 2024)**

  - **Added:**
    - Connectivity to Google Sheets for real-time data updates.
    - Default login credentials for invigilators.
    - Default login credentials for passing students and course details.
  - **Improved:**
    - Security features for login functionality.

- **Version 1.5.0 (May 1, 2024)**
  - **Added:**
    - Advanced reporting features for detailed analysis.
    - Additional customization options for exam settings.
  - **Improved:**
    - Performance optimization for smoother app operation.

### Versioning Explanation

Note for Users:
After updating to each version, please remember to execute the following commands on your local machine:

- `git pull` to fetch the latest changes from the repository.
- `npm install` to update project dependencies.
