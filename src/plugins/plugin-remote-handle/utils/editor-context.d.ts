/// <reference types="react" />
import { Project, Setters } from '@alilc/lowcode-shell';
import Logger from 'zen-logger';
interface IEditorContext {
    project?: Project;
    logger?: Logger;
    setters?: Setters | null;
}
export declare const EditorContext: import("react").Context<IEditorContext>;
export {};
