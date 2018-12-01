<template>
    <div>

    </div>
</template>
<script>
    import echarts from 'echarts';

    export default {
        name: "myChart",
        props: {
            config: {
                type: Object
            }
        },
        data() {
            return {
                myChart: null,
            };
        },
        created: function () {
            this.$nextTick(() => {
                this.myChart = echarts.init(this.$el);
            })
        },
        methods: {
            draw(config) {
                if (config) {
                    this.myChart.setOption(config);
                    // window.onresize = this.myChart.resize;
                } else {
                    this.$toast('图表缺少配置数据')
                }

            },
            // 生成option
            createOption(config) {
                var option = Object.assign({}, this.option);
                option.series[0].data[0].value = config.data.value[0];
                option.radar.indicator = config.data.indicator;
                return option;
            },
            // 雷达分析图
            createRadarCharts(data) {
                var chartsData = data;
                var option = {
                    radar: {
                        indicator: chartsData.indicator,
                        name: {
                            textStyle: {
                                color: '#222'
                            },
                            formatter: function (value, indicator) {
                                // 每行的字数
                                var count = 4;
                                var total = value.length;
                                // 倍数
                                var multiple = total / count;
                                if (multiple > 1) {
                                    // 多行
                                    var arr = [];
                                    for (var i = 0; i < multiple; i++) {
                                        arr.push(value.substr(i * count, count))
                                    }
                                    return arr.join('\n');
                                } else {
                                    // 单行
                                    return value;
                                }
                            }
                        },
                        nameGap: '10',
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(241, 245, 254, 1)',
                                    'rgba(233, 239, 255, 1)', 'rgba(217, 229, 255, 1)',
                                    'rgba(157, 188, 253, 1)', 'rgba(133, 171, 254, 1)'],
                                // shadowColor: 'rgba(0, 0, 0, 0.3)',
                                // shadowBlur: 10
                            }
                        },
                        shape: 'circle',
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        }
                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        data: [
                            {
                                value: chartsData.value[0],
                                name: '平均值',
                                label: {
                                    normal: {
                                        show: true,
                                        color: '#000',
                                        formatter: function (params) {
                                            return params.value.toFixed(1);
                                        },
                                        position: 'insideBottomRight'
                                    },

                                },
                                itemStyle: {
                                    normal: {
                                        color: '#000'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        color: '#000',
                                        type: 'solid',
                                        width: 1
                                    }
                                },

                            }
                        ]
                    }],
                    animation: false
                };
                this.myChart.setOption(option);
            }
        },
        watch: {
            'config': {
                handler: function (n, o) {
                    if (n && n != o) {
                        this.createRadarCharts(n.data);
                    }
                },
                deep: true
            }
        }


    };
</script>
<style lang="less" scoped>

</style>
