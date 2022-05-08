// abstracts away HTTP fetching mechanism

// this is making data not break
export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    // what you're sending to the server
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error("Invalid request");
    }
    return res.json();
  });
}
