import React, { useEffect } from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { io } from 'socket.io-client';

function Editor() {
    useEffect(() => {
        const socket = io('localhost:4000', {
            transports: ['websocket', 'polling', 'flashsocket']
        });

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
        socket.on('set-text', (data) => {
            quill.setContents(JSON.parse(data));
        });

        /** listening to changes in the document
         * that is coming from our server
         */
        socket.on('updated-text', (data) => {
            if (!data) {
                return;
            }

            quill.updateContents(JSON.parse(data));
        });

        /**
         * On Text change publishing to our server
         * so that it can be broadcasted to all other clients
         */
        quill.on('text-change', function (delta, oldDelta, source) {
            if (source !== 'user') return;

            let text = quill.getContents().ops;

            socket.emit('update-text', text);
        });

        return () => socket.disconnect();
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