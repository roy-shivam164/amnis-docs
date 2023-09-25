---
sidebar_position: 2
---

# Query Builder

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->

The **Query Builder** is used to Generate different queries to get the desired list so that they can be further used while creating campaigns to schedule them.

Here, you can filter the list of users for campaigns and make queries as per required.

## Features

<ol>
<li>Create Queries based on multiple tables joins having multiple conditions as well.</li>
<li>List down all the previous Queries that have been made so far and saved them in DB in Saved Queries Section.</li>
<li>Provides the result of the Query that the user creates.</li>
<li>Users also have the option to Toggle the Query that has been created using Preview Query Button below SQL Execution Result.</li>
</ol>

### Sub-Features

<ol>
<h3><li>SQL Execution Result</li></h3>
  <ul>
    <li>
    Provides option for downloading query results in CSV format.
    </li>
    <li>
    User can copy the created Query using copy icon
    </li>
    <li>
      User can save the Query in the Database
    </li>

  </ul>
<br></br>
  <h3><li>Saved Queries</li></h3>
  <ul>
    <li>
    Here, all the queries that have been created earlier and saved using the save option, are listed in the form of cards.
    </li>
    <li>
    Each saved Query card represents the saved query, which the user can RUN, COPY, DELETE, and EDIT based on interests.
    </li>
    <li>
      Also have a paginator for cases when there are too many queries and does not fit on one screen.
    </li>

  </ul>
</ol>

![Example banner](./assets/docusaurus-asset-example-banner.png)

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
