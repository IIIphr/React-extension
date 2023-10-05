// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Parser } from './parser';

class completionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return [new vscode.CompletionItem("label")];
	}
	resolveCompletionItem?(item: vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
		return new vscode.CompletionItem("label");
	}
}

class inlineCompletionProvider implements vscode.InlineCompletionItemProvider {
	provideInlineCompletionItems(document: vscode.TextDocument, position: vscode.Position, context: vscode.InlineCompletionContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.InlineCompletionItem[] | vscode.InlineCompletionList> {
		console.log(JSON.stringify(Parser.parse(document)));
		console.log(JSON.stringify(Parser.parse(document, position)));
		return [new vscode.InlineCompletionItem("Ah man")];
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "react-with-ai" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('react-with-ai.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from React With AI!');
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand('react-with-ai.start_ext', () => {
			vscode.window.showInformationMessage('The extension is started :D');
		})
	);

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			[{ scheme: 'file', language: 'javascript' }], new completionProvider(), '.', ',')
	);

	context.subscriptions.push(
		vscode.languages.registerInlineCompletionItemProvider(
			[{ scheme: 'file', language: 'javascript' }], new inlineCompletionProvider())
	);

	vscode.languages.registerHoverProvider('javascript', {
		provideHover(document, position, token) {
			return {
				contents: ['well xd']
			}
		}
	});
}

// This method is called when your extension is deactivated
export function deactivate() { }
