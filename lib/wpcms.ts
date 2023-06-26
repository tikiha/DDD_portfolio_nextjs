const API_URL = "http://xs746358.xsrv.jp/graphql";

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Check if the request was successful
  if (res.ok) {
    // Parse the result as JSON and return it
    const json = await res.json();
    return json.data;
  } else {
    // Throw an error if the request failed
    const error = new Error(`Failed to fetch API: ${res.statusText}`);
    throw error;
  }
}

// Usage
fetchAPI(
  `query PostListQuery {
  posts {
    edges {
      node {
        content
        date
        id
        link
        status
        title
        uri
      }
    }
  }
}`
)
  .then((data) => console.log(data.posts.edges))
  .catch((error) => console.error(error));
