import * as vscode from 'vscode';
import commands from './core/commands';

export function activate(context: vscode.ExtensionContext) {
  commands.forEach((command) => context.subscriptions.push(command));
}

export function deactivate() {}
