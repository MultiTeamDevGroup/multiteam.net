<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['id'],
    methods: {
        async fetchUser(id: string) {
            const ref =  this.$fire.firestore.collection('dcusers').doc(id)
        }
    }
})
</script>