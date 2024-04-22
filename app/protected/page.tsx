"use client";

import { useSession } from "next-auth/react";

function Protected() {
	const { data: session } = useSession();
}

export default Protected;
