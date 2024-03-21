import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

function createFilters(imageLab, filters) {
    const buttons = {
        template: `
        <div class="m-1 p-1 border rounded">
            <div>Filtros:</div>
            <hr class="mb-1">
            <div class="flex items-center gap-2">
                <button @click="btnClick(filter)" v-for="(filter,index) in filters" class="bg-gray-600 text-white px-1 rounded hover:bg-gray-400">
                    {{ filter.label }}
                </button>
            </div>
        </div>
        `,
        data: () => {
            return {
                filters: []
            }
        },
        mounted() {
            console.log('filters',filters);
            this.filters = filters
        },
        methods: {

            btnClick(filter) {
                console.log('filter',filter);
                filter.method(imageLab)
            }
        }
    }
    
    createApp(buttons).mount('#buttons')    
}

export default createFilters
