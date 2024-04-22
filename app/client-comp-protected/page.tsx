"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function ClientProtected() {
	const { data: session } = useSession();
	const router = useRouter();

	if (!session || !session.user) {
		router.push("/");
		return <p style={{ color: "red" }}>Sgn in to see this page.</p>;
	}

	return <p>This page is protected.</p>;
}

export default ClientProtected;
