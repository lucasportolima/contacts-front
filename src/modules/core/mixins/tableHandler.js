import { debounce, pickBy, identity } from "lodash";

export default {
    data: () => ({
        tableInfo: {
            currentPage: 1,
            itemCount: null,
            itemsPerPage: 10,
            totalItems: null,
            totalPages: null,
            limit: 10
        },

        filters: {},

        filterPristine: true
    }),
    watch: {
        "tableInfo.currentPage": function() {
            this.updateData();
        },
        "tableInfo.limit": function() {
            this.updateData();
        }
    },
    mounted() {
        if (typeof this.updateData !== "function") {
            throw new Error(
                "Use of TableHandler mixin MUST implement updateData method"
            );
        }
    },
    created() {
        this.setFilterDebounced = debounce(async function(key, value) {
            this.filterPristine = false;
            this.filters[key] = value;
            this.updateData();
        }, 800);
    },
    methods: {
        initFilter(key, value) {
            this.filters[key] = value;
        },
        setFilter(key, value) {
            this.filterPristine = false;
            this.filters[key] = value;
            this.filters = pickBy(this.filters, identity);
            this.updateData();
        },
        clearFilter(key) {
            this.filterPristine = false;
            this.filters[key] = "";
            this.updateData();
        },
        setMultipleFilters(filters) {
            this.filterPristine = false;
            this.filters = {
                ...this.filters,
                ...filters
            };
            this.filters = pickBy(this.filters, identity);
            this.updateData();
        },
        setTableInfo(meta) {
            this.tableInfo = {
                ...this.tableInfo,
                ...meta
            };
        },
        getPayloadData() {
            return {
                ...pickBy(this.filters, identity),
                page: this.tableInfo.currentPage,
                limit: this.tableInfo.limit
            };
        }
    }
};
