import { bundleWorker } from './buildWorker.mjs';
import { Format } from 'esbuild';

// iife script workers
let format = 'iife' as Format;
const promises = [] as Array<Promise<void>>;
promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/editor/editor.worker.js',
    './dist/workers/editorWorker-iife.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
    './dist/workers/tsWorker-iife.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
    './dist/workers/htmlWorker-iife.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
    './dist/workers/cssWorker-iife.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
    './dist/workers/jsonWorker-iife.js'
));

// ecma script workers
format = 'esm';
promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/editor/editor.worker.js',
    './dist/workers/editorWorker-es.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js',
    './dist/workers/tsWorker-es.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/html/html.worker.js',
    './dist/workers/htmlWorker-es.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/css/css.worker.js',
    './dist/workers/cssWorker-es.js'
));

promises.push(bundleWorker(
    format,
    './node_modules/monaco-editor/esm/vs/language/json/json.worker.js',
    './dist/workers/jsonWorker-es.js'
));

await Promise.all(promises)
    .then(() => console.log('Successfully created all workers'))
    .catch(e => console.error(e));
