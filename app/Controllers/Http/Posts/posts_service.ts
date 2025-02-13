import PostQuery from "./posts_query.js";

export default class PostService{
    public postQuery: PostQuery;
    constructor(){
        this.postQuery = new PostQuery();
    }

    public async getPost(){
        return await this.postQuery.getPost();
    }
    public async getPostById(post_id: number){
        return await this.postQuery.getPostById(post_id);
    }
    public async createPost(payload: {user_id: number, content: string}){
        await this.postQuery.createPost(payload);
        return 'Created new post successfully';
    }
    public async deletePost(user_id: number, post_id: number){
        const post = await this.postQuery.getPostById(post_id);
        if (!post) {
            return 'Post not found'; 
        }
        if (post.user_id !== user_id) {
            return 'Unauthorized: You can only delete your own posts';
        }
        await this.postQuery.deletePost(post_id);
        return 'Post deleted successfully';
    }
    public async updatePost(user_id: number, post_id: number, payload: {content: string}){
        const post = await this.postQuery.getPostById(post_id);
        if (!post) {
            return 'Post not found'; 
        }
        if (post.user_id !== user_id) {
            return 'Unauthorized: You can only update your own posts';
        }
        await this.postQuery.updatePost(post_id, payload);
        return 'Post updated successfully';
    }

    public async postsWithEverything(){
        return this.postQuery.postsWithEverything();
    }
}