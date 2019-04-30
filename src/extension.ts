// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { configure } from './configureWorkspace/configure';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export 	async function activate(context: vscode.ExtensionContext): Promise<void> {

	context.subscriptions.push(
		vscode.commands.registerCommand('robot.configureExpressServer', configure)
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
