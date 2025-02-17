
import BlogService from './blog_service.js'
import { BlogCreateVAlidation, GetFavourites, GetLikes, UpdateLikeValidation } from './blog_validator.js'

export default class BlogController {
  public blogService: BlogService
  constructor() {
    this.blogService = new BlogService()
  }

  public async getBlogByUserId({ request, response }: { request: any; response: any }) {
    const user_id = request.all().user_id
    const blogs = await this.blogService.getBlogByUserId(user_id)
    return response.status(200).json(blogs)
  }
  public async getBlogByBlogId({ request, response }: { request: any; response: any }) {
    const blog_id = request.all().id;
    const blog = await this.blogService.getBlogByBlogId(blog_id)
    return response.status(200).json(blog)
  }

  public async deleteBlog({ request, response }: { request: any; response: any }) {
    try {
      const blog_id = request.all().id
      await this.blogService.deleteBlog(blog_id)
      return response.status(200).json({ message: 'Blog Deleted successfully' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
  public async createBlog({ request, response }: { request: any; response: any }) {
    try {
      const payload = await request.validateUsing(BlogCreateVAlidation)
      await this.blogService.createBlog(payload)
      return response.status(200).json({ message: 'New blog created to your profile' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
  public async getBlogs({ response }: { response: any }) {
    const blogs = await this.blogService.getBlogs()
    return response.status(200).json(blogs)
  }
  public async updateBlogStatus({ request, response }: { request: any; response: any }) {
    try {
      const blog_id = request.all().id
      const status = request.all().status
      await this.blogService.updateBlogStatus(blog_id, status)
      return response.status(200).json({ message: 'Blog status updated successfully' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
  public async updateBlog({ request, response }: { request: any; response: any }) {
    try {
      const blog_id = request.all().id
      const title = request.all().title
      const content = request.all().content
      const imageUrl = request.all().imageUrl
      await this.blogService.updateBlog(blog_id, title, content, imageUrl)
      return response.status(200).json({ message: 'Blog updated successfully' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  public async getFavourites({ request, response }: { request: any; response: any }) {
    try {
      const payload = await request.validateUsing(GetFavourites)
      const favourites = await this.blogService.getFavourites(payload)
      return response.status(200).json(favourites)
    } catch (error) {
      response.status(500).json({ message: 'No Favourites blog Found' })
    }
  }

  public async getLikes({ request, response }: { request: any; response: any }) {
    try {
      const payload = await request.validateUsing(GetLikes)
      const likes = await this.blogService.getLikes(payload)
      return response.status(200).json(likes)
    } catch (error) {
      response.status(500).json({ message: 'No Liked blog Found' })
    }
  }

  public async updateLike({ request, response }: { request: any; response: any }) {
    try {
      const payload = await request.validateUsing(UpdateLikeValidation);
      const res = await this.blogService.updateLike(payload);
      return response.status(200).json(res);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
