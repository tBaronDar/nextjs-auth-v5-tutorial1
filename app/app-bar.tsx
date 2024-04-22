import { auth, signIn, signOut } from "@/auth";
import React from "react";

import classes from "./app-bar.module.css";

async function AppBar() {
	const session = await auth();

	let content = (
		<form
			action={async () => {
				"use server";
				await signIn();
			}}>
			<button type="submit">Log In</button>
		</form>
	);

	if (session) {
		content = (
			<div>
				<p>{session.user?.name}</p>
				<form
					action={async () => {
						"use server";
						await signOut();
					}}>
					<button type="submit">Log Out</button>
				</form>
			</div>
		);
	}

	return (
		<div className={classes.container}>
			<div className={classes.inner}>{content}</div>
		</div>
	);
}

export default AppBar;
