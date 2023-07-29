const { createApp } = Vue


createApp({
    data() {
        return {
            todo_text: '',
            todos: 
            [
                { text: 'membuat bom atom', completed: false},
                { text: 'pergi haji bila mampu', completed: false},
                { text: 'iisma', completed: true},
                { text: 'meneliti senyawa nukir', completed: false},
                { text: 'membangun rumah pohon', completed: false},
                { text: 'data science', completed: false},
            ],
        }
    },
    computed: {
        remaining() {
            return this.todos.filter(todo => !todo.completed).length
        },
        completed() {
            return this.todos.filter(todo => todo.completed).length
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                text: this.todo_text,
                completed: false
            })
            this.todo_text=''
        },
        markCompleted(index) {
            this.todos[index].completed = true
        },
        markInCompleted(index) {
            this.todos[index].completed = false
        },
        removeTodo(index) {
            this.todos.splice(index, 1) = false
        }
    },
}).mount('#app');