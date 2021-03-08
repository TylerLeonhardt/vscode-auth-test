import * as vscode from 'vscode';
import 'isomorphic-fetch';
import { Client } from "@microsoft/microsoft-graph-client";
import { TodoTaskList } from '@microsoft/microsoft-graph-types';

export async function activate(context: vscode.ExtensionContext): Promise<void> {

	console.log('HERE WE GO!');
	vscode.extensions.onDidChange(() => {
		vscode.window.showInformationMessage('extensions changed!');
	});

	// const session = await vscode.authentication.getSession('microsoft', ['Tasks.ReadWrite'], { createIfNone: true });

	// const client = Client.init({
	// 	authProvider: (done) => {
	// 		done(undefined, session.accessToken);
	// 	}
	// });

	// try {
	// 	const res = await client.api('/me/todo/lists').get() as { '@odata.nextLink': string | null | undefined; value: TodoTaskList[] };
	// 	res.value.map((v) => vscode.window.showInformationMessage(v.displayName || ""));
	// } catch(e) {
	// 	await vscode.window.showErrorMessage(e.body);
	// }
}

export function deactivate() {}
