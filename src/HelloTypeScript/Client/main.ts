import { Post } from "./posts";

$(function ()
{
    let postService = new Post();
    postService.get();
});