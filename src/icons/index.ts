
import { Plugin } from "vite";

export function createSvgLoaderPlugin(): Plugin {
    return {
        name: 'svg-loader',
        transform(src, id) {
            if(id.endsWith('.svg')) {
                const filePath = id.replace(/^.+\/svg\//,'');
                const componentName = `${filePath.replace(/[^\w-]/g,'-')}-icon`;
                const componentCode = `
                import {defineComponent, h} from 'vue';
                export default defineComponent({
                    name: '${componentName}',
                    render() {
                        return ${JSON.stringify(`<svg><use xlink:href="/assets/${filePath}#${componentName}"></use></svg>`)}
                    }
                });
                `;
                return {
                    code: componentCode,
                    map: null,
                }
            }
        }
    }
}