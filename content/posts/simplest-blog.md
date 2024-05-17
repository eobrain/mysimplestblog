---  
slug: simplest-blog
title: Simplest blog?
created: 2024-05-11 03:19:48.586994942+00:00
---  
How simple can a blogging platform be?

I tried to build a simple blog for anyone with a GitHib account.

## How to use it

All you do is

1. Fork a repo
2. Do a small amount of configuration of your new GitHub repo
3. Use the GitHub web UI to edit markdown files
4. Your blog gets automatically published as GitHub pages

The GitHub repo with full instructions is at [simplestblog][1]

An example of a blog that uses this is [eobrain.github.io/mysimplestblog][2]

## How it was built

It is a simple Node.js JavaScript app that is built on a simple foundation:

* A markdown library that converts markdown to HTML
* The Mustache library for building pages from templates


[1]: https://github.com/eobrain/simplestblog 
[2]: https://eobrain.github.io/mysimplestblog

