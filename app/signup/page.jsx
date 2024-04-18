import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-content items-center mt-4 mx-auto h-[32rem]">
		<SignUp />
	</div>
  );
}
