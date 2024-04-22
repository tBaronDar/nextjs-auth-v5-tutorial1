import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function ServerProtected() {
	const session = await auth();

	if (!session || !session.user) {
		redirect("/");
		return <p style={{ color: "red" }}>Sgn in to see this page.</p>;
	}

	return <p>This content showed be seen if logged in.</p>;
}

export default ServerProtected;
