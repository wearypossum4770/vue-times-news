<template> 
<div> 

    {{news}}

    <!-- <pre>
        {{JSON.stringfy(data, null,2)}}
    </pre> -->

</div> 
</template> 
 
 
<script> 
import data from '@/assets/data/news.json';


export default { 
name: 'NewsList', 

data(){
    return {
        news: data,
    }
}
}; 
</script> 


<style scoped> 
</style> 