"use strict";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
var $ = require("jquery");
var Post = (function () {
    function Post() {
        this.get = function () {
            $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/posts",
                data: {},
                contentType: "application/json; charset=utf-8",
                beforeSend: function (xhr) {
                },
                success: function (data) {
                    var html = "<ul>";
                    for (var x = 0; x < data.length; x++) {
                        html += "<li>" + data[x].title + "</li>";
                    }
                    html += "</ul>";
                    $("#content").html(html);
                },
                error: function (data) {
                }
            });
        };
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=posts.js.map