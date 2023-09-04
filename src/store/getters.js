export default {
    // BlogPost : (state) => {
    //     return state.BlogPosts;
    // },
    // timeBlog : (state) => {
    //     const data = state.BlogPosts.filter((BlogPost) => {
    //         return BlogPost.time === "20"
    //     })
    //     return data;
    // },
    BlogId : (state) => (id) => {
        return state.BlogPosts.find(item => item.id === id)
    }
}