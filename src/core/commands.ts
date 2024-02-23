import * as vscode from 'vscode';
import { convertSvgToBase64 } from './convert';

export default [
  vscode.commands.registerCommand(
    'convertSvgToBase64.base64',
    convertSvgToBase64
  ),
];
