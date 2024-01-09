import * as vscode from 'vscode';
import { Parser } from './parser';
import { Database } from './database';
import { PanelBuilder } from './panelBuilder';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('react-guide.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from React Guide!');
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand('react-guide.start_ext', () => {
			vscode.window.showInformationMessage('The extension is started :D');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('react-guide.show_panel', () => {
			const word = Parser.getCurrentWord(
				vscode.window.activeTextEditor?.document , vscode.window.activeTextEditor?.selection.active
			);
			PanelBuilder.buildPanel(word + " Guide", word, Database.getGuide(word, context), context);
		})
	);
}

export function deactivate() { }