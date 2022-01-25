<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        id: String,

    },
    data() {
        return {
            loading: true,
            user: {
                avatarURL: null,
                display_name: null,
                roles: [],
                backgroundImage: false,
                backgroundColor: '#FFF',
                tag: '#0000',
                username: 'Loading...'
            }
        }
    },
    async created() {
        console.log('call fetch')
        await this.fetchUser(this.id)
    },
    methods: {
        async fetchUser(id: string) {
            const ref = this.$fire.firestore.collection('users').doc(id);
            const doc = await ref.get();
            this.user.avatarURL = doc.data()?.user.avatar ? doc.data()?.user.avatar : null;
            this.user.roles = doc.data()?.roles || []
            this.user.username = doc.data()?.user.username
            this.user.tag = doc.data()?.user.tag
            console.log(doc.data())
        }
    }
})
</script>