import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-content items-center mt-4 mx-auto ">
		<UserProfile />
	</div>
  );
}
