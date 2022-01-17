<template>
    <div style="text-align: center">
        <h1>Error!</h1>
        {{ error.message }}<br>
        {{ error.statusCode }}
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: 'BIG PROBLEMS!',
        }
    },
    props: {
        error: {
            type: Object,
            required: true,
        }
    }
    
}
</script>