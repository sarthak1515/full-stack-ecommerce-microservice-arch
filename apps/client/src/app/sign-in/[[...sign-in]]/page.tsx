import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex mt-4 justify-center">
      <SignIn />
    </div>
  );
}
