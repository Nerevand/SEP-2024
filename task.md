# **User Data Dashboard**

## **Objective**

Create a simple web application that uses the JSONPlaceholder API to display user data. The main page will feature a table of users, and clicking on a row in the table will open a new page with detailed information about the selected user.

## **Requirements**

### **1. Main Page: User Table**

- Create a main page that fetches data from the JSONPlaceholder API's `/users` endpoint:
  - **API Endpoint**: `https://jsonplaceholder.typicode.com/users`
- Display the fetched user data in a table format.
  - **Columns to Display**:
    - `ID`
    - `Name`
    - `Username`
    - `Email`
    - `Company Name`
- Each row in the table should be clickable. Clicking a row should navigate to a new page showing detailed information about the selected user.

### **2. User Details Page**

- Create a second page that displays detailed information about the selected user.
- Fetch additional user information using the user’s `ID`.
- Display the following details:
  - **Name**
  - **Username**
  - **Email**
  - **Phone**
  - **Website**
  - **Company Name**
  - **Address** (including street, suite, city, and zipcode)
- Include a "Back" button to navigate back to the main page.

## **Additional Requirements**

- Use a clean and minimalistic design.
- Implement error handling for API requests (e.g., show a user-friendly error message if data loading fails).
- Show a loading indicator while data is being fetched.

## **Bonus Features (Optional)**

- Implement pagination for the user table if the data set is large.
- Add search/filter functionality on the main page to search users by name or username.
- Use React Router (or a similar routing solution) for page navigation.
- Use a CSS framework like Bootstrap, Tailwind, or Material UI to style the application.

## **Technical Requirements**

- Use `Axios` to handle API requests.
- Implement routing for navigation between the main page and user details page.

## **Deliverables**

- A GitHub repository containing the project source code.
- A README file with instructions on how to run the project locally.

## **Resources**

- [JSONPlaceholder API Documentation](https://jsonplaceholder.typicode.com/)
