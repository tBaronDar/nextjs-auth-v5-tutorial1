"use client";

import { useSession } from "next-auth/react";

function Protected() {
	const { data: session } = useSession();

	if (!session || !session.user) {
		return <p style={{ color: "red" }}>Sgn in to see this page.</p>;
	}

	return <p>This page is protected.</p>;
}

export default Protected;
