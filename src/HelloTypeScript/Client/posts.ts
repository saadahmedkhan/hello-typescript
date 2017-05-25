/// <reference path="../node_modules/@types/jquery/index.d.ts" />
import $ = require("jquery");

export class Post
{
    constructor()
    {
    }

    public get = () =>
    {
        $.ajax(
        {
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: {},
            contentType: "application/json; charset=utf-8",
            beforeSend: function (xhr)
            {

            },
            success: function (data: Array<any>)
            {
                var html = `<ul>`;
                for (var x = 0; x < data.length; x++)
                {
                    html += `<li>${data[x].title}</li>`;
                }
                html += `</ul>`;
                $("#content").html(html);
            },
            error: function (data)
            {

            }
        });
    }
}