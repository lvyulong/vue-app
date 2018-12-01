<template>
    <div class="btn" @mousedown="enter" @mouseup="leave" @click="handleClick">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'btn',
        props: ['plain', 'theme'],
        data() {
            return {};
        },
        methods: {
            enter() {
                this.$el.style.opacity = 0.5;
            },
            leave() {
                this.$el.style.opacity = 1;
            },
            handleClick(e){
                this.$emit('click',e);
            }
        },
        created: function () {
        },
        mounted: function () {
            // 幽灵模式
            if (this.plain) {
                this.$el.style.color = this.theme || 'gray';
                this.$el.style.borderColor = this.theme || 'gray';
            } else {
                this.$el.style.backgroundColor = this.theme || 'gray';
                this.$el.style.borderColor = this.theme || 'gray';
                this.$el.style.color = 'white';
            }
        }
    };
</script>
<style lang="less" scoped>
    .btn {
        display: inline-block;
        border-width: 1px;
        border-color: gray;
        border-style: solid;
        padding: 3px 2rem;
        border-radius: 2rem;
        color: gray;
    }

</style>
