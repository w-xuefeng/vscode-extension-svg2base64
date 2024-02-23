import * as vscode from 'vscode';
import { base64Prefix, base64ToSvgWrapped, svgToBase64 } from './transform';

export function convertSvgToBase64() {
  const editor = vscode.window.activeTextEditor;
  if (editor && editor.document.languageId === 'svg') {
    const svgContent = editor.document.getText();
    if (svgContent.startsWith('<svg p-id="from-svg2base64">')) {
      vscode.window.showWarningMessage('This SVG file has been converted.');
      return;
    }
    const base64Content = svgContent.startsWith(base64Prefix)
      ? base64ToSvgWrapped(svgContent)
      : svgToBase64(svgContent);
    const fullRange = new vscode.Range(
      new vscode.Position(0, 0),
      new vscode.Position(editor.document.lineCount, 0)
    );
    editor.edit((editBuilder) => {
      editBuilder.replace(fullRange, base64Content);
    });
  } else {
    vscode.window.showWarningMessage('Open an SVG file to convert to base64.');
  }
}
