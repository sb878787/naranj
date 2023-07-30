<template>
    <div class="container" id="people">
        <div class="filter">
            <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
            <label><input type="radio" v-model="selectedCategory" value="Tech" /> Tech</label>
            <label><input type="radio" v-model="selectedCategory" value="Entertainment" /> Entertainment</label>
            <label><input type="radio" v-model="selectedCategory" value="Fictional" /> Fictional</label>
        </div>
        
        <ul class="people-list">
            <li v-for="person in filteredPeople">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: {
            people: [
                { name: "Bill Gates", category: "Tech" },
                { name: "Steve Jobs", category: "Tech" },
                { name: "Jeff Bezos", category: "Tech" },
                { name: "George Clooney", category: "Entertainment" },
                { name: "Meryl Streep", category: "Entertainment" },
                { name: "Amy Poehler", category: "Entertainment" },
                { name: "Lady of Lórien", category: "Fictional" },
                { name: "BB8", category: "Fictional" },
                { name: "Michael Scott", category: "Fictional" }
            ],
            selectedCategory: "All"
        },
        computed: {
            filteredPeople(: function()) {
                var vm = this;
                var category = vm.selectedCategory;
                
                if(category === "All") {
                    return vm.people;
                } else {
                    return vm.people.filter(function(person) {
                        return person.category === category;
                    });
                }
            }
        }
    }
</script>

<style>
    .container {
        padding: 20px;
        width: 90%;
        max-width: 400px;
        margin: 0 auto;
    }

    label {
        display: block;
        line-height: 1.5em;
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        list-style: none;
    }

    li {
        padding: 8px 16px;
        border-bottom: 1px solid #eee;
    }
</style>