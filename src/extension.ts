import * as vscode from 'vscode';
import { Parser } from './parser';
import { Database } from './database';
import { PanelBuilder } from './panelBuilder';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('react-guide.start_ext', () => {
			vscode.window.showInformationMessage('The extension is started :D');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('react-guide.show_panel_en', () => {
			const word = Parser.getCurrentWord(
				vscode.window.activeTextEditor?.document , vscode.window.activeTextEditor?.selection.active
			);
			PanelBuilder.buildPanel(word + " Guide", Database.getGuide(word, context, "en"), context);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('react-guide.show_panel_fa', () => {
			const word = Parser.getCurrentWord(
				vscode.window.activeTextEditor?.document , vscode.window.activeTextEditor?.selection.active
			);
			PanelBuilder.buildPanel("راهنمای " + word, Database.getGuide(word, context, "fa"), context);
		})
	);
}

export function deactivate() { }