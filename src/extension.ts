import * as vscode from 'vscode';
import 'isomorphic-fetch';
import { Client } from "@microsoft/microsoft-graph-client";
import { TodoTaskList } from '@microsoft/microsoft-graph-types';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
	const session = await vscode.authentication.getSession('microsoft', ['Tasks.ReadWrite'], { createIfNone: true });

	const client = Client.init({
		authProvider: (done) => {
			done(undefined, session.accessToken);
		}
	});

	const res = await client.api('/me/todo/lists').get() as { '@odata.nextLink': string | null | undefined; value: TodoTaskList[] };
	res.value.map((v) => vscode.window.showInformationMessage(v.displayName || ""));
}

export function deactivate() {}
