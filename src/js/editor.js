import { GoldenLayout } from '../../node_modules/golden-layout/dist/esm/index.js';
const config = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [{
            type: 'column',
            content: [{
                type: 'component',
                componentName: '题目',
                componentState: { label: 'B' }
            }, {
                type: 'component',
                componentName: '终端',
                componentState: { label: 'C' }
            }]
        }, {
            type: 'column',
            content: [{
                type: 'component',
                componentName: '编辑器',
                componentState: { label: 'B' }
            }, {
                type: 'component',
                componentName: '预览',
                componentState: { label: 'C' }
            }]
        }]
    }]
};
const myLayout = new GoldenLayout(config);
myLayout.registerComponent('题目', function(container, componentState) {
    container.getElement().appendChild(questionElement);
});
myLayout.registerComponent('终端', function(container, componentState) {
    container.getElement().appendChild(terminalElement);
});
myLayout.registerComponent('编辑器', function(container, componentState) {
    container.getElement().appendChild(editorElement);
});
myLayout.registerComponent('预览', function(container, componentState) {
    console.log(container.getElement());
});
myLayout.init();
