<template> 
<div> 

    <pre>
        {{JSON.stringfy(data, null,2)}}
    </pre>

</div> 
</template> 
 
 
<script> 
import data from '@/src/assets/data/news.json'

export default { 
name: 'news-list', 
}; 
</script> 


<style scoped> 
</style> 