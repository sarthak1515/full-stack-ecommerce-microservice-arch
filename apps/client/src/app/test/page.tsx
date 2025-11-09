import { auth } from "@clerk/nextjs/server";

// Just for testing authentication
async function TestPage() {
  const { getToken } = await auth();
  const res = await fetch("http://127.0.0.1:8002/test", {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return <div>page</div>;
}

export default TestPage;
