import React, { useEffect } from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import Sharedb from 'sharedb/lib/client';
import richText from 'rich-text';

function Editor() {
    // Registering the rich text type to make sharedb work
    // with our quill editor
    Sharedb.types.register(richText.type);

    // Connecting to our socket server
    const socket = new WebSocket('ws://127.0.0.1:8080');
    const connection = new Sharedb.Connection(socket);

    // Querying for our document
    const doc = connection.get('documents', 'firstDocument');

    useEffect(() => {
        doc.subscribe(function (err) {
            if (err) throw err;

            const options = {
                theme: 'snow',
                modules: {
                toolbar: '#toolbar'
                },
            };
            let quill = new Quill('#editor', options);
            /**
             * On Initialising if data is present in server
             * Updaing its content to editor
             */
            quill.setContents(doc.data);

            /**
             * On Text change publishing to our server
             * so that it can be broadcasted to all other clients
             */
            quill.on('text-change', function (delta, oldDelta, source) {
                if (source !== 'user') return;
                doc.submitOp(delta, { source: quill });
            });

            /** listening to changes in the document
             * that is coming from our server
             */
            doc.on('op', function (op, source) {
                if (source === quill) return;
                quill.updateContents(op);
            });
        });

        return () => {
            connection.close();
        };
    }, []);
    
    return (
        <div>
            <div id="toolbar">
                <span class="ql-formats">
                    <select class="ql-font"></select>
                    <select class="ql-size"></select>
                </span>
                <span class="ql-formats">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                    <button class="ql-underline"></button>
                    <button class="ql-strike"></button>
                </span>
                <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                </span>
                <span class="ql-formats">
                    <button class="ql-script" value="sub"></button>
                    <button class="ql-script" value="super"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-header" value="1"></button>
                    <button class="ql-header" value="2"></button>
                    <button class="ql-blockquote"></button>
                    <button class="ql-code-block"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                    <button class="ql-indent" value="-1"></button>
                    <button class="ql-indent" value="+1"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-link"></button>
                    <button class="ql-image"></button>
                    <button class="ql-video"></button>
                    <button class="ql-formula"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-clean"></button>
                </span>
            </div>
            <div id="editor"></div>
        </div>
    )
}

export default Editor;