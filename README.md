


### Refer to the videos below how my app exactly works:

**Success View**

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/tech-era-success-output.gif" alt="success view" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

<br/>

**Failure View**

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/tech-era-failure-output.gif" alt="failure view" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

<br/>

### Resources

<details>

<summary>Image URLs Used</summary>

- https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png alt should be **website logo**
- https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png alt should be **failure view**
- https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png alt should be **not found**

</details>

<details>

<summary>Colors Used</summary>

<br/>

<div style="background-color:#f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color:#1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color:#475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color:#ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color:#4656a1; width: 150px; padding: 10px; color: white">Hex: #4656a1</div>
<div style="background-color:#64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color:#e8e8e8; width: 150px; padding: 10px; color: black">Hex: #e8e8e8</div>

</details>

<details>

<summary>Font Used</summary>

- Roboto

</details>

### Completion Instructions

<details>

<summary>Functionality added</summary>

<br/>

The app consists of following functionalities

- The app is opened initially, Home Route should be displayed

- **Home Route**
  - When the Home Route is opened,
    - An HTTP GET request should be made to the **coursesApiUrl**
      - The _loader_ should be displayed while the HTTP request is fetching the data
      - If the HTTP GET request made is successful, then the list of courses received in response should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure view] should be displayed
        - When the **Retry** button is clicked, then an HTTP GET request should be made to **coursesApiUrl**
  - When a course is clicked, then the page should be navigated to the Course Item Details Route
- **Course Item Details Route**
  - When the Course Item Details Route is opened,
    - An HTTP GET request should be made to the **courseDetailsApiUrl** with the `id` as path parameter
      - The _loader_ should be displayed while the HTTP request is fetching the data
      - If the HTTP GET request made is successful, then the course details received in response should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure view] should be displayed
        - When the **Retry** button is clicked, then an HTTP GET request should be made to **courseDetailsApiUrl**
- **Not Found Route**
  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route
- When the **website logo** image is clicked, then the page should be navigated to the Home Route

</details>

