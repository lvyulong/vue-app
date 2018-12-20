<template>
    <div>
        <mt-radio
                :title="title"
                v-model="result"
                :options="validOptions">
        </mt-radio>
    </div>
</template>

<script>
    export default {
        name: "my-radio",
        props:{
            options:{
                type:Array,
                required:true
            },
            label:{
                type:String,
                required:true
            },
            value:{
                type:String,
                required:true
            },
            title:String,
            model:String
        },
        computed:{
            // 做了一层转换，因为后端返回的数据key跟框架中指定的key不一致
            validOptions:function () {
                let options = [];
                var that = this;
                _.each(this.options,function (v,k) {
                    options.push({
                        label:v[that.label],
                        value:v[that.value]+''
                    })
                });
                return options;
            }
        },
        data(){
            return {
                result:''
            }
        },
        methods:{

        },
        watch:{
            result:function (n,o) {
                if (n){
                    this.$emit('update:model',n);
                }
            }
        }

    }
</script>

<style scoped>

</style>